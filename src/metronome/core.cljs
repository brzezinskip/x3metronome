(ns metronome.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]))

(def click-sound (js/Audio.))
(.play click-sound)

(defn stop-counting ([timer-fn seconds reps countdown? countdown-value latest-reps]
                     (js/clearInterval @timer-fn)
                     (reset! seconds 0)
                     (reset! latest-reps @reps)
                     (reset! reps 0)
                     (reset! countdown? false)
                     (reset! countdown-value 3)))

(defn start-counting [timer-fn countdown? countdown-value seconds cadence reps click]
  (reset! timer-fn
          (js/setInterval
           #(do
              (if (and @countdown? (not (zero? (inc @countdown-value))))
                (do
                  (click)
                  (swap! countdown-value dec)
                  (if (zero? @countdown-value)
                    (reset! seconds 0)))
                (if (= @seconds cadence)
                  (do
                    (click)
                    (reset! seconds 1)
                    (swap! reps inc))
                  (do
                    (swap! seconds inc)
                    (click))))) 1000)))

(defn on-row-click [{seconds         :seconds
                     timer-fn        :timer-fn
                     running         :running
                     cadence         :cadence
                     reps            :reps
                     countdown?      :countdown?
                     countdown-value :countdown-value
                     latest-reps     :latest-reps}]
  (fn []
    (let [click #(.play click-sound)]
      (if @running (stop-counting timer-fn seconds reps countdown? countdown-value latest-reps)
          (start-counting timer-fn countdown? countdown-value seconds cadence reps click))
      (reset! running (not @running)))))

(defn get-bg-opacity [seconds cadence]
  (if (= @seconds cadence)
    "bg-opacity-50"
    "bg-opacity-75"))

(def text-classes
  "text-4xl sm:text-4xl md:text-8xl lg:text-8xl text-center text-gray-50 font-mono font-bold flex-1")

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
               countdown-value (r/atom 3)
               latest-reps (r/atom 0)]
    (fn []
      [:div {:class    (str "h-full flex flex-col flex-1 py-10 sm:py-2 md:py-2 lg:py-2 "
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
                                      :countdown-value countdown-value
                                      :latest-reps latest-reps})}
       (if-not (zero? @latest-reps) [:p.text-2xl.sm:text-2xl.md:text-6xl.lg:text-6xl.text-center.text-gray-200.font-mono.font-bold.border-2.m-4.mx-14.rounded.p-1 (str "Last reps: " @latest-reps)])
       (text desc)
       (text (str "Reps:" @reps))
       (text @seconds-elapsed)
       (checkbox "Countdown? (4 ticks)"
                 @countdown?
                 #(.stopPropagation % (reset! countdown? (not @countdown?))))])
    (finally (js/clearInterval timer-fn))))

(defn home-page []
  (set! (.-src click-sound) "sounds/snap.wav")
  [:div {:class "w-screen h-screen flex flex-col"}
   [:header {:class "bg-gray-800 flex flex-row w-fill px-10 py-5"}
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
