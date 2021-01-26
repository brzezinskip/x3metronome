(ns metronome.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    ))



(defn on-row-click [{seconds         :seconds
                     timer-fn        :timer-fn
                     running         :running
                     cadence         :cadence
                     reps            :reps
                     countdown?      :countdown?
                     countdown-value :countdown-value}]
      (fn []
          (let [speak (fn [phrase] (js/window.speechSynthesis.speak (js/SpeechSynthesisUtterance. phrase)))]
               (speak "")
               (if @running (do (js/clearInterval @timer-fn) (reset! seconds 0) (reset! reps 0) (reset! countdown? false) (reset! countdown-value 3))
                            (reset! timer-fn
                                    (js/setInterval
                                      #(do
                                         (if (and @countdown? (not (zero? (inc @countdown-value))))
                                           (do
                                             (speak @countdown-value)
                                             (swap! countdown-value dec)
                                             (if (zero? @countdown-value)
                                                (reset! seconds 0))
                                             )
                                           (if (= @seconds cadence)
                                             (do
                                               (speak 1)
                                               (reset! seconds 1)
                                               (swap! reps inc))
                                             (do
                                               (swap! seconds inc)
                                               (speak @seconds)
                                               )))) 1000)))
               (reset! running (not @running))
               )))

(defn get-bg-opacity [seconds cadence]
      (if (= @seconds cadence)
        "bg-opacity-50"
        "bg-opacity-75"))

(def text-classes
  "text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold")

(defn text [value]
      [:span {:class text-classes} value])

(defn checkbox [label checked? on-change]
      [:div {:class "flex flex-row self-center"}
       [:input {:class     "self-center justify-self-end mr-2 w-5 h-5"
                :type      "checkbox"
                :name      "Countdown?"
                :checked   checked?
                :on-change on-change
                :on-click #(.stopPropagation %)}
                ]
       [:span {:class "text-gray-50 font-mono font-bold pt-1"} label]])

(defn counter-row [{desc :desc bg-color :bg-color cadence :cadence}]
      (r/with-let [seconds-elapsed (r/atom 0)
                   running (r/atom false)
                   timer-fn (atom nil)
                   reps (r/atom 0)
                   countdown? (r/atom false)
                   countdown-value (r/atom 3)]
                  (fn []
                      [:div {:class    (str "h-full flex flex-col flex-1 "
                                            bg-color
                                            " "
                                            (get-bg-opacity seconds-elapsed cadence)
                                            " justify-evenly")
                             :on-click (on-row-click {:seconds         seconds-elapsed
                                                      :timer-fn        timer-fn
                                                      :running         running
                                                      :cadence         cadence
                                                      :reps            reps
                                                      :countdown?      countdown?
                                                      :countdown-value countdown-value})}
                       (text desc)
                       (text (str "Reps:" @reps))
                       (text @seconds-elapsed)
                       (checkbox "Countdown?"
                                 @countdown?
                                 #(.stopPropagation % (reset! countdown? (not @countdown?))))])
                  (finally (js/clearInterval timer-fn))))

(defn home-page []
      [:div {:class "w-screen h-screen flex flex-col"}
       [counter-row {:desc "2U2D" :bg-color "bg-purple-600" :cadence 4}]
       [counter-row {:desc "3U3D" :bg-color "bg-red-600" :cadence 6}]])



(defn mount-root []
      (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
      (mount-root))
