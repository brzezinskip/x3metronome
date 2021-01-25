goog.provide('shadow.remote.runtime.obj_support');

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
shadow.remote.runtime.obj_support.Reference = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37765,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37801 = k37765;
var G__37801__$1 = (((G__37801 instanceof cljs.core.Keyword))?G__37801.fqn:null);
switch (G__37801__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37765,else__4383__auto__);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37809){
var vec__37810 = p__37809;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37810,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37810,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.remote.runtime.obj-support.Reference{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37764){
var self__ = this;
var G__37764__$1 = this;
return (new cljs.core.RecordIter((0),G__37764__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1775716890 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37766,other37767){
var self__ = this;
var this37766__$1 = this;
return (((!((other37767 == null)))) && ((this37766__$1.constructor === other37767.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37766__$1.obj,other37767.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37766__$1.__extmap,other37767.__extmap)));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37764){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37854 = cljs.core.keyword_identical_QMARK_;
var expr__37855 = k__4388__auto__;
if(cljs.core.truth_((pred__37854.cljs$core$IFn$_invoke$arity$2 ? pred__37854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__37855) : pred__37854.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__37855)))){
return (new shadow.remote.runtime.obj_support.Reference(G__37764,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37764),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37764){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,G__37764,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.remote.runtime.obj_support.Reference.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$type = true);

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.remote.runtime.obj-support/Reference",null,(1),null));
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.remote.runtime.obj-support/Reference");
}));

/**
 * Positional factory function for shadow.remote.runtime.obj-support/Reference.
 */
shadow.remote.runtime.obj_support.__GT_Reference = (function shadow$remote$runtime$obj_support$__GT_Reference(obj){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
});

/**
 * Factory function for shadow.remote.runtime.obj-support/Reference, taking a map of keywords to field values.
 */
shadow.remote.runtime.obj_support.map__GT_Reference = (function shadow$remote$runtime$obj_support$map__GT_Reference(G__37769){
var extmap__4419__auto__ = (function (){var G__37874 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37769,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__37769)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37874);
} else {
return G__37874;
}
})();
return (new shadow.remote.runtime.obj_support.Reference(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__37769),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.remote.runtime.obj_support.obj_ref = (function shadow$remote$runtime$obj_support$obj_ref(obj){
if((!((obj == null)))){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_ref_QMARK_ = (function shadow$remote$runtime$obj_support$obj_ref_QMARK_(result){
return (result instanceof shadow.remote.runtime.obj_support.Reference);
});
shadow.remote.runtime.obj_support.now = (function shadow$remote$runtime$obj_support$now(){
return Date.now();
});
shadow.remote.runtime.obj_support.next_oid = (function shadow$remote$runtime$obj_support$next_oid(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});
shadow.remote.runtime.obj_support.register_STAR_ = (function shadow$remote$runtime$obj_support$register_STAR_(state,oid,obj,obj_info){
var ts = shadow.remote.runtime.obj_support.now();
var obj_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"obj","obj",981763962),obj,new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj_info,new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts)], null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),obj_entry);
});
shadow.remote.runtime.obj_support.obj_type_string = (function shadow$remote$runtime$obj_support$obj_type_string(obj){
if((obj == null)){
return "nil";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.remote !== 'undefined') && (typeof shadow.remote.runtime !== 'undefined') && (typeof shadow.remote.runtime.obj_support !== 'undefined') && (typeof shadow.remote.runtime.obj_support.make_view !== 'undefined')){
} else {
shadow.remote.runtime.obj_support.make_view = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37886 = cljs.core.get_global_hierarchy;
return (fexpr__37886.cljs$core$IFn$_invoke$arity$0 ? fexpr__37886.cljs$core$IFn$_invoke$arity$0() : fexpr__37886.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shadow.remote.runtime.obj-support","make-view"),(function (state_ref,p__37887,entry){
var map__37888 = p__37887;
var map__37888__$1 = (((((!((map__37888 == null))))?(((((map__37888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37888):map__37888);
var msg = map__37888__$1;
var view_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37888__$1,new cljs.core.Keyword(null,"view-type","view-type",-1848894559));
return view_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
shadow.remote.runtime.obj_support.default_max_print_size = (((1) * (1024)) * (1024));
shadow.remote.runtime.obj_support.as_edn = (function shadow$remote$runtime$obj_support$as_edn(data,p__37897){
var map__37898 = p__37897;
var map__37898__$1 = (((((!((map__37898 == null))))?(((((map__37898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37898):map__37898);
var msg = map__37898__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37898__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.core.pr_writer(data,lw,cljs.core.pr_opts());

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.as_pprint = (function shadow$remote$runtime$obj_support$as_pprint(data,p__37900){
var map__37901 = p__37900;
var map__37901__$1 = (((((!((map__37901 == null))))?(((((map__37901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37901):map__37901);
var msg = map__37901__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37901__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(data,lw);

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.as_edn_limit = (function shadow$remote$runtime$obj_support$as_edn_limit(data,p__37913){
var map__37919 = p__37913;
var map__37919__$1 = (((((!((map__37919 == null))))?(((((map__37919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37919):map__37919);
var msg = map__37919__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37919__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return shadow.remote.runtime.writer.pr_str_limit(data,limit);
});
shadow.remote.runtime.obj_support.as_str = (function shadow$remote$runtime$obj_support$as_str(data,msg){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(data);
});
shadow.remote.runtime.obj_support.as_ex_str = (function shadow$remote$runtime$obj_support$as_ex_str(ex,msg){
return cljs.repl.error__GT_str(ex);
});
shadow.remote.runtime.obj_support.exception_QMARK_ = (function shadow$remote$runtime$obj_support$exception_QMARK_(x){
return (x instanceof Error);
});
shadow.remote.runtime.obj_support.attempt_to_sort = (function shadow$remote$runtime$obj_support$attempt_to_sort(desc,coll){
try{return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"sorted","sorted",-896746253)], null),true);
}catch (e37932){var e = e37932;
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(coll)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"sorted","sorted",-896746253)], null),false);
}});
shadow.remote.runtime.obj_support.browseable_kv = (function shadow$remote$runtime$obj_support$browseable_kv(p__37942){
var map__37944 = p__37942;
var map__37944__$1 = (((((!((map__37944 == null))))?(((((map__37944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37944):map__37944);
var desc = map__37944__$1;
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__37956){
var map__37957 = p__37956;
var map__37957__$1 = (((((!((map__37957 == null))))?(((((map__37957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37957):map__37957);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
var nav = clojure.datafy.nav(data,key,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__37970){
var map__37972 = p__37970;
var map__37972__$1 = (((((!((map__37972 == null))))?(((((map__37972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37972):map__37972);
var msg = map__37972__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var key_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37972__$1,new cljs.core.Keyword(null,"key-limit","key-limit",259239169),(100));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37972__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4217__auto__ = cljs.core.count(view_order);
var y__4218__auto__ = (start + num);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(key,key_limit);
}catch (e37981){var e = e37981;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})(),new cljs.core.Keyword(null,"val","val",128701612),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(val,val_limit);
}catch (e37982){var e = e37982;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})()], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.browseable_vec = (function shadow$remote$runtime$obj_support$browseable_vec(p__37985){
var map__37987 = p__37985;
var map__37987__$1 = (((((!((map__37987 == null))))?(((((map__37987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37987):map__37987);
var desc = map__37987__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__37991){
var map__37992 = p__37991;
var map__37992__$1 = (((((!((map__37992 == null))))?(((((map__37992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37992):map__37992);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37992__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__37996){
var map__37997 = p__37996;
var map__37997__$1 = (((((!((map__37997 == null))))?(((((map__37997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37997):map__37997);
var msg = map__37997__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37997__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4217__auto__ = cljs.core.count(data);
var y__4218__auto__ = (start + num);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.browseable_seq = (function shadow$remote$runtime$obj_support$browseable_seq(p__38009){
var map__38012 = p__38009;
var map__38012__$1 = (((((!((map__38012 == null))))?(((((map__38012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38012):map__38012);
var desc = map__38012__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38012__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38012__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__38025){
var map__38026 = p__38025;
var map__38026__$1 = (((((!((map__38026 == null))))?(((((map__38026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38026):map__38026);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38026__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__38055){
var map__38060 = p__38055;
var map__38060__$1 = (((((!((map__38060 == null))))?(((((map__38060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38060):map__38060);
var msg = map__38060__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38060__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4217__auto__ = cljs.core.count(view_order);
var y__4218__auto__ = (start + num);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.pageable_seq = (function shadow$remote$runtime$obj_support$pageable_seq(p__38108){
var map__38114 = p__38108;
var map__38114__$1 = (((((!((map__38114 == null))))?(((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38114):map__38114);
var desc = map__38114__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38114__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var seq_state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tail","tail",-1146023564),data,new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.PersistentVector.EMPTY], null));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"seq-state-ref","seq-state-ref",869825254),seq_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__38127){
var map__38129 = p__38127;
var map__38129__$1 = (((((!((map__38129 == null))))?(((((map__38129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38129):map__38129);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38129__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"realized","realized",-153188123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seq_state_ref)),idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"chunk","chunk",-1191159620)], null),(function (p__38135){
var map__38136 = p__38135;
var map__38136__$1 = (((((!((map__38136 == null))))?(((((map__38136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38136):map__38136);
var msg = map__38136__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38136__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var map__38153 = cljs.core.deref(seq_state_ref);
var map__38153__$1 = (((((!((map__38153 == null))))?(((((map__38153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38153):map__38153);
var seq_state = map__38153__$1;
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38153__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var realized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38153__$1,new cljs.core.Keyword(null,"realized","realized",-153188123));
var end = (start + num);
var missing = (end - cljs.core.count(realized));
var vec__38154 = (function (){var tail__$1 = tail;
var realized__$1 = realized;
var missing__$1 = missing;
while(true){
if((!((missing__$1 > (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail__$1,realized__$1], null);
} else {
var next = cljs.core.first(tail__$1);
if((next == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,realized__$1], null);
} else {
var G__38661 = cljs.core.rest(tail__$1);
var G__38662 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(realized__$1,next);
var G__38663 = (missing__$1 - (1));
tail__$1 = G__38661;
realized__$1 = G__38662;
missing__$1 = G__38663;
continue;
}
}
break;
}
})();
var tail__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38154,(0),null);
var realized__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38154,(1),null);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(function (){var x__4217__auto__ = end;
var y__4218__auto__ = cljs.core.count(realized__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(realized__$1,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seq_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"realized","realized",-153188123),realized__$1], 0));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.count(realized__$1),new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment,new cljs.core.Keyword(null,"more?","more?",519437444),(((cljs.core.count(realized__$1) > end)) || ((!((tail__$1 == null)))))], null);
}));
});
shadow.remote.runtime.obj_support.inspect_basic = (function shadow$remote$runtime$obj_support$inspect_basic(p__38176,obj,opts){
var map__38177 = p__38176;
var map__38177__$1 = (((((!((map__38177 == null))))?(((((map__38177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38177):map__38177);
var desc = map__38177__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38177__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if((data == null)){
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"nil","nil",99600501));
} else {
if(typeof data === 'string'){
return cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"length","length",588987862),((data).length)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(cljs.core.boolean_QMARK_(data)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(typeof data === 'number'){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if((data instanceof cljs.core.Keyword)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if((data instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(cljs.core.map_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_kv(shadow.remote.runtime.obj_support.attempt_to_sort(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),cljs.core.keys(data)));
} else {
if(cljs.core.vector_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_vec(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)));
} else {
if(cljs.core.set_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_seq(shadow.remote.runtime.obj_support.attempt_to_sort(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),data));
} else {
if(cljs.core.list_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_seq(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(data)));
} else {
if(cljs.core.seq_QMARK_(data)){
return shadow.remote.runtime.obj_support.pageable_seq(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"lazy-seq","lazy-seq",-1150898621)], null)));
} else {
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016));

}
}
}
}
}
}
}
}
}
}
}
});
shadow.remote.runtime.obj_support.inspect_type_info = (function shadow$remote$runtime$obj_support$inspect_type_info(desc,obj,opts){
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"obj-type","obj-type",-1658555496)], null),shadow.remote.runtime.obj_support.obj_type_string(obj));
});
shadow.remote.runtime.obj_support.inspect_source_info = (function shadow$remote$runtime$obj_support$inspect_source_info(desc,obj,opts){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"label","label",1718410804)], null)));
});
shadow.remote.runtime.obj_support.add_summary_op = (function shadow$remote$runtime$obj_support$add_summary_op(p__38233){
var map__38235 = p__38233;
var map__38235__$1 = (((((!((map__38235 == null))))?(((((map__38235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38235):map__38235);
var desc = map__38235__$1;
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (msg){
return summary;
}));
});
shadow.remote.runtime.obj_support.default_describe = (function shadow$remote$runtime$obj_support$default_describe(o,opts){
var data = clojure.datafy.datafy(o);
return shadow.remote.runtime.obj_support.add_summary_op(shadow.remote.runtime.obj_support.inspect_source_info(shadow.remote.runtime.obj_support.inspect_type_info(shadow.remote.runtime.obj_support.inspect_basic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),new cljs.core.Keyword(null,"added-at","added-at",-352499434).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"datafied","datafied",2076148104),(!((data === o)))], null),new cljs.core.Keyword(null,"handlers","handlers",79528781),(function (){var G__38264 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"str","str",1089608819),(function (p1__38257_SHARP_){
return shadow.remote.runtime.obj_support.as_str(o,p1__38257_SHARP_);
}),new cljs.core.Keyword(null,"edn","edn",1317840885),(function (p1__38258_SHARP_){
return shadow.remote.runtime.obj_support.as_edn(o,p1__38258_SHARP_);
}),new cljs.core.Keyword(null,"edn-limit","edn-limit",1353115803),(function (p1__38259_SHARP_){
return shadow.remote.runtime.obj_support.as_edn_limit(o,p1__38259_SHARP_);
})], null);
var G__38264__$1 = ((((cljs.core.coll_QMARK_(o)) || (cljs.core.seq_QMARK_(o))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38264,new cljs.core.Keyword(null,"pprint","pprint",1220198395),(function (p1__38260_SHARP_){
return shadow.remote.runtime.obj_support.as_pprint(o,p1__38260_SHARP_);
})):G__38264);
if(shadow.remote.runtime.obj_support.exception_QMARK_(o)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38264__$1,new cljs.core.Keyword(null,"ex-str","ex-str",971148789),(function (p1__38262_SHARP_){
return shadow.remote.runtime.obj_support.as_ex_str(o,p1__38262_SHARP_);
}));
} else {
return G__38264__$1;
}
})()], null),o,opts),o,opts),o,opts));
});
goog.object.set(shadow.remote.runtime.api.Inspectable,"_",true);

goog.object.set(shadow.remote.runtime.api.describe,"_",(function (o,opts){
return shadow.remote.runtime.obj_support.default_describe(o,opts);
}));

goog.object.set(shadow.remote.runtime.api.Inspectable,"null",true);

goog.object.set(shadow.remote.runtime.api.describe,"null",(function (o,opts){
return shadow.remote.runtime.obj_support.default_describe(o,opts);
}));
shadow.remote.runtime.obj_support.add_supports = (function shadow$remote$runtime$obj_support$add_supports(p__38279){
var map__38285 = p__38279;
var map__38285__$1 = (((((!((map__38285 == null))))?(((((map__38285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38285):map__38285);
var desc = map__38285__$1;
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38285__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"supports","supports",1501242067)], null),cljs.core.set(cljs.core.keys(handlers)));
});
shadow.remote.runtime.obj_support.ensure_descriptor = (function shadow$remote$runtime$obj_support$ensure_descriptor(p__38296){
var map__38297 = p__38296;
var map__38297__$1 = (((((!((map__38297 == null))))?(((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38297):map__38297);
var entry = map__38297__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var obj_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if(cljs.core.truth_(desc)){
return entry;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"desc","desc",2093485764),shadow.remote.runtime.obj_support.add_supports(shadow.remote.runtime.api.describe(obj,obj_info)));
}
});
shadow.remote.runtime.obj_support.get_tap_history = (function shadow$remote$runtime$obj_support$get_tap_history(p__38304,num){
var map__38305 = p__38304;
var map__38305__$1 = (((((!((map__38305 == null))))?(((((map__38305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38305):map__38305);
var svc = map__38305__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__38301_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38301_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38300_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38300_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
});
shadow.remote.runtime.obj_support.obj_describe_STAR_ = (function shadow$remote$runtime$obj_support$obj_describe_STAR_(p__38314,oid){
var map__38316 = p__38314;
var map__38316__$1 = (((((!((map__38316 == null))))?(((((map__38316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38316):map__38316);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38316__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),shadow.remote.runtime.obj_support.ensure_descriptor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var summary = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"summary","summary",380847952)], null));
return summary;
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_describe = (function shadow$remote$runtime$obj_support$obj_describe(p__38321,p__38322){
var map__38324 = p__38321;
var map__38324__$1 = (((((!((map__38324 == null))))?(((((map__38324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38324):map__38324);
var svc = map__38324__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38325 = p__38322;
var map__38325__$1 = (((((!((map__38325 == null))))?(((((map__38325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38325):map__38325);
var msg = map__38325__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38325__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var temp__5733__auto__ = shadow.remote.runtime.obj_support.obj_describe_STAR_(svc,oid);
if(cljs.core.truth_(temp__5733__auto__)){
var summary = temp__5733__auto__;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-summary","obj-summary",-1372191064),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),summary], null));
} else {
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}
});
shadow.remote.runtime.obj_support.obj_request = (function shadow$remote$runtime$obj_support$obj_request(p__38340,p__38341){
var map__38343 = p__38340;
var map__38343__$1 = (((((!((map__38343 == null))))?(((((map__38343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38343):map__38343);
var this$ = map__38343__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38343__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38343__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38344 = p__38341;
var map__38344__$1 = (((((!((map__38344 == null))))?(((((map__38344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38344):map__38344);
var msg = map__38344__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38344__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var request_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38344__$1,new cljs.core.Keyword(null,"request-op","request-op",1472997246));
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),shadow.remote.runtime.obj_support.ensure_descriptor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null));
var request_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"handlers","handlers",79528781),request_op], null));
if(cljs.core.not(request_fn)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-not-supported","obj-request-not-supported",93907126),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"request-op","request-op",1472997246),request_op], null));
} else {
try{var result = (request_fn.cljs$core$IFn$_invoke$arity$1 ? request_fn.cljs$core$IFn$_invoke$arity$1(msg) : request_fn.call(null,msg));
if((!(shadow.remote.runtime.obj_support.obj_ref_QMARK_(result)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result","obj-result",-486300152),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"result","result",1415092211),result], null));
} else {
var new_oid = shadow.remote.runtime.obj_support.next_oid();
var ts = shadow.remote.runtime.obj_support.now();
var new_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),new_oid,new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts,new cljs.core.Keyword(null,"added-via","added-via",1525812109),oid], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new_oid], null),new_entry);

var reply_msg = (function (){var G__38363 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result-ref","obj-result-ref",1537374891),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),new_oid], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(msg))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38363,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(this$,new_oid));
} else {
return G__38363;
}
})();
return shadow.remote.runtime.shared.reply(runtime,msg,reply_msg);
}
}catch (e38354){var e = e38354;
console.warn("action-request-action failed",new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(entry),e);

return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-failed","obj-request-failed",-1782005406),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),(function (){var G__38355 = this$;
var G__38356 = e;
var G__38357 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return (shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3 ? shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3(G__38355,G__38356,G__38357) : shadow.remote.runtime.obj_support.register.call(null,G__38355,G__38356,G__38357));
})()], null));
}}
}
});
shadow.remote.runtime.obj_support.obj_forget = (function shadow$remote$runtime$obj_support$obj_forget(p__38367,p__38368){
var map__38369 = p__38367;
var map__38369__$1 = (((((!((map__38369 == null))))?(((((map__38369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38369):map__38369);
var svc = map__38369__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38369__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38370 = p__38368;
var map__38370__$1 = (((((!((map__38370 == null))))?(((((map__38370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38370):map__38370);
var msg = map__38370__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38370__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oid], 0));
});
shadow.remote.runtime.obj_support.obj_forget_all = (function shadow$remote$runtime$obj_support$obj_forget_all(p__38380,msg){
var map__38381 = p__38380;
var map__38381__$1 = (((((!((map__38381 == null))))?(((((map__38381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38381):map__38381);
var svc = map__38381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY);
});
shadow.remote.runtime.obj_support.basic_gc_BANG_ = (function shadow$remote$runtime$obj_support$basic_gc_BANG_(state){
var objs_to_drop = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((100),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-at","access-at",-1487162729),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state))))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,oid){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,oid);
}),state,objs_to_drop);
});
shadow.remote.runtime.obj_support.start = (function shadow$remote$runtime$obj_support$start(runtime){
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id-seq-ref","id-seq-ref",-98357047),(0)], null));
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),state_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"obj-describe","obj-describe",-34922904),(function (p1__38387_SHARP_){
return shadow.remote.runtime.obj_support.obj_describe(svc,p1__38387_SHARP_);
}),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),(function (p1__38388_SHARP_){
return shadow.remote.runtime.obj_support.obj_request(svc,p1__38388_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget","obj-forget",2003566115),(function (p1__38389_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget(svc,p1__38389_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget-all","obj-forget-all",1418682131),(function (p1__38390_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget_all(svc,p1__38390_SHARP_);
})], null),new cljs.core.Keyword(null,"on-idle","on-idle",2044706602),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_ref,shadow.remote.runtime.obj_support.basic_gc_BANG_);
})], null));

return svc;
});
shadow.remote.runtime.obj_support.register = (function shadow$remote$runtime$obj_support$register(p__38397,obj,obj_info){
var map__38398 = p__38397;
var map__38398__$1 = (((((!((map__38398 == null))))?(((((map__38398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38398):map__38398);
var svc = map__38398__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38398__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var oid = shadow.remote.runtime.obj_support.next_oid();
if((!(((cljs.core.vector_QMARK_(obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow.remote","wrap","shadow.remote/wrap",996267199),cljs.core.first(obj))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(obj),(3))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(2))], 0))], 0));
}

return oid;
});
shadow.remote.runtime.obj_support.get_ref = (function shadow$remote$runtime$obj_support$get_ref(p__38405,obj_id){
var map__38408 = p__38405;
var map__38408__$1 = (((((!((map__38408 == null))))?(((((map__38408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38408):map__38408);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj_id], null));
});
shadow.remote.runtime.obj_support.stop = (function shadow$remote$runtime$obj_support$stop(p__38414){
var map__38415 = p__38414;
var map__38415__$1 = (((((!((map__38415 == null))))?(((((map__38415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38415):map__38415);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38415__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346));
});

//# sourceMappingURL=shadow.remote.runtime.obj_support.js.map
