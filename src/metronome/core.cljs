(ns metronome.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]))

(defn clear-interval [timer-fn seconds reps countdown? countdown-value]
  (do (js/clearInterval @timer-fn)
      (reset! seconds 0)
      (reset! reps 0)
      (reset! countdown? false)
      (reset! countdown-value 3)))

(defn start-counting [timer-fn countdown? countdown-value seconds cadence reps speak]
  (reset! timer-fn
          (js/setInterval
           #(do
              (if (and @countdown? (not (zero? (inc @countdown-value))))
                (do
                  (speak @countdown-value)
                  (swap! countdown-value dec)
                  (if (zero? @countdown-value)
                    (reset! seconds 0)))
                (if (= @seconds cadence)
                  (do
                    (speak 1)
                    (reset! seconds 1)
                    (swap! reps inc))
                  (do
                    (swap! seconds inc)
                    (speak @seconds))))) 1000)))

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
      (if @running (clear-interval timer-fn seconds reps countdown? countdown-value)
          (start-counting timer-fn countdown? countdown-value seconds cadence reps speak))
      (reset! running (not @running)))))

(defn get-bg-opacity [seconds cadence]
  (if (= @seconds cadence)
    "bg-opacity-50"
    "bg-opacity-75"))

(def text-classes
  "text-4xl sm:text-4xl md:text-8xl lg:text-8xl text-center text-gray-50 font-mono font-bold")

(defn text [value]
  [:span {:class text-classes} value])

(defn checkbox [label checked? on-change]
  [:div {:class "flex flex-row self-center"}
   [:input {:class     "self-center justify-self-end mr-2 w-5 h-5"
            :type      "checkbox"
            :name      "Countdown?"
            :checked   checked?
            :on-change on-change
            :on-click #(.stopPropagation %)}]
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
   [:header {:class "h-20 bg-gray-800 flex flex-row w-fill px-10"}
    [:span {:class "self-center items-center justify-self-center text-gray-300 flex flex-row flex-1 font-medium text-center"}
     [:img {:src "images/stopwatch-solid.svg" :width 40 :height 40 :class "mr-0 md:mr-5"}]
     [:span {:class "invisible sm:visible md:visible lg:visible text-gray-300 text-center"} "X3 METRONOME"]]
    [:span {:class "self-center text-center text-gray-300 font-medium flex-1"} "TAP TO START"]
    [:div {:class "self-center justify-self-end flex-1 text-right"} ""]]
   [counter-row {:desc "2U2D" :bg-color "bg-purple-600" :cadence 4}]
   [counter-row {:desc "3U3D" :bg-color "bg-red-600" :cadence 6}]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
