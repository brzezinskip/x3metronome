goog.provide('metronome.core');
metronome.core.on_row_click = (function metronome$core$on_row_click(p__29265){
var map__29266 = p__29265;
var map__29266__$1 = (((((!((map__29266 == null))))?(((((map__29266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29266):map__29266);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29266__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var timer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29266__$1,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340));
var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29266__$1,new cljs.core.Keyword(null,"running","running",1554969103));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29266__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29266__$1,new cljs.core.Keyword(null,"reps","reps",1391310856));
return (function (){
window.speechSynthesis.speak((new SpeechSynthesisUtterance("")));

if(cljs.core.truth_(cljs.core.deref(running))){
clearInterval(cljs.core.deref(timer_fn));

cljs.core.reset_BANG_(seconds,(0));

cljs.core.reset_BANG_(reps,(0));
} else {
cljs.core.reset_BANG_(timer_fn,setInterval((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seconds),cadence)){
cljs.core.reset_BANG_(seconds,(1));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reps,cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);
}

return window.speechSynthesis.speak((new SpeechSynthesisUtterance(cljs.core.deref(seconds))));
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
metronome.core.counter_row = (function metronome$core$counter_row(p__29268){
var map__29269 = p__29268;
var map__29269__$1 = (((((!((map__29269 == null))))?(((((map__29269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29269):map__29269);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29269__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var bg_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29269__$1,new cljs.core.Keyword(null,"bg-color","bg-color",455102491));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29269__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var with_let29271 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let29271","with-let29271",-93436442));
var temp__5739__auto___29273 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29273 == null)){
} else {
var c__28532__auto___29274 = temp__5739__auto___29273;
if((with_let29271.generation === c__28532__auto___29274.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29271.generation = c__28532__auto___29274.ratomGeneration);
}


var init29272 = (with_let29271.length === (0));
var seconds_elapsed = ((init29272)?(with_let29271[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let29271[(0)]));
var running = ((init29272)?(with_let29271[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let29271[(1)]));
var timer_fn = ((init29272)?(with_let29271[(2)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let29271[(2)]));
var reps = ((init29272)?(with_let29271[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let29271[(3)]));
var res__28533__auto__ = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full flex flex-col flex-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_color)," ",metronome.core.get_bg_opacity(seconds_elapsed,cadence)," justify-evenly"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),metronome.core.on_row_click(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds_elapsed,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340),timer_fn,new cljs.core.Keyword(null,"running","running",1554969103),running,new cljs.core.Keyword(null,"cadence","cadence",821204241),cadence,new cljs.core.Keyword(null,"reps","reps",1391310856),reps], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold"], null),desc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold"], null),["Reps:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reps))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl sm:text-4xl md:text-8xl lg:text-9xl text-center text-gray-50 font-mono font-bold"], null),cljs.core.deref(seconds_elapsed)], null)], null);
});
var destroy__28531__auto___29275 = (function (){
return clearInterval(timer_fn);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let29271.destroy == null)){
(with_let29271.destroy = destroy__28531__auto___29275);
} else {
}
} else {
destroy__28531__auto___29275();
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
