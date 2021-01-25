goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37861 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37861(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37867 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37867(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36755 = coll;
var G__36756 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36755,G__36756) : shadow.dom.lazy_native_coll_seq.call(null,G__36755,G__36756));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36768 = arguments.length;
switch (G__36768) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36785 = arguments.length;
switch (G__36785) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36793 = arguments.length;
switch (G__36793) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36800 = arguments.length;
switch (G__36800) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36814 = arguments.length;
switch (G__36814) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36835 = arguments.length;
switch (G__36835) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36843){if((e36843 instanceof Object)){
var e = e36843;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36843;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36858 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36859 = null;
var count__36860 = (0);
var i__36861 = (0);
while(true){
if((i__36861 < count__36860)){
var el = chunk__36859.cljs$core$IIndexed$_nth$arity$2(null,i__36861);
var handler_37903__$1 = ((function (seq__36858,chunk__36859,count__36860,i__36861,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36858,chunk__36859,count__36860,i__36861,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37903__$1);


var G__37905 = seq__36858;
var G__37906 = chunk__36859;
var G__37907 = count__36860;
var G__37908 = (i__36861 + (1));
seq__36858 = G__37905;
chunk__36859 = G__37906;
count__36860 = G__37907;
i__36861 = G__37908;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36858);
if(temp__5735__auto__){
var seq__36858__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36858__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36858__$1);
var G__37909 = cljs.core.chunk_rest(seq__36858__$1);
var G__37910 = c__4556__auto__;
var G__37911 = cljs.core.count(c__4556__auto__);
var G__37912 = (0);
seq__36858 = G__37909;
chunk__36859 = G__37910;
count__36860 = G__37911;
i__36861 = G__37912;
continue;
} else {
var el = cljs.core.first(seq__36858__$1);
var handler_37918__$1 = ((function (seq__36858,chunk__36859,count__36860,i__36861,el,seq__36858__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36858,chunk__36859,count__36860,i__36861,el,seq__36858__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37918__$1);


var G__37921 = cljs.core.next(seq__36858__$1);
var G__37922 = null;
var G__37923 = (0);
var G__37924 = (0);
seq__36858 = G__37921;
chunk__36859 = G__37922;
count__36860 = G__37923;
i__36861 = G__37924;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36899 = arguments.length;
switch (G__36899) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36913 = cljs.core.seq(events);
var chunk__36914 = null;
var count__36915 = (0);
var i__36916 = (0);
while(true){
if((i__36916 < count__36915)){
var vec__36931 = chunk__36914.cljs$core$IIndexed$_nth$arity$2(null,i__36916);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37928 = seq__36913;
var G__37929 = chunk__36914;
var G__37930 = count__36915;
var G__37931 = (i__36916 + (1));
seq__36913 = G__37928;
chunk__36914 = G__37929;
count__36915 = G__37930;
i__36916 = G__37931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36913);
if(temp__5735__auto__){
var seq__36913__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36913__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36913__$1);
var G__37933 = cljs.core.chunk_rest(seq__36913__$1);
var G__37934 = c__4556__auto__;
var G__37935 = cljs.core.count(c__4556__auto__);
var G__37936 = (0);
seq__36913 = G__37933;
chunk__36914 = G__37934;
count__36915 = G__37935;
i__36916 = G__37936;
continue;
} else {
var vec__36936 = cljs.core.first(seq__36913__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37937 = cljs.core.next(seq__36913__$1);
var G__37938 = null;
var G__37939 = (0);
var G__37940 = (0);
seq__36913 = G__37937;
chunk__36914 = G__37938;
count__36915 = G__37939;
i__36916 = G__37940;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36943 = cljs.core.seq(styles);
var chunk__36944 = null;
var count__36945 = (0);
var i__36946 = (0);
while(true){
if((i__36946 < count__36945)){
var vec__36968 = chunk__36944.cljs$core$IIndexed$_nth$arity$2(null,i__36946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36968,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37946 = seq__36943;
var G__37947 = chunk__36944;
var G__37948 = count__36945;
var G__37949 = (i__36946 + (1));
seq__36943 = G__37946;
chunk__36944 = G__37947;
count__36945 = G__37948;
i__36946 = G__37949;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36943);
if(temp__5735__auto__){
var seq__36943__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36943__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36943__$1);
var G__37951 = cljs.core.chunk_rest(seq__36943__$1);
var G__37952 = c__4556__auto__;
var G__37953 = cljs.core.count(c__4556__auto__);
var G__37954 = (0);
seq__36943 = G__37951;
chunk__36944 = G__37952;
count__36945 = G__37953;
i__36946 = G__37954;
continue;
} else {
var vec__36976 = cljs.core.first(seq__36943__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36976,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37960 = cljs.core.next(seq__36943__$1);
var G__37961 = null;
var G__37962 = (0);
var G__37963 = (0);
seq__36943 = G__37960;
chunk__36944 = G__37961;
count__36945 = G__37962;
i__36946 = G__37963;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36984_37964 = key;
var G__36984_37965__$1 = (((G__36984_37964 instanceof cljs.core.Keyword))?G__36984_37964.fqn:null);
switch (G__36984_37965__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37977 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_37977,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_37977,"aria-");
}
})())){
el.setAttribute(ks_37977,value);
} else {
(el[ks_37977] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37005){
var map__37006 = p__37005;
var map__37006__$1 = (((((!((map__37006 == null))))?(((((map__37006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37006):map__37006);
var props = map__37006__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37012 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37016 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37016,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37016;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37029 = arguments.length;
switch (G__37029) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37040){
var vec__37047 = p__37040;
var seq__37048 = cljs.core.seq(vec__37047);
var first__37049 = cljs.core.first(seq__37048);
var seq__37048__$1 = cljs.core.next(seq__37048);
var nn = first__37049;
var first__37049__$1 = cljs.core.first(seq__37048__$1);
var seq__37048__$2 = cljs.core.next(seq__37048__$1);
var np = first__37049__$1;
var nc = seq__37048__$2;
var node = vec__37047;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37052 = nn;
var G__37053 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37052,G__37053) : create_fn.call(null,G__37052,G__37053));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37060 = nn;
var G__37061 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37060,G__37061) : create_fn.call(null,G__37060,G__37061));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37064 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37064,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37064,(1),null);
var seq__37069_38014 = cljs.core.seq(node_children);
var chunk__37071_38015 = null;
var count__37072_38016 = (0);
var i__37073_38017 = (0);
while(true){
if((i__37073_38017 < count__37072_38016)){
var child_struct_38018 = chunk__37071_38015.cljs$core$IIndexed$_nth$arity$2(null,i__37073_38017);
var children_38019 = shadow.dom.dom_node(child_struct_38018);
if(cljs.core.seq_QMARK_(children_38019)){
var seq__37112_38020 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38019));
var chunk__37114_38021 = null;
var count__37115_38022 = (0);
var i__37116_38023 = (0);
while(true){
if((i__37116_38023 < count__37115_38022)){
var child_38024 = chunk__37114_38021.cljs$core$IIndexed$_nth$arity$2(null,i__37116_38023);
if(cljs.core.truth_(child_38024)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38024);


var G__38027 = seq__37112_38020;
var G__38028 = chunk__37114_38021;
var G__38029 = count__37115_38022;
var G__38030 = (i__37116_38023 + (1));
seq__37112_38020 = G__38027;
chunk__37114_38021 = G__38028;
count__37115_38022 = G__38029;
i__37116_38023 = G__38030;
continue;
} else {
var G__38034 = seq__37112_38020;
var G__38035 = chunk__37114_38021;
var G__38036 = count__37115_38022;
var G__38037 = (i__37116_38023 + (1));
seq__37112_38020 = G__38034;
chunk__37114_38021 = G__38035;
count__37115_38022 = G__38036;
i__37116_38023 = G__38037;
continue;
}
} else {
var temp__5735__auto___38041 = cljs.core.seq(seq__37112_38020);
if(temp__5735__auto___38041){
var seq__37112_38042__$1 = temp__5735__auto___38041;
if(cljs.core.chunked_seq_QMARK_(seq__37112_38042__$1)){
var c__4556__auto___38043 = cljs.core.chunk_first(seq__37112_38042__$1);
var G__38044 = cljs.core.chunk_rest(seq__37112_38042__$1);
var G__38045 = c__4556__auto___38043;
var G__38046 = cljs.core.count(c__4556__auto___38043);
var G__38047 = (0);
seq__37112_38020 = G__38044;
chunk__37114_38021 = G__38045;
count__37115_38022 = G__38046;
i__37116_38023 = G__38047;
continue;
} else {
var child_38050 = cljs.core.first(seq__37112_38042__$1);
if(cljs.core.truth_(child_38050)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38050);


var G__38051 = cljs.core.next(seq__37112_38042__$1);
var G__38052 = null;
var G__38053 = (0);
var G__38054 = (0);
seq__37112_38020 = G__38051;
chunk__37114_38021 = G__38052;
count__37115_38022 = G__38053;
i__37116_38023 = G__38054;
continue;
} else {
var G__38056 = cljs.core.next(seq__37112_38042__$1);
var G__38057 = null;
var G__38058 = (0);
var G__38059 = (0);
seq__37112_38020 = G__38056;
chunk__37114_38021 = G__38057;
count__37115_38022 = G__38058;
i__37116_38023 = G__38059;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38019);
}


var G__38064 = seq__37069_38014;
var G__38065 = chunk__37071_38015;
var G__38066 = count__37072_38016;
var G__38067 = (i__37073_38017 + (1));
seq__37069_38014 = G__38064;
chunk__37071_38015 = G__38065;
count__37072_38016 = G__38066;
i__37073_38017 = G__38067;
continue;
} else {
var temp__5735__auto___38069 = cljs.core.seq(seq__37069_38014);
if(temp__5735__auto___38069){
var seq__37069_38070__$1 = temp__5735__auto___38069;
if(cljs.core.chunked_seq_QMARK_(seq__37069_38070__$1)){
var c__4556__auto___38074 = cljs.core.chunk_first(seq__37069_38070__$1);
var G__38076 = cljs.core.chunk_rest(seq__37069_38070__$1);
var G__38077 = c__4556__auto___38074;
var G__38078 = cljs.core.count(c__4556__auto___38074);
var G__38079 = (0);
seq__37069_38014 = G__38076;
chunk__37071_38015 = G__38077;
count__37072_38016 = G__38078;
i__37073_38017 = G__38079;
continue;
} else {
var child_struct_38080 = cljs.core.first(seq__37069_38070__$1);
var children_38081 = shadow.dom.dom_node(child_struct_38080);
if(cljs.core.seq_QMARK_(children_38081)){
var seq__37136_38083 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38081));
var chunk__37138_38084 = null;
var count__37139_38085 = (0);
var i__37140_38086 = (0);
while(true){
if((i__37140_38086 < count__37139_38085)){
var child_38087 = chunk__37138_38084.cljs$core$IIndexed$_nth$arity$2(null,i__37140_38086);
if(cljs.core.truth_(child_38087)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38087);


var G__38089 = seq__37136_38083;
var G__38090 = chunk__37138_38084;
var G__38091 = count__37139_38085;
var G__38092 = (i__37140_38086 + (1));
seq__37136_38083 = G__38089;
chunk__37138_38084 = G__38090;
count__37139_38085 = G__38091;
i__37140_38086 = G__38092;
continue;
} else {
var G__38094 = seq__37136_38083;
var G__38095 = chunk__37138_38084;
var G__38096 = count__37139_38085;
var G__38097 = (i__37140_38086 + (1));
seq__37136_38083 = G__38094;
chunk__37138_38084 = G__38095;
count__37139_38085 = G__38096;
i__37140_38086 = G__38097;
continue;
}
} else {
var temp__5735__auto___38098__$1 = cljs.core.seq(seq__37136_38083);
if(temp__5735__auto___38098__$1){
var seq__37136_38099__$1 = temp__5735__auto___38098__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37136_38099__$1)){
var c__4556__auto___38101 = cljs.core.chunk_first(seq__37136_38099__$1);
var G__38103 = cljs.core.chunk_rest(seq__37136_38099__$1);
var G__38104 = c__4556__auto___38101;
var G__38105 = cljs.core.count(c__4556__auto___38101);
var G__38106 = (0);
seq__37136_38083 = G__38103;
chunk__37138_38084 = G__38104;
count__37139_38085 = G__38105;
i__37140_38086 = G__38106;
continue;
} else {
var child_38107 = cljs.core.first(seq__37136_38099__$1);
if(cljs.core.truth_(child_38107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38107);


var G__38109 = cljs.core.next(seq__37136_38099__$1);
var G__38110 = null;
var G__38111 = (0);
var G__38112 = (0);
seq__37136_38083 = G__38109;
chunk__37138_38084 = G__38110;
count__37139_38085 = G__38111;
i__37140_38086 = G__38112;
continue;
} else {
var G__38115 = cljs.core.next(seq__37136_38099__$1);
var G__38116 = null;
var G__38117 = (0);
var G__38118 = (0);
seq__37136_38083 = G__38115;
chunk__37138_38084 = G__38116;
count__37139_38085 = G__38117;
i__37140_38086 = G__38118;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38081);
}


var G__38121 = cljs.core.next(seq__37069_38070__$1);
var G__38122 = null;
var G__38123 = (0);
var G__38124 = (0);
seq__37069_38014 = G__38121;
chunk__37071_38015 = G__38122;
count__37072_38016 = G__38123;
i__37073_38017 = G__38124;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37169 = cljs.core.seq(node);
var chunk__37170 = null;
var count__37171 = (0);
var i__37172 = (0);
while(true){
if((i__37172 < count__37171)){
var n = chunk__37170.cljs$core$IIndexed$_nth$arity$2(null,i__37172);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38138 = seq__37169;
var G__38139 = chunk__37170;
var G__38140 = count__37171;
var G__38141 = (i__37172 + (1));
seq__37169 = G__38138;
chunk__37170 = G__38139;
count__37171 = G__38140;
i__37172 = G__38141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37169);
if(temp__5735__auto__){
var seq__37169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37169__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37169__$1);
var G__38149 = cljs.core.chunk_rest(seq__37169__$1);
var G__38150 = c__4556__auto__;
var G__38151 = cljs.core.count(c__4556__auto__);
var G__38152 = (0);
seq__37169 = G__38149;
chunk__37170 = G__38150;
count__37171 = G__38151;
i__37172 = G__38152;
continue;
} else {
var n = cljs.core.first(seq__37169__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38158 = cljs.core.next(seq__37169__$1);
var G__38159 = null;
var G__38160 = (0);
var G__38161 = (0);
seq__37169 = G__38158;
chunk__37170 = G__38159;
count__37171 = G__38160;
i__37172 = G__38161;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37176 = arguments.length;
switch (G__37176) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37183 = arguments.length;
switch (G__37183) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37196 = arguments.length;
switch (G__37196) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38182 = arguments.length;
var i__4737__auto___38183 = (0);
while(true){
if((i__4737__auto___38183 < len__4736__auto___38182)){
args__4742__auto__.push((arguments[i__4737__auto___38183]));

var G__38184 = (i__4737__auto___38183 + (1));
i__4737__auto___38183 = G__38184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37213_38189 = cljs.core.seq(nodes);
var chunk__37214_38190 = null;
var count__37215_38191 = (0);
var i__37216_38192 = (0);
while(true){
if((i__37216_38192 < count__37215_38191)){
var node_38194 = chunk__37214_38190.cljs$core$IIndexed$_nth$arity$2(null,i__37216_38192);
fragment.appendChild(shadow.dom._to_dom(node_38194));


var G__38195 = seq__37213_38189;
var G__38196 = chunk__37214_38190;
var G__38197 = count__37215_38191;
var G__38198 = (i__37216_38192 + (1));
seq__37213_38189 = G__38195;
chunk__37214_38190 = G__38196;
count__37215_38191 = G__38197;
i__37216_38192 = G__38198;
continue;
} else {
var temp__5735__auto___38200 = cljs.core.seq(seq__37213_38189);
if(temp__5735__auto___38200){
var seq__37213_38201__$1 = temp__5735__auto___38200;
if(cljs.core.chunked_seq_QMARK_(seq__37213_38201__$1)){
var c__4556__auto___38202 = cljs.core.chunk_first(seq__37213_38201__$1);
var G__38203 = cljs.core.chunk_rest(seq__37213_38201__$1);
var G__38204 = c__4556__auto___38202;
var G__38205 = cljs.core.count(c__4556__auto___38202);
var G__38206 = (0);
seq__37213_38189 = G__38203;
chunk__37214_38190 = G__38204;
count__37215_38191 = G__38205;
i__37216_38192 = G__38206;
continue;
} else {
var node_38207 = cljs.core.first(seq__37213_38201__$1);
fragment.appendChild(shadow.dom._to_dom(node_38207));


var G__38208 = cljs.core.next(seq__37213_38201__$1);
var G__38209 = null;
var G__38210 = (0);
var G__38211 = (0);
seq__37213_38189 = G__38208;
chunk__37214_38190 = G__38209;
count__37215_38191 = G__38210;
i__37216_38192 = G__38211;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37208){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37208));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37233_38216 = cljs.core.seq(scripts);
var chunk__37234_38217 = null;
var count__37235_38218 = (0);
var i__37236_38219 = (0);
while(true){
if((i__37236_38219 < count__37235_38218)){
var vec__37248_38220 = chunk__37234_38217.cljs$core$IIndexed$_nth$arity$2(null,i__37236_38219);
var script_tag_38221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37248_38220,(0),null);
var script_body_38222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37248_38220,(1),null);
eval(script_body_38222);


var G__38225 = seq__37233_38216;
var G__38226 = chunk__37234_38217;
var G__38227 = count__37235_38218;
var G__38228 = (i__37236_38219 + (1));
seq__37233_38216 = G__38225;
chunk__37234_38217 = G__38226;
count__37235_38218 = G__38227;
i__37236_38219 = G__38228;
continue;
} else {
var temp__5735__auto___38234 = cljs.core.seq(seq__37233_38216);
if(temp__5735__auto___38234){
var seq__37233_38236__$1 = temp__5735__auto___38234;
if(cljs.core.chunked_seq_QMARK_(seq__37233_38236__$1)){
var c__4556__auto___38238 = cljs.core.chunk_first(seq__37233_38236__$1);
var G__38239 = cljs.core.chunk_rest(seq__37233_38236__$1);
var G__38240 = c__4556__auto___38238;
var G__38241 = cljs.core.count(c__4556__auto___38238);
var G__38242 = (0);
seq__37233_38216 = G__38239;
chunk__37234_38217 = G__38240;
count__37235_38218 = G__38241;
i__37236_38219 = G__38242;
continue;
} else {
var vec__37254_38247 = cljs.core.first(seq__37233_38236__$1);
var script_tag_38248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254_38247,(0),null);
var script_body_38249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254_38247,(1),null);
eval(script_body_38249);


var G__38250 = cljs.core.next(seq__37233_38236__$1);
var G__38251 = null;
var G__38252 = (0);
var G__38253 = (0);
seq__37233_38216 = G__38250;
chunk__37234_38217 = G__38251;
count__37235_38218 = G__38252;
i__37236_38219 = G__38253;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37257){
var vec__37259 = p__37257;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37259,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37259,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37271 = arguments.length;
switch (G__37271) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37291 = cljs.core.seq(style_keys);
var chunk__37292 = null;
var count__37293 = (0);
var i__37294 = (0);
while(true){
if((i__37294 < count__37293)){
var it = chunk__37292.cljs$core$IIndexed$_nth$arity$2(null,i__37294);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38274 = seq__37291;
var G__38275 = chunk__37292;
var G__38276 = count__37293;
var G__38277 = (i__37294 + (1));
seq__37291 = G__38274;
chunk__37292 = G__38275;
count__37293 = G__38276;
i__37294 = G__38277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37291);
if(temp__5735__auto__){
var seq__37291__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37291__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37291__$1);
var G__38281 = cljs.core.chunk_rest(seq__37291__$1);
var G__38282 = c__4556__auto__;
var G__38283 = cljs.core.count(c__4556__auto__);
var G__38284 = (0);
seq__37291 = G__38281;
chunk__37292 = G__38282;
count__37293 = G__38283;
i__37294 = G__38284;
continue;
} else {
var it = cljs.core.first(seq__37291__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38288 = cljs.core.next(seq__37291__$1);
var G__38289 = null;
var G__38290 = (0);
var G__38291 = (0);
seq__37291 = G__38288;
chunk__37292 = G__38289;
count__37293 = G__38290;
i__37294 = G__38291;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37298,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37305 = k37298;
var G__37305__$1 = (((G__37305 instanceof cljs.core.Keyword))?G__37305.fqn:null);
switch (G__37305__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37298,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37309){
var vec__37310 = p__37309;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37297){
var self__ = this;
var G__37297__$1 = this;
return (new cljs.core.RecordIter((0),G__37297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37299,other37300){
var self__ = this;
var this37299__$1 = this;
return (((!((other37300 == null)))) && ((this37299__$1.constructor === other37300.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37299__$1.x,other37300.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37299__$1.y,other37300.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37299__$1.__extmap,other37300.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37297){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37319 = cljs.core.keyword_identical_QMARK_;
var expr__37320 = k__4388__auto__;
if(cljs.core.truth_((pred__37319.cljs$core$IFn$_invoke$arity$2 ? pred__37319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37320) : pred__37319.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37320)))){
return (new shadow.dom.Coordinate(G__37297,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37319.cljs$core$IFn$_invoke$arity$2 ? pred__37319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37320) : pred__37319.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37320)))){
return (new shadow.dom.Coordinate(self__.x,G__37297,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37297),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37297){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37297,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37303){
var extmap__4419__auto__ = (function (){var G__37323 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37303,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37303)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37323);
} else {
return G__37323;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37303),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37303),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37335,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37343 = k37335;
var G__37343__$1 = (((G__37343 instanceof cljs.core.Keyword))?G__37343.fqn:null);
switch (G__37343__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37335,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37346){
var vec__37347 = p__37346;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37347,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37347,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37334){
var self__ = this;
var G__37334__$1 = this;
return (new cljs.core.RecordIter((0),G__37334__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37337,other37338){
var self__ = this;
var this37337__$1 = this;
return (((!((other37338 == null)))) && ((this37337__$1.constructor === other37338.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37337__$1.w,other37338.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37337__$1.h,other37338.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37337__$1.__extmap,other37338.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37334){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37377 = cljs.core.keyword_identical_QMARK_;
var expr__37378 = k__4388__auto__;
if(cljs.core.truth_((pred__37377.cljs$core$IFn$_invoke$arity$2 ? pred__37377.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37378) : pred__37377.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37378)))){
return (new shadow.dom.Size(G__37334,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37377.cljs$core$IFn$_invoke$arity$2 ? pred__37377.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37378) : pred__37377.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37378)))){
return (new shadow.dom.Size(self__.w,G__37334,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37334),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37334){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37334,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37340){
var extmap__4419__auto__ = (function (){var G__37390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37340,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37340)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37390);
} else {
return G__37390;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37340),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37340),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__38391 = (i + (1));
var G__38392 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38391;
ret = G__38392;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37415){
var vec__37417 = p__37415;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37417,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37434 = arguments.length;
switch (G__37434) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38406 = ps;
var G__38407 = (i + (1));
el__$1 = G__38406;
i = G__38407;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37472 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37472,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37472,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37472,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37477_38417 = cljs.core.seq(props);
var chunk__37478_38418 = null;
var count__37479_38419 = (0);
var i__37480_38420 = (0);
while(true){
if((i__37480_38420 < count__37479_38419)){
var vec__37492_38421 = chunk__37478_38418.cljs$core$IIndexed$_nth$arity$2(null,i__37480_38420);
var k_38422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37492_38421,(0),null);
var v_38423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37492_38421,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_38422);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38422),v_38423);


var G__38424 = seq__37477_38417;
var G__38425 = chunk__37478_38418;
var G__38426 = count__37479_38419;
var G__38427 = (i__37480_38420 + (1));
seq__37477_38417 = G__38424;
chunk__37478_38418 = G__38425;
count__37479_38419 = G__38426;
i__37480_38420 = G__38427;
continue;
} else {
var temp__5735__auto___38428 = cljs.core.seq(seq__37477_38417);
if(temp__5735__auto___38428){
var seq__37477_38429__$1 = temp__5735__auto___38428;
if(cljs.core.chunked_seq_QMARK_(seq__37477_38429__$1)){
var c__4556__auto___38430 = cljs.core.chunk_first(seq__37477_38429__$1);
var G__38431 = cljs.core.chunk_rest(seq__37477_38429__$1);
var G__38432 = c__4556__auto___38430;
var G__38433 = cljs.core.count(c__4556__auto___38430);
var G__38434 = (0);
seq__37477_38417 = G__38431;
chunk__37478_38418 = G__38432;
count__37479_38419 = G__38433;
i__37480_38420 = G__38434;
continue;
} else {
var vec__37505_38435 = cljs.core.first(seq__37477_38429__$1);
var k_38436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505_38435,(0),null);
var v_38437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505_38435,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_38436);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38436),v_38437);


var G__38439 = cljs.core.next(seq__37477_38429__$1);
var G__38440 = null;
var G__38441 = (0);
var G__38442 = (0);
seq__37477_38417 = G__38439;
chunk__37478_38418 = G__38440;
count__37479_38419 = G__38441;
i__37480_38420 = G__38442;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37536 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37536,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37536,(1),null);
var seq__37543_38445 = cljs.core.seq(node_children);
var chunk__37545_38446 = null;
var count__37546_38447 = (0);
var i__37547_38448 = (0);
while(true){
if((i__37547_38448 < count__37546_38447)){
var child_struct_38449 = chunk__37545_38446.cljs$core$IIndexed$_nth$arity$2(null,i__37547_38448);
if((!((child_struct_38449 == null)))){
if(typeof child_struct_38449 === 'string'){
var text_38452 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38452),child_struct_38449].join(''));
} else {
var children_38454 = shadow.dom.svg_node(child_struct_38449);
if(cljs.core.seq_QMARK_(children_38454)){
var seq__37665_38457 = cljs.core.seq(children_38454);
var chunk__37667_38458 = null;
var count__37668_38459 = (0);
var i__37669_38460 = (0);
while(true){
if((i__37669_38460 < count__37668_38459)){
var child_38462 = chunk__37667_38458.cljs$core$IIndexed$_nth$arity$2(null,i__37669_38460);
if(cljs.core.truth_(child_38462)){
node.appendChild(child_38462);


var G__38463 = seq__37665_38457;
var G__38464 = chunk__37667_38458;
var G__38465 = count__37668_38459;
var G__38466 = (i__37669_38460 + (1));
seq__37665_38457 = G__38463;
chunk__37667_38458 = G__38464;
count__37668_38459 = G__38465;
i__37669_38460 = G__38466;
continue;
} else {
var G__38468 = seq__37665_38457;
var G__38469 = chunk__37667_38458;
var G__38470 = count__37668_38459;
var G__38471 = (i__37669_38460 + (1));
seq__37665_38457 = G__38468;
chunk__37667_38458 = G__38469;
count__37668_38459 = G__38470;
i__37669_38460 = G__38471;
continue;
}
} else {
var temp__5735__auto___38472 = cljs.core.seq(seq__37665_38457);
if(temp__5735__auto___38472){
var seq__37665_38473__$1 = temp__5735__auto___38472;
if(cljs.core.chunked_seq_QMARK_(seq__37665_38473__$1)){
var c__4556__auto___38474 = cljs.core.chunk_first(seq__37665_38473__$1);
var G__38475 = cljs.core.chunk_rest(seq__37665_38473__$1);
var G__38476 = c__4556__auto___38474;
var G__38477 = cljs.core.count(c__4556__auto___38474);
var G__38478 = (0);
seq__37665_38457 = G__38475;
chunk__37667_38458 = G__38476;
count__37668_38459 = G__38477;
i__37669_38460 = G__38478;
continue;
} else {
var child_38483 = cljs.core.first(seq__37665_38473__$1);
if(cljs.core.truth_(child_38483)){
node.appendChild(child_38483);


var G__38484 = cljs.core.next(seq__37665_38473__$1);
var G__38485 = null;
var G__38486 = (0);
var G__38487 = (0);
seq__37665_38457 = G__38484;
chunk__37667_38458 = G__38485;
count__37668_38459 = G__38486;
i__37669_38460 = G__38487;
continue;
} else {
var G__38489 = cljs.core.next(seq__37665_38473__$1);
var G__38490 = null;
var G__38491 = (0);
var G__38492 = (0);
seq__37665_38457 = G__38489;
chunk__37667_38458 = G__38490;
count__37668_38459 = G__38491;
i__37669_38460 = G__38492;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38454);
}
}


var G__38495 = seq__37543_38445;
var G__38496 = chunk__37545_38446;
var G__38497 = count__37546_38447;
var G__38498 = (i__37547_38448 + (1));
seq__37543_38445 = G__38495;
chunk__37545_38446 = G__38496;
count__37546_38447 = G__38497;
i__37547_38448 = G__38498;
continue;
} else {
var G__38502 = seq__37543_38445;
var G__38503 = chunk__37545_38446;
var G__38504 = count__37546_38447;
var G__38505 = (i__37547_38448 + (1));
seq__37543_38445 = G__38502;
chunk__37545_38446 = G__38503;
count__37546_38447 = G__38504;
i__37547_38448 = G__38505;
continue;
}
} else {
var temp__5735__auto___38506 = cljs.core.seq(seq__37543_38445);
if(temp__5735__auto___38506){
var seq__37543_38507__$1 = temp__5735__auto___38506;
if(cljs.core.chunked_seq_QMARK_(seq__37543_38507__$1)){
var c__4556__auto___38510 = cljs.core.chunk_first(seq__37543_38507__$1);
var G__38512 = cljs.core.chunk_rest(seq__37543_38507__$1);
var G__38513 = c__4556__auto___38510;
var G__38514 = cljs.core.count(c__4556__auto___38510);
var G__38515 = (0);
seq__37543_38445 = G__38512;
chunk__37545_38446 = G__38513;
count__37546_38447 = G__38514;
i__37547_38448 = G__38515;
continue;
} else {
var child_struct_38519 = cljs.core.first(seq__37543_38507__$1);
if((!((child_struct_38519 == null)))){
if(typeof child_struct_38519 === 'string'){
var text_38520 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38520),child_struct_38519].join(''));
} else {
var children_38523 = shadow.dom.svg_node(child_struct_38519);
if(cljs.core.seq_QMARK_(children_38523)){
var seq__37708_38524 = cljs.core.seq(children_38523);
var chunk__37713_38525 = null;
var count__37714_38526 = (0);
var i__37715_38527 = (0);
while(true){
if((i__37715_38527 < count__37714_38526)){
var child_38530 = chunk__37713_38525.cljs$core$IIndexed$_nth$arity$2(null,i__37715_38527);
if(cljs.core.truth_(child_38530)){
node.appendChild(child_38530);


var G__38532 = seq__37708_38524;
var G__38533 = chunk__37713_38525;
var G__38534 = count__37714_38526;
var G__38535 = (i__37715_38527 + (1));
seq__37708_38524 = G__38532;
chunk__37713_38525 = G__38533;
count__37714_38526 = G__38534;
i__37715_38527 = G__38535;
continue;
} else {
var G__38536 = seq__37708_38524;
var G__38537 = chunk__37713_38525;
var G__38538 = count__37714_38526;
var G__38539 = (i__37715_38527 + (1));
seq__37708_38524 = G__38536;
chunk__37713_38525 = G__38537;
count__37714_38526 = G__38538;
i__37715_38527 = G__38539;
continue;
}
} else {
var temp__5735__auto___38540__$1 = cljs.core.seq(seq__37708_38524);
if(temp__5735__auto___38540__$1){
var seq__37708_38542__$1 = temp__5735__auto___38540__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37708_38542__$1)){
var c__4556__auto___38544 = cljs.core.chunk_first(seq__37708_38542__$1);
var G__38545 = cljs.core.chunk_rest(seq__37708_38542__$1);
var G__38546 = c__4556__auto___38544;
var G__38547 = cljs.core.count(c__4556__auto___38544);
var G__38548 = (0);
seq__37708_38524 = G__38545;
chunk__37713_38525 = G__38546;
count__37714_38526 = G__38547;
i__37715_38527 = G__38548;
continue;
} else {
var child_38558 = cljs.core.first(seq__37708_38542__$1);
if(cljs.core.truth_(child_38558)){
node.appendChild(child_38558);


var G__38560 = cljs.core.next(seq__37708_38542__$1);
var G__38561 = null;
var G__38562 = (0);
var G__38563 = (0);
seq__37708_38524 = G__38560;
chunk__37713_38525 = G__38561;
count__37714_38526 = G__38562;
i__37715_38527 = G__38563;
continue;
} else {
var G__38564 = cljs.core.next(seq__37708_38542__$1);
var G__38565 = null;
var G__38566 = (0);
var G__38567 = (0);
seq__37708_38524 = G__38564;
chunk__37713_38525 = G__38565;
count__37714_38526 = G__38566;
i__37715_38527 = G__38567;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38523);
}
}


var G__38569 = cljs.core.next(seq__37543_38507__$1);
var G__38570 = null;
var G__38571 = (0);
var G__38572 = (0);
seq__37543_38445 = G__38569;
chunk__37545_38446 = G__38570;
count__37546_38447 = G__38571;
i__37547_38448 = G__38572;
continue;
} else {
var G__38574 = cljs.core.next(seq__37543_38507__$1);
var G__38575 = null;
var G__38576 = (0);
var G__38577 = (0);
seq__37543_38445 = G__38574;
chunk__37545_38446 = G__38575;
count__37546_38447 = G__38576;
i__37547_38448 = G__38577;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38586 = arguments.length;
var i__4737__auto___38588 = (0);
while(true){
if((i__4737__auto___38588 < len__4736__auto___38586)){
args__4742__auto__.push((arguments[i__4737__auto___38588]));

var G__38592 = (i__4737__auto___38588 + (1));
i__4737__auto___38588 = G__38592;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37758){
var G__37759 = cljs.core.first(seq37758);
var seq37758__$1 = cljs.core.next(seq37758);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37759,seq37758__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37788 = arguments.length;
switch (G__37788) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__34188__auto___38620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_37829){
var state_val_37830 = (state_37829[(1)]);
if((state_val_37830 === (1))){
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37829__$1,(2),once_or_cleanup);
} else {
if((state_val_37830 === (2))){
var inst_37822 = (state_37829[(2)]);
var inst_37823 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37829__$1 = (function (){var statearr_37840 = state_37829;
(statearr_37840[(7)] = inst_37822);

return statearr_37840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37829__$1,inst_37823);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33660__auto__ = null;
var shadow$dom$state_machine__33660__auto____0 = (function (){
var statearr_37841 = [null,null,null,null,null,null,null,null];
(statearr_37841[(0)] = shadow$dom$state_machine__33660__auto__);

(statearr_37841[(1)] = (1));

return statearr_37841;
});
var shadow$dom$state_machine__33660__auto____1 = (function (state_37829){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_37829);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e37844){var ex__33663__auto__ = e37844;
var statearr_37845_38629 = state_37829;
(statearr_37845_38629[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_37829[(4)]))){
var statearr_37847_38633 = state_37829;
(statearr_37847_38633[(1)] = cljs.core.first((state_37829[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38634 = state_37829;
state_37829 = G__38634;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
shadow$dom$state_machine__33660__auto__ = function(state_37829){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33660__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33660__auto____1.call(this,state_37829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33660__auto____0;
shadow$dom$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33660__auto____1;
return shadow$dom$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_37848 = f__34189__auto__();
(statearr_37848[(6)] = c__34188__auto___38620);

return statearr_37848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
