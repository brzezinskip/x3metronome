goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38450,p__38451){
var map__38453 = p__38450;
var map__38453__$1 = (((((!((map__38453 == null))))?(((((map__38453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38453):map__38453);
var svc = map__38453__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38453__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38453__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38453__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38455 = p__38451;
var map__38455__$1 = (((((!((map__38455 == null))))?(((((map__38455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38455):map__38455);
var msg = map__38455__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38455__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38455__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38455__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38455__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38508,p__38509){
var map__38511 = p__38508;
var map__38511__$1 = (((((!((map__38511 == null))))?(((((map__38511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38511):map__38511);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38516 = p__38509;
var map__38516__$1 = (((((!((map__38516 == null))))?(((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38516):map__38516);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38516__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38552,p__38553){
var map__38554 = p__38552;
var map__38554__$1 = (((((!((map__38554 == null))))?(((((map__38554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38554):map__38554);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38556 = p__38553;
var map__38556__$1 = (((((!((map__38556 == null))))?(((((map__38556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38556):map__38556);
var msg = map__38556__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38556__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38579,tid){
var map__38580 = p__38579;
var map__38580__$1 = (((((!((map__38580 == null))))?(((((map__38580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38580):map__38580);
var svc = map__38580__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38580__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38596 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38597 = null;
var count__38598 = (0);
var i__38599 = (0);
while(true){
if((i__38599 < count__38598)){
var vec__38614 = chunk__38597.cljs$core$IIndexed$_nth$arity$2(null,i__38599);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38614,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38614,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38641 = seq__38596;
var G__38642 = chunk__38597;
var G__38643 = count__38598;
var G__38644 = (i__38599 + (1));
seq__38596 = G__38641;
chunk__38597 = G__38642;
count__38598 = G__38643;
i__38599 = G__38644;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38596);
if(temp__5735__auto__){
var seq__38596__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38596__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38596__$1);
var G__38645 = cljs.core.chunk_rest(seq__38596__$1);
var G__38646 = c__4556__auto__;
var G__38647 = cljs.core.count(c__4556__auto__);
var G__38648 = (0);
seq__38596 = G__38645;
chunk__38597 = G__38646;
count__38598 = G__38647;
i__38599 = G__38648;
continue;
} else {
var vec__38623 = cljs.core.first(seq__38596__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38623,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38623,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38649 = cljs.core.next(seq__38596__$1);
var G__38650 = null;
var G__38651 = (0);
var G__38652 = (0);
seq__38596 = G__38649;
chunk__38597 = G__38650;
count__38598 = G__38651;
i__38599 = G__38652;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38587_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38587_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38589_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38589_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38590_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38590_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38591_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38591_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38630){
var map__38631 = p__38630;
var map__38631__$1 = (((((!((map__38631 == null))))?(((((map__38631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38631):map__38631);
var svc = map__38631__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
