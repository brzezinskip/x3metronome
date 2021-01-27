goog.provide('metronome.core');
metronome.core.click_sound = (new Audio("sounds/snap.wav"));
metronome.core.stop_counting = (function metronome$core$stop_counting(timer_fn,seconds,reps,countdown_QMARK_,countdown_value,latest_reps){
clearInterval(cljs.core.deref(timer_fn));

cljs.core.reset_BANG_(seconds,(0));

cljs.core.reset_BANG_(latest_reps,cljs.core.deref(reps));

cljs.core.reset_BANG_(reps,(0));

cljs.core.reset_BANG_(countdown_QMARK_,false);

return cljs.core.reset_BANG_(countdown_value,(3));
});
metronome.core.start_counting = (function metronome$core$start_counting(timer_fn,countdown_QMARK_,countdown_value,seconds,cadence,reps,click){
return cljs.core.reset_BANG_(timer_fn,setInterval((function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(countdown_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return (!(((cljs.core.deref(countdown_value) + (1)) === (0))));
} else {
return and__4115__auto__;
}
})())){
(click.cljs$core$IFn$_invoke$arity$0 ? click.cljs$core$IFn$_invoke$arity$0() : click.call(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(countdown_value,cljs.core.dec);

if((cljs.core.deref(countdown_value) === (0))){
return cljs.core.reset_BANG_(seconds,(0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seconds),cadence)){
(click.cljs$core$IFn$_invoke$arity$0 ? click.cljs$core$IFn$_invoke$arity$0() : click.call(null));

cljs.core.reset_BANG_(seconds,(1));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reps,cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds,cljs.core.inc);

return (click.cljs$core$IFn$_invoke$arity$0 ? click.cljs$core$IFn$_invoke$arity$0() : click.call(null));
}
}
}),(1000)));
});
metronome.core.on_row_click = (function metronome$core$on_row_click(p__28573){
var map__28574 = p__28573;
var map__28574__$1 = (((((!((map__28574 == null))))?(((((map__28574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28574):map__28574);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var timer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340));
var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"running","running",1554969103));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"reps","reps",1391310856));
var countdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"countdown?","countdown?",-1555952325));
var countdown_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"countdown-value","countdown-value",-908866158));
var latest_reps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574__$1,new cljs.core.Keyword(null,"latest-reps","latest-reps",-1859956773));
return (function (){
var click = (function (){
return metronome.core.click_sound.play();
});
if(cljs.core.truth_(cljs.core.deref(running))){
metronome.core.stop_counting(timer_fn,seconds,reps,countdown_QMARK_,countdown_value,latest_reps);
} else {
metronome.core.start_counting(timer_fn,countdown_QMARK_,countdown_value,seconds,cadence,reps,click);
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
metronome.core.text_classes = "text-4xl sm:text-4xl md:text-8xl lg:text-8xl text-center text-gray-50 font-mono font-bold flex-1";
metronome.core.text = (function metronome$core$text(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),metronome.core.text_classes], null),value], null);
});
metronome.core.checkbox = (function metronome$core$checkbox(label,checked_QMARK_,on_change){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row self-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"self-center justify-self-end mr-2 w-5 h-5",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"Countdown?",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__28576_SHARP_){
return p1__28576_SHARP_.stopPropagation();
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-50 font-mono font-bold pt-1"], null),label], null)], null);
});
metronome.core.counter_row = (function metronome$core$counter_row(p__28578){
var map__28579 = p__28578;
var map__28579__$1 = (((((!((map__28579 == null))))?(((((map__28579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28579):map__28579);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28579__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var bg_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28579__$1,new cljs.core.Keyword(null,"bg-color","bg-color",455102491));
var cadence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28579__$1,new cljs.core.Keyword(null,"cadence","cadence",821204241));
var with_let28581 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28581","with-let28581",1904408369));
var temp__5739__auto___28583 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___28583 == null)){
} else {
var c__28532__auto___28584 = temp__5739__auto___28583;
if((with_let28581.generation === c__28532__auto___28584.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28581.generation = c__28532__auto___28584.ratomGeneration);
}


var init28582 = (with_let28581.length === (0));
var seconds_elapsed = ((init28582)?(with_let28581[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let28581[(0)]));
var running = ((init28582)?(with_let28581[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let28581[(1)]));
var timer_fn = ((init28582)?(with_let28581[(2)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let28581[(2)]));
var reps = ((init28582)?(with_let28581[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let28581[(3)]));
var countdown_QMARK_ = ((init28582)?(with_let28581[(4)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let28581[(4)]));
var countdown_value = ((init28582)?(with_let28581[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3))):(with_let28581[(5)]));
var latest_reps = ((init28582)?(with_let28581[(6)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let28581[(6)]));
var res__28533__auto__ = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full flex flex-col flex-1 py-10 sm:py-2 md:py-2 lg:py-2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_color)," ",metronome.core.get_bg_opacity(seconds_elapsed,cadence)," justify-evenly"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),metronome.core.on_row_click(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds_elapsed,new cljs.core.Keyword(null,"timer-fn","timer-fn",-731279340),timer_fn,new cljs.core.Keyword(null,"running","running",1554969103),running,new cljs.core.Keyword(null,"cadence","cadence",821204241),cadence,new cljs.core.Keyword(null,"reps","reps",1391310856),reps,new cljs.core.Keyword(null,"countdown?","countdown?",-1555952325),countdown_QMARK_,new cljs.core.Keyword(null,"countdown-value","countdown-value",-908866158),countdown_value,new cljs.core.Keyword(null,"latest-reps","latest-reps",-1859956773),latest_reps], null))], null),(((!((cljs.core.deref(latest_reps) === (0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-2xl.sm:text-2xl.md:text-6xl.lg:text-6xl.text-center.text-gray-200.font-mono.font-bold.border-2.m-4.mx-14.rounded.p-1","p.text-2xl.sm:text-2xl.md:text-6xl.lg:text-6xl.text-center.text-gray-200.font-mono.font-bold.border-2.m-4.mx-14.rounded.p-1",2112403954),["Last reps: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(latest_reps))].join('')], null):null),metronome.core.text(desc),metronome.core.text(["Reps:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reps))].join('')),metronome.core.text(cljs.core.deref(seconds_elapsed)),metronome.core.checkbox("Countdown? (4 ticks)",cljs.core.deref(countdown_QMARK_),(function (p1__28577_SHARP_){
return p1__28577_SHARP_.stopPropagation(cljs.core.reset_BANG_(countdown_QMARK_,cljs.core.not(cljs.core.deref(countdown_QMARK_))));
}))], null);
});
var destroy__28531__auto___28585 = (function (){
return clearInterval(timer_fn);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let28581.destroy == null)){
(with_let28581.destroy = destroy__28531__auto___28585);
} else {
}
} else {
destroy__28531__auto___28585();
}

return res__28533__auto__;
});
metronome.core.home_page = (function metronome$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-screen h-screen flex flex-col"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-800 flex flex-row w-fill px-10 py-5"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"self-center items-center justify-self-center text-gray-300 flex flex-row flex-1 font-medium text-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/stopwatch-solid.svg",new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"class","class",-2030961996),"mr-0 md:mr-5"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"invisible sm:visible md:visible lg:visible text-gray-300 text-center"], null),"X3 METRONOME"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"self-center text-center text-gray-300 font-medium flex-1"], null),"TAP TO START"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"self-center justify-self-end flex-1 text-right"], null),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metronome.core.counter_row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"2U2D",new cljs.core.Keyword(null,"bg-color","bg-color",455102491),"bg-purple-600",new cljs.core.Keyword(null,"cadence","cadence",821204241),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metronome.core.counter_row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"3U3D",new cljs.core.Keyword(null,"bg-color","bg-color",455102491),"bg-red-600",new cljs.core.Keyword(null,"cadence","cadence",821204241),(6)], null)], null)], null);
});
metronome.core.mount_root = (function metronome$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metronome.core.home_page], null),document.getElementById("app"));
});
metronome.core.init_BANG_ = (function metronome$core$init_BANG_(){
return metronome.core.mount_root();
});
goog.exportSymbol('metronome.core.init_BANG_', metronome.core.init_BANG_);

//# sourceMappingURL=metronome.core.js.map
