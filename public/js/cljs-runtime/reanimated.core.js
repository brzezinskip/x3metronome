goog.provide('reanimated.core');
reanimated.core.now = (function reanimated$core$now(){
return (new Date());
});
/**
 * Calculates a value between a and b relative to t in duration.
 */
reanimated.core.interpolate = (function reanimated$core$interpolate(a,b,duration,t){
if((t <= (0))){
return a;
} else {
if((t >= duration)){
return b;
} else {
return (a + ((t * (b - a)) / duration));

}
}
});
/**
 * Wraps a component to animate creation and destruction.
 *   Takes a condition ratom and a vector or value to be rendered.
 *   Options can contain duration (milliseconds)
 *   and easing (a function that takes a b duration t).
 */
reanimated.core.pop_when = (function reanimated$core$pop_when(var_args){
var G__28561 = arguments.length;
switch (G__28561) {
case 2:
return reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2 = (function (condition,then){
return reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3(condition,then,cljs.core.PersistentArrayMap.EMPTY);
}));

(reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3 = (function (condition,then,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),condition], null));
return (function reanimated$core$a_pop_when(condition__$1,then__$1,options__$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(condition__$1,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)))){
cljs.core.reset_BANG_(anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now(),new cljs.core.Keyword(null,"from","from",1815293044),condition__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var map__28562 = options__$1;
var map__28562__$1 = (((((!((map__28562 == null))))?(((((map__28562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28562):map__28562);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28562__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28562__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
var t = (reanimated.core.now() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)));
var scale = (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4((0),(1),duration,t) : easing.call(null,(0),(1),duration,t));
var scale__$1 = (cljs.core.truth_(condition__$1)?scale:((1) - scale));
if((t < duration)){
reagent.core.next_tick((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale__$1),")"].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),scale__$1], null)], null),then__$1], null);
} else {
if(cljs.core.truth_(condition__$1)){
return then__$1;
} else {
return null;
}
}
});
}));

(reanimated.core.pop_when.cljs$lang$maxFixedArity = 3);

/**
 * Creates an event handler that will toggle a given ratom.
 */
reanimated.core.toggle_handler = (function reanimated$core$toggle_handler(ratom){
return (function reanimated$core$toggle_handler_$_a_toggle_handler(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,cljs.core.not);

return e;
});
});
/**
 * Returns a map suitable for merging with component properties,
 *   that will keep a given ratom updated with the mouseover status.
 */
reanimated.core.mouse_watcher = (function reanimated$core$mouse_watcher(ratom){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function reanimated$core$mouse_watcher_$_timeline_mouse_over(e){
cljs.core.reset_BANG_(ratom,true);

return e;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function reanimated$core$mouse_watcher_$_timeline_mouse_out(e){
cljs.core.reset_BANG_(ratom,false);

return e;
})], null);
});
/**
 * Interpolates between two values when the conditon changes.
 *   Takes a condition ratom to watch, and 2 vectors or values to render.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
reanimated.core.interpolate_if = (function reanimated$core$interpolate_if(var_args){
var G__28565 = arguments.length;
switch (G__28565) {
case 3:
return reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3 = (function (condition,a,b){
return reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4(condition,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4 = (function (condition,a,b,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),a], null));
var map__28566 = options;
var map__28566__$1 = (((((!((map__28566 == null))))?(((((map__28566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28566):map__28566);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28566__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28566__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
return reagent.ratom.make_reaction((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(condition),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)))){
cljs.core.reset_BANG_(anim,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now(),new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.deref(condition),new cljs.core.Keyword(null,"from","from",1815293044),a,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var t = (reanimated.core.now() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)));
var scale = (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4((0),(1),duration,t) : easing.call(null,(0),(1),duration,t));
var scale__$1 = (cljs.core.truth_(cljs.core.deref(condition))?scale:((1) - scale));
if((t < duration)){
reagent.core.next_tick((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
}));

return ((a * ((1) - scale__$1)) + (b * scale__$1));
} else {
if(cljs.core.truth_(cljs.core.deref(condition))){
return b;
} else {
return a;
}
}
}));
}));

(reanimated.core.interpolate_if.cljs$lang$maxFixedArity = 4);

/**
 * Interpolates toward new values.
 *   Takes a ratom which stores a numeric value.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
reanimated.core.interpolate_to = (function reanimated$core$interpolate_to(var_args){
var G__28569 = arguments.length;
switch (G__28569) {
case 1:
return reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref(x),new cljs.core.Keyword(null,"at","at",1476951349),cljs.core.deref(x),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref(x),new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now()], null));
var map__28570 = options;
var map__28570__$1 = (((((!((map__28570 == null))))?(((((map__28570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28570):map__28570);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28570__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28570__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
return reagent.ratom.make_reaction((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)),cljs.core.deref(x))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref(x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], 0));
} else {
}

var t = (reanimated.core.now() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)));
var scale = (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4((0),(1),duration,t) : easing.call(null,(0),(1),duration,t));
var a = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim));
var b = cljs.core.deref(x);
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
reagent.core.next_tick((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,new cljs.core.Keyword(null,"at","at",1476951349),at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"frame","frame",-1711082588),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)) + (1))], 0));
}));

return at;
} else {
return b;
}
}));
}));

(reanimated.core.interpolate_to.cljs$lang$maxFixedArity = 2);

/**
 * Interpolates the argument of a component to x.
 *   Will call the given component with values approaching x.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
reanimated.core.interpolate_arg = (function reanimated$core$interpolate_arg(var_args){
var G__28573 = arguments.length;
switch (G__28573) {
case 2:
return reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2 = (function (component,x){
return reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3(component,x,cljs.core.PersistentArrayMap.EMPTY);
}));

(reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3 = (function (component,x,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"to","to",192099007),x,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"current","current",-1088038603),x], null));
return (function reanimated$core$an_interpolate_arg(component__$1,x__$1,options__$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)),new cljs.core.Keyword(null,"to","to",192099007),x__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], 0));
} else {
}

var map__28574 = options__$1;
var map__28574__$1 = (((((!((map__28574 == null))))?(((((map__28574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28574):map__28574);
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28574__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28574__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var t = (reanimated.core.now() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim)));
if((t < duration)){
reagent.core.next_tick((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
}));

var i = (function (){var G__28576 = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anim));
var G__28577 = x__$1;
var G__28578 = duration;
var G__28579 = t;
return (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4(G__28576,G__28577,G__28578,G__28579) : easing.call(null,G__28576,G__28577,G__28578,G__28579));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),i);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,i], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,x__$1], null);
}
});
}));

(reanimated.core.interpolate_arg.cljs$lang$maxFixedArity = 3);

reanimated.core.mass = (10);
reanimated.core.stiffness = (1);
reanimated.core.damping = (1);
/**
 * This is where the spring physics formula is applied.
 */
reanimated.core.evaluate = (function reanimated$core$evaluate(x2,dt,x,v,a,p__28580){
var map__28581 = p__28580;
var map__28581__$1 = (((((!((map__28581 == null))))?(((((map__28581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28581):map__28581);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28581__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var stiffness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28581__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962));
var damping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28581__$1,new cljs.core.Keyword(null,"damping","damping",1054389681));
var x__$1 = (x + (v * dt));
var v__$1 = (v + (a * dt));
var f = ((stiffness * (x2 - x__$1)) - (damping * v__$1));
var a__$1 = (f / mass);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,a__$1], null);
});
/**
 * Takes an itegration step from numbers x to x2 over time dt,
 *   with a present velocity v.
 */
reanimated.core.integrate_rk4 = (function reanimated$core$integrate_rk4(x2,dt,x,v,options){
var dt2 = (dt * 0.5);
var vec__28583 = reanimated.core.evaluate(x2,0.0,x,v,0.0,options);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28583,(0),null);
var aa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28583,(1),null);
var vec__28586 = reanimated.core.evaluate(x2,dt2,x,av,aa,options);
var bv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28586,(0),null);
var ba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28586,(1),null);
var vec__28589 = reanimated.core.evaluate(x2,dt2,x,bv,ba,options);
var cv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(0),null);
var ca = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(1),null);
var vec__28592 = reanimated.core.evaluate(x2,dt,x,cv,ca,options);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28592,(0),null);
var da = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28592,(1),null);
var dx = (((av + (2.0 * (bv + cv))) + dv) / 6.0);
var dv__$1 = (((aa + (2.0 * (ba + ca))) + da) / 6.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dx * dt)),(v + (dv__$1 * dt))], null);
});
reanimated.core.stop_QMARK_ = (function reanimated$core$stop_QMARK_(x,threshold){
return ((((- threshold) <= x)) && ((x <= threshold)));
});
/**
 * Useful for wrapping a value in your component to make it springy.
 *   Returns a reaction that will take values approaching x2,
 *   updating every time Reagent calls requestAnimationFrame.
 *   Integrates a physical spring simulation for each step.
 *   Options can contain:
 *   from - a value to start from (initial value is used if absent).
 *   velocity of the mass on the spring (initially 0 if absent).
 *   mass, stiffness, damping of the spring.
 */
reanimated.core.spring = (function reanimated$core$spring(var_args){
var G__28596 = arguments.length;
switch (G__28596) {
case 1:
return reanimated.core.spring.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reanimated.core.spring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reanimated.core.spring.cljs$core$IFn$_invoke$arity$1 = (function (x2){
return reanimated.core.spring.cljs$core$IFn$_invoke$arity$2(x2,cljs.core.PersistentArrayMap.EMPTY);
}));

(reanimated.core.spring.cljs$core$IFn$_invoke$arity$2 = (function (x2,options){
var map__28597 = options;
var map__28597__$1 = (((((!((map__28597 == null))))?(((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28597):map__28597);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28597__$1,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref(x2));
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28597__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),0.0);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28597__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046),10.0);
var stiffness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28597__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),1.0);
var damping = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28597__$1,new cljs.core.Keyword(null,"damping","damping",1054389681),1.0);
var last = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(from);
var x2prev = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x2));
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),reanimated.core.now(),new cljs.core.Keyword(null,"x","x",2099068185),from,new cljs.core.Keyword(null,"v","v",21465059),velocity], null));
return reagent.ratom.make_reaction((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(x2),cljs.core.deref(x2prev))){
cljs.core.reset_BANG_(last,cljs.core.deref(x2prev));

cljs.core.reset_BANG_(x2prev,cljs.core.deref(x2));
} else {
}

var map__28599 = cljs.core.deref(anim);
var map__28599__$1 = (((((!((map__28599 == null))))?(((((map__28599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28599):map__28599);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword(null,"v","v",21465059));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var t2 = reanimated.core.now();
var dt = (function (){var x__4217__auto__ = (1);
var y__4218__auto__ = ((t2 - t) / 10.0);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var threshold = (Math.abs((cljs.core.deref(last) - cljs.core.deref(x2))) / 100.0);
if(((reanimated.core.stop_QMARK_((x - cljs.core.deref(x2)),threshold)) && (reanimated.core.stop_QMARK_(v,threshold)))){
return cljs.core.deref(x2);
} else {
var vec__28601 = reanimated.core.integrate_rk4(cljs.core.deref(x2),dt,x,v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mass","mass",-2138950046),mass,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),stiffness,new cljs.core.Keyword(null,"damping","damping",1054389681),damping], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(1),null);
reagent.core.next_tick((function (){
return cljs.core.reset_BANG_(anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t2,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}));

return x__$1;
}
}));
}));

(reanimated.core.spring.cljs$lang$maxFixedArity = 2);

/**
 * Watch a ref only while mounted in the DOM.
 */
reanimated.core.watch = (function reanimated$core$watch(r,f){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("watch"));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"watch",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function reanimated$core$watch_$_watch_did_mount(this$){
return cljs.core.add_watch(r,k,f);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function reanimated$core$watch_$_watch_will_unmount(this$){
return cljs.core.remove_watch(r,k);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function reanimated$core$watch_$_watch_render(r__$1,f__$1){
return null;
})], null));
});
/**
 * Call function f every period t while mounted in the DOM.
 */
reanimated.core.interval = (function reanimated$core$interval(f,t){
var id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function reanimated$core$interval_$_interval_did_mount(this$){
return cljs.core.reset_BANG_(id,setInterval(f,t));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function reanimated$core$interval_$_interval_will_unmount(this$){
return clearInterval(cljs.core.deref(id));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function reanimated$core$interval_$_interval_render(){
return null;
})], null));
});
/**
 * Call function f period t in milliseconds after being mounted in the DOM,
 *   only if still mounted.
 */
reanimated.core.timeout = (function reanimated$core$timeout(f,t){
var id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"timeout",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function reanimated$core$timeout_$_timeout_did_mount(this$){
return cljs.core.reset_BANG_(id,setTimeout(f,t));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function reanimated$core$timeout_$_timeout_will_unmount(this$){
return clearTimeout(cljs.core.deref(id));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function reanimated$core$timeout_$_timeout_render(){
return null;
})], null));
});
/**
 * Use timeline instead of this function directly.
 *   Provides a way to express a sequence of actions and pauses.
 *   Takes an id atom, element ratom,
 *   and a sequence of numbers and/or callback functions and/or vectors.
 *   Treats numbers as a wait timeout in milliseconds,
 *   calls callbacks after the elapsed time.
 *   id is reset as the timeout reference for cleanup.
 *   element is reset to vectors for rendering.
 */
reanimated.core.and_then = (function reanimated$core$and_then(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28633 = arguments.length;
var i__4737__auto___28634 = (0);
while(true){
if((i__4737__auto___28634 < len__4736__auto___28633)){
args__4742__auto__.push((arguments[i__4737__auto___28634]));

var G__28635 = (i__4737__auto___28634 + (1));
i__4737__auto___28634 = G__28635;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic = (function (id,element,x,more){
if(typeof x === 'number'){
if(cljs.core.seq(more)){
return cljs.core.reset_BANG_(id,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(reanimated.core.and_then,id,element,more);
}),x));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_(x)){
cljs.core.reset_BANG_(element,x);

if(cljs.core.seq(more)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(reanimated.core.and_then,id,element,more);
} else {
return null;
}
} else {
if(((cljs.core.ifn_QMARK_(x)) && ((!(cljs.core.coll_QMARK_(x)))) && ((!(cljs.core.map_QMARK_(x)))))){
(x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null));

if(cljs.core.seq(more)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(reanimated.core.and_then,id,element,more);
} else {
return null;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(reanimated.core.and_then,id,element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["timeline encountered unexpected type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null)], null),more);

}
}
}
}));

(reanimated.core.and_then.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reanimated.core.and_then.cljs$lang$applyTo = (function (seq28604){
var G__28605 = cljs.core.first(seq28604);
var seq28604__$1 = cljs.core.next(seq28604);
var G__28606 = cljs.core.first(seq28604__$1);
var seq28604__$2 = cljs.core.next(seq28604__$1);
var G__28607 = cljs.core.first(seq28604__$2);
var seq28604__$3 = cljs.core.next(seq28604__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28605,G__28606,G__28607,seq28604__$3);
}));

/**
 * Given a sequence of inputs, will consume them depending on their type:
 *   numbers will be a sleep in milliseconds
 *   functions will be called with no arguments
 *   vectors will be rendered as reagent components.
 */
reanimated.core.timeline = (function reanimated$core$timeline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28636 = arguments.length;
var i__4737__auto___28637 = (0);
while(true){
if((i__4737__auto___28637 < len__4736__auto___28636)){
args__4742__auto__.push((arguments[i__4737__auto___28637]));

var G__28638 = (i__4737__auto___28637 + (1));
i__4737__auto___28637 = G__28638;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
var id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function reanimated$core$timeout_did_mount(this$){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(reanimated.core.and_then,id,element,x,xs);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function reanimated$core$timeout_will_unmount(this$){
if(cljs.core.truth_(cljs.core.deref(id))){
return clearTimeout(cljs.core.deref(id));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function reanimated$core$timeout_render(){
return cljs.core.deref(element);
})], null));
}));

(reanimated.core.timeline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reanimated.core.timeline.cljs$lang$applyTo = (function (seq28608){
var G__28609 = cljs.core.first(seq28608);
var seq28608__$1 = cljs.core.next(seq28608);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28609,seq28608__$1);
}));

reanimated.core.slow_reveal = (function reanimated$core$slow_reveal(t,xs){

var vec__28610 = cljs.core.split_with(cljs.core.complement(cljs.core.vector_QMARK_),xs);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28610,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28610,(1),null);
var root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(head));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reanimated.core.timeline,cljs.core.deref(root)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function reanimated$core$slow_reveal_$_iter__28613(s__28614){
return (new cljs.core.LazySeq(null,(function (){
var s__28614__$1 = s__28614;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28614__$1);
if(temp__5735__auto__){
var s__28614__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28614__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28614__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28616 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28615 = (0);
while(true){
if((i__28615 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__28615);
cljs.core.chunk_append(b__28616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(root,cljs.core.conj,x)], null));

var G__28639 = (i__28615 + (1));
i__28615 = G__28639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28616),reanimated$core$slow_reveal_$_iter__28613(cljs.core.chunk_rest(s__28614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28616),null);
}
} else {
var x = cljs.core.first(s__28614__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(root,cljs.core.conj,x)], null),reanimated$core$slow_reveal_$_iter__28613(cljs.core.rest(s__28614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(more);
})()));
});
/**
 * Gets the current document y scroll position.
 */
reanimated.core.get_scroll_y = (function reanimated$core$get_scroll_y(){
return goog.dom.getDocumentScroll().y;
});
/**
 * Gets the current document y scroll position.
 */
reanimated.core.get_scroll = reanimated.core.get_scroll_y;
/**
 * Gets the current document x scroll position.
 */
reanimated.core.get_scroll_x = (function reanimated$core$get_scroll_x(){
return goog.dom.getDocumentScroll().x;
});
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
reanimated.core.scroll_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reanimated.core.get_scroll_y());
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
reanimated.core.scroll = reanimated.core.scroll_y;
/**
 * A ratom for watching the current document x scroll,
 *   will be updated when there is a scroll event.
 */
reanimated.core.scroll_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reanimated.core.get_scroll_x());
goog.events.listen(window,goog.events.EventType.SCROLL,(function reanimated$core$a_scroll(e){
cljs.core.reset_BANG_(reanimated.core.scroll_y,reanimated.core.get_scroll_y());

return cljs.core.reset_BANG_(reanimated.core.scroll_x,reanimated.core.get_scroll_x());
}));

//# sourceMappingURL=reanimated.core.js.map
