(ns metronome.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    ))



(defn on-row-click [{seconds  :seconds
                     timer-fn :timer-fn
                     running :running
                     cadence :cadence
                     reps :reps}]
      (fn []
          (if @running (do (js/clearInterval @timer-fn) (reset! seconds 0) (reset! reps 0))
                       (reset! timer-fn (js/setInterval
                                          #(do
                                             (if (= @seconds cadence)
                                               (do (reset! seconds 1)
                                                   (swap! reps inc))
                                               (swap! seconds inc))
                                             (js/window.speechSynthesis.speak (js/SpeechSynthesisUtterance. @seconds))) 1000)))
          (reset! running (not @running))
          ))

(defn get-bg-opacity [seconds cadence]
      (if (= @seconds cadence)
        "bg-opacity-50"
        "bg-opacity-75"))

(defn counter-row [{desc :desc bg-color :bg-color cadence :cadence}]
      (r/with-let [seconds-elapsed (r/atom 0)
                   running (r/atom false)
                   timer-fn (atom nil)
                   reps (r/atom 0)]
                  (fn []
                      [:div {:class    (str "h-full flex flex-col flex-1 "
                                            bg-color
                                            " "
                                            (get-bg-opacity seconds-elapsed cadence)
                                            " justify-evenly")
                             :on-click (on-row-click {:seconds  seconds-elapsed
                                                      :timer-fn timer-fn
                                                      :running  running
                                                      :cadence  cadence
                                                      :reps     reps})}
                       [:span {:class "text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold"} desc]
                       [:span {:class "text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold"} (str "Reps:" @reps)]
                       [:span {:class "text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold"} @seconds-elapsed]])
                  (finally (js/clearInterval timer-fn))))

(defn home-page []
      [:div {:class "w-screen h-screen flex flex-col"}
       [counter-row {:desc "2U2D" :bg-color "bg-purple-600" :cadence 4}]
       [counter-row {:desc "3U3D" :bg-color "bg-red-600" :cadence 6}]])



;(defn home-page []
;      [:div
;       [{:class "h-full"}]
;       [{:class "h-full"}]
;       [{:class "h-full"}]])
;; -------------------------
;; Initialize app

(defn mount-root []
      (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
      (mount-root))
