goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34283 = arguments.length;
switch (G__34283) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34286 = (function (f,blockable,meta34287){
this.f = f;
this.blockable = blockable;
this.meta34287 = meta34287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34288,meta34287__$1){
var self__ = this;
var _34288__$1 = this;
return (new cljs.core.async.t_cljs$core$async34286(self__.f,self__.blockable,meta34287__$1));
}));

(cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34288){
var self__ = this;
var _34288__$1 = this;
return self__.meta34287;
}));

(cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34287","meta34287",-115529597,null)], null);
}));

(cljs.core.async.t_cljs$core$async34286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34286");

(cljs.core.async.t_cljs$core$async34286.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34286.
 */
cljs.core.async.__GT_t_cljs$core$async34286 = (function cljs$core$async$__GT_t_cljs$core$async34286(f__$1,blockable__$1,meta34287){
return (new cljs.core.async.t_cljs$core$async34286(f__$1,blockable__$1,meta34287));
});

}

return (new cljs.core.async.t_cljs$core$async34286(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34319 = arguments.length;
switch (G__34319) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34329 = arguments.length;
switch (G__34329) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34336 = arguments.length;
switch (G__34336) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36732 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36732) : fn1.call(null,val_36732));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36732) : fn1.call(null,val_36732));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34338 = arguments.length;
switch (G__34338) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___36750 = n;
var x_36751 = (0);
while(true){
if((x_36751 < n__4613__auto___36750)){
(a[x_36751] = x_36751);

var G__36753 = (x_36751 + (1));
x_36751 = G__36753;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34342 = (function (flag,meta34343){
this.flag = flag;
this.meta34343 = meta34343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34344,meta34343__$1){
var self__ = this;
var _34344__$1 = this;
return (new cljs.core.async.t_cljs$core$async34342(self__.flag,meta34343__$1));
}));

(cljs.core.async.t_cljs$core$async34342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34344){
var self__ = this;
var _34344__$1 = this;
return self__.meta34343;
}));

(cljs.core.async.t_cljs$core$async34342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34343","meta34343",556468415,null)], null);
}));

(cljs.core.async.t_cljs$core$async34342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34342");

(cljs.core.async.t_cljs$core$async34342.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34342.
 */
cljs.core.async.__GT_t_cljs$core$async34342 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34342(flag__$1,meta34343){
return (new cljs.core.async.t_cljs$core$async34342(flag__$1,meta34343));
});

}

return (new cljs.core.async.t_cljs$core$async34342(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34362 = (function (flag,cb,meta34363){
this.flag = flag;
this.cb = cb;
this.meta34363 = meta34363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34364,meta34363__$1){
var self__ = this;
var _34364__$1 = this;
return (new cljs.core.async.t_cljs$core$async34362(self__.flag,self__.cb,meta34363__$1));
}));

(cljs.core.async.t_cljs$core$async34362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34364){
var self__ = this;
var _34364__$1 = this;
return self__.meta34363;
}));

(cljs.core.async.t_cljs$core$async34362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34363","meta34363",-1647661318,null)], null);
}));

(cljs.core.async.t_cljs$core$async34362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34362");

(cljs.core.async.t_cljs$core$async34362.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34362.
 */
cljs.core.async.__GT_t_cljs$core$async34362 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34362(flag__$1,cb__$1,meta34363){
return (new cljs.core.async.t_cljs$core$async34362(flag__$1,cb__$1,meta34363));
});

}

return (new cljs.core.async.t_cljs$core$async34362(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34399_SHARP_){
var G__34404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34399_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34404) : fret.call(null,G__34404));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34401_SHARP_){
var G__34405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34401_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34405) : fret.call(null,G__34405));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36757 = (i + (1));
i = G__36757;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36760 = arguments.length;
var i__4737__auto___36761 = (0);
while(true){
if((i__4737__auto___36761 < len__4736__auto___36760)){
args__4742__auto__.push((arguments[i__4737__auto___36761]));

var G__36762 = (i__4737__auto___36761 + (1));
i__4737__auto___36761 = G__36762;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34416){
var map__34417 = p__34416;
var map__34417__$1 = (((((!((map__34417 == null))))?(((((map__34417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34417):map__34417);
var opts = map__34417__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34413){
var G__34414 = cljs.core.first(seq34413);
var seq34413__$1 = cljs.core.next(seq34413);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34414,seq34413__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34429 = arguments.length;
switch (G__34429) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34188__auto___36767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_34454){
var state_val_34455 = (state_34454[(1)]);
if((state_val_34455 === (7))){
var inst_34450 = (state_34454[(2)]);
var state_34454__$1 = state_34454;
var statearr_34458_36778 = state_34454__$1;
(statearr_34458_36778[(2)] = inst_34450);

(statearr_34458_36778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (1))){
var state_34454__$1 = state_34454;
var statearr_34459_36779 = state_34454__$1;
(statearr_34459_36779[(2)] = null);

(statearr_34459_36779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (4))){
var inst_34433 = (state_34454[(7)]);
var inst_34433__$1 = (state_34454[(2)]);
var inst_34434 = (inst_34433__$1 == null);
var state_34454__$1 = (function (){var statearr_34460 = state_34454;
(statearr_34460[(7)] = inst_34433__$1);

return statearr_34460;
})();
if(cljs.core.truth_(inst_34434)){
var statearr_34461_36780 = state_34454__$1;
(statearr_34461_36780[(1)] = (5));

} else {
var statearr_34462_36781 = state_34454__$1;
(statearr_34462_36781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (13))){
var state_34454__$1 = state_34454;
var statearr_34463_36783 = state_34454__$1;
(statearr_34463_36783[(2)] = null);

(statearr_34463_36783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (6))){
var inst_34433 = (state_34454[(7)]);
var state_34454__$1 = state_34454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34454__$1,(11),to,inst_34433);
} else {
if((state_val_34455 === (3))){
var inst_34452 = (state_34454[(2)]);
var state_34454__$1 = state_34454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34454__$1,inst_34452);
} else {
if((state_val_34455 === (12))){
var state_34454__$1 = state_34454;
var statearr_34466_36786 = state_34454__$1;
(statearr_34466_36786[(2)] = null);

(statearr_34466_36786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (2))){
var state_34454__$1 = state_34454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34454__$1,(4),from);
} else {
if((state_val_34455 === (11))){
var inst_34443 = (state_34454[(2)]);
var state_34454__$1 = state_34454;
if(cljs.core.truth_(inst_34443)){
var statearr_34474_36787 = state_34454__$1;
(statearr_34474_36787[(1)] = (12));

} else {
var statearr_34475_36788 = state_34454__$1;
(statearr_34475_36788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (9))){
var state_34454__$1 = state_34454;
var statearr_34476_36789 = state_34454__$1;
(statearr_34476_36789[(2)] = null);

(statearr_34476_36789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (5))){
var state_34454__$1 = state_34454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34480_36791 = state_34454__$1;
(statearr_34480_36791[(1)] = (8));

} else {
var statearr_34481_36792 = state_34454__$1;
(statearr_34481_36792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (14))){
var inst_34448 = (state_34454[(2)]);
var state_34454__$1 = state_34454;
var statearr_34485_36794 = state_34454__$1;
(statearr_34485_36794[(2)] = inst_34448);

(statearr_34485_36794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (10))){
var inst_34440 = (state_34454[(2)]);
var state_34454__$1 = state_34454;
var statearr_34486_36795 = state_34454__$1;
(statearr_34486_36795[(2)] = inst_34440);

(statearr_34486_36795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34455 === (8))){
var inst_34437 = cljs.core.async.close_BANG_(to);
var state_34454__$1 = state_34454;
var statearr_34487_36796 = state_34454__$1;
(statearr_34487_36796[(2)] = inst_34437);

(statearr_34487_36796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_34491 = [null,null,null,null,null,null,null,null];
(statearr_34491[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_34491[(1)] = (1));

return statearr_34491;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_34454){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34454);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34492){var ex__33663__auto__ = e34492;
var statearr_34493_36798 = state_34454;
(statearr_34493_36798[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34454[(4)]))){
var statearr_34494_36799 = state_34454;
(statearr_34494_36799[(1)] = cljs.core.first((state_34454[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36801 = state_34454;
state_34454 = G__36801;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_34454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_34454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_34496 = f__34189__auto__();
(statearr_34496[(6)] = c__34188__auto___36767);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34499){
var vec__34500 = p__34499;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34500,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34500,(1),null);
var job = vec__34500;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34188__auto___36808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_34510){
var state_val_34511 = (state_34510[(1)]);
if((state_val_34511 === (1))){
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34510__$1,(2),res,v);
} else {
if((state_val_34511 === (2))){
var inst_34507 = (state_34510[(2)]);
var inst_34508 = cljs.core.async.close_BANG_(res);
var state_34510__$1 = (function (){var statearr_34512 = state_34510;
(statearr_34512[(7)] = inst_34507);

return statearr_34512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34510__$1,inst_34508);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1 = (function (state_34510){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34510);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34514){var ex__33663__auto__ = e34514;
var statearr_34515_36817 = state_34510;
(statearr_34515_36817[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34510[(4)]))){
var statearr_34516_36820 = state_34510;
(statearr_34516_36820[(1)] = cljs.core.first((state_34510[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36823 = state_34510;
state_34510 = G__36823;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = function(state_34510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1.call(this,state_34510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_34517 = f__34189__auto__();
(statearr_34517[(6)] = c__34188__auto___36808);

return statearr_34517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34521){
var vec__34522 = p__34521;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(1),null);
var job = vec__34522;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___36826 = n;
var __36827 = (0);
while(true){
if((__36827 < n__4613__auto___36826)){
var G__34526_36828 = type;
var G__34526_36829__$1 = (((G__34526_36828 instanceof cljs.core.Keyword))?G__34526_36828.fqn:null);
switch (G__34526_36829__$1) {
case "compute":
var c__34188__auto___36833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36827,c__34188__auto___36833,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async){
return (function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = ((function (__36827,c__34188__auto___36833,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async){
return (function (state_34541){
var state_val_34542 = (state_34541[(1)]);
if((state_val_34542 === (1))){
var state_34541__$1 = state_34541;
var statearr_34544_36836 = state_34541__$1;
(statearr_34544_36836[(2)] = null);

(statearr_34544_36836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (2))){
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34541__$1,(4),jobs);
} else {
if((state_val_34542 === (3))){
var inst_34539 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34541__$1,inst_34539);
} else {
if((state_val_34542 === (4))){
var inst_34530 = (state_34541[(2)]);
var inst_34532 = process(inst_34530);
var state_34541__$1 = state_34541;
if(cljs.core.truth_(inst_34532)){
var statearr_34547_36838 = state_34541__$1;
(statearr_34547_36838[(1)] = (5));

} else {
var statearr_34549_36839 = state_34541__$1;
(statearr_34549_36839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (5))){
var state_34541__$1 = state_34541;
var statearr_34551_36840 = state_34541__$1;
(statearr_34551_36840[(2)] = null);

(statearr_34551_36840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (6))){
var state_34541__$1 = state_34541;
var statearr_34552_36841 = state_34541__$1;
(statearr_34552_36841[(2)] = null);

(statearr_34552_36841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (7))){
var inst_34537 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
var statearr_34553_36842 = state_34541__$1;
(statearr_34553_36842[(2)] = inst_34537);

(statearr_34553_36842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36827,c__34188__auto___36833,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async))
;
return ((function (__36827,switch__33659__auto__,c__34188__auto___36833,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null];
(statearr_34554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1 = (function (state_34541){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34541);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34558){var ex__33663__auto__ = e34558;
var statearr_34559_36844 = state_34541;
(statearr_34559_36844[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34541[(4)]))){
var statearr_34560_36845 = state_34541;
(statearr_34560_36845[(1)] = cljs.core.first((state_34541[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36854 = state_34541;
state_34541 = G__36854;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = function(state_34541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1.call(this,state_34541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__;
})()
;})(__36827,switch__33659__auto__,c__34188__auto___36833,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async))
})();
var state__34190__auto__ = (function (){var statearr_34561 = f__34189__auto__();
(statearr_34561[(6)] = c__34188__auto___36833);

return statearr_34561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
});})(__36827,c__34188__auto___36833,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async))
);


break;
case "async":
var c__34188__auto___36855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36827,c__34188__auto___36855,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async){
return (function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = ((function (__36827,c__34188__auto___36855,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async){
return (function (state_34577){
var state_val_34578 = (state_34577[(1)]);
if((state_val_34578 === (1))){
var state_34577__$1 = state_34577;
var statearr_34588_36857 = state_34577__$1;
(statearr_34588_36857[(2)] = null);

(statearr_34588_36857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (2))){
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34577__$1,(4),jobs);
} else {
if((state_val_34578 === (3))){
var inst_34575 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34577__$1,inst_34575);
} else {
if((state_val_34578 === (4))){
var inst_34565 = (state_34577[(2)]);
var inst_34567 = async(inst_34565);
var state_34577__$1 = state_34577;
if(cljs.core.truth_(inst_34567)){
var statearr_34589_36862 = state_34577__$1;
(statearr_34589_36862[(1)] = (5));

} else {
var statearr_34590_36863 = state_34577__$1;
(statearr_34590_36863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (5))){
var state_34577__$1 = state_34577;
var statearr_34592_36873 = state_34577__$1;
(statearr_34592_36873[(2)] = null);

(statearr_34592_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (6))){
var state_34577__$1 = state_34577;
var statearr_34593_36874 = state_34577__$1;
(statearr_34593_36874[(2)] = null);

(statearr_34593_36874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (7))){
var inst_34573 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
var statearr_34594_36875 = state_34577__$1;
(statearr_34594_36875[(2)] = inst_34573);

(statearr_34594_36875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36827,c__34188__auto___36855,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async))
;
return ((function (__36827,switch__33659__auto__,c__34188__auto___36855,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0 = (function (){
var statearr_34595 = [null,null,null,null,null,null,null];
(statearr_34595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__);

(statearr_34595[(1)] = (1));

return statearr_34595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1 = (function (state_34577){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34577);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34596){var ex__33663__auto__ = e34596;
var statearr_34597_36880 = state_34577;
(statearr_34597_36880[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34577[(4)]))){
var statearr_34598_36881 = state_34577;
(statearr_34598_36881[(1)] = cljs.core.first((state_34577[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36890 = state_34577;
state_34577 = G__36890;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = function(state_34577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1.call(this,state_34577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__;
})()
;})(__36827,switch__33659__auto__,c__34188__auto___36855,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async))
})();
var state__34190__auto__ = (function (){var statearr_34600 = f__34189__auto__();
(statearr_34600[(6)] = c__34188__auto___36855);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
});})(__36827,c__34188__auto___36855,G__34526_36828,G__34526_36829__$1,n__4613__auto___36826,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34526_36829__$1)].join('')));

}

var G__36891 = (__36827 + (1));
__36827 = G__36891;
continue;
} else {
}
break;
}

var c__34188__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_34630){
var state_val_34631 = (state_34630[(1)]);
if((state_val_34631 === (7))){
var inst_34625 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34635_36893 = state_34630__$1;
(statearr_34635_36893[(2)] = inst_34625);

(statearr_34635_36893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (1))){
var state_34630__$1 = state_34630;
var statearr_34636_36895 = state_34630__$1;
(statearr_34636_36895[(2)] = null);

(statearr_34636_36895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (4))){
var inst_34607 = (state_34630[(7)]);
var inst_34607__$1 = (state_34630[(2)]);
var inst_34609 = (inst_34607__$1 == null);
var state_34630__$1 = (function (){var statearr_34647 = state_34630;
(statearr_34647[(7)] = inst_34607__$1);

return statearr_34647;
})();
if(cljs.core.truth_(inst_34609)){
var statearr_34653_36896 = state_34630__$1;
(statearr_34653_36896[(1)] = (5));

} else {
var statearr_34656_36898 = state_34630__$1;
(statearr_34656_36898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (6))){
var inst_34607 = (state_34630[(7)]);
var inst_34614 = (state_34630[(8)]);
var inst_34614__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34617 = [inst_34607,inst_34614__$1];
var inst_34618 = (new cljs.core.PersistentVector(null,2,(5),inst_34616,inst_34617,null));
var state_34630__$1 = (function (){var statearr_34667 = state_34630;
(statearr_34667[(8)] = inst_34614__$1);

return statearr_34667;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34630__$1,(8),jobs,inst_34618);
} else {
if((state_val_34631 === (3))){
var inst_34627 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34630__$1,inst_34627);
} else {
if((state_val_34631 === (2))){
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34630__$1,(4),from);
} else {
if((state_val_34631 === (9))){
var inst_34622 = (state_34630[(2)]);
var state_34630__$1 = (function (){var statearr_34672 = state_34630;
(statearr_34672[(9)] = inst_34622);

return statearr_34672;
})();
var statearr_34673_36907 = state_34630__$1;
(statearr_34673_36907[(2)] = null);

(statearr_34673_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (5))){
var inst_34612 = cljs.core.async.close_BANG_(jobs);
var state_34630__$1 = state_34630;
var statearr_34675_36908 = state_34630__$1;
(statearr_34675_36908[(2)] = inst_34612);

(statearr_34675_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (8))){
var inst_34614 = (state_34630[(8)]);
var inst_34620 = (state_34630[(2)]);
var state_34630__$1 = (function (){var statearr_34677 = state_34630;
(statearr_34677[(10)] = inst_34620);

return statearr_34677;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34630__$1,(9),results,inst_34614);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0 = (function (){
var statearr_34685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__);

(statearr_34685[(1)] = (1));

return statearr_34685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1 = (function (state_34630){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34630);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34688){var ex__33663__auto__ = e34688;
var statearr_34689_36911 = state_34630;
(statearr_34689_36911[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34630[(4)]))){
var statearr_34690_36912 = state_34630;
(statearr_34690_36912[(1)] = cljs.core.first((state_34630[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_34630;
state_34630 = G__36917;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = function(state_34630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1.call(this,state_34630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_34691 = f__34189__auto__();
(statearr_34691[(6)] = c__34188__auto___36892);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


var c__34188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_34759){
var state_val_34760 = (state_34759[(1)]);
if((state_val_34760 === (7))){
var inst_34755 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34761_36924 = state_34759__$1;
(statearr_34761_36924[(2)] = inst_34755);

(statearr_34761_36924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (20))){
var state_34759__$1 = state_34759;
var statearr_34763_36929 = state_34759__$1;
(statearr_34763_36929[(2)] = null);

(statearr_34763_36929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (1))){
var state_34759__$1 = state_34759;
var statearr_34769_36930 = state_34759__$1;
(statearr_34769_36930[(2)] = null);

(statearr_34769_36930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (4))){
var inst_34697 = (state_34759[(7)]);
var inst_34697__$1 = (state_34759[(2)]);
var inst_34702 = (inst_34697__$1 == null);
var state_34759__$1 = (function (){var statearr_34784 = state_34759;
(statearr_34784[(7)] = inst_34697__$1);

return statearr_34784;
})();
if(cljs.core.truth_(inst_34702)){
var statearr_34787_36934 = state_34759__$1;
(statearr_34787_36934[(1)] = (5));

} else {
var statearr_34792_36935 = state_34759__$1;
(statearr_34792_36935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (15))){
var inst_34727 = (state_34759[(8)]);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34759__$1,(18),to,inst_34727);
} else {
if((state_val_34760 === (21))){
var inst_34750 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34793_36939 = state_34759__$1;
(statearr_34793_36939[(2)] = inst_34750);

(statearr_34793_36939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (13))){
var inst_34752 = (state_34759[(2)]);
var state_34759__$1 = (function (){var statearr_34803 = state_34759;
(statearr_34803[(9)] = inst_34752);

return statearr_34803;
})();
var statearr_34806_36941 = state_34759__$1;
(statearr_34806_36941[(2)] = null);

(statearr_34806_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (6))){
var inst_34697 = (state_34759[(7)]);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34759__$1,(11),inst_34697);
} else {
if((state_val_34760 === (17))){
var inst_34745 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
if(cljs.core.truth_(inst_34745)){
var statearr_34822_36942 = state_34759__$1;
(statearr_34822_36942[(1)] = (19));

} else {
var statearr_34824_36948 = state_34759__$1;
(statearr_34824_36948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (3))){
var inst_34757 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34759__$1,inst_34757);
} else {
if((state_val_34760 === (12))){
var inst_34716 = (state_34759[(10)]);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34759__$1,(14),inst_34716);
} else {
if((state_val_34760 === (2))){
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34759__$1,(4),results);
} else {
if((state_val_34760 === (19))){
var state_34759__$1 = state_34759;
var statearr_34829_36959 = state_34759__$1;
(statearr_34829_36959[(2)] = null);

(statearr_34829_36959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (11))){
var inst_34716 = (state_34759[(2)]);
var state_34759__$1 = (function (){var statearr_34830 = state_34759;
(statearr_34830[(10)] = inst_34716);

return statearr_34830;
})();
var statearr_34831_36960 = state_34759__$1;
(statearr_34831_36960[(2)] = null);

(statearr_34831_36960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (9))){
var state_34759__$1 = state_34759;
var statearr_34832_36965 = state_34759__$1;
(statearr_34832_36965[(2)] = null);

(statearr_34832_36965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (5))){
var state_34759__$1 = state_34759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34835_36966 = state_34759__$1;
(statearr_34835_36966[(1)] = (8));

} else {
var statearr_34840_36967 = state_34759__$1;
(statearr_34840_36967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (14))){
var inst_34727 = (state_34759[(8)]);
var inst_34727__$1 = (state_34759[(2)]);
var inst_34738 = (inst_34727__$1 == null);
var inst_34739 = cljs.core.not(inst_34738);
var state_34759__$1 = (function (){var statearr_34843 = state_34759;
(statearr_34843[(8)] = inst_34727__$1);

return statearr_34843;
})();
if(inst_34739){
var statearr_34845_36971 = state_34759__$1;
(statearr_34845_36971[(1)] = (15));

} else {
var statearr_34846_36972 = state_34759__$1;
(statearr_34846_36972[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (16))){
var state_34759__$1 = state_34759;
var statearr_34848_36973 = state_34759__$1;
(statearr_34848_36973[(2)] = false);

(statearr_34848_36973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (10))){
var inst_34709 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34849_36979 = state_34759__$1;
(statearr_34849_36979[(2)] = inst_34709);

(statearr_34849_36979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (18))){
var inst_34742 = (state_34759[(2)]);
var state_34759__$1 = state_34759;
var statearr_34850_36980 = state_34759__$1;
(statearr_34850_36980[(2)] = inst_34742);

(statearr_34850_36980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34760 === (8))){
var inst_34706 = cljs.core.async.close_BANG_(to);
var state_34759__$1 = state_34759;
var statearr_34851_36983 = state_34759__$1;
(statearr_34851_36983[(2)] = inst_34706);

(statearr_34851_36983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0 = (function (){
var statearr_34858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__);

(statearr_34858[(1)] = (1));

return statearr_34858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1 = (function (state_34759){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34759);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34866){var ex__33663__auto__ = e34866;
var statearr_34867_36985 = state_34759;
(statearr_34867_36985[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34759[(4)]))){
var statearr_34876_36986 = state_34759;
(statearr_34876_36986[(1)] = cljs.core.first((state_34759[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_34759;
state_34759 = G__36987;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__ = function(state_34759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1.call(this,state_34759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_34887 = f__34189__auto__();
(statearr_34887[(6)] = c__34188__auto__);

return statearr_34887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));

return c__34188__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34895 = arguments.length;
switch (G__34895) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34903 = arguments.length;
switch (G__34903) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34909 = arguments.length;
switch (G__34909) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34188__auto___36994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_34937){
var state_val_34938 = (state_34937[(1)]);
if((state_val_34938 === (7))){
var inst_34933 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
var statearr_34943_36995 = state_34937__$1;
(statearr_34943_36995[(2)] = inst_34933);

(statearr_34943_36995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (1))){
var state_34937__$1 = state_34937;
var statearr_34944_37000 = state_34937__$1;
(statearr_34944_37000[(2)] = null);

(statearr_34944_37000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (4))){
var inst_34914 = (state_34937[(7)]);
var inst_34914__$1 = (state_34937[(2)]);
var inst_34915 = (inst_34914__$1 == null);
var state_34937__$1 = (function (){var statearr_34957 = state_34937;
(statearr_34957[(7)] = inst_34914__$1);

return statearr_34957;
})();
if(cljs.core.truth_(inst_34915)){
var statearr_34958_37002 = state_34937__$1;
(statearr_34958_37002[(1)] = (5));

} else {
var statearr_34968_37003 = state_34937__$1;
(statearr_34968_37003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (13))){
var state_34937__$1 = state_34937;
var statearr_34969_37004 = state_34937__$1;
(statearr_34969_37004[(2)] = null);

(statearr_34969_37004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (6))){
var inst_34914 = (state_34937[(7)]);
var inst_34920 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34914) : p.call(null,inst_34914));
var state_34937__$1 = state_34937;
if(cljs.core.truth_(inst_34920)){
var statearr_34970_37007 = state_34937__$1;
(statearr_34970_37007[(1)] = (9));

} else {
var statearr_34971_37009 = state_34937__$1;
(statearr_34971_37009[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (3))){
var inst_34935 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34937__$1,inst_34935);
} else {
if((state_val_34938 === (12))){
var state_34937__$1 = state_34937;
var statearr_34972_37011 = state_34937__$1;
(statearr_34972_37011[(2)] = null);

(statearr_34972_37011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (2))){
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34937__$1,(4),ch);
} else {
if((state_val_34938 === (11))){
var inst_34914 = (state_34937[(7)]);
var inst_34924 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34937__$1,(8),inst_34924,inst_34914);
} else {
if((state_val_34938 === (9))){
var state_34937__$1 = state_34937;
var statearr_34974_37015 = state_34937__$1;
(statearr_34974_37015[(2)] = tc);

(statearr_34974_37015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (5))){
var inst_34917 = cljs.core.async.close_BANG_(tc);
var inst_34918 = cljs.core.async.close_BANG_(fc);
var state_34937__$1 = (function (){var statearr_34975 = state_34937;
(statearr_34975[(8)] = inst_34917);

return statearr_34975;
})();
var statearr_34976_37023 = state_34937__$1;
(statearr_34976_37023[(2)] = inst_34918);

(statearr_34976_37023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (14))){
var inst_34931 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
var statearr_34977_37028 = state_34937__$1;
(statearr_34977_37028[(2)] = inst_34931);

(statearr_34977_37028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (10))){
var state_34937__$1 = state_34937;
var statearr_34978_37030 = state_34937__$1;
(statearr_34978_37030[(2)] = fc);

(statearr_34978_37030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (8))){
var inst_34926 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
if(cljs.core.truth_(inst_34926)){
var statearr_34980_37031 = state_34937__$1;
(statearr_34980_37031[(1)] = (12));

} else {
var statearr_34981_37032 = state_34937__$1;
(statearr_34981_37032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_34982 = [null,null,null,null,null,null,null,null,null];
(statearr_34982[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_34982[(1)] = (1));

return statearr_34982;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_34937){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_34937);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e34983){var ex__33663__auto__ = e34983;
var statearr_34984_37037 = state_34937;
(statearr_34984_37037[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_34937[(4)]))){
var statearr_34985_37038 = state_34937;
(statearr_34985_37038[(1)] = cljs.core.first((state_34937[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37039 = state_34937;
state_34937 = G__37039;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_34937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_34937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_34986 = f__34189__auto__();
(statearr_34986[(6)] = c__34188__auto___36994);

return statearr_34986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_35009){
var state_val_35010 = (state_35009[(1)]);
if((state_val_35010 === (7))){
var inst_35005 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35012_37050 = state_35009__$1;
(statearr_35012_37050[(2)] = inst_35005);

(statearr_35012_37050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (1))){
var inst_34988 = init;
var inst_34989 = inst_34988;
var state_35009__$1 = (function (){var statearr_35013 = state_35009;
(statearr_35013[(7)] = inst_34989);

return statearr_35013;
})();
var statearr_35014_37051 = state_35009__$1;
(statearr_35014_37051[(2)] = null);

(statearr_35014_37051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (4))){
var inst_34992 = (state_35009[(8)]);
var inst_34992__$1 = (state_35009[(2)]);
var inst_34993 = (inst_34992__$1 == null);
var state_35009__$1 = (function (){var statearr_35015 = state_35009;
(statearr_35015[(8)] = inst_34992__$1);

return statearr_35015;
})();
if(cljs.core.truth_(inst_34993)){
var statearr_35016_37062 = state_35009__$1;
(statearr_35016_37062[(1)] = (5));

} else {
var statearr_35017_37063 = state_35009__$1;
(statearr_35017_37063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (6))){
var inst_34989 = (state_35009[(7)]);
var inst_34996 = (state_35009[(9)]);
var inst_34992 = (state_35009[(8)]);
var inst_34996__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34989,inst_34992) : f.call(null,inst_34989,inst_34992));
var inst_34997 = cljs.core.reduced_QMARK_(inst_34996__$1);
var state_35009__$1 = (function (){var statearr_35019 = state_35009;
(statearr_35019[(9)] = inst_34996__$1);

return statearr_35019;
})();
if(inst_34997){
var statearr_35020_37067 = state_35009__$1;
(statearr_35020_37067[(1)] = (8));

} else {
var statearr_35021_37068 = state_35009__$1;
(statearr_35021_37068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (3))){
var inst_35007 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35009__$1,inst_35007);
} else {
if((state_val_35010 === (2))){
var state_35009__$1 = state_35009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35009__$1,(4),ch);
} else {
if((state_val_35010 === (9))){
var inst_34996 = (state_35009[(9)]);
var inst_34989 = inst_34996;
var state_35009__$1 = (function (){var statearr_35030 = state_35009;
(statearr_35030[(7)] = inst_34989);

return statearr_35030;
})();
var statearr_35035_37082 = state_35009__$1;
(statearr_35035_37082[(2)] = null);

(statearr_35035_37082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (5))){
var inst_34989 = (state_35009[(7)]);
var state_35009__$1 = state_35009;
var statearr_35036_37083 = state_35009__$1;
(statearr_35036_37083[(2)] = inst_34989);

(statearr_35036_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (10))){
var inst_35003 = (state_35009[(2)]);
var state_35009__$1 = state_35009;
var statearr_35045_37084 = state_35009__$1;
(statearr_35045_37084[(2)] = inst_35003);

(statearr_35045_37084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35010 === (8))){
var inst_34996 = (state_35009[(9)]);
var inst_34999 = cljs.core.deref(inst_34996);
var state_35009__$1 = state_35009;
var statearr_35046_37085 = state_35009__$1;
(statearr_35046_37085[(2)] = inst_34999);

(statearr_35046_37085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$reduce_$_state_machine__33660__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33660__auto____0 = (function (){
var statearr_35048 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35048[(0)] = cljs$core$async$reduce_$_state_machine__33660__auto__);

(statearr_35048[(1)] = (1));

return statearr_35048;
});
var cljs$core$async$reduce_$_state_machine__33660__auto____1 = (function (state_35009){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_35009);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e35049){var ex__33663__auto__ = e35049;
var statearr_35050_37086 = state_35009;
(statearr_35050_37086[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_35009[(4)]))){
var statearr_35051_37087 = state_35009;
(statearr_35051_37087[(1)] = cljs.core.first((state_35009[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37093 = state_35009;
state_35009 = G__37093;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33660__auto__ = function(state_35009){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33660__auto____1.call(this,state_35009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33660__auto____0;
cljs$core$async$reduce_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33660__auto____1;
return cljs$core$async$reduce_$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_35052 = f__34189__auto__();
(statearr_35052[(6)] = c__34188__auto__);

return statearr_35052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));

return c__34188__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_35059){
var state_val_35060 = (state_35059[(1)]);
if((state_val_35060 === (1))){
var inst_35054 = cljs.core.async.reduce(f__$1,init,ch);
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35059__$1,(2),inst_35054);
} else {
if((state_val_35060 === (2))){
var inst_35056 = (state_35059[(2)]);
var inst_35057 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35056) : f__$1.call(null,inst_35056));
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35059__$1,inst_35057);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33660__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33660__auto____0 = (function (){
var statearr_35061 = [null,null,null,null,null,null,null];
(statearr_35061[(0)] = cljs$core$async$transduce_$_state_machine__33660__auto__);

(statearr_35061[(1)] = (1));

return statearr_35061;
});
var cljs$core$async$transduce_$_state_machine__33660__auto____1 = (function (state_35059){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_35059);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e35062){var ex__33663__auto__ = e35062;
var statearr_35063_37105 = state_35059;
(statearr_35063_37105[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_35059[(4)]))){
var statearr_35064_37106 = state_35059;
(statearr_35064_37106[(1)] = cljs.core.first((state_35059[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37108 = state_35059;
state_35059 = G__37108;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33660__auto__ = function(state_35059){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33660__auto____1.call(this,state_35059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33660__auto____0;
cljs$core$async$transduce_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33660__auto____1;
return cljs$core$async$transduce_$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_35066 = f__34189__auto__();
(statearr_35066[(6)] = c__34188__auto__);

return statearr_35066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));

return c__34188__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__35068 = arguments.length;
switch (G__35068) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_35094){
var state_val_35095 = (state_35094[(1)]);
if((state_val_35095 === (7))){
var inst_35076 = (state_35094[(2)]);
var state_35094__$1 = state_35094;
var statearr_35097_37111 = state_35094__$1;
(statearr_35097_37111[(2)] = inst_35076);

(statearr_35097_37111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (1))){
var inst_35070 = cljs.core.seq(coll);
var inst_35071 = inst_35070;
var state_35094__$1 = (function (){var statearr_35098 = state_35094;
(statearr_35098[(7)] = inst_35071);

return statearr_35098;
})();
var statearr_35099_37119 = state_35094__$1;
(statearr_35099_37119[(2)] = null);

(statearr_35099_37119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (4))){
var inst_35071 = (state_35094[(7)]);
var inst_35074 = cljs.core.first(inst_35071);
var state_35094__$1 = state_35094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35094__$1,(7),ch,inst_35074);
} else {
if((state_val_35095 === (13))){
var inst_35088 = (state_35094[(2)]);
var state_35094__$1 = state_35094;
var statearr_35100_37120 = state_35094__$1;
(statearr_35100_37120[(2)] = inst_35088);

(statearr_35100_37120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (6))){
var inst_35079 = (state_35094[(2)]);
var state_35094__$1 = state_35094;
if(cljs.core.truth_(inst_35079)){
var statearr_35101_37126 = state_35094__$1;
(statearr_35101_37126[(1)] = (8));

} else {
var statearr_35102_37127 = state_35094__$1;
(statearr_35102_37127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (3))){
var inst_35092 = (state_35094[(2)]);
var state_35094__$1 = state_35094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35094__$1,inst_35092);
} else {
if((state_val_35095 === (12))){
var state_35094__$1 = state_35094;
var statearr_35103_37128 = state_35094__$1;
(statearr_35103_37128[(2)] = null);

(statearr_35103_37128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (2))){
var inst_35071 = (state_35094[(7)]);
var state_35094__$1 = state_35094;
if(cljs.core.truth_(inst_35071)){
var statearr_35105_37129 = state_35094__$1;
(statearr_35105_37129[(1)] = (4));

} else {
var statearr_35106_37130 = state_35094__$1;
(statearr_35106_37130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (11))){
var inst_35085 = cljs.core.async.close_BANG_(ch);
var state_35094__$1 = state_35094;
var statearr_35107_37131 = state_35094__$1;
(statearr_35107_37131[(2)] = inst_35085);

(statearr_35107_37131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (9))){
var state_35094__$1 = state_35094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35108_37132 = state_35094__$1;
(statearr_35108_37132[(1)] = (11));

} else {
var statearr_35109_37133 = state_35094__$1;
(statearr_35109_37133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (5))){
var inst_35071 = (state_35094[(7)]);
var state_35094__$1 = state_35094;
var statearr_35110_37134 = state_35094__$1;
(statearr_35110_37134[(2)] = inst_35071);

(statearr_35110_37134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (10))){
var inst_35090 = (state_35094[(2)]);
var state_35094__$1 = state_35094;
var statearr_35111_37135 = state_35094__$1;
(statearr_35111_37135[(2)] = inst_35090);

(statearr_35111_37135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (8))){
var inst_35071 = (state_35094[(7)]);
var inst_35081 = cljs.core.next(inst_35071);
var inst_35071__$1 = inst_35081;
var state_35094__$1 = (function (){var statearr_35112 = state_35094;
(statearr_35112[(7)] = inst_35071__$1);

return statearr_35112;
})();
var statearr_35113_37146 = state_35094__$1;
(statearr_35113_37146[(2)] = null);

(statearr_35113_37146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_35115 = [null,null,null,null,null,null,null,null];
(statearr_35115[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_35115[(1)] = (1));

return statearr_35115;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_35094){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_35094);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e35116){var ex__33663__auto__ = e35116;
var statearr_35117_37147 = state_35094;
(statearr_35117_37147[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_35094[(4)]))){
var statearr_35118_37148 = state_35094;
(statearr_35118_37148[(1)] = cljs.core.first((state_35094[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37149 = state_35094;
state_35094 = G__37149;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_35094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_35094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_35119 = f__34189__auto__();
(statearr_35119[(6)] = c__34188__auto__);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));

return c__34188__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35122 = arguments.length;
switch (G__35122) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37161 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37161(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37162 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37162(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37166 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37166(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37167 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37167(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35127 = (function (ch,cs,meta35128){
this.ch = ch;
this.cs = cs;
this.meta35128 = meta35128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35129,meta35128__$1){
var self__ = this;
var _35129__$1 = this;
return (new cljs.core.async.t_cljs$core$async35127(self__.ch,self__.cs,meta35128__$1));
}));

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35129){
var self__ = this;
var _35129__$1 = this;
return self__.meta35128;
}));

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35128","meta35128",-1460929335,null)], null);
}));

(cljs.core.async.t_cljs$core$async35127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35127");

(cljs.core.async.t_cljs$core$async35127.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35127.
 */
cljs.core.async.__GT_t_cljs$core$async35127 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35127(ch__$1,cs__$1,meta35128){
return (new cljs.core.async.t_cljs$core$async35127(ch__$1,cs__$1,meta35128));
});

}

return (new cljs.core.async.t_cljs$core$async35127(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34188__auto___37173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_35266){
var state_val_35267 = (state_35266[(1)]);
if((state_val_35267 === (7))){
var inst_35262 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35269_37174 = state_35266__$1;
(statearr_35269_37174[(2)] = inst_35262);

(statearr_35269_37174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (20))){
var inst_35165 = (state_35266[(7)]);
var inst_35178 = cljs.core.first(inst_35165);
var inst_35179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35178,(0),null);
var inst_35180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35178,(1),null);
var state_35266__$1 = (function (){var statearr_35270 = state_35266;
(statearr_35270[(8)] = inst_35179);

return statearr_35270;
})();
if(cljs.core.truth_(inst_35180)){
var statearr_35271_37177 = state_35266__$1;
(statearr_35271_37177[(1)] = (22));

} else {
var statearr_35272_37178 = state_35266__$1;
(statearr_35272_37178[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (27))){
var inst_35208 = (state_35266[(9)]);
var inst_35215 = (state_35266[(10)]);
var inst_35134 = (state_35266[(11)]);
var inst_35210 = (state_35266[(12)]);
var inst_35215__$1 = cljs.core._nth(inst_35208,inst_35210);
var inst_35216 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35215__$1,inst_35134,done);
var state_35266__$1 = (function (){var statearr_35273 = state_35266;
(statearr_35273[(10)] = inst_35215__$1);

return statearr_35273;
})();
if(cljs.core.truth_(inst_35216)){
var statearr_35274_37179 = state_35266__$1;
(statearr_35274_37179[(1)] = (30));

} else {
var statearr_35275_37180 = state_35266__$1;
(statearr_35275_37180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (1))){
var state_35266__$1 = state_35266;
var statearr_35276_37182 = state_35266__$1;
(statearr_35276_37182[(2)] = null);

(statearr_35276_37182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (24))){
var inst_35165 = (state_35266[(7)]);
var inst_35185 = (state_35266[(2)]);
var inst_35186 = cljs.core.next(inst_35165);
var inst_35143 = inst_35186;
var inst_35144 = null;
var inst_35145 = (0);
var inst_35146 = (0);
var state_35266__$1 = (function (){var statearr_35278 = state_35266;
(statearr_35278[(13)] = inst_35144);

(statearr_35278[(14)] = inst_35145);

(statearr_35278[(15)] = inst_35146);

(statearr_35278[(16)] = inst_35185);

(statearr_35278[(17)] = inst_35143);

return statearr_35278;
})();
var statearr_35279_37184 = state_35266__$1;
(statearr_35279_37184[(2)] = null);

(statearr_35279_37184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (39))){
var state_35266__$1 = state_35266;
var statearr_35283_37185 = state_35266__$1;
(statearr_35283_37185[(2)] = null);

(statearr_35283_37185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (4))){
var inst_35134 = (state_35266[(11)]);
var inst_35134__$1 = (state_35266[(2)]);
var inst_35135 = (inst_35134__$1 == null);
var state_35266__$1 = (function (){var statearr_35284 = state_35266;
(statearr_35284[(11)] = inst_35134__$1);

return statearr_35284;
})();
if(cljs.core.truth_(inst_35135)){
var statearr_35285_37187 = state_35266__$1;
(statearr_35285_37187[(1)] = (5));

} else {
var statearr_35286_37188 = state_35266__$1;
(statearr_35286_37188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (15))){
var inst_35144 = (state_35266[(13)]);
var inst_35145 = (state_35266[(14)]);
var inst_35146 = (state_35266[(15)]);
var inst_35143 = (state_35266[(17)]);
var inst_35161 = (state_35266[(2)]);
var inst_35162 = (inst_35146 + (1));
var tmp35280 = inst_35144;
var tmp35281 = inst_35145;
var tmp35282 = inst_35143;
var inst_35143__$1 = tmp35282;
var inst_35144__$1 = tmp35280;
var inst_35145__$1 = tmp35281;
var inst_35146__$1 = inst_35162;
var state_35266__$1 = (function (){var statearr_35288 = state_35266;
(statearr_35288[(13)] = inst_35144__$1);

(statearr_35288[(14)] = inst_35145__$1);

(statearr_35288[(15)] = inst_35146__$1);

(statearr_35288[(18)] = inst_35161);

(statearr_35288[(17)] = inst_35143__$1);

return statearr_35288;
})();
var statearr_35289_37192 = state_35266__$1;
(statearr_35289_37192[(2)] = null);

(statearr_35289_37192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (21))){
var inst_35189 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35293_37193 = state_35266__$1;
(statearr_35293_37193[(2)] = inst_35189);

(statearr_35293_37193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (31))){
var inst_35215 = (state_35266[(10)]);
var inst_35219 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35215);
var state_35266__$1 = state_35266;
var statearr_35294_37194 = state_35266__$1;
(statearr_35294_37194[(2)] = inst_35219);

(statearr_35294_37194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (32))){
var inst_35208 = (state_35266[(9)]);
var inst_35207 = (state_35266[(19)]);
var inst_35210 = (state_35266[(12)]);
var inst_35209 = (state_35266[(20)]);
var inst_35221 = (state_35266[(2)]);
var inst_35222 = (inst_35210 + (1));
var tmp35290 = inst_35208;
var tmp35291 = inst_35207;
var tmp35292 = inst_35209;
var inst_35207__$1 = tmp35291;
var inst_35208__$1 = tmp35290;
var inst_35209__$1 = tmp35292;
var inst_35210__$1 = inst_35222;
var state_35266__$1 = (function (){var statearr_35295 = state_35266;
(statearr_35295[(9)] = inst_35208__$1);

(statearr_35295[(19)] = inst_35207__$1);

(statearr_35295[(21)] = inst_35221);

(statearr_35295[(12)] = inst_35210__$1);

(statearr_35295[(20)] = inst_35209__$1);

return statearr_35295;
})();
var statearr_35297_37200 = state_35266__$1;
(statearr_35297_37200[(2)] = null);

(statearr_35297_37200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (40))){
var inst_35235 = (state_35266[(22)]);
var inst_35239 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35235);
var state_35266__$1 = state_35266;
var statearr_35298_37201 = state_35266__$1;
(statearr_35298_37201[(2)] = inst_35239);

(statearr_35298_37201[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (33))){
var inst_35225 = (state_35266[(23)]);
var inst_35227 = cljs.core.chunked_seq_QMARK_(inst_35225);
var state_35266__$1 = state_35266;
if(inst_35227){
var statearr_35299_37202 = state_35266__$1;
(statearr_35299_37202[(1)] = (36));

} else {
var statearr_35300_37203 = state_35266__$1;
(statearr_35300_37203[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (13))){
var inst_35155 = (state_35266[(24)]);
var inst_35158 = cljs.core.async.close_BANG_(inst_35155);
var state_35266__$1 = state_35266;
var statearr_35301_37204 = state_35266__$1;
(statearr_35301_37204[(2)] = inst_35158);

(statearr_35301_37204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (22))){
var inst_35179 = (state_35266[(8)]);
var inst_35182 = cljs.core.async.close_BANG_(inst_35179);
var state_35266__$1 = state_35266;
var statearr_35302_37205 = state_35266__$1;
(statearr_35302_37205[(2)] = inst_35182);

(statearr_35302_37205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (36))){
var inst_35225 = (state_35266[(23)]);
var inst_35230 = cljs.core.chunk_first(inst_35225);
var inst_35231 = cljs.core.chunk_rest(inst_35225);
var inst_35232 = cljs.core.count(inst_35230);
var inst_35207 = inst_35231;
var inst_35208 = inst_35230;
var inst_35209 = inst_35232;
var inst_35210 = (0);
var state_35266__$1 = (function (){var statearr_35304 = state_35266;
(statearr_35304[(9)] = inst_35208);

(statearr_35304[(19)] = inst_35207);

(statearr_35304[(12)] = inst_35210);

(statearr_35304[(20)] = inst_35209);

return statearr_35304;
})();
var statearr_35305_37206 = state_35266__$1;
(statearr_35305_37206[(2)] = null);

(statearr_35305_37206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (41))){
var inst_35225 = (state_35266[(23)]);
var inst_35241 = (state_35266[(2)]);
var inst_35242 = cljs.core.next(inst_35225);
var inst_35207 = inst_35242;
var inst_35208 = null;
var inst_35209 = (0);
var inst_35210 = (0);
var state_35266__$1 = (function (){var statearr_35306 = state_35266;
(statearr_35306[(9)] = inst_35208);

(statearr_35306[(19)] = inst_35207);

(statearr_35306[(25)] = inst_35241);

(statearr_35306[(12)] = inst_35210);

(statearr_35306[(20)] = inst_35209);

return statearr_35306;
})();
var statearr_35307_37209 = state_35266__$1;
(statearr_35307_37209[(2)] = null);

(statearr_35307_37209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (43))){
var state_35266__$1 = state_35266;
var statearr_35308_37210 = state_35266__$1;
(statearr_35308_37210[(2)] = null);

(statearr_35308_37210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (29))){
var inst_35250 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35309_37211 = state_35266__$1;
(statearr_35309_37211[(2)] = inst_35250);

(statearr_35309_37211[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (44))){
var inst_35259 = (state_35266[(2)]);
var state_35266__$1 = (function (){var statearr_35310 = state_35266;
(statearr_35310[(26)] = inst_35259);

return statearr_35310;
})();
var statearr_35311_37212 = state_35266__$1;
(statearr_35311_37212[(2)] = null);

(statearr_35311_37212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (6))){
var inst_35199 = (state_35266[(27)]);
var inst_35198 = cljs.core.deref(cs);
var inst_35199__$1 = cljs.core.keys(inst_35198);
var inst_35200 = cljs.core.count(inst_35199__$1);
var inst_35201 = cljs.core.reset_BANG_(dctr,inst_35200);
var inst_35206 = cljs.core.seq(inst_35199__$1);
var inst_35207 = inst_35206;
var inst_35208 = null;
var inst_35209 = (0);
var inst_35210 = (0);
var state_35266__$1 = (function (){var statearr_35313 = state_35266;
(statearr_35313[(9)] = inst_35208);

(statearr_35313[(19)] = inst_35207);

(statearr_35313[(12)] = inst_35210);

(statearr_35313[(28)] = inst_35201);

(statearr_35313[(27)] = inst_35199__$1);

(statearr_35313[(20)] = inst_35209);

return statearr_35313;
})();
var statearr_35314_37221 = state_35266__$1;
(statearr_35314_37221[(2)] = null);

(statearr_35314_37221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (28))){
var inst_35207 = (state_35266[(19)]);
var inst_35225 = (state_35266[(23)]);
var inst_35225__$1 = cljs.core.seq(inst_35207);
var state_35266__$1 = (function (){var statearr_35315 = state_35266;
(statearr_35315[(23)] = inst_35225__$1);

return statearr_35315;
})();
if(inst_35225__$1){
var statearr_35316_37226 = state_35266__$1;
(statearr_35316_37226[(1)] = (33));

} else {
var statearr_35317_37227 = state_35266__$1;
(statearr_35317_37227[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (25))){
var inst_35210 = (state_35266[(12)]);
var inst_35209 = (state_35266[(20)]);
var inst_35212 = (inst_35210 < inst_35209);
var inst_35213 = inst_35212;
var state_35266__$1 = state_35266;
if(cljs.core.truth_(inst_35213)){
var statearr_35318_37228 = state_35266__$1;
(statearr_35318_37228[(1)] = (27));

} else {
var statearr_35319_37229 = state_35266__$1;
(statearr_35319_37229[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (34))){
var state_35266__$1 = state_35266;
var statearr_35320_37230 = state_35266__$1;
(statearr_35320_37230[(2)] = null);

(statearr_35320_37230[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (17))){
var state_35266__$1 = state_35266;
var statearr_35322_37231 = state_35266__$1;
(statearr_35322_37231[(2)] = null);

(statearr_35322_37231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (3))){
var inst_35264 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35266__$1,inst_35264);
} else {
if((state_val_35267 === (12))){
var inst_35194 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35323_37232 = state_35266__$1;
(statearr_35323_37232[(2)] = inst_35194);

(statearr_35323_37232[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (2))){
var state_35266__$1 = state_35266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35266__$1,(4),ch);
} else {
if((state_val_35267 === (23))){
var state_35266__$1 = state_35266;
var statearr_35324_37240 = state_35266__$1;
(statearr_35324_37240[(2)] = null);

(statearr_35324_37240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (35))){
var inst_35248 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35325_37241 = state_35266__$1;
(statearr_35325_37241[(2)] = inst_35248);

(statearr_35325_37241[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (19))){
var inst_35165 = (state_35266[(7)]);
var inst_35170 = cljs.core.chunk_first(inst_35165);
var inst_35171 = cljs.core.chunk_rest(inst_35165);
var inst_35172 = cljs.core.count(inst_35170);
var inst_35143 = inst_35171;
var inst_35144 = inst_35170;
var inst_35145 = inst_35172;
var inst_35146 = (0);
var state_35266__$1 = (function (){var statearr_35326 = state_35266;
(statearr_35326[(13)] = inst_35144);

(statearr_35326[(14)] = inst_35145);

(statearr_35326[(15)] = inst_35146);

(statearr_35326[(17)] = inst_35143);

return statearr_35326;
})();
var statearr_35328_37245 = state_35266__$1;
(statearr_35328_37245[(2)] = null);

(statearr_35328_37245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (11))){
var inst_35143 = (state_35266[(17)]);
var inst_35165 = (state_35266[(7)]);
var inst_35165__$1 = cljs.core.seq(inst_35143);
var state_35266__$1 = (function (){var statearr_35329 = state_35266;
(statearr_35329[(7)] = inst_35165__$1);

return statearr_35329;
})();
if(inst_35165__$1){
var statearr_35330_37251 = state_35266__$1;
(statearr_35330_37251[(1)] = (16));

} else {
var statearr_35331_37252 = state_35266__$1;
(statearr_35331_37252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (9))){
var inst_35196 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35332_37253 = state_35266__$1;
(statearr_35332_37253[(2)] = inst_35196);

(statearr_35332_37253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (5))){
var inst_35141 = cljs.core.deref(cs);
var inst_35142 = cljs.core.seq(inst_35141);
var inst_35143 = inst_35142;
var inst_35144 = null;
var inst_35145 = (0);
var inst_35146 = (0);
var state_35266__$1 = (function (){var statearr_35334 = state_35266;
(statearr_35334[(13)] = inst_35144);

(statearr_35334[(14)] = inst_35145);

(statearr_35334[(15)] = inst_35146);

(statearr_35334[(17)] = inst_35143);

return statearr_35334;
})();
var statearr_35336_37258 = state_35266__$1;
(statearr_35336_37258[(2)] = null);

(statearr_35336_37258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (14))){
var state_35266__$1 = state_35266;
var statearr_35337_37262 = state_35266__$1;
(statearr_35337_37262[(2)] = null);

(statearr_35337_37262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (45))){
var inst_35256 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35338_37263 = state_35266__$1;
(statearr_35338_37263[(2)] = inst_35256);

(statearr_35338_37263[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (26))){
var inst_35199 = (state_35266[(27)]);
var inst_35252 = (state_35266[(2)]);
var inst_35253 = cljs.core.seq(inst_35199);
var state_35266__$1 = (function (){var statearr_35339 = state_35266;
(statearr_35339[(29)] = inst_35252);

return statearr_35339;
})();
if(inst_35253){
var statearr_35340_37264 = state_35266__$1;
(statearr_35340_37264[(1)] = (42));

} else {
var statearr_35341_37265 = state_35266__$1;
(statearr_35341_37265[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (16))){
var inst_35165 = (state_35266[(7)]);
var inst_35168 = cljs.core.chunked_seq_QMARK_(inst_35165);
var state_35266__$1 = state_35266;
if(inst_35168){
var statearr_35342_37266 = state_35266__$1;
(statearr_35342_37266[(1)] = (19));

} else {
var statearr_35343_37267 = state_35266__$1;
(statearr_35343_37267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (38))){
var inst_35245 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35344_37268 = state_35266__$1;
(statearr_35344_37268[(2)] = inst_35245);

(statearr_35344_37268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (30))){
var state_35266__$1 = state_35266;
var statearr_35345_37269 = state_35266__$1;
(statearr_35345_37269[(2)] = null);

(statearr_35345_37269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (10))){
var inst_35144 = (state_35266[(13)]);
var inst_35146 = (state_35266[(15)]);
var inst_35154 = cljs.core._nth(inst_35144,inst_35146);
var inst_35155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35154,(0),null);
var inst_35156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35154,(1),null);
var state_35266__$1 = (function (){var statearr_35348 = state_35266;
(statearr_35348[(24)] = inst_35155);

return statearr_35348;
})();
if(cljs.core.truth_(inst_35156)){
var statearr_35349_37272 = state_35266__$1;
(statearr_35349_37272[(1)] = (13));

} else {
var statearr_35350_37273 = state_35266__$1;
(statearr_35350_37273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (18))){
var inst_35192 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35351_37274 = state_35266__$1;
(statearr_35351_37274[(2)] = inst_35192);

(statearr_35351_37274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (42))){
var state_35266__$1 = state_35266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35266__$1,(45),dchan);
} else {
if((state_val_35267 === (37))){
var inst_35134 = (state_35266[(11)]);
var inst_35235 = (state_35266[(22)]);
var inst_35225 = (state_35266[(23)]);
var inst_35235__$1 = cljs.core.first(inst_35225);
var inst_35236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35235__$1,inst_35134,done);
var state_35266__$1 = (function (){var statearr_35352 = state_35266;
(statearr_35352[(22)] = inst_35235__$1);

return statearr_35352;
})();
if(cljs.core.truth_(inst_35236)){
var statearr_35353_37275 = state_35266__$1;
(statearr_35353_37275[(1)] = (39));

} else {
var statearr_35354_37276 = state_35266__$1;
(statearr_35354_37276[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (8))){
var inst_35145 = (state_35266[(14)]);
var inst_35146 = (state_35266[(15)]);
var inst_35148 = (inst_35146 < inst_35145);
var inst_35149 = inst_35148;
var state_35266__$1 = state_35266;
if(cljs.core.truth_(inst_35149)){
var statearr_35355_37277 = state_35266__$1;
(statearr_35355_37277[(1)] = (10));

} else {
var statearr_35356_37278 = state_35266__$1;
(statearr_35356_37278[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33660__auto__ = null;
var cljs$core$async$mult_$_state_machine__33660__auto____0 = (function (){
var statearr_35357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35357[(0)] = cljs$core$async$mult_$_state_machine__33660__auto__);

(statearr_35357[(1)] = (1));

return statearr_35357;
});
var cljs$core$async$mult_$_state_machine__33660__auto____1 = (function (state_35266){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_35266);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e35358){var ex__33663__auto__ = e35358;
var statearr_35359_37283 = state_35266;
(statearr_35359_37283[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_35266[(4)]))){
var statearr_35360_37284 = state_35266;
(statearr_35360_37284[(1)] = cljs.core.first((state_35266[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37285 = state_35266;
state_35266 = G__37285;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33660__auto__ = function(state_35266){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33660__auto____1.call(this,state_35266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33660__auto____0;
cljs$core$async$mult_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33660__auto____1;
return cljs$core$async$mult_$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_35361 = f__34189__auto__();
(statearr_35361[(6)] = c__34188__auto___37173);

return statearr_35361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35365 = arguments.length;
switch (G__35365) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37290 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37290(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37295 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37295(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37296 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37296(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37301 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37301(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37304 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37304(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37306 = arguments.length;
var i__4737__auto___37307 = (0);
while(true){
if((i__4737__auto___37307 < len__4736__auto___37306)){
args__4742__auto__.push((arguments[i__4737__auto___37307]));

var G__37308 = (i__4737__auto___37307 + (1));
i__4737__auto___37307 = G__37308;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35396){
var map__35397 = p__35396;
var map__35397__$1 = (((((!((map__35397 == null))))?(((((map__35397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35397):map__35397);
var opts = map__35397__$1;
var statearr_35402_37313 = state;
(statearr_35402_37313[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35403_37314 = state;
(statearr_35403_37314[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35405_37318 = state;
(statearr_35405_37318[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35387){
var G__35389 = cljs.core.first(seq35387);
var seq35387__$1 = cljs.core.next(seq35387);
var G__35390 = cljs.core.first(seq35387__$1);
var seq35387__$2 = cljs.core.next(seq35387__$1);
var G__35391 = cljs.core.first(seq35387__$2);
var seq35387__$3 = cljs.core.next(seq35387__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35389,G__35390,G__35391,seq35387__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35420 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35421){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35421 = meta35421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35422,meta35421__$1){
var self__ = this;
var _35422__$1 = this;
return (new cljs.core.async.t_cljs$core$async35420(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35421__$1));
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35422){
var self__ = this;
var _35422__$1 = this;
return self__.meta35421;
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35421","meta35421",-923693297,null)], null);
}));

(cljs.core.async.t_cljs$core$async35420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35420");

(cljs.core.async.t_cljs$core$async35420.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35420.
 */
cljs.core.async.__GT_t_cljs$core$async35420 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35420(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35421){
return (new cljs.core.async.t_cljs$core$async35420(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35421));
});

}

return (new cljs.core.async.t_cljs$core$async35420(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34188__auto___37326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_35562){
var state_val_35563 = (state_35562[(1)]);
if((state_val_35563 === (7))){
var inst_35466 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35568_37327 = state_35562__$1;
(statearr_35568_37327[(2)] = inst_35466);

(statearr_35568_37327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (20))){
var inst_35479 = (state_35562[(7)]);
var state_35562__$1 = state_35562;
var statearr_35570_37328 = state_35562__$1;
(statearr_35570_37328[(2)] = inst_35479);

(statearr_35570_37328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (27))){
var state_35562__$1 = state_35562;
var statearr_35573_37329 = state_35562__$1;
(statearr_35573_37329[(2)] = null);

(statearr_35573_37329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (1))){
var inst_35448 = (state_35562[(8)]);
var inst_35448__$1 = calc_state();
var inst_35450 = (inst_35448__$1 == null);
var inst_35451 = cljs.core.not(inst_35450);
var state_35562__$1 = (function (){var statearr_35575 = state_35562;
(statearr_35575[(8)] = inst_35448__$1);

return statearr_35575;
})();
if(inst_35451){
var statearr_35577_37330 = state_35562__$1;
(statearr_35577_37330[(1)] = (2));

} else {
var statearr_35578_37331 = state_35562__$1;
(statearr_35578_37331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (24))){
var inst_35531 = (state_35562[(9)]);
var inst_35504 = (state_35562[(10)]);
var inst_35516 = (state_35562[(11)]);
var inst_35531__$1 = (inst_35504.cljs$core$IFn$_invoke$arity$1 ? inst_35504.cljs$core$IFn$_invoke$arity$1(inst_35516) : inst_35504.call(null,inst_35516));
var state_35562__$1 = (function (){var statearr_35582 = state_35562;
(statearr_35582[(9)] = inst_35531__$1);

return statearr_35582;
})();
if(cljs.core.truth_(inst_35531__$1)){
var statearr_35583_37332 = state_35562__$1;
(statearr_35583_37332[(1)] = (29));

} else {
var statearr_35584_37333 = state_35562__$1;
(statearr_35584_37333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (4))){
var inst_35469 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35469)){
var statearr_35586_37336 = state_35562__$1;
(statearr_35586_37336[(1)] = (8));

} else {
var statearr_35587_37339 = state_35562__$1;
(statearr_35587_37339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (15))){
var inst_35498 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35498)){
var statearr_35591_37341 = state_35562__$1;
(statearr_35591_37341[(1)] = (19));

} else {
var statearr_35592_37342 = state_35562__$1;
(statearr_35592_37342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (21))){
var inst_35503 = (state_35562[(12)]);
var inst_35503__$1 = (state_35562[(2)]);
var inst_35504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35503__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35503__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35503__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35562__$1 = (function (){var statearr_35594 = state_35562;
(statearr_35594[(12)] = inst_35503__$1);

(statearr_35594[(10)] = inst_35504);

(statearr_35594[(13)] = inst_35505);

return statearr_35594;
})();
return cljs.core.async.ioc_alts_BANG_(state_35562__$1,(22),inst_35506);
} else {
if((state_val_35563 === (31))){
var inst_35539 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35539)){
var statearr_35597_37344 = state_35562__$1;
(statearr_35597_37344[(1)] = (32));

} else {
var statearr_35599_37345 = state_35562__$1;
(statearr_35599_37345[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (32))){
var inst_35515 = (state_35562[(14)]);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35562__$1,(35),out,inst_35515);
} else {
if((state_val_35563 === (33))){
var inst_35503 = (state_35562[(12)]);
var inst_35479 = inst_35503;
var state_35562__$1 = (function (){var statearr_35601 = state_35562;
(statearr_35601[(7)] = inst_35479);

return statearr_35601;
})();
var statearr_35603_37350 = state_35562__$1;
(statearr_35603_37350[(2)] = null);

(statearr_35603_37350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (13))){
var inst_35479 = (state_35562[(7)]);
var inst_35487 = inst_35479.cljs$lang$protocol_mask$partition0$;
var inst_35488 = (inst_35487 & (64));
var inst_35489 = inst_35479.cljs$core$ISeq$;
var inst_35490 = (cljs.core.PROTOCOL_SENTINEL === inst_35489);
var inst_35491 = ((inst_35488) || (inst_35490));
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35491)){
var statearr_35608_37351 = state_35562__$1;
(statearr_35608_37351[(1)] = (16));

} else {
var statearr_35609_37352 = state_35562__$1;
(statearr_35609_37352[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (22))){
var inst_35515 = (state_35562[(14)]);
var inst_35516 = (state_35562[(11)]);
var inst_35513 = (state_35562[(2)]);
var inst_35515__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35513,(0),null);
var inst_35516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35513,(1),null);
var inst_35517 = (inst_35515__$1 == null);
var inst_35518 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35516__$1,change);
var inst_35519 = ((inst_35517) || (inst_35518));
var state_35562__$1 = (function (){var statearr_35612 = state_35562;
(statearr_35612[(14)] = inst_35515__$1);

(statearr_35612[(11)] = inst_35516__$1);

return statearr_35612;
})();
if(cljs.core.truth_(inst_35519)){
var statearr_35615_37353 = state_35562__$1;
(statearr_35615_37353[(1)] = (23));

} else {
var statearr_35616_37354 = state_35562__$1;
(statearr_35616_37354[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (36))){
var inst_35503 = (state_35562[(12)]);
var inst_35479 = inst_35503;
var state_35562__$1 = (function (){var statearr_35617 = state_35562;
(statearr_35617[(7)] = inst_35479);

return statearr_35617;
})();
var statearr_35618_37355 = state_35562__$1;
(statearr_35618_37355[(2)] = null);

(statearr_35618_37355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (29))){
var inst_35531 = (state_35562[(9)]);
var state_35562__$1 = state_35562;
var statearr_35620_37360 = state_35562__$1;
(statearr_35620_37360[(2)] = inst_35531);

(statearr_35620_37360[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (6))){
var state_35562__$1 = state_35562;
var statearr_35624_37361 = state_35562__$1;
(statearr_35624_37361[(2)] = false);

(statearr_35624_37361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (28))){
var inst_35526 = (state_35562[(2)]);
var inst_35527 = calc_state();
var inst_35479 = inst_35527;
var state_35562__$1 = (function (){var statearr_35625 = state_35562;
(statearr_35625[(15)] = inst_35526);

(statearr_35625[(7)] = inst_35479);

return statearr_35625;
})();
var statearr_35626_37362 = state_35562__$1;
(statearr_35626_37362[(2)] = null);

(statearr_35626_37362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (25))){
var inst_35556 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35628_37367 = state_35562__$1;
(statearr_35628_37367[(2)] = inst_35556);

(statearr_35628_37367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (34))){
var inst_35554 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35631_37368 = state_35562__$1;
(statearr_35631_37368[(2)] = inst_35554);

(statearr_35631_37368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (17))){
var state_35562__$1 = state_35562;
var statearr_35633_37369 = state_35562__$1;
(statearr_35633_37369[(2)] = false);

(statearr_35633_37369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (3))){
var state_35562__$1 = state_35562;
var statearr_35635_37370 = state_35562__$1;
(statearr_35635_37370[(2)] = false);

(statearr_35635_37370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (12))){
var inst_35559 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35562__$1,inst_35559);
} else {
if((state_val_35563 === (2))){
var inst_35448 = (state_35562[(8)]);
var inst_35457 = inst_35448.cljs$lang$protocol_mask$partition0$;
var inst_35458 = (inst_35457 & (64));
var inst_35460 = inst_35448.cljs$core$ISeq$;
var inst_35461 = (cljs.core.PROTOCOL_SENTINEL === inst_35460);
var inst_35462 = ((inst_35458) || (inst_35461));
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35462)){
var statearr_35639_37371 = state_35562__$1;
(statearr_35639_37371[(1)] = (5));

} else {
var statearr_35640_37372 = state_35562__$1;
(statearr_35640_37372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (23))){
var inst_35515 = (state_35562[(14)]);
var inst_35521 = (inst_35515 == null);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35521)){
var statearr_35642_37373 = state_35562__$1;
(statearr_35642_37373[(1)] = (26));

} else {
var statearr_35643_37374 = state_35562__$1;
(statearr_35643_37374[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (35))){
var inst_35543 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35543)){
var statearr_35644_37375 = state_35562__$1;
(statearr_35644_37375[(1)] = (36));

} else {
var statearr_35647_37376 = state_35562__$1;
(statearr_35647_37376[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (19))){
var inst_35479 = (state_35562[(7)]);
var inst_35500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35479);
var state_35562__$1 = state_35562;
var statearr_35649_37380 = state_35562__$1;
(statearr_35649_37380[(2)] = inst_35500);

(statearr_35649_37380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (11))){
var inst_35479 = (state_35562[(7)]);
var inst_35483 = (inst_35479 == null);
var inst_35484 = cljs.core.not(inst_35483);
var state_35562__$1 = state_35562;
if(inst_35484){
var statearr_35651_37381 = state_35562__$1;
(statearr_35651_37381[(1)] = (13));

} else {
var statearr_35652_37382 = state_35562__$1;
(statearr_35652_37382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (9))){
var inst_35448 = (state_35562[(8)]);
var state_35562__$1 = state_35562;
var statearr_35656_37383 = state_35562__$1;
(statearr_35656_37383[(2)] = inst_35448);

(statearr_35656_37383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (5))){
var state_35562__$1 = state_35562;
var statearr_35657_37384 = state_35562__$1;
(statearr_35657_37384[(2)] = true);

(statearr_35657_37384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (14))){
var state_35562__$1 = state_35562;
var statearr_35659_37385 = state_35562__$1;
(statearr_35659_37385[(2)] = false);

(statearr_35659_37385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (26))){
var inst_35516 = (state_35562[(11)]);
var inst_35523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35516);
var state_35562__$1 = state_35562;
var statearr_35660_37386 = state_35562__$1;
(statearr_35660_37386[(2)] = inst_35523);

(statearr_35660_37386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (16))){
var state_35562__$1 = state_35562;
var statearr_35664_37387 = state_35562__$1;
(statearr_35664_37387[(2)] = true);

(statearr_35664_37387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (38))){
var inst_35549 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35665_37388 = state_35562__$1;
(statearr_35665_37388[(2)] = inst_35549);

(statearr_35665_37388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (30))){
var inst_35504 = (state_35562[(10)]);
var inst_35516 = (state_35562[(11)]);
var inst_35505 = (state_35562[(13)]);
var inst_35534 = cljs.core.empty_QMARK_(inst_35504);
var inst_35535 = (inst_35505.cljs$core$IFn$_invoke$arity$1 ? inst_35505.cljs$core$IFn$_invoke$arity$1(inst_35516) : inst_35505.call(null,inst_35516));
var inst_35536 = cljs.core.not(inst_35535);
var inst_35537 = ((inst_35534) && (inst_35536));
var state_35562__$1 = state_35562;
var statearr_35671_37391 = state_35562__$1;
(statearr_35671_37391[(2)] = inst_35537);

(statearr_35671_37391[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (10))){
var inst_35448 = (state_35562[(8)]);
var inst_35475 = (state_35562[(2)]);
var inst_35476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35479 = inst_35448;
var state_35562__$1 = (function (){var statearr_35673 = state_35562;
(statearr_35673[(16)] = inst_35476);

(statearr_35673[(17)] = inst_35477);

(statearr_35673[(18)] = inst_35478);

(statearr_35673[(7)] = inst_35479);

return statearr_35673;
})();
var statearr_35675_37396 = state_35562__$1;
(statearr_35675_37396[(2)] = null);

(statearr_35675_37396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (18))){
var inst_35495 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35677_37397 = state_35562__$1;
(statearr_35677_37397[(2)] = inst_35495);

(statearr_35677_37397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (37))){
var state_35562__$1 = state_35562;
var statearr_35684_37398 = state_35562__$1;
(statearr_35684_37398[(2)] = null);

(statearr_35684_37398[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (8))){
var inst_35448 = (state_35562[(8)]);
var inst_35472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35448);
var state_35562__$1 = state_35562;
var statearr_35689_37399 = state_35562__$1;
(statearr_35689_37399[(2)] = inst_35472);

(statearr_35689_37399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33660__auto__ = null;
var cljs$core$async$mix_$_state_machine__33660__auto____0 = (function (){
var statearr_35696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35696[(0)] = cljs$core$async$mix_$_state_machine__33660__auto__);

(statearr_35696[(1)] = (1));

return statearr_35696;
});
var cljs$core$async$mix_$_state_machine__33660__auto____1 = (function (state_35562){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_35562);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e35697){var ex__33663__auto__ = e35697;
var statearr_35698_37401 = state_35562;
(statearr_35698_37401[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_35562[(4)]))){
var statearr_35700_37402 = state_35562;
(statearr_35700_37402[(1)] = cljs.core.first((state_35562[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37407 = state_35562;
state_35562 = G__37407;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33660__auto__ = function(state_35562){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33660__auto____1.call(this,state_35562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33660__auto____0;
cljs$core$async$mix_$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33660__auto____1;
return cljs$core$async$mix_$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_35704 = f__34189__auto__();
(statearr_35704[(6)] = c__34188__auto___37326);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37410 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37410(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37416 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37416(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37425 = (function() {
var G__37426 = null;
var G__37426__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37426__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37426 = function(p,v){
switch(arguments.length){
case 1:
return G__37426__1.call(this,p);
case 2:
return G__37426__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37426.cljs$core$IFn$_invoke$arity$1 = G__37426__1;
G__37426.cljs$core$IFn$_invoke$arity$2 = G__37426__2;
return G__37426;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35769 = arguments.length;
switch (G__35769) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37425(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37425(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35788 = arguments.length;
switch (G__35788) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35784_SHARP_){
if(cljs.core.truth_((p1__35784_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35784_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35784_SHARP_.call(null,topic)))){
return p1__35784_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35784_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35797 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35798){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35798 = meta35798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35799,meta35798__$1){
var self__ = this;
var _35799__$1 = this;
return (new cljs.core.async.t_cljs$core$async35797(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35798__$1));
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35799){
var self__ = this;
var _35799__$1 = this;
return self__.meta35798;
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35798","meta35798",1559338746,null)], null);
}));

(cljs.core.async.t_cljs$core$async35797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35797");

(cljs.core.async.t_cljs$core$async35797.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35797.
 */
cljs.core.async.__GT_t_cljs$core$async35797 = (function cljs$core$async$__GT_t_cljs$core$async35797(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35798){
return (new cljs.core.async.t_cljs$core$async35797(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35798));
});

}

return (new cljs.core.async.t_cljs$core$async35797(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34188__auto___37458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_35896){
var state_val_35898 = (state_35896[(1)]);
if((state_val_35898 === (7))){
var inst_35889 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35903_37460 = state_35896__$1;
(statearr_35903_37460[(2)] = inst_35889);

(statearr_35903_37460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (20))){
var state_35896__$1 = state_35896;
var statearr_35904_37461 = state_35896__$1;
(statearr_35904_37461[(2)] = null);

(statearr_35904_37461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (1))){
var state_35896__$1 = state_35896;
var statearr_35905_37462 = state_35896__$1;
(statearr_35905_37462[(2)] = null);

(statearr_35905_37462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (24))){
var inst_35872 = (state_35896[(7)]);
var inst_35881 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35872);
var state_35896__$1 = state_35896;
var statearr_35910_37463 = state_35896__$1;
(statearr_35910_37463[(2)] = inst_35881);

(statearr_35910_37463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (4))){
var inst_35816 = (state_35896[(8)]);
var inst_35816__$1 = (state_35896[(2)]);
var inst_35817 = (inst_35816__$1 == null);
var state_35896__$1 = (function (){var statearr_35911 = state_35896;
(statearr_35911[(8)] = inst_35816__$1);

return statearr_35911;
})();
if(cljs.core.truth_(inst_35817)){
var statearr_35912_37464 = state_35896__$1;
(statearr_35912_37464[(1)] = (5));

} else {
var statearr_35913_37465 = state_35896__$1;
(statearr_35913_37465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (15))){
var inst_35866 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35914_37466 = state_35896__$1;
(statearr_35914_37466[(2)] = inst_35866);

(statearr_35914_37466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (21))){
var inst_35886 = (state_35896[(2)]);
var state_35896__$1 = (function (){var statearr_35915 = state_35896;
(statearr_35915[(9)] = inst_35886);

return statearr_35915;
})();
var statearr_35916_37467 = state_35896__$1;
(statearr_35916_37467[(2)] = null);

(statearr_35916_37467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (13))){
var inst_35844 = (state_35896[(10)]);
var inst_35849 = cljs.core.chunked_seq_QMARK_(inst_35844);
var state_35896__$1 = state_35896;
if(inst_35849){
var statearr_35917_37469 = state_35896__$1;
(statearr_35917_37469[(1)] = (16));

} else {
var statearr_35918_37470 = state_35896__$1;
(statearr_35918_37470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (22))){
var inst_35878 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35878)){
var statearr_35919_37471 = state_35896__$1;
(statearr_35919_37471[(1)] = (23));

} else {
var statearr_35920_37473 = state_35896__$1;
(statearr_35920_37473[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (6))){
var inst_35872 = (state_35896[(7)]);
var inst_35816 = (state_35896[(8)]);
var inst_35874 = (state_35896[(11)]);
var inst_35872__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35816) : topic_fn.call(null,inst_35816));
var inst_35873 = cljs.core.deref(mults);
var inst_35874__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35873,inst_35872__$1);
var state_35896__$1 = (function (){var statearr_35925 = state_35896;
(statearr_35925[(7)] = inst_35872__$1);

(statearr_35925[(11)] = inst_35874__$1);

return statearr_35925;
})();
if(cljs.core.truth_(inst_35874__$1)){
var statearr_35926_37481 = state_35896__$1;
(statearr_35926_37481[(1)] = (19));

} else {
var statearr_35927_37482 = state_35896__$1;
(statearr_35927_37482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (25))){
var inst_35883 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35929_37486 = state_35896__$1;
(statearr_35929_37486[(2)] = inst_35883);

(statearr_35929_37486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (17))){
var inst_35844 = (state_35896[(10)]);
var inst_35857 = cljs.core.first(inst_35844);
var inst_35858 = cljs.core.async.muxch_STAR_(inst_35857);
var inst_35859 = cljs.core.async.close_BANG_(inst_35858);
var inst_35860 = cljs.core.next(inst_35844);
var inst_35826 = inst_35860;
var inst_35827 = null;
var inst_35828 = (0);
var inst_35829 = (0);
var state_35896__$1 = (function (){var statearr_35930 = state_35896;
(statearr_35930[(12)] = inst_35829);

(statearr_35930[(13)] = inst_35826);

(statearr_35930[(14)] = inst_35828);

(statearr_35930[(15)] = inst_35827);

(statearr_35930[(16)] = inst_35859);

return statearr_35930;
})();
var statearr_35931_37490 = state_35896__$1;
(statearr_35931_37490[(2)] = null);

(statearr_35931_37490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (3))){
var inst_35891 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35896__$1,inst_35891);
} else {
if((state_val_35898 === (12))){
var inst_35868 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35932_37491 = state_35896__$1;
(statearr_35932_37491[(2)] = inst_35868);

(statearr_35932_37491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (2))){
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35896__$1,(4),ch);
} else {
if((state_val_35898 === (23))){
var state_35896__$1 = state_35896;
var statearr_35933_37497 = state_35896__$1;
(statearr_35933_37497[(2)] = null);

(statearr_35933_37497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (19))){
var inst_35816 = (state_35896[(8)]);
var inst_35874 = (state_35896[(11)]);
var inst_35876 = cljs.core.async.muxch_STAR_(inst_35874);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35896__$1,(22),inst_35876,inst_35816);
} else {
if((state_val_35898 === (11))){
var inst_35844 = (state_35896[(10)]);
var inst_35826 = (state_35896[(13)]);
var inst_35844__$1 = cljs.core.seq(inst_35826);
var state_35896__$1 = (function (){var statearr_35934 = state_35896;
(statearr_35934[(10)] = inst_35844__$1);

return statearr_35934;
})();
if(inst_35844__$1){
var statearr_35935_37503 = state_35896__$1;
(statearr_35935_37503[(1)] = (13));

} else {
var statearr_35936_37504 = state_35896__$1;
(statearr_35936_37504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (9))){
var inst_35870 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35937_37508 = state_35896__$1;
(statearr_35937_37508[(2)] = inst_35870);

(statearr_35937_37508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (5))){
var inst_35823 = cljs.core.deref(mults);
var inst_35824 = cljs.core.vals(inst_35823);
var inst_35825 = cljs.core.seq(inst_35824);
var inst_35826 = inst_35825;
var inst_35827 = null;
var inst_35828 = (0);
var inst_35829 = (0);
var state_35896__$1 = (function (){var statearr_35940 = state_35896;
(statearr_35940[(12)] = inst_35829);

(statearr_35940[(13)] = inst_35826);

(statearr_35940[(14)] = inst_35828);

(statearr_35940[(15)] = inst_35827);

return statearr_35940;
})();
var statearr_35941_37519 = state_35896__$1;
(statearr_35941_37519[(2)] = null);

(statearr_35941_37519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (14))){
var state_35896__$1 = state_35896;
var statearr_35945_37530 = state_35896__$1;
(statearr_35945_37530[(2)] = null);

(statearr_35945_37530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (16))){
var inst_35844 = (state_35896[(10)]);
var inst_35851 = cljs.core.chunk_first(inst_35844);
var inst_35853 = cljs.core.chunk_rest(inst_35844);
var inst_35854 = cljs.core.count(inst_35851);
var inst_35826 = inst_35853;
var inst_35827 = inst_35851;
var inst_35828 = inst_35854;
var inst_35829 = (0);
var state_35896__$1 = (function (){var statearr_35946 = state_35896;
(statearr_35946[(12)] = inst_35829);

(statearr_35946[(13)] = inst_35826);

(statearr_35946[(14)] = inst_35828);

(statearr_35946[(15)] = inst_35827);

return statearr_35946;
})();
var statearr_35947_37533 = state_35896__$1;
(statearr_35947_37533[(2)] = null);

(statearr_35947_37533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (10))){
var inst_35829 = (state_35896[(12)]);
var inst_35826 = (state_35896[(13)]);
var inst_35828 = (state_35896[(14)]);
var inst_35827 = (state_35896[(15)]);
var inst_35834 = cljs.core._nth(inst_35827,inst_35829);
var inst_35839 = cljs.core.async.muxch_STAR_(inst_35834);
var inst_35840 = cljs.core.async.close_BANG_(inst_35839);
var inst_35841 = (inst_35829 + (1));
var tmp35942 = inst_35826;
var tmp35943 = inst_35828;
var tmp35944 = inst_35827;
var inst_35826__$1 = tmp35942;
var inst_35827__$1 = tmp35944;
var inst_35828__$1 = tmp35943;
var inst_35829__$1 = inst_35841;
var state_35896__$1 = (function (){var statearr_35948 = state_35896;
(statearr_35948[(12)] = inst_35829__$1);

(statearr_35948[(13)] = inst_35826__$1);

(statearr_35948[(14)] = inst_35828__$1);

(statearr_35948[(15)] = inst_35827__$1);

(statearr_35948[(17)] = inst_35840);

return statearr_35948;
})();
var statearr_35949_37554 = state_35896__$1;
(statearr_35949_37554[(2)] = null);

(statearr_35949_37554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (18))){
var inst_35863 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35950_37562 = state_35896__$1;
(statearr_35950_37562[(2)] = inst_35863);

(statearr_35950_37562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (8))){
var inst_35829 = (state_35896[(12)]);
var inst_35828 = (state_35896[(14)]);
var inst_35831 = (inst_35829 < inst_35828);
var inst_35832 = inst_35831;
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35832)){
var statearr_35951_37575 = state_35896__$1;
(statearr_35951_37575[(1)] = (10));

} else {
var statearr_35952_37576 = state_35896__$1;
(statearr_35952_37576[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_35953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35953[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_35953[(1)] = (1));

return statearr_35953;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_35896){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_35896);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e35954){var ex__33663__auto__ = e35954;
var statearr_35955_37588 = state_35896;
(statearr_35955_37588[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_35896[(4)]))){
var statearr_35956_37589 = state_35896;
(statearr_35956_37589[(1)] = cljs.core.first((state_35896[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37594 = state_35896;
state_35896 = G__37594;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_35896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_35896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_35957 = f__34189__auto__();
(statearr_35957[(6)] = c__34188__auto___37458);

return statearr_35957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35959 = arguments.length;
switch (G__35959) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35961 = arguments.length;
switch (G__35961) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35965 = arguments.length;
switch (G__35965) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34188__auto___37634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36012){
var state_val_36013 = (state_36012[(1)]);
if((state_val_36013 === (7))){
var state_36012__$1 = state_36012;
var statearr_36014_37636 = state_36012__$1;
(statearr_36014_37636[(2)] = null);

(statearr_36014_37636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (1))){
var state_36012__$1 = state_36012;
var statearr_36015_37643 = state_36012__$1;
(statearr_36015_37643[(2)] = null);

(statearr_36015_37643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (4))){
var inst_35970 = (state_36012[(7)]);
var inst_35971 = (state_36012[(8)]);
var inst_35973 = (inst_35971 < inst_35970);
var state_36012__$1 = state_36012;
if(cljs.core.truth_(inst_35973)){
var statearr_36016_37655 = state_36012__$1;
(statearr_36016_37655[(1)] = (6));

} else {
var statearr_36017_37656 = state_36012__$1;
(statearr_36017_37656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (15))){
var inst_35998 = (state_36012[(9)]);
var inst_36003 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35998);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36012__$1,(17),out,inst_36003);
} else {
if((state_val_36013 === (13))){
var inst_35998 = (state_36012[(9)]);
var inst_35998__$1 = (state_36012[(2)]);
var inst_35999 = cljs.core.some(cljs.core.nil_QMARK_,inst_35998__$1);
var state_36012__$1 = (function (){var statearr_36018 = state_36012;
(statearr_36018[(9)] = inst_35998__$1);

return statearr_36018;
})();
if(cljs.core.truth_(inst_35999)){
var statearr_36019_37671 = state_36012__$1;
(statearr_36019_37671[(1)] = (14));

} else {
var statearr_36021_37672 = state_36012__$1;
(statearr_36021_37672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (6))){
var state_36012__$1 = state_36012;
var statearr_36023_37674 = state_36012__$1;
(statearr_36023_37674[(2)] = null);

(statearr_36023_37674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (17))){
var inst_36005 = (state_36012[(2)]);
var state_36012__$1 = (function (){var statearr_36025 = state_36012;
(statearr_36025[(10)] = inst_36005);

return statearr_36025;
})();
var statearr_36027_37683 = state_36012__$1;
(statearr_36027_37683[(2)] = null);

(statearr_36027_37683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (3))){
var inst_36010 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36012__$1,inst_36010);
} else {
if((state_val_36013 === (12))){
var _ = (function (){var statearr_36031 = state_36012;
(statearr_36031[(4)] = cljs.core.rest((state_36012[(4)])));

return statearr_36031;
})();
var state_36012__$1 = state_36012;
var ex36024 = (state_36012__$1[(2)]);
var statearr_36032_37688 = state_36012__$1;
(statearr_36032_37688[(5)] = ex36024);


if((ex36024 instanceof Object)){
var statearr_36033_37689 = state_36012__$1;
(statearr_36033_37689[(1)] = (11));

(statearr_36033_37689[(5)] = null);

} else {
throw ex36024;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (2))){
var inst_35969 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35970 = cnt;
var inst_35971 = (0);
var state_36012__$1 = (function (){var statearr_36037 = state_36012;
(statearr_36037[(11)] = inst_35969);

(statearr_36037[(7)] = inst_35970);

(statearr_36037[(8)] = inst_35971);

return statearr_36037;
})();
var statearr_36038_37706 = state_36012__$1;
(statearr_36038_37706[(2)] = null);

(statearr_36038_37706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (11))){
var inst_35977 = (state_36012[(2)]);
var inst_35978 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36012__$1 = (function (){var statearr_36041 = state_36012;
(statearr_36041[(12)] = inst_35977);

return statearr_36041;
})();
var statearr_36043_37717 = state_36012__$1;
(statearr_36043_37717[(2)] = inst_35978);

(statearr_36043_37717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (9))){
var inst_35971 = (state_36012[(8)]);
var _ = (function (){var statearr_36044 = state_36012;
(statearr_36044[(4)] = cljs.core.cons((12),(state_36012[(4)])));

return statearr_36044;
})();
var inst_35984 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35971) : chs__$1.call(null,inst_35971));
var inst_35985 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35971) : done.call(null,inst_35971));
var inst_35986 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35984,inst_35985);
var ___$1 = (function (){var statearr_36045 = state_36012;
(statearr_36045[(4)] = cljs.core.rest((state_36012[(4)])));

return statearr_36045;
})();
var state_36012__$1 = state_36012;
var statearr_36046_37728 = state_36012__$1;
(statearr_36046_37728[(2)] = inst_35986);

(statearr_36046_37728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (5))){
var inst_35996 = (state_36012[(2)]);
var state_36012__$1 = (function (){var statearr_36047 = state_36012;
(statearr_36047[(13)] = inst_35996);

return statearr_36047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36012__$1,(13),dchan);
} else {
if((state_val_36013 === (14))){
var inst_36001 = cljs.core.async.close_BANG_(out);
var state_36012__$1 = state_36012;
var statearr_36048_37729 = state_36012__$1;
(statearr_36048_37729[(2)] = inst_36001);

(statearr_36048_37729[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (16))){
var inst_36008 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36052_37730 = state_36012__$1;
(statearr_36052_37730[(2)] = inst_36008);

(statearr_36052_37730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (10))){
var inst_35971 = (state_36012[(8)]);
var inst_35989 = (state_36012[(2)]);
var inst_35990 = (inst_35971 + (1));
var inst_35971__$1 = inst_35990;
var state_36012__$1 = (function (){var statearr_36053 = state_36012;
(statearr_36053[(14)] = inst_35989);

(statearr_36053[(8)] = inst_35971__$1);

return statearr_36053;
})();
var statearr_36054_37732 = state_36012__$1;
(statearr_36054_37732[(2)] = null);

(statearr_36054_37732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (8))){
var inst_35994 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36055_37733 = state_36012__$1;
(statearr_36055_37733[(2)] = inst_35994);

(statearr_36055_37733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36056[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36056[(1)] = (1));

return statearr_36056;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36012){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36012);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36057){var ex__33663__auto__ = e36057;
var statearr_36058_37751 = state_36012;
(statearr_36058_37751[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36012[(4)]))){
var statearr_36059_37752 = state_36012;
(statearr_36059_37752[(1)] = cljs.core.first((state_36012[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37760 = state_36012;
state_36012 = G__37760;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36067 = f__34189__auto__();
(statearr_36067[(6)] = c__34188__auto___37634);

return statearr_36067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36082 = arguments.length;
switch (G__36082) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34188__auto___37768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36124){
var state_val_36125 = (state_36124[(1)]);
if((state_val_36125 === (7))){
var inst_36097 = (state_36124[(7)]);
var inst_36098 = (state_36124[(8)]);
var inst_36097__$1 = (state_36124[(2)]);
var inst_36098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36097__$1,(0),null);
var inst_36099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36097__$1,(1),null);
var inst_36103 = (inst_36098__$1 == null);
var state_36124__$1 = (function (){var statearr_36129 = state_36124;
(statearr_36129[(7)] = inst_36097__$1);

(statearr_36129[(9)] = inst_36099);

(statearr_36129[(8)] = inst_36098__$1);

return statearr_36129;
})();
if(cljs.core.truth_(inst_36103)){
var statearr_36130_37785 = state_36124__$1;
(statearr_36130_37785[(1)] = (8));

} else {
var statearr_36131_37786 = state_36124__$1;
(statearr_36131_37786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (1))){
var inst_36083 = cljs.core.vec(chs);
var inst_36084 = inst_36083;
var state_36124__$1 = (function (){var statearr_36132 = state_36124;
(statearr_36132[(10)] = inst_36084);

return statearr_36132;
})();
var statearr_36133_37802 = state_36124__$1;
(statearr_36133_37802[(2)] = null);

(statearr_36133_37802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (4))){
var inst_36084 = (state_36124[(10)]);
var state_36124__$1 = state_36124;
return cljs.core.async.ioc_alts_BANG_(state_36124__$1,(7),inst_36084);
} else {
if((state_val_36125 === (6))){
var inst_36120 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
var statearr_36134_37807 = state_36124__$1;
(statearr_36134_37807[(2)] = inst_36120);

(statearr_36134_37807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (3))){
var inst_36122 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36124__$1,inst_36122);
} else {
if((state_val_36125 === (2))){
var inst_36084 = (state_36124[(10)]);
var inst_36086 = cljs.core.count(inst_36084);
var inst_36087 = (inst_36086 > (0));
var state_36124__$1 = state_36124;
if(cljs.core.truth_(inst_36087)){
var statearr_36136_37815 = state_36124__$1;
(statearr_36136_37815[(1)] = (4));

} else {
var statearr_36138_37816 = state_36124__$1;
(statearr_36138_37816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (11))){
var inst_36084 = (state_36124[(10)]);
var inst_36110 = (state_36124[(2)]);
var tmp36135 = inst_36084;
var inst_36084__$1 = tmp36135;
var state_36124__$1 = (function (){var statearr_36142 = state_36124;
(statearr_36142[(10)] = inst_36084__$1);

(statearr_36142[(11)] = inst_36110);

return statearr_36142;
})();
var statearr_36143_37832 = state_36124__$1;
(statearr_36143_37832[(2)] = null);

(statearr_36143_37832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (9))){
var inst_36098 = (state_36124[(8)]);
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36124__$1,(11),out,inst_36098);
} else {
if((state_val_36125 === (5))){
var inst_36118 = cljs.core.async.close_BANG_(out);
var state_36124__$1 = state_36124;
var statearr_36144_37838 = state_36124__$1;
(statearr_36144_37838[(2)] = inst_36118);

(statearr_36144_37838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (10))){
var inst_36116 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
var statearr_36145_37839 = state_36124__$1;
(statearr_36145_37839[(2)] = inst_36116);

(statearr_36145_37839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (8))){
var inst_36084 = (state_36124[(10)]);
var inst_36097 = (state_36124[(7)]);
var inst_36099 = (state_36124[(9)]);
var inst_36098 = (state_36124[(8)]);
var inst_36105 = (function (){var cs = inst_36084;
var vec__36089 = inst_36097;
var v = inst_36098;
var c = inst_36099;
return (function (p1__36074_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36074_SHARP_);
});
})();
var inst_36106 = cljs.core.filterv(inst_36105,inst_36084);
var inst_36084__$1 = inst_36106;
var state_36124__$1 = (function (){var statearr_36146 = state_36124;
(statearr_36146[(10)] = inst_36084__$1);

return statearr_36146;
})();
var statearr_36147_37846 = state_36124__$1;
(statearr_36147_37846[(2)] = null);

(statearr_36147_37846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36152[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36152[(1)] = (1));

return statearr_36152;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36124){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36124);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36153){var ex__33663__auto__ = e36153;
var statearr_36154_37849 = state_36124;
(statearr_36154_37849[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36124[(4)]))){
var statearr_36155_37850 = state_36124;
(statearr_36155_37850[(1)] = cljs.core.first((state_36124[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37851 = state_36124;
state_36124 = G__37851;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36158 = f__34189__auto__();
(statearr_36158[(6)] = c__34188__auto___37768);

return statearr_36158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36162 = arguments.length;
switch (G__36162) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34188__auto___37853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36186){
var state_val_36187 = (state_36186[(1)]);
if((state_val_36187 === (7))){
var inst_36168 = (state_36186[(7)]);
var inst_36168__$1 = (state_36186[(2)]);
var inst_36169 = (inst_36168__$1 == null);
var inst_36170 = cljs.core.not(inst_36169);
var state_36186__$1 = (function (){var statearr_36190 = state_36186;
(statearr_36190[(7)] = inst_36168__$1);

return statearr_36190;
})();
if(inst_36170){
var statearr_36191_37857 = state_36186__$1;
(statearr_36191_37857[(1)] = (8));

} else {
var statearr_36192_37858 = state_36186__$1;
(statearr_36192_37858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (1))){
var inst_36163 = (0);
var state_36186__$1 = (function (){var statearr_36193 = state_36186;
(statearr_36193[(8)] = inst_36163);

return statearr_36193;
})();
var statearr_36194_37860 = state_36186__$1;
(statearr_36194_37860[(2)] = null);

(statearr_36194_37860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (4))){
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36186__$1,(7),ch);
} else {
if((state_val_36187 === (6))){
var inst_36181 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36196_37862 = state_36186__$1;
(statearr_36196_37862[(2)] = inst_36181);

(statearr_36196_37862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (3))){
var inst_36183 = (state_36186[(2)]);
var inst_36184 = cljs.core.async.close_BANG_(out);
var state_36186__$1 = (function (){var statearr_36201 = state_36186;
(statearr_36201[(9)] = inst_36183);

return statearr_36201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36186__$1,inst_36184);
} else {
if((state_val_36187 === (2))){
var inst_36163 = (state_36186[(8)]);
var inst_36165 = (inst_36163 < n);
var state_36186__$1 = state_36186;
if(cljs.core.truth_(inst_36165)){
var statearr_36202_37868 = state_36186__$1;
(statearr_36202_37868[(1)] = (4));

} else {
var statearr_36203_37869 = state_36186__$1;
(statearr_36203_37869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (11))){
var inst_36163 = (state_36186[(8)]);
var inst_36173 = (state_36186[(2)]);
var inst_36174 = (inst_36163 + (1));
var inst_36163__$1 = inst_36174;
var state_36186__$1 = (function (){var statearr_36204 = state_36186;
(statearr_36204[(10)] = inst_36173);

(statearr_36204[(8)] = inst_36163__$1);

return statearr_36204;
})();
var statearr_36205_37870 = state_36186__$1;
(statearr_36205_37870[(2)] = null);

(statearr_36205_37870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (9))){
var state_36186__$1 = state_36186;
var statearr_36206_37871 = state_36186__$1;
(statearr_36206_37871[(2)] = null);

(statearr_36206_37871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (5))){
var state_36186__$1 = state_36186;
var statearr_36207_37875 = state_36186__$1;
(statearr_36207_37875[(2)] = null);

(statearr_36207_37875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (10))){
var inst_36178 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36208_37878 = state_36186__$1;
(statearr_36208_37878[(2)] = inst_36178);

(statearr_36208_37878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (8))){
var inst_36168 = (state_36186[(7)]);
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36186__$1,(11),out,inst_36168);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36209[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36209[(1)] = (1));

return statearr_36209;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36186){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36186);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36210){var ex__33663__auto__ = e36210;
var statearr_36211_37880 = state_36186;
(statearr_36211_37880[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36186[(4)]))){
var statearr_36212_37881 = state_36186;
(statearr_36212_37881[(1)] = cljs.core.first((state_36186[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37883 = state_36186;
state_36186 = G__37883;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36213 = f__34189__auto__();
(statearr_36213[(6)] = c__34188__auto___37853);

return statearr_36213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36215 = (function (f,ch,meta36216){
this.f = f;
this.ch = ch;
this.meta36216 = meta36216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36217,meta36216__$1){
var self__ = this;
var _36217__$1 = this;
return (new cljs.core.async.t_cljs$core$async36215(self__.f,self__.ch,meta36216__$1));
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36217){
var self__ = this;
var _36217__$1 = this;
return self__.meta36216;
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36224 = (function (f,ch,meta36216,_,fn1,meta36225){
this.f = f;
this.ch = ch;
this.meta36216 = meta36216;
this._ = _;
this.fn1 = fn1;
this.meta36225 = meta36225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36226,meta36225__$1){
var self__ = this;
var _36226__$1 = this;
return (new cljs.core.async.t_cljs$core$async36224(self__.f,self__.ch,self__.meta36216,self__._,self__.fn1,meta36225__$1));
}));

(cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36226){
var self__ = this;
var _36226__$1 = this;
return self__.meta36225;
}));

(cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36214_SHARP_){
var G__36231 = (((p1__36214_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36214_SHARP_) : self__.f.call(null,p1__36214_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36231) : f1.call(null,G__36231));
});
}));

(cljs.core.async.t_cljs$core$async36224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36216","meta36216",-1124070893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36215","cljs.core.async/t_cljs$core$async36215",798286073,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36225","meta36225",2138730193,null)], null);
}));

(cljs.core.async.t_cljs$core$async36224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36224");

(cljs.core.async.t_cljs$core$async36224.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36224.
 */
cljs.core.async.__GT_t_cljs$core$async36224 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36224(f__$1,ch__$1,meta36216__$1,___$2,fn1__$1,meta36225){
return (new cljs.core.async.t_cljs$core$async36224(f__$1,ch__$1,meta36216__$1,___$2,fn1__$1,meta36225));
});

}

return (new cljs.core.async.t_cljs$core$async36224(self__.f,self__.ch,self__.meta36216,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36236 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36236) : self__.f.call(null,G__36236));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36216","meta36216",-1124070893,null)], null);
}));

(cljs.core.async.t_cljs$core$async36215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36215");

(cljs.core.async.t_cljs$core$async36215.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36215.
 */
cljs.core.async.__GT_t_cljs$core$async36215 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36215(f__$1,ch__$1,meta36216){
return (new cljs.core.async.t_cljs$core$async36215(f__$1,ch__$1,meta36216));
});

}

return (new cljs.core.async.t_cljs$core$async36215(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36237 = (function (f,ch,meta36238){
this.f = f;
this.ch = ch;
this.meta36238 = meta36238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36239,meta36238__$1){
var self__ = this;
var _36239__$1 = this;
return (new cljs.core.async.t_cljs$core$async36237(self__.f,self__.ch,meta36238__$1));
}));

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36239){
var self__ = this;
var _36239__$1 = this;
return self__.meta36238;
}));

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36238","meta36238",-362485058,null)], null);
}));

(cljs.core.async.t_cljs$core$async36237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36237");

(cljs.core.async.t_cljs$core$async36237.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36237.
 */
cljs.core.async.__GT_t_cljs$core$async36237 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36237(f__$1,ch__$1,meta36238){
return (new cljs.core.async.t_cljs$core$async36237(f__$1,ch__$1,meta36238));
});

}

return (new cljs.core.async.t_cljs$core$async36237(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36248 = (function (p,ch,meta36249){
this.p = p;
this.ch = ch;
this.meta36249 = meta36249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36250,meta36249__$1){
var self__ = this;
var _36250__$1 = this;
return (new cljs.core.async.t_cljs$core$async36248(self__.p,self__.ch,meta36249__$1));
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36250){
var self__ = this;
var _36250__$1 = this;
return self__.meta36249;
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36249","meta36249",-1597385334,null)], null);
}));

(cljs.core.async.t_cljs$core$async36248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36248");

(cljs.core.async.t_cljs$core$async36248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36248.
 */
cljs.core.async.__GT_t_cljs$core$async36248 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36248(p__$1,ch__$1,meta36249){
return (new cljs.core.async.t_cljs$core$async36248(p__$1,ch__$1,meta36249));
});

}

return (new cljs.core.async.t_cljs$core$async36248(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36257 = arguments.length;
switch (G__36257) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34188__auto___37950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36278){
var state_val_36279 = (state_36278[(1)]);
if((state_val_36279 === (7))){
var inst_36274 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36280_37955 = state_36278__$1;
(statearr_36280_37955[(2)] = inst_36274);

(statearr_36280_37955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (1))){
var state_36278__$1 = state_36278;
var statearr_36281_37958 = state_36278__$1;
(statearr_36281_37958[(2)] = null);

(statearr_36281_37958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (4))){
var inst_36260 = (state_36278[(7)]);
var inst_36260__$1 = (state_36278[(2)]);
var inst_36261 = (inst_36260__$1 == null);
var state_36278__$1 = (function (){var statearr_36282 = state_36278;
(statearr_36282[(7)] = inst_36260__$1);

return statearr_36282;
})();
if(cljs.core.truth_(inst_36261)){
var statearr_36283_37966 = state_36278__$1;
(statearr_36283_37966[(1)] = (5));

} else {
var statearr_36284_37968 = state_36278__$1;
(statearr_36284_37968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (6))){
var inst_36260 = (state_36278[(7)]);
var inst_36265 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36260) : p.call(null,inst_36260));
var state_36278__$1 = state_36278;
if(cljs.core.truth_(inst_36265)){
var statearr_36285_37971 = state_36278__$1;
(statearr_36285_37971[(1)] = (8));

} else {
var statearr_36286_37973 = state_36278__$1;
(statearr_36286_37973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (3))){
var inst_36276 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36278__$1,inst_36276);
} else {
if((state_val_36279 === (2))){
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36278__$1,(4),ch);
} else {
if((state_val_36279 === (11))){
var inst_36268 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36287_37976 = state_36278__$1;
(statearr_36287_37976[(2)] = inst_36268);

(statearr_36287_37976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (9))){
var state_36278__$1 = state_36278;
var statearr_36288_37978 = state_36278__$1;
(statearr_36288_37978[(2)] = null);

(statearr_36288_37978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (5))){
var inst_36263 = cljs.core.async.close_BANG_(out);
var state_36278__$1 = state_36278;
var statearr_36289_37980 = state_36278__$1;
(statearr_36289_37980[(2)] = inst_36263);

(statearr_36289_37980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (10))){
var inst_36271 = (state_36278[(2)]);
var state_36278__$1 = (function (){var statearr_36290 = state_36278;
(statearr_36290[(8)] = inst_36271);

return statearr_36290;
})();
var statearr_36291_37984 = state_36278__$1;
(statearr_36291_37984[(2)] = null);

(statearr_36291_37984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (8))){
var inst_36260 = (state_36278[(7)]);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36278__$1,(11),out,inst_36260);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36292 = [null,null,null,null,null,null,null,null,null];
(statearr_36292[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36292[(1)] = (1));

return statearr_36292;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36278){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36278);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36293){var ex__33663__auto__ = e36293;
var statearr_36294_37986 = state_36278;
(statearr_36294_37986[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36278[(4)]))){
var statearr_36295_37989 = state_36278;
(statearr_36295_37989[(1)] = cljs.core.first((state_36278[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37990 = state_36278;
state_36278 = G__37990;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36296 = f__34189__auto__();
(statearr_36296[(6)] = c__34188__auto___37950);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36298 = arguments.length;
switch (G__36298) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36364){
var state_val_36365 = (state_36364[(1)]);
if((state_val_36365 === (7))){
var inst_36357 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36366_38000 = state_36364__$1;
(statearr_36366_38000[(2)] = inst_36357);

(statearr_36366_38000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (20))){
var inst_36327 = (state_36364[(7)]);
var inst_36338 = (state_36364[(2)]);
var inst_36339 = cljs.core.next(inst_36327);
var inst_36313 = inst_36339;
var inst_36314 = null;
var inst_36315 = (0);
var inst_36316 = (0);
var state_36364__$1 = (function (){var statearr_36367 = state_36364;
(statearr_36367[(8)] = inst_36315);

(statearr_36367[(9)] = inst_36316);

(statearr_36367[(10)] = inst_36313);

(statearr_36367[(11)] = inst_36338);

(statearr_36367[(12)] = inst_36314);

return statearr_36367;
})();
var statearr_36368_38003 = state_36364__$1;
(statearr_36368_38003[(2)] = null);

(statearr_36368_38003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (1))){
var state_36364__$1 = state_36364;
var statearr_36370_38004 = state_36364__$1;
(statearr_36370_38004[(2)] = null);

(statearr_36370_38004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (4))){
var inst_36302 = (state_36364[(13)]);
var inst_36302__$1 = (state_36364[(2)]);
var inst_36303 = (inst_36302__$1 == null);
var state_36364__$1 = (function (){var statearr_36374 = state_36364;
(statearr_36374[(13)] = inst_36302__$1);

return statearr_36374;
})();
if(cljs.core.truth_(inst_36303)){
var statearr_36375_38006 = state_36364__$1;
(statearr_36375_38006[(1)] = (5));

} else {
var statearr_36376_38007 = state_36364__$1;
(statearr_36376_38007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (15))){
var state_36364__$1 = state_36364;
var statearr_36380_38008 = state_36364__$1;
(statearr_36380_38008[(2)] = null);

(statearr_36380_38008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (21))){
var state_36364__$1 = state_36364;
var statearr_36381_38011 = state_36364__$1;
(statearr_36381_38011[(2)] = null);

(statearr_36381_38011[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (13))){
var inst_36315 = (state_36364[(8)]);
var inst_36316 = (state_36364[(9)]);
var inst_36313 = (state_36364[(10)]);
var inst_36314 = (state_36364[(12)]);
var inst_36323 = (state_36364[(2)]);
var inst_36324 = (inst_36316 + (1));
var tmp36377 = inst_36315;
var tmp36378 = inst_36313;
var tmp36379 = inst_36314;
var inst_36313__$1 = tmp36378;
var inst_36314__$1 = tmp36379;
var inst_36315__$1 = tmp36377;
var inst_36316__$1 = inst_36324;
var state_36364__$1 = (function (){var statearr_36382 = state_36364;
(statearr_36382[(8)] = inst_36315__$1);

(statearr_36382[(9)] = inst_36316__$1);

(statearr_36382[(10)] = inst_36313__$1);

(statearr_36382[(14)] = inst_36323);

(statearr_36382[(12)] = inst_36314__$1);

return statearr_36382;
})();
var statearr_36383_38031 = state_36364__$1;
(statearr_36383_38031[(2)] = null);

(statearr_36383_38031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (22))){
var state_36364__$1 = state_36364;
var statearr_36384_38040 = state_36364__$1;
(statearr_36384_38040[(2)] = null);

(statearr_36384_38040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (6))){
var inst_36302 = (state_36364[(13)]);
var inst_36311 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36302) : f.call(null,inst_36302));
var inst_36312 = cljs.core.seq(inst_36311);
var inst_36313 = inst_36312;
var inst_36314 = null;
var inst_36315 = (0);
var inst_36316 = (0);
var state_36364__$1 = (function (){var statearr_36385 = state_36364;
(statearr_36385[(8)] = inst_36315);

(statearr_36385[(9)] = inst_36316);

(statearr_36385[(10)] = inst_36313);

(statearr_36385[(12)] = inst_36314);

return statearr_36385;
})();
var statearr_36386_38061 = state_36364__$1;
(statearr_36386_38061[(2)] = null);

(statearr_36386_38061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (17))){
var inst_36327 = (state_36364[(7)]);
var inst_36331 = cljs.core.chunk_first(inst_36327);
var inst_36332 = cljs.core.chunk_rest(inst_36327);
var inst_36333 = cljs.core.count(inst_36331);
var inst_36313 = inst_36332;
var inst_36314 = inst_36331;
var inst_36315 = inst_36333;
var inst_36316 = (0);
var state_36364__$1 = (function (){var statearr_36387 = state_36364;
(statearr_36387[(8)] = inst_36315);

(statearr_36387[(9)] = inst_36316);

(statearr_36387[(10)] = inst_36313);

(statearr_36387[(12)] = inst_36314);

return statearr_36387;
})();
var statearr_36388_38075 = state_36364__$1;
(statearr_36388_38075[(2)] = null);

(statearr_36388_38075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (3))){
var inst_36359 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36364__$1,inst_36359);
} else {
if((state_val_36365 === (12))){
var inst_36347 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36389_38082 = state_36364__$1;
(statearr_36389_38082[(2)] = inst_36347);

(statearr_36389_38082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (2))){
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36364__$1,(4),in$);
} else {
if((state_val_36365 === (23))){
var inst_36355 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36390_38088 = state_36364__$1;
(statearr_36390_38088[(2)] = inst_36355);

(statearr_36390_38088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (19))){
var inst_36342 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36391_38093 = state_36364__$1;
(statearr_36391_38093[(2)] = inst_36342);

(statearr_36391_38093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (11))){
var inst_36327 = (state_36364[(7)]);
var inst_36313 = (state_36364[(10)]);
var inst_36327__$1 = cljs.core.seq(inst_36313);
var state_36364__$1 = (function (){var statearr_36398 = state_36364;
(statearr_36398[(7)] = inst_36327__$1);

return statearr_36398;
})();
if(inst_36327__$1){
var statearr_36401_38100 = state_36364__$1;
(statearr_36401_38100[(1)] = (14));

} else {
var statearr_36408_38102 = state_36364__$1;
(statearr_36408_38102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (9))){
var inst_36349 = (state_36364[(2)]);
var inst_36350 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36364__$1 = (function (){var statearr_36409 = state_36364;
(statearr_36409[(15)] = inst_36349);

return statearr_36409;
})();
if(cljs.core.truth_(inst_36350)){
var statearr_36416_38113 = state_36364__$1;
(statearr_36416_38113[(1)] = (21));

} else {
var statearr_36417_38120 = state_36364__$1;
(statearr_36417_38120[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (5))){
var inst_36305 = cljs.core.async.close_BANG_(out);
var state_36364__$1 = state_36364;
var statearr_36418_38125 = state_36364__$1;
(statearr_36418_38125[(2)] = inst_36305);

(statearr_36418_38125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (14))){
var inst_36327 = (state_36364[(7)]);
var inst_36329 = cljs.core.chunked_seq_QMARK_(inst_36327);
var state_36364__$1 = state_36364;
if(inst_36329){
var statearr_36419_38126 = state_36364__$1;
(statearr_36419_38126[(1)] = (17));

} else {
var statearr_36420_38128 = state_36364__$1;
(statearr_36420_38128[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (16))){
var inst_36345 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36421_38134 = state_36364__$1;
(statearr_36421_38134[(2)] = inst_36345);

(statearr_36421_38134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (10))){
var inst_36316 = (state_36364[(9)]);
var inst_36314 = (state_36364[(12)]);
var inst_36321 = cljs.core._nth(inst_36314,inst_36316);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36364__$1,(13),out,inst_36321);
} else {
if((state_val_36365 === (18))){
var inst_36327 = (state_36364[(7)]);
var inst_36336 = cljs.core.first(inst_36327);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36364__$1,(20),out,inst_36336);
} else {
if((state_val_36365 === (8))){
var inst_36315 = (state_36364[(8)]);
var inst_36316 = (state_36364[(9)]);
var inst_36318 = (inst_36316 < inst_36315);
var inst_36319 = inst_36318;
var state_36364__$1 = state_36364;
if(cljs.core.truth_(inst_36319)){
var statearr_36442_38143 = state_36364__$1;
(statearr_36442_38143[(1)] = (10));

} else {
var statearr_36443_38148 = state_36364__$1;
(statearr_36443_38148[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33660__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33660__auto____0 = (function (){
var statearr_36444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36444[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33660__auto__);

(statearr_36444[(1)] = (1));

return statearr_36444;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33660__auto____1 = (function (state_36364){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36364);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36445){var ex__33663__auto__ = e36445;
var statearr_36448_38162 = state_36364;
(statearr_36448_38162[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36364[(4)]))){
var statearr_36449_38163 = state_36364;
(statearr_36449_38163[(1)] = cljs.core.first((state_36364[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38165 = state_36364;
state_36364 = G__38165;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33660__auto__ = function(state_36364){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33660__auto____1.call(this,state_36364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33660__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33660__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36450 = f__34189__auto__();
(statearr_36450[(6)] = c__34188__auto__);

return statearr_36450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));

return c__34188__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36453 = arguments.length;
switch (G__36453) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36458 = arguments.length;
switch (G__36458) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36460 = arguments.length;
switch (G__36460) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34188__auto___38179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36484){
var state_val_36485 = (state_36484[(1)]);
if((state_val_36485 === (7))){
var inst_36479 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36486_38180 = state_36484__$1;
(statearr_36486_38180[(2)] = inst_36479);

(statearr_36486_38180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (1))){
var inst_36461 = null;
var state_36484__$1 = (function (){var statearr_36487 = state_36484;
(statearr_36487[(7)] = inst_36461);

return statearr_36487;
})();
var statearr_36488_38181 = state_36484__$1;
(statearr_36488_38181[(2)] = null);

(statearr_36488_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (4))){
var inst_36464 = (state_36484[(8)]);
var inst_36464__$1 = (state_36484[(2)]);
var inst_36465 = (inst_36464__$1 == null);
var inst_36466 = cljs.core.not(inst_36465);
var state_36484__$1 = (function (){var statearr_36489 = state_36484;
(statearr_36489[(8)] = inst_36464__$1);

return statearr_36489;
})();
if(inst_36466){
var statearr_36490_38186 = state_36484__$1;
(statearr_36490_38186[(1)] = (5));

} else {
var statearr_36491_38193 = state_36484__$1;
(statearr_36491_38193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (6))){
var state_36484__$1 = state_36484;
var statearr_36492_38199 = state_36484__$1;
(statearr_36492_38199[(2)] = null);

(statearr_36492_38199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (3))){
var inst_36481 = (state_36484[(2)]);
var inst_36482 = cljs.core.async.close_BANG_(out);
var state_36484__$1 = (function (){var statearr_36493 = state_36484;
(statearr_36493[(9)] = inst_36481);

return statearr_36493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36484__$1,inst_36482);
} else {
if((state_val_36485 === (2))){
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36484__$1,(4),ch);
} else {
if((state_val_36485 === (11))){
var inst_36464 = (state_36484[(8)]);
var inst_36473 = (state_36484[(2)]);
var inst_36461 = inst_36464;
var state_36484__$1 = (function (){var statearr_36494 = state_36484;
(statearr_36494[(7)] = inst_36461);

(statearr_36494[(10)] = inst_36473);

return statearr_36494;
})();
var statearr_36495_38212 = state_36484__$1;
(statearr_36495_38212[(2)] = null);

(statearr_36495_38212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (9))){
var inst_36464 = (state_36484[(8)]);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36484__$1,(11),out,inst_36464);
} else {
if((state_val_36485 === (5))){
var inst_36461 = (state_36484[(7)]);
var inst_36464 = (state_36484[(8)]);
var inst_36468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36464,inst_36461);
var state_36484__$1 = state_36484;
if(inst_36468){
var statearr_36497_38223 = state_36484__$1;
(statearr_36497_38223[(1)] = (8));

} else {
var statearr_36498_38224 = state_36484__$1;
(statearr_36498_38224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (10))){
var inst_36476 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36499_38230 = state_36484__$1;
(statearr_36499_38230[(2)] = inst_36476);

(statearr_36499_38230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (8))){
var inst_36461 = (state_36484[(7)]);
var tmp36496 = inst_36461;
var inst_36461__$1 = tmp36496;
var state_36484__$1 = (function (){var statearr_36500 = state_36484;
(statearr_36500[(7)] = inst_36461__$1);

return statearr_36500;
})();
var statearr_36501_38243 = state_36484__$1;
(statearr_36501_38243[(2)] = null);

(statearr_36501_38243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36502[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36502[(1)] = (1));

return statearr_36502;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36484){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36484);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36503){var ex__33663__auto__ = e36503;
var statearr_36504_38255 = state_36484;
(statearr_36504_38255[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36484[(4)]))){
var statearr_36505_38256 = state_36484;
(statearr_36505_38256[(1)] = cljs.core.first((state_36484[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38261 = state_36484;
state_36484 = G__38261;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36508 = f__34189__auto__();
(statearr_36508[(6)] = c__34188__auto___38179);

return statearr_36508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36519 = arguments.length;
switch (G__36519) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34188__auto___38268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36557){
var state_val_36558 = (state_36557[(1)]);
if((state_val_36558 === (7))){
var inst_36553 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36559_38272 = state_36557__$1;
(statearr_36559_38272[(2)] = inst_36553);

(statearr_36559_38272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (1))){
var inst_36520 = (new Array(n));
var inst_36521 = inst_36520;
var inst_36522 = (0);
var state_36557__$1 = (function (){var statearr_36560 = state_36557;
(statearr_36560[(7)] = inst_36522);

(statearr_36560[(8)] = inst_36521);

return statearr_36560;
})();
var statearr_36561_38273 = state_36557__$1;
(statearr_36561_38273[(2)] = null);

(statearr_36561_38273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (4))){
var inst_36525 = (state_36557[(9)]);
var inst_36525__$1 = (state_36557[(2)]);
var inst_36526 = (inst_36525__$1 == null);
var inst_36527 = cljs.core.not(inst_36526);
var state_36557__$1 = (function (){var statearr_36562 = state_36557;
(statearr_36562[(9)] = inst_36525__$1);

return statearr_36562;
})();
if(inst_36527){
var statearr_36563_38278 = state_36557__$1;
(statearr_36563_38278[(1)] = (5));

} else {
var statearr_36564_38280 = state_36557__$1;
(statearr_36564_38280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (15))){
var inst_36547 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36565_38287 = state_36557__$1;
(statearr_36565_38287[(2)] = inst_36547);

(statearr_36565_38287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (13))){
var state_36557__$1 = state_36557;
var statearr_36566_38292 = state_36557__$1;
(statearr_36566_38292[(2)] = null);

(statearr_36566_38292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (6))){
var inst_36522 = (state_36557[(7)]);
var inst_36543 = (inst_36522 > (0));
var state_36557__$1 = state_36557;
if(cljs.core.truth_(inst_36543)){
var statearr_36567_38293 = state_36557__$1;
(statearr_36567_38293[(1)] = (12));

} else {
var statearr_36568_38294 = state_36557__$1;
(statearr_36568_38294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (3))){
var inst_36555 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36557__$1,inst_36555);
} else {
if((state_val_36558 === (12))){
var inst_36521 = (state_36557[(8)]);
var inst_36545 = cljs.core.vec(inst_36521);
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36557__$1,(15),out,inst_36545);
} else {
if((state_val_36558 === (2))){
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36557__$1,(4),ch);
} else {
if((state_val_36558 === (11))){
var inst_36537 = (state_36557[(2)]);
var inst_36538 = (new Array(n));
var inst_36521 = inst_36538;
var inst_36522 = (0);
var state_36557__$1 = (function (){var statearr_36571 = state_36557;
(statearr_36571[(10)] = inst_36537);

(statearr_36571[(7)] = inst_36522);

(statearr_36571[(8)] = inst_36521);

return statearr_36571;
})();
var statearr_36572_38299 = state_36557__$1;
(statearr_36572_38299[(2)] = null);

(statearr_36572_38299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (9))){
var inst_36521 = (state_36557[(8)]);
var inst_36535 = cljs.core.vec(inst_36521);
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36557__$1,(11),out,inst_36535);
} else {
if((state_val_36558 === (5))){
var inst_36530 = (state_36557[(11)]);
var inst_36522 = (state_36557[(7)]);
var inst_36525 = (state_36557[(9)]);
var inst_36521 = (state_36557[(8)]);
var inst_36529 = (inst_36521[inst_36522] = inst_36525);
var inst_36530__$1 = (inst_36522 + (1));
var inst_36531 = (inst_36530__$1 < n);
var state_36557__$1 = (function (){var statearr_36575 = state_36557;
(statearr_36575[(11)] = inst_36530__$1);

(statearr_36575[(12)] = inst_36529);

return statearr_36575;
})();
if(cljs.core.truth_(inst_36531)){
var statearr_36577_38302 = state_36557__$1;
(statearr_36577_38302[(1)] = (8));

} else {
var statearr_36579_38303 = state_36557__$1;
(statearr_36579_38303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (14))){
var inst_36550 = (state_36557[(2)]);
var inst_36551 = cljs.core.async.close_BANG_(out);
var state_36557__$1 = (function (){var statearr_36581 = state_36557;
(statearr_36581[(13)] = inst_36550);

return statearr_36581;
})();
var statearr_36582_38307 = state_36557__$1;
(statearr_36582_38307[(2)] = inst_36551);

(statearr_36582_38307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (10))){
var inst_36541 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36583_38308 = state_36557__$1;
(statearr_36583_38308[(2)] = inst_36541);

(statearr_36583_38308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (8))){
var inst_36530 = (state_36557[(11)]);
var inst_36521 = (state_36557[(8)]);
var tmp36580 = inst_36521;
var inst_36521__$1 = tmp36580;
var inst_36522 = inst_36530;
var state_36557__$1 = (function (){var statearr_36585 = state_36557;
(statearr_36585[(7)] = inst_36522);

(statearr_36585[(8)] = inst_36521__$1);

return statearr_36585;
})();
var statearr_36587_38311 = state_36557__$1;
(statearr_36587_38311[(2)] = null);

(statearr_36587_38311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36589[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36589[(1)] = (1));

return statearr_36589;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36557){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36557);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36590){var ex__33663__auto__ = e36590;
var statearr_36591_38315 = state_36557;
(statearr_36591_38315[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36557[(4)]))){
var statearr_36592_38317 = state_36557;
(statearr_36592_38317[(1)] = cljs.core.first((state_36557[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38319 = state_36557;
state_36557 = G__38319;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36593 = f__34189__auto__();
(statearr_36593[(6)] = c__34188__auto___38268);

return statearr_36593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36595 = arguments.length;
switch (G__36595) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34188__auto___38323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34189__auto__ = (function (){var switch__33659__auto__ = (function (state_36637){
var state_val_36638 = (state_36637[(1)]);
if((state_val_36638 === (7))){
var inst_36633 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36642_38327 = state_36637__$1;
(statearr_36642_38327[(2)] = inst_36633);

(statearr_36642_38327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (1))){
var inst_36596 = [];
var inst_36597 = inst_36596;
var inst_36598 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36637__$1 = (function (){var statearr_36643 = state_36637;
(statearr_36643[(7)] = inst_36598);

(statearr_36643[(8)] = inst_36597);

return statearr_36643;
})();
var statearr_36644_38333 = state_36637__$1;
(statearr_36644_38333[(2)] = null);

(statearr_36644_38333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (4))){
var inst_36601 = (state_36637[(9)]);
var inst_36601__$1 = (state_36637[(2)]);
var inst_36602 = (inst_36601__$1 == null);
var inst_36603 = cljs.core.not(inst_36602);
var state_36637__$1 = (function (){var statearr_36645 = state_36637;
(statearr_36645[(9)] = inst_36601__$1);

return statearr_36645;
})();
if(inst_36603){
var statearr_36646_38337 = state_36637__$1;
(statearr_36646_38337[(1)] = (5));

} else {
var statearr_36647_38338 = state_36637__$1;
(statearr_36647_38338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (15))){
var inst_36627 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36648_38339 = state_36637__$1;
(statearr_36648_38339[(2)] = inst_36627);

(statearr_36648_38339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (13))){
var state_36637__$1 = state_36637;
var statearr_36649_38342 = state_36637__$1;
(statearr_36649_38342[(2)] = null);

(statearr_36649_38342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (6))){
var inst_36597 = (state_36637[(8)]);
var inst_36622 = inst_36597.length;
var inst_36623 = (inst_36622 > (0));
var state_36637__$1 = state_36637;
if(cljs.core.truth_(inst_36623)){
var statearr_36650_38346 = state_36637__$1;
(statearr_36650_38346[(1)] = (12));

} else {
var statearr_36651_38348 = state_36637__$1;
(statearr_36651_38348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (3))){
var inst_36635 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36637__$1,inst_36635);
} else {
if((state_val_36638 === (12))){
var inst_36597 = (state_36637[(8)]);
var inst_36625 = cljs.core.vec(inst_36597);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36637__$1,(15),out,inst_36625);
} else {
if((state_val_36638 === (2))){
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36637__$1,(4),ch);
} else {
if((state_val_36638 === (11))){
var inst_36605 = (state_36637[(10)]);
var inst_36601 = (state_36637[(9)]);
var inst_36615 = (state_36637[(2)]);
var inst_36616 = [];
var inst_36617 = inst_36616.push(inst_36601);
var inst_36597 = inst_36616;
var inst_36598 = inst_36605;
var state_36637__$1 = (function (){var statearr_36665 = state_36637;
(statearr_36665[(7)] = inst_36598);

(statearr_36665[(11)] = inst_36617);

(statearr_36665[(12)] = inst_36615);

(statearr_36665[(8)] = inst_36597);

return statearr_36665;
})();
var statearr_36666_38358 = state_36637__$1;
(statearr_36666_38358[(2)] = null);

(statearr_36666_38358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (9))){
var inst_36597 = (state_36637[(8)]);
var inst_36613 = cljs.core.vec(inst_36597);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36637__$1,(11),out,inst_36613);
} else {
if((state_val_36638 === (5))){
var inst_36598 = (state_36637[(7)]);
var inst_36605 = (state_36637[(10)]);
var inst_36601 = (state_36637[(9)]);
var inst_36605__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36601) : f.call(null,inst_36601));
var inst_36606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36605__$1,inst_36598);
var inst_36607 = cljs.core.keyword_identical_QMARK_(inst_36598,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36608 = ((inst_36606) || (inst_36607));
var state_36637__$1 = (function (){var statearr_36671 = state_36637;
(statearr_36671[(10)] = inst_36605__$1);

return statearr_36671;
})();
if(cljs.core.truth_(inst_36608)){
var statearr_36675_38362 = state_36637__$1;
(statearr_36675_38362[(1)] = (8));

} else {
var statearr_36676_38364 = state_36637__$1;
(statearr_36676_38364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (14))){
var inst_36630 = (state_36637[(2)]);
var inst_36631 = cljs.core.async.close_BANG_(out);
var state_36637__$1 = (function (){var statearr_36681 = state_36637;
(statearr_36681[(13)] = inst_36630);

return statearr_36681;
})();
var statearr_36682_38365 = state_36637__$1;
(statearr_36682_38365[(2)] = inst_36631);

(statearr_36682_38365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (10))){
var inst_36620 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36683_38366 = state_36637__$1;
(statearr_36683_38366[(2)] = inst_36620);

(statearr_36683_38366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (8))){
var inst_36605 = (state_36637[(10)]);
var inst_36601 = (state_36637[(9)]);
var inst_36597 = (state_36637[(8)]);
var inst_36610 = inst_36597.push(inst_36601);
var tmp36680 = inst_36597;
var inst_36597__$1 = tmp36680;
var inst_36598 = inst_36605;
var state_36637__$1 = (function (){var statearr_36687 = state_36637;
(statearr_36687[(14)] = inst_36610);

(statearr_36687[(7)] = inst_36598);

(statearr_36687[(8)] = inst_36597__$1);

return statearr_36687;
})();
var statearr_36692_38372 = state_36637__$1;
(statearr_36692_38372[(2)] = null);

(statearr_36692_38372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33660__auto__ = null;
var cljs$core$async$state_machine__33660__auto____0 = (function (){
var statearr_36696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36696[(0)] = cljs$core$async$state_machine__33660__auto__);

(statearr_36696[(1)] = (1));

return statearr_36696;
});
var cljs$core$async$state_machine__33660__auto____1 = (function (state_36637){
while(true){
var ret_value__33661__auto__ = (function (){try{while(true){
var result__33662__auto__ = switch__33659__auto__(state_36637);
if(cljs.core.keyword_identical_QMARK_(result__33662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33662__auto__;
}
break;
}
}catch (e36700){var ex__33663__auto__ = e36700;
var statearr_36705_38377 = state_36637;
(statearr_36705_38377[(2)] = ex__33663__auto__);


if(cljs.core.seq((state_36637[(4)]))){
var statearr_36706_38378 = state_36637;
(statearr_36706_38378[(1)] = cljs.core.first((state_36637[(4)])));

} else {
throw ex__33663__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38379 = state_36637;
state_36637 = G__38379;
continue;
} else {
return ret_value__33661__auto__;
}
break;
}
});
cljs$core$async$state_machine__33660__auto__ = function(state_36637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33660__auto____1.call(this,state_36637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33660__auto____0;
cljs$core$async$state_machine__33660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33660__auto____1;
return cljs$core$async$state_machine__33660__auto__;
})()
})();
var state__34190__auto__ = (function (){var statearr_36707 = f__34189__auto__();
(statearr_36707[(6)] = c__34188__auto___38323);

return statearr_36707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34190__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
