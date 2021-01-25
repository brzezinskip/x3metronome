goog.provide('metronome.core');
metronome.core.on_row_click = (function metronome$core$on_row_click(p__29317){
var map__29318 = p__29317;
var map__29318__$1 = (((((!((map__29318 == null))))?(((((map__29318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29318):map__29318);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29318__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var timer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29318__$1,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340));
var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29318__$1,new cljs.core.Keyword(null,"running","running",1554969103));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29318__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var bg_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29318__$1,new cljs.core.Keyword(null,"bg-opacity","bg-opacity",304060514));
return (function (){
if(cljs.core.truth_(cljs.core.deref(running))){
clearInterval(cljs.core.deref(timer_fn));

cljs.core.reset_BANG_(seconds,(0));
} else {
cljs.core.reset_BANG_(timer_fn,setInterval((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seconds),cadence)){
cljs.core.reset_BANG_(seconds,(1));
} else {
cljs.core.reset_BANG_(bg_opacity,"bg-opacity-75");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);
}

return window.speechSynthesis.speak((new SpeechSynthesisUtterance(cljs.core.deref(seconds))));
}),(1000)));
}

return cljs.core.reset_BANG_(running,cljs.core.not(cljs.core.deref(running)));
});
});
metronome.core.counter_row = (function metronome$core$counter_row(p__29320){
var map__29321 = p__29320;
var map__29321__$1 = (((((!((map__29321 == null))))?(((((map__29321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29321):map__29321);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var bg_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,new cljs.core.Keyword(null,"bg-color","bg-color",455102491));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var with_let29323 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let29323","with-let29323",-290364447));
var temp__5739__auto___29325 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29325 == null)){
} else {
var c__28532__auto___29326 = temp__5739__auto___29325;
if((with_let29323.generation === c__28532__auto___29326.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29323.generation = c__28532__auto___29326.ratomGeneration);
}


var init29324 = (with_let29323.length === (0));
var seconds_elapsed = ((init29324)?(with_let29323[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let29323[(0)]));
var running = ((init29324)?(with_let29323[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let29323[(1)]));
var timer_fn = ((init29324)?(with_let29323[(2)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let29323[(2)]));
var bg_opacity = ((init29324)?(with_let29323[(3)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("bg-opacity-75")):(with_let29323[(3)]));
var res__28533__auto__ = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full flex flex-col flex-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_color)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bg_opacity))," items-center justify-evenly"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),metronome.core.on_row_click(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds_elapsed,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340),timer_fn,new cljs.core.Keyword(null,"running","running",1554969103),running,new cljs.core.Keyword(null,"cadence","cadence",821204241),cadence,new cljs.core.Keyword(null,"bg-opacity","bg-opacity",304060514),bg_opacity], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-9xl text-center text-gray-50 font-mono font-bold"], null),desc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-9xl text-center text-gray-50 font-mono font-bold"], null),cljs.core.deref(seconds_elapsed)], null)], null);
});
var destroy__28531__auto___29327 = (function (){
return clearInterval(timer_fn);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let29323.destroy == null)){
(with_let29323.destroy = destroy__28531__auto___29327);
} else {
}
} else {
destroy__28531__auto___29327();
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
