goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39971 = arguments.length;
var i__4737__auto___39972 = (0);
while(true){
if((i__4737__auto___39972 < len__4736__auto___39971)){
args__4742__auto__.push((arguments[i__4737__auto___39972]));

var G__39973 = (i__4737__auto___39972 + (1));
i__4737__auto___39972 = G__39973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39737){
var G__39738 = cljs.core.first(seq39737);
var seq39737__$1 = cljs.core.next(seq39737);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39738,seq39737__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39749 = cljs.core.seq(sources);
var chunk__39750 = null;
var count__39751 = (0);
var i__39752 = (0);
while(true){
if((i__39752 < count__39751)){
var map__39774 = chunk__39750.cljs$core$IIndexed$_nth$arity$2(null,i__39752);
var map__39774__$1 = (((((!((map__39774 == null))))?(((((map__39774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39774):map__39774);
var src = map__39774__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39778){var e_39974 = e39778;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39974);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39974.message)].join('')));
}

var G__39976 = seq__39749;
var G__39977 = chunk__39750;
var G__39978 = count__39751;
var G__39979 = (i__39752 + (1));
seq__39749 = G__39976;
chunk__39750 = G__39977;
count__39751 = G__39978;
i__39752 = G__39979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39749);
if(temp__5735__auto__){
var seq__39749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39749__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39749__$1);
var G__39980 = cljs.core.chunk_rest(seq__39749__$1);
var G__39981 = c__4556__auto__;
var G__39982 = cljs.core.count(c__4556__auto__);
var G__39983 = (0);
seq__39749 = G__39980;
chunk__39750 = G__39981;
count__39751 = G__39982;
i__39752 = G__39983;
continue;
} else {
var map__39780 = cljs.core.first(seq__39749__$1);
var map__39780__$1 = (((((!((map__39780 == null))))?(((((map__39780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39780):map__39780);
var src = map__39780__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39780__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39780__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39780__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39780__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39785){var e_39984 = e39785;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39984);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39984.message)].join('')));
}

var G__39985 = cljs.core.next(seq__39749__$1);
var G__39986 = null;
var G__39987 = (0);
var G__39988 = (0);
seq__39749 = G__39985;
chunk__39750 = G__39986;
count__39751 = G__39987;
i__39752 = G__39988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39790 = cljs.core.seq(js_requires);
var chunk__39791 = null;
var count__39792 = (0);
var i__39793 = (0);
while(true){
if((i__39793 < count__39792)){
var js_ns = chunk__39791.cljs$core$IIndexed$_nth$arity$2(null,i__39793);
var require_str_39992 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39992);


var G__39993 = seq__39790;
var G__39994 = chunk__39791;
var G__39995 = count__39792;
var G__39996 = (i__39793 + (1));
seq__39790 = G__39993;
chunk__39791 = G__39994;
count__39792 = G__39995;
i__39793 = G__39996;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39790);
if(temp__5735__auto__){
var seq__39790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39790__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39790__$1);
var G__40000 = cljs.core.chunk_rest(seq__39790__$1);
var G__40001 = c__4556__auto__;
var G__40002 = cljs.core.count(c__4556__auto__);
var G__40003 = (0);
seq__39790 = G__40000;
chunk__39791 = G__40001;
count__39792 = G__40002;
i__39793 = G__40003;
continue;
} else {
var js_ns = cljs.core.first(seq__39790__$1);
var require_str_40004 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40004);


var G__40005 = cljs.core.next(seq__39790__$1);
var G__40006 = null;
var G__40007 = (0);
var G__40008 = (0);
seq__39790 = G__40005;
chunk__39791 = G__40006;
count__39792 = G__40007;
i__39793 = G__40008;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39802){
var map__39803 = p__39802;
var map__39803__$1 = (((((!((map__39803 == null))))?(((((map__39803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39803):map__39803);
var msg = map__39803__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39805(s__39806){
return (new cljs.core.LazySeq(null,(function (){
var s__39806__$1 = s__39806;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39806__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39811 = cljs.core.first(xs__6292__auto__);
var map__39811__$1 = (((((!((map__39811 == null))))?(((((map__39811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39811):map__39811);
var src = map__39811__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39811__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39811__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39806__$1,map__39811,map__39811__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39803,map__39803__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39805_$_iter__39807(s__39808){
return (new cljs.core.LazySeq(null,((function (s__39806__$1,map__39811,map__39811__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39803,map__39803__$1,msg,info,reload_info){
return (function (){
var s__39808__$1 = s__39808;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39808__$1);
if(temp__5735__auto____$1){
var s__39808__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39808__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39808__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39810 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39809 = (0);
while(true){
if((i__39809 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39809);
cljs.core.chunk_append(b__39810,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40009 = (i__39809 + (1));
i__39809 = G__40009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39810),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39805_$_iter__39807(cljs.core.chunk_rest(s__39808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39810),null);
}
} else {
var warning = cljs.core.first(s__39808__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39805_$_iter__39807(cljs.core.rest(s__39808__$2)));
}
} else {
return null;
}
break;
}
});})(s__39806__$1,map__39811,map__39811__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39803,map__39803__$1,msg,info,reload_info))
,null,null));
});})(s__39806__$1,map__39811,map__39811__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39803,map__39803__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39805(cljs.core.rest(s__39806__$1)));
} else {
var G__40010 = cljs.core.rest(s__39806__$1);
s__39806__$1 = G__40010;
continue;
}
} else {
var G__40011 = cljs.core.rest(s__39806__$1);
s__39806__$1 = G__40011;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39813_40012 = cljs.core.seq(warnings);
var chunk__39814_40013 = null;
var count__39815_40014 = (0);
var i__39816_40015 = (0);
while(true){
if((i__39816_40015 < count__39815_40014)){
var map__39825_40016 = chunk__39814_40013.cljs$core$IIndexed$_nth$arity$2(null,i__39816_40015);
var map__39825_40017__$1 = (((((!((map__39825_40016 == null))))?(((((map__39825_40016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39825_40016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39825_40016):map__39825_40016);
var w_40018 = map__39825_40017__$1;
var msg_40019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39825_40017__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39825_40017__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39825_40017__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39825_40017__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40022)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40020),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40021),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40019__$1)].join(''));


var G__40023 = seq__39813_40012;
var G__40024 = chunk__39814_40013;
var G__40025 = count__39815_40014;
var G__40026 = (i__39816_40015 + (1));
seq__39813_40012 = G__40023;
chunk__39814_40013 = G__40024;
count__39815_40014 = G__40025;
i__39816_40015 = G__40026;
continue;
} else {
var temp__5735__auto___40027 = cljs.core.seq(seq__39813_40012);
if(temp__5735__auto___40027){
var seq__39813_40028__$1 = temp__5735__auto___40027;
if(cljs.core.chunked_seq_QMARK_(seq__39813_40028__$1)){
var c__4556__auto___40029 = cljs.core.chunk_first(seq__39813_40028__$1);
var G__40030 = cljs.core.chunk_rest(seq__39813_40028__$1);
var G__40031 = c__4556__auto___40029;
var G__40032 = cljs.core.count(c__4556__auto___40029);
var G__40033 = (0);
seq__39813_40012 = G__40030;
chunk__39814_40013 = G__40031;
count__39815_40014 = G__40032;
i__39816_40015 = G__40033;
continue;
} else {
var map__39827_40034 = cljs.core.first(seq__39813_40028__$1);
var map__39827_40035__$1 = (((((!((map__39827_40034 == null))))?(((((map__39827_40034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39827_40034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39827_40034):map__39827_40034);
var w_40036 = map__39827_40035__$1;
var msg_40037__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39827_40035__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39827_40035__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39827_40035__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39827_40035__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40040)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40038),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40039),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40037__$1)].join(''));


var G__40041 = cljs.core.next(seq__39813_40028__$1);
var G__40042 = null;
var G__40043 = (0);
var G__40044 = (0);
seq__39813_40012 = G__40041;
chunk__39814_40013 = G__40042;
count__39815_40014 = G__40043;
i__39816_40015 = G__40044;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39800_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39800_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39837){
var map__39838 = p__39837;
var map__39838__$1 = (((((!((map__39838 == null))))?(((((map__39838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39838):map__39838);
var msg = map__39838__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39838__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39840 = cljs.core.seq(updates);
var chunk__39842 = null;
var count__39843 = (0);
var i__39844 = (0);
while(true){
if((i__39844 < count__39843)){
var path = chunk__39842.cljs$core$IIndexed$_nth$arity$2(null,i__39844);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39883_40050 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39887_40051 = null;
var count__39888_40052 = (0);
var i__39889_40053 = (0);
while(true){
if((i__39889_40053 < count__39888_40052)){
var node_40054 = chunk__39887_40051.cljs$core$IIndexed$_nth$arity$2(null,i__39889_40053);
if(cljs.core.not(node_40054.shadow$old)){
var path_match_40055 = shadow.cljs.devtools.client.browser.match_paths(node_40054.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40055)){
var new_link_40056 = (function (){var G__39897 = node_40054.cloneNode(true);
G__39897.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40055),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39897;
})();
(node_40054.shadow$old = true);

(new_link_40056.onload = ((function (seq__39883_40050,chunk__39887_40051,count__39888_40052,i__39889_40053,seq__39840,chunk__39842,count__39843,i__39844,new_link_40056,path_match_40055,node_40054,path,map__39838,map__39838__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40054);
});})(seq__39883_40050,chunk__39887_40051,count__39888_40052,i__39889_40053,seq__39840,chunk__39842,count__39843,i__39844,new_link_40056,path_match_40055,node_40054,path,map__39838,map__39838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40055], 0));

goog.dom.insertSiblingAfter(new_link_40056,node_40054);


var G__40057 = seq__39883_40050;
var G__40058 = chunk__39887_40051;
var G__40059 = count__39888_40052;
var G__40060 = (i__39889_40053 + (1));
seq__39883_40050 = G__40057;
chunk__39887_40051 = G__40058;
count__39888_40052 = G__40059;
i__39889_40053 = G__40060;
continue;
} else {
var G__40061 = seq__39883_40050;
var G__40062 = chunk__39887_40051;
var G__40063 = count__39888_40052;
var G__40064 = (i__39889_40053 + (1));
seq__39883_40050 = G__40061;
chunk__39887_40051 = G__40062;
count__39888_40052 = G__40063;
i__39889_40053 = G__40064;
continue;
}
} else {
var G__40065 = seq__39883_40050;
var G__40066 = chunk__39887_40051;
var G__40067 = count__39888_40052;
var G__40068 = (i__39889_40053 + (1));
seq__39883_40050 = G__40065;
chunk__39887_40051 = G__40066;
count__39888_40052 = G__40067;
i__39889_40053 = G__40068;
continue;
}
} else {
var temp__5735__auto___40069 = cljs.core.seq(seq__39883_40050);
if(temp__5735__auto___40069){
var seq__39883_40070__$1 = temp__5735__auto___40069;
if(cljs.core.chunked_seq_QMARK_(seq__39883_40070__$1)){
var c__4556__auto___40071 = cljs.core.chunk_first(seq__39883_40070__$1);
var G__40072 = cljs.core.chunk_rest(seq__39883_40070__$1);
var G__40073 = c__4556__auto___40071;
var G__40074 = cljs.core.count(c__4556__auto___40071);
var G__40075 = (0);
seq__39883_40050 = G__40072;
chunk__39887_40051 = G__40073;
count__39888_40052 = G__40074;
i__39889_40053 = G__40075;
continue;
} else {
var node_40076 = cljs.core.first(seq__39883_40070__$1);
if(cljs.core.not(node_40076.shadow$old)){
var path_match_40079 = shadow.cljs.devtools.client.browser.match_paths(node_40076.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40079)){
var new_link_40080 = (function (){var G__39903 = node_40076.cloneNode(true);
G__39903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40079),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39903;
})();
(node_40076.shadow$old = true);

(new_link_40080.onload = ((function (seq__39883_40050,chunk__39887_40051,count__39888_40052,i__39889_40053,seq__39840,chunk__39842,count__39843,i__39844,new_link_40080,path_match_40079,node_40076,seq__39883_40070__$1,temp__5735__auto___40069,path,map__39838,map__39838__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40076);
});})(seq__39883_40050,chunk__39887_40051,count__39888_40052,i__39889_40053,seq__39840,chunk__39842,count__39843,i__39844,new_link_40080,path_match_40079,node_40076,seq__39883_40070__$1,temp__5735__auto___40069,path,map__39838,map__39838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40079], 0));

goog.dom.insertSiblingAfter(new_link_40080,node_40076);


var G__40081 = cljs.core.next(seq__39883_40070__$1);
var G__40082 = null;
var G__40083 = (0);
var G__40084 = (0);
seq__39883_40050 = G__40081;
chunk__39887_40051 = G__40082;
count__39888_40052 = G__40083;
i__39889_40053 = G__40084;
continue;
} else {
var G__40085 = cljs.core.next(seq__39883_40070__$1);
var G__40086 = null;
var G__40087 = (0);
var G__40088 = (0);
seq__39883_40050 = G__40085;
chunk__39887_40051 = G__40086;
count__39888_40052 = G__40087;
i__39889_40053 = G__40088;
continue;
}
} else {
var G__40089 = cljs.core.next(seq__39883_40070__$1);
var G__40090 = null;
var G__40091 = (0);
var G__40092 = (0);
seq__39883_40050 = G__40089;
chunk__39887_40051 = G__40090;
count__39888_40052 = G__40091;
i__39889_40053 = G__40092;
continue;
}
}
} else {
}
}
break;
}


var G__40093 = seq__39840;
var G__40094 = chunk__39842;
var G__40095 = count__39843;
var G__40096 = (i__39844 + (1));
seq__39840 = G__40093;
chunk__39842 = G__40094;
count__39843 = G__40095;
i__39844 = G__40096;
continue;
} else {
var G__40097 = seq__39840;
var G__40098 = chunk__39842;
var G__40099 = count__39843;
var G__40100 = (i__39844 + (1));
seq__39840 = G__40097;
chunk__39842 = G__40098;
count__39843 = G__40099;
i__39844 = G__40100;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39840);
if(temp__5735__auto__){
var seq__39840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39840__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39840__$1);
var G__40101 = cljs.core.chunk_rest(seq__39840__$1);
var G__40102 = c__4556__auto__;
var G__40103 = cljs.core.count(c__4556__auto__);
var G__40104 = (0);
seq__39840 = G__40101;
chunk__39842 = G__40102;
count__39843 = G__40103;
i__39844 = G__40104;
continue;
} else {
var path = cljs.core.first(seq__39840__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39904_40105 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39908_40106 = null;
var count__39909_40107 = (0);
var i__39910_40108 = (0);
while(true){
if((i__39910_40108 < count__39909_40107)){
var node_40109 = chunk__39908_40106.cljs$core$IIndexed$_nth$arity$2(null,i__39910_40108);
if(cljs.core.not(node_40109.shadow$old)){
var path_match_40110 = shadow.cljs.devtools.client.browser.match_paths(node_40109.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40110)){
var new_link_40111 = (function (){var G__39918 = node_40109.cloneNode(true);
G__39918.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40110),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39918;
})();
(node_40109.shadow$old = true);

(new_link_40111.onload = ((function (seq__39904_40105,chunk__39908_40106,count__39909_40107,i__39910_40108,seq__39840,chunk__39842,count__39843,i__39844,new_link_40111,path_match_40110,node_40109,path,seq__39840__$1,temp__5735__auto__,map__39838,map__39838__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40109);
});})(seq__39904_40105,chunk__39908_40106,count__39909_40107,i__39910_40108,seq__39840,chunk__39842,count__39843,i__39844,new_link_40111,path_match_40110,node_40109,path,seq__39840__$1,temp__5735__auto__,map__39838,map__39838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40110], 0));

goog.dom.insertSiblingAfter(new_link_40111,node_40109);


var G__40112 = seq__39904_40105;
var G__40113 = chunk__39908_40106;
var G__40114 = count__39909_40107;
var G__40115 = (i__39910_40108 + (1));
seq__39904_40105 = G__40112;
chunk__39908_40106 = G__40113;
count__39909_40107 = G__40114;
i__39910_40108 = G__40115;
continue;
} else {
var G__40116 = seq__39904_40105;
var G__40117 = chunk__39908_40106;
var G__40118 = count__39909_40107;
var G__40119 = (i__39910_40108 + (1));
seq__39904_40105 = G__40116;
chunk__39908_40106 = G__40117;
count__39909_40107 = G__40118;
i__39910_40108 = G__40119;
continue;
}
} else {
var G__40120 = seq__39904_40105;
var G__40121 = chunk__39908_40106;
var G__40122 = count__39909_40107;
var G__40123 = (i__39910_40108 + (1));
seq__39904_40105 = G__40120;
chunk__39908_40106 = G__40121;
count__39909_40107 = G__40122;
i__39910_40108 = G__40123;
continue;
}
} else {
var temp__5735__auto___40124__$1 = cljs.core.seq(seq__39904_40105);
if(temp__5735__auto___40124__$1){
var seq__39904_40125__$1 = temp__5735__auto___40124__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39904_40125__$1)){
var c__4556__auto___40126 = cljs.core.chunk_first(seq__39904_40125__$1);
var G__40127 = cljs.core.chunk_rest(seq__39904_40125__$1);
var G__40128 = c__4556__auto___40126;
var G__40129 = cljs.core.count(c__4556__auto___40126);
var G__40130 = (0);
seq__39904_40105 = G__40127;
chunk__39908_40106 = G__40128;
count__39909_40107 = G__40129;
i__39910_40108 = G__40130;
continue;
} else {
var node_40131 = cljs.core.first(seq__39904_40125__$1);
if(cljs.core.not(node_40131.shadow$old)){
var path_match_40132 = shadow.cljs.devtools.client.browser.match_paths(node_40131.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40132)){
var new_link_40133 = (function (){var G__39920 = node_40131.cloneNode(true);
G__39920.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40132),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39920;
})();
(node_40131.shadow$old = true);

(new_link_40133.onload = ((function (seq__39904_40105,chunk__39908_40106,count__39909_40107,i__39910_40108,seq__39840,chunk__39842,count__39843,i__39844,new_link_40133,path_match_40132,node_40131,seq__39904_40125__$1,temp__5735__auto___40124__$1,path,seq__39840__$1,temp__5735__auto__,map__39838,map__39838__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40131);
});})(seq__39904_40105,chunk__39908_40106,count__39909_40107,i__39910_40108,seq__39840,chunk__39842,count__39843,i__39844,new_link_40133,path_match_40132,node_40131,seq__39904_40125__$1,temp__5735__auto___40124__$1,path,seq__39840__$1,temp__5735__auto__,map__39838,map__39838__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40132], 0));

goog.dom.insertSiblingAfter(new_link_40133,node_40131);


var G__40134 = cljs.core.next(seq__39904_40125__$1);
var G__40135 = null;
var G__40136 = (0);
var G__40137 = (0);
seq__39904_40105 = G__40134;
chunk__39908_40106 = G__40135;
count__39909_40107 = G__40136;
i__39910_40108 = G__40137;
continue;
} else {
var G__40138 = cljs.core.next(seq__39904_40125__$1);
var G__40139 = null;
var G__40140 = (0);
var G__40141 = (0);
seq__39904_40105 = G__40138;
chunk__39908_40106 = G__40139;
count__39909_40107 = G__40140;
i__39910_40108 = G__40141;
continue;
}
} else {
var G__40142 = cljs.core.next(seq__39904_40125__$1);
var G__40143 = null;
var G__40144 = (0);
var G__40145 = (0);
seq__39904_40105 = G__40142;
chunk__39908_40106 = G__40143;
count__39909_40107 = G__40144;
i__39910_40108 = G__40145;
continue;
}
}
} else {
}
}
break;
}


var G__40146 = cljs.core.next(seq__39840__$1);
var G__40147 = null;
var G__40148 = (0);
var G__40149 = (0);
seq__39840 = G__40146;
chunk__39842 = G__40147;
count__39843 = G__40148;
i__39844 = G__40149;
continue;
} else {
var G__40150 = cljs.core.next(seq__39840__$1);
var G__40151 = null;
var G__40152 = (0);
var G__40153 = (0);
seq__39840 = G__40150;
chunk__39842 = G__40151;
count__39843 = G__40152;
i__39844 = G__40153;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39921){
var map__39922 = p__39921;
var map__39922__$1 = (((((!((map__39922 == null))))?(((((map__39922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39922):map__39922);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39922__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39924){
var map__39925 = p__39924;
var map__39925__$1 = (((((!((map__39925 == null))))?(((((map__39925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39925):map__39925);
var _ = map__39925__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39925__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39927,done,error){
var map__39928 = p__39927;
var map__39928__$1 = (((((!((map__39928 == null))))?(((((map__39928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39928):map__39928);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39932,done,error){
var map__39933 = p__39932;
var map__39933__$1 = (((((!((map__39933 == null))))?(((((map__39933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39933):map__39933);
var msg = map__39933__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39935){
var map__39936 = p__39935;
var map__39936__$1 = (((((!((map__39936 == null))))?(((((map__39936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39936):map__39936);
var src = map__39936__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39936__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39942 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39942) : done.call(null,G__39942));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39943){
var map__39944 = p__39943;
var map__39944__$1 = (((((!((map__39944 == null))))?(((((map__39944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39944):map__39944);
var msg__$1 = map__39944__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39944__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39946){var ex = e39946;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39947){
var map__39952 = p__39947;
var map__39952__$1 = (((((!((map__39952 == null))))?(((((map__39952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39952):map__39952);
var env = map__39952__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39952__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39954){
var map__39955 = p__39954;
var map__39955__$1 = (((((!((map__39955 == null))))?(((((map__39955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39955):map__39955);
var msg = map__39955__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39960){
var map__39962 = p__39960;
var map__39962__$1 = (((((!((map__39962 == null))))?(((((map__39962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39962):map__39962);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39962__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39962__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39964){
var map__39965 = p__39964;
var map__39965__$1 = (((((!((map__39965 == null))))?(((((map__39965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39965):map__39965);
var svc = map__39965__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39965__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
