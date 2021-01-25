goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37392){
var map__37393 = p__37392;
var map__37393__$1 = (((((!((map__37393 == null))))?(((((map__37393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37393):map__37393);
var m = map__37393__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37393__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37393__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37403_37734 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37404_37735 = null;
var count__37405_37736 = (0);
var i__37406_37737 = (0);
while(true){
if((i__37406_37737 < count__37405_37736)){
var f_37738 = chunk__37404_37735.cljs$core$IIndexed$_nth$arity$2(null,i__37406_37737);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37738], 0));


var G__37739 = seq__37403_37734;
var G__37740 = chunk__37404_37735;
var G__37741 = count__37405_37736;
var G__37742 = (i__37406_37737 + (1));
seq__37403_37734 = G__37739;
chunk__37404_37735 = G__37740;
count__37405_37736 = G__37741;
i__37406_37737 = G__37742;
continue;
} else {
var temp__5735__auto___37743 = cljs.core.seq(seq__37403_37734);
if(temp__5735__auto___37743){
var seq__37403_37745__$1 = temp__5735__auto___37743;
if(cljs.core.chunked_seq_QMARK_(seq__37403_37745__$1)){
var c__4556__auto___37746 = cljs.core.chunk_first(seq__37403_37745__$1);
var G__37747 = cljs.core.chunk_rest(seq__37403_37745__$1);
var G__37748 = c__4556__auto___37746;
var G__37749 = cljs.core.count(c__4556__auto___37746);
var G__37750 = (0);
seq__37403_37734 = G__37747;
chunk__37404_37735 = G__37748;
count__37405_37736 = G__37749;
i__37406_37737 = G__37750;
continue;
} else {
var f_37753 = cljs.core.first(seq__37403_37745__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37753], 0));


var G__37754 = cljs.core.next(seq__37403_37745__$1);
var G__37755 = null;
var G__37756 = (0);
var G__37757 = (0);
seq__37403_37734 = G__37754;
chunk__37404_37735 = G__37755;
count__37405_37736 = G__37756;
i__37406_37737 = G__37757;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37761 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37761], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37761)))?cljs.core.second(arglists_37761):arglists_37761)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37421_37770 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37422_37771 = null;
var count__37423_37772 = (0);
var i__37424_37773 = (0);
while(true){
if((i__37424_37773 < count__37423_37772)){
var vec__37442_37774 = chunk__37422_37771.cljs$core$IIndexed$_nth$arity$2(null,i__37424_37773);
var name_37775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442_37774,(0),null);
var map__37445_37776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442_37774,(1),null);
var map__37445_37777__$1 = (((((!((map__37445_37776 == null))))?(((((map__37445_37776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37445_37776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37445_37776):map__37445_37776);
var doc_37778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445_37777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37445_37777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37775], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37779], 0));

if(cljs.core.truth_(doc_37778)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37778], 0));
} else {
}


var G__37780 = seq__37421_37770;
var G__37781 = chunk__37422_37771;
var G__37782 = count__37423_37772;
var G__37783 = (i__37424_37773 + (1));
seq__37421_37770 = G__37780;
chunk__37422_37771 = G__37781;
count__37423_37772 = G__37782;
i__37424_37773 = G__37783;
continue;
} else {
var temp__5735__auto___37787 = cljs.core.seq(seq__37421_37770);
if(temp__5735__auto___37787){
var seq__37421_37789__$1 = temp__5735__auto___37787;
if(cljs.core.chunked_seq_QMARK_(seq__37421_37789__$1)){
var c__4556__auto___37790 = cljs.core.chunk_first(seq__37421_37789__$1);
var G__37791 = cljs.core.chunk_rest(seq__37421_37789__$1);
var G__37792 = c__4556__auto___37790;
var G__37793 = cljs.core.count(c__4556__auto___37790);
var G__37794 = (0);
seq__37421_37770 = G__37791;
chunk__37422_37771 = G__37792;
count__37423_37772 = G__37793;
i__37424_37773 = G__37794;
continue;
} else {
var vec__37447_37795 = cljs.core.first(seq__37421_37789__$1);
var name_37796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37447_37795,(0),null);
var map__37450_37797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37447_37795,(1),null);
var map__37450_37798__$1 = (((((!((map__37450_37797 == null))))?(((((map__37450_37797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37450_37797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37450_37797):map__37450_37797);
var doc_37799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450_37798__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450_37798__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37796], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37800], 0));

if(cljs.core.truth_(doc_37799)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37799], 0));
} else {
}


var G__37803 = cljs.core.next(seq__37421_37789__$1);
var G__37804 = null;
var G__37805 = (0);
var G__37806 = (0);
seq__37421_37770 = G__37803;
chunk__37422_37771 = G__37804;
count__37423_37772 = G__37805;
i__37424_37773 = G__37806;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37454 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37455 = null;
var count__37456 = (0);
var i__37457 = (0);
while(true){
if((i__37457 < count__37456)){
var role = chunk__37455.cljs$core$IIndexed$_nth$arity$2(null,i__37457);
var temp__5735__auto___37813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37813__$1)){
var spec_37814 = temp__5735__auto___37813__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37814)], 0));
} else {
}


var G__37817 = seq__37454;
var G__37818 = chunk__37455;
var G__37819 = count__37456;
var G__37820 = (i__37457 + (1));
seq__37454 = G__37817;
chunk__37455 = G__37818;
count__37456 = G__37819;
i__37457 = G__37820;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37454);
if(temp__5735__auto____$1){
var seq__37454__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37454__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37454__$1);
var G__37825 = cljs.core.chunk_rest(seq__37454__$1);
var G__37826 = c__4556__auto__;
var G__37827 = cljs.core.count(c__4556__auto__);
var G__37828 = (0);
seq__37454 = G__37825;
chunk__37455 = G__37826;
count__37456 = G__37827;
i__37457 = G__37828;
continue;
} else {
var role = cljs.core.first(seq__37454__$1);
var temp__5735__auto___37831__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37831__$2)){
var spec_37833 = temp__5735__auto___37831__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37833)], 0));
} else {
}


var G__37834 = cljs.core.next(seq__37454__$1);
var G__37835 = null;
var G__37836 = (0);
var G__37837 = (0);
seq__37454 = G__37834;
chunk__37455 = G__37835;
count__37456 = G__37836;
i__37457 = G__37837;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37843 = cljs.core.ex_cause(t);
via = G__37842;
t = G__37843;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37498 = datafied_throwable;
var map__37498__$1 = (((((!((map__37498 == null))))?(((((map__37498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37498):map__37498);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37498__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37498__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37498__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37499 = cljs.core.last(via);
var map__37499__$1 = (((((!((map__37499 == null))))?(((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37499):map__37499);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37500 = data;
var map__37500__$1 = (((((!((map__37500 == null))))?(((((map__37500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37500):map__37500);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37500__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37501 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37501__$1 = (((((!((map__37501 == null))))?(((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37501):map__37501);
var top_data = map__37501__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37532 = phase;
var G__37532__$1 = (((G__37532 instanceof cljs.core.Keyword))?G__37532.fqn:null);
switch (G__37532__$1) {
case "read-source":
var map__37534 = data;
var map__37534__$1 = (((((!((map__37534 == null))))?(((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37534):map__37534);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37552 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37552__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37552,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37552);
var G__37552__$2 = (cljs.core.truth_((function (){var fexpr__37553 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37553.cljs$core$IFn$_invoke$arity$1 ? fexpr__37553.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37553.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37552__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37552__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37552__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37561 = top_data;
var G__37561__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37561,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37561);
var G__37561__$2 = (cljs.core.truth_((function (){var fexpr__37568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37568.cljs$core$IFn$_invoke$arity$1 ? fexpr__37568.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37568.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37561__$1);
var G__37561__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37561__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37561__$2);
var G__37561__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37561__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37561__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37561__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37561__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37580 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(3),null);
var G__37583 = top_data;
var G__37583__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37583,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37583);
var G__37583__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37583__$1);
var G__37583__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37583__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37583__$2);
var G__37583__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37583__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37583__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37583__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37583__$4;
}

break;
case "execution":
var vec__37598 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37496_SHARP_){
var or__4126__auto__ = (p1__37496_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37616.cljs$core$IFn$_invoke$arity$1 ? fexpr__37616.cljs$core$IFn$_invoke$arity$1(p1__37496_SHARP_) : fexpr__37616.call(null,p1__37496_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37617 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37617__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37617,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37617);
var G__37617__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37617__$1);
var G__37617__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37617__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37617__$2);
var G__37617__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37617__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37617__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37532__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37641){
var map__37644 = p__37641;
var map__37644__$1 = (((((!((map__37644 == null))))?(((((map__37644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37644):map__37644);
var triage_data = map__37644__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37673 = phase;
var G__37673__$1 = (((G__37673 instanceof cljs.core.Keyword))?G__37673.fqn:null);
switch (G__37673__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37679 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37680 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37681 = loc;
var G__37682 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37684_37893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37685_37894 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37686_37895 = true;
var _STAR_print_fn_STAR__temp_val__37687_37896 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37686_37895);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37687_37896);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37633_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37633_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37685_37894);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37684_37893);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37679,G__37680,G__37681,G__37682) : format.call(null,G__37679,G__37680,G__37681,G__37682));

break;
case "macroexpansion":
var G__37690 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37691 = cause_type;
var G__37692 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37693 = loc;
var G__37694 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37690,G__37691,G__37692,G__37693,G__37694) : format.call(null,G__37690,G__37691,G__37692,G__37693,G__37694));

break;
case "compile-syntax-check":
var G__37696 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37697 = cause_type;
var G__37698 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37699 = loc;
var G__37700 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37696,G__37697,G__37698,G__37699,G__37700) : format.call(null,G__37696,G__37697,G__37698,G__37699,G__37700));

break;
case "compilation":
var G__37701 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37702 = cause_type;
var G__37703 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37704 = loc;
var G__37705 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37701,G__37702,G__37703,G__37704,G__37705) : format.call(null,G__37701,G__37702,G__37703,G__37704,G__37705));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37707 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37709 = symbol;
var G__37710 = loc;
var G__37711 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37718_37914 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37719_37915 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37720_37916 = true;
var _STAR_print_fn_STAR__temp_val__37721_37917 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37720_37916);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37721_37917);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37635_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37635_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37719_37915);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37718_37914);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37707,G__37709,G__37710,G__37711) : format.call(null,G__37707,G__37709,G__37710,G__37711));
} else {
var G__37723 = "Execution error%s at %s(%s).\n%s\n";
var G__37724 = cause_type;
var G__37725 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37726 = loc;
var G__37727 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37723,G__37724,G__37725,G__37726,G__37727) : format.call(null,G__37723,G__37724,G__37725,G__37726,G__37727));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37673__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
