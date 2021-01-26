goog.provide('metronome.core');
metronome.core.on_row_click = (function metronome$core$on_row_click(p__33130){
var map__33131 = p__33130;
var map__33131__$1 = (((((!((map__33131 == null))))?(((((map__33131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33131):map__33131);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var timer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340));
var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"running","running",1554969103));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"reps","reps",1391310856));
var countdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"countdown?","countdown?",-1555952325));
var countdown_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"countdown-value","countdown-value",-908866158));
return (function (){
var speak = (function (phrase){
return window.speechSynthesis.speak((new SpeechSynthesisUtterance(phrase)));
});
speak("");

if(cljs.core.truth_(cljs.core.deref(running))){
clearInterval(cljs.core.deref(timer_fn));

cljs.core.reset_BANG_(seconds,(0));

cljs.core.reset_BANG_(reps,(0));

cljs.core.reset_BANG_(countdown_QMARK_,false);

cljs.core.reset_BANG_(countdown_value,(3));
} else {
cljs.core.reset_BANG_(timer_fn,setInterval((function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(countdown_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return (!(((cljs.core.deref(countdown_value) + (1)) === (0))));
} else {
return and__4115__auto__;
}
})())){
speak(cljs.core.deref(countdown_value));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(countdown_value,cljs.core.dec);

if((cljs.core.deref(countdown_value) === (0))){
return cljs.core.reset_BANG_(seconds,(0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seconds),cadence)){
speak((1));

cljs.core.reset_BANG_(seconds,(1));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reps,cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);

return speak(cljs.core.deref(seconds));
}
}
}),(1000)));
}

return cljs.core.reset_BANG_(running,cljs.core.not(cljs.core.deref(running)));
});
});
metronome.core.get_bg_opacity = (function metronome$core$get_bg_opacity(seconds,cadence){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seconds),cadence)){
return "bg-opacity-50";
} else {
return "bg-opacity-75";
}
});
metronome.core.text_classes = "text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold";
metronome.core.text = (function metronome$core$text(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),metronome.core.text_classes], null),value], null);
});
metronome.core.checkbox = (function metronome$core$checkbox(label,checked_QMARK_,on_change){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row self-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"self-center justify-self-end mr-2 w-5 h-5",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"Countdown?",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_change], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-50 font-mono font-bold pt-1"], null),label], null)], null);
});
metronome.core.counter_row = (function metronome$core$counter_row(p__33134){
var map__33135 = p__33134;
var map__33135__$1 = (((((!((map__33135 == null))))?(((((map__33135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33135):map__33135);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33135__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var bg_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33135__$1,new cljs.core.Keyword(null,"bg-color","bg-color",455102491));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33135__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var with_let33137 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let33137","with-let33137",-198493385));
var temp__5739__auto___33139 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___33139 == null)){
} else {
var c__28532__auto___33140 = temp__5739__auto___33139;
if((with_let33137.generation === c__28532__auto___33140.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let33137.generation = c__28532__auto___33140.ratomGeneration);
}


var init33138 = (with_let33137.length === (0));
var seconds_elapsed = ((init33138)?(with_let33137[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let33137[(0)]));
var running = ((init33138)?(with_let33137[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let33137[(1)]));
var timer_fn = ((init33138)?(with_let33137[(2)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let33137[(2)]));
var reps = ((init33138)?(with_let33137[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let33137[(3)]));
var countdown_QMARK_ = ((init33138)?(with_let33137[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let33137[(4)]));
var countdown_value = ((init33138)?(with_let33137[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3))):(with_let33137[(5)]));
var res__28533__auto__ = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full flex flex-col flex-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_color)," ",metronome.core.get_bg_opacity(seconds_elapsed,cadence)," justify-evenly"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),metronome.core.on_row_click(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds_elapsed,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340),timer_fn,new cljs.core.Keyword(null,"running","running",1554969103),running,new cljs.core.Keyword(null,"cadence","cadence",821204241),cadence,new cljs.core.Keyword(null,"reps","reps",1391310856),reps,new cljs.core.Keyword(null,"countdown?","countdown?",-1555952325),countdown_QMARK_,new cljs.core.Keyword(null,"countdown-value","countdown-value",-908866158),countdown_value], null))], null),metronome.core.text(desc),metronome.core.text(["Reps:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reps))].join('')),metronome.core.text(cljs.core.deref(seconds_elapsed)),metronome.core.checkbox("Countdown?",cljs.core.deref(countdown_QMARK_),(function (p1__33133_SHARP_){
return p1__33133_SHARP_.stopPropagation(cljs.core.reset_BANG_(countdown_QMARK_,cljs.core.not(cljs.core.deref(countdown_QMARK_))));
}))], null);
});
var destroy__28531__auto___33141 = (function (){
return clearInterval(timer_fn);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let33137.destroy == null)){
(with_let33137.destroy = destroy__28531__auto___33141);
} else {
}
} else {
destroy__28531__auto___33141();
}

return res__28533__auto__;
});
metronome.core.home_page = (function metronome$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-screen h-screen flex flex-col"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metronome.core.counter_row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"2U2D",new cljs.core.Keyword(null,"bg-color","bg-color",455102491),"bg-purple-600",new cljs.core.Keyword(null,"cadence","cadence",821204241),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metronome.core.counter_row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"3U3D",new cljs.core.Keyword(null,"bg-color","bg-color",455102491),"bg-red-600",new cljs.core.Keyword(null,"cadence","cadence",821204241),(6)], null)], null)], null);
});
metronome.core.mount_root = (function metronome$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metronome.core.home_page], null),document.getElementById("app"));
});
metronome.core.init_BANG_ = (function metronome$core$init_BANG_(){
return metronome.core.mount_root();
});
goog.exportSymbol('metronome.core.init_BANG_', metronome.core.init_BANG_);

//# sourceMappingURL=metronome.core.js.map
