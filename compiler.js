(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "337e35ce18ee17cabbd1ea6354c0947d" })){ return promiseland._getModule("337e35ce18ee17cabbd1ea6354c0947d"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "337e35ce18ee17cabbd1ea6354c0947d", "module": PL$1, promising: true });
var PL$14/*Promise*/;try{PL$14/*Promise*/ = Promise;}catch(e){};
var PL$32/*console*/;try{PL$32/*console*/ = console;}catch(e){};
var PL$35/*Callback*/;try{PL$35/*Callback*/ = Callback;}catch(e){};
var PL$44/*promiseland*/;try{PL$44/*promiseland*/ = promiseland;}catch(e){};
var PL$57/*process*/;try{PL$57/*process*/ = process;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*optimist*/;
var PL$7/*fs*/;
var PL$9/*argv*/;
var PL$10/*isPlandFile*/;
var PL$12/*blockCnt*/;
var PL$13/*stepPs*/;
var PL$15/*step*/;
var PL$16/*block*/;
var PL$26/*unblock*/;
var PL$27/*compile*/;
var PL$54/*watch*/;
var PL$56/*dir*/;
var PL$58/*cb*/;
var PL$59/*monitor*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("optimist").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*optimist*/ = PL$6;
  __requireFun("fs").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*fs*/ = PL$8;
  PL$9/*argv*/ = PL$5/*optimist*/["argv"];
  PL$10/*isPlandFile*/ = (function(PL$11/*fname*/){
  
    ;
    if((PL$11/*fname*/["substr"]((PL$11/*fname*/["length"] - 6)) == ".pland")){
      return true;
    };
    ;
    ;});
  PL$12/*blockCnt*/ = 0;
  PL$13/*stepPs*/ = new PL$14/*Promise*/();
  PL$15/*step*/ = (function(){
  
    ;
    PL$13/*stepPs*/["resolve"]();
    PL$13/*stepPs*/ = new PL$14/*Promise*/();
    ;});
  PL$16/*block*/ = (function(){
  var PL$17 = new __Promise();
  var PL$19/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$17.reject(e);
      };
    };
  };
  var PL$20/*catch rejected*/ = function(e){
    PL$17.reject(e);
  };
  PL$19/*promiseland exception catcher*/(function(){
  
    ;
    var PL$22 = new __Promise();
    var PL$21 = function(){var PL$23 = new __Promise();
    if(PL$12/*blockCnt*/){
    PL$13/*stepPs*/.then(PL$19/*promiseland exception catcher*/(function(PL$24){PL$24;
    PL$23.resolve(true); return PL$23; /* continue */
    ;}), PL$20/*catch rejected*/);
    ;}else{
    PL$23.resolve(false); return PL$23; /* break */
    
    };
    PL$23;return PL$23;
    };
    var PL$25 = function(){PL$21().then(function(contLoop){
    if (contLoop){PL$25();}else{PL$22.resolve();};
    });
    };
    PL$25();
    PL$22.then(function(){;
    ;
    PL$12/*blockCnt*/ += 1;
    PL$15/*step*/();
    PL$17.resolve(); return;});
  })();return PL$17;
  });
  PL$26/*unblock*/ = (function(){
  
    ;
    PL$12/*blockCnt*/ -= 1;
    PL$15/*step*/();
    ;});
  PL$27/*compile*/ = (function(PL$11/*fname*/){
  var PL$28 = new __Promise();
  var PL$30/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$28.reject(e);
      };
    };
  };
  var PL$31/*catch rejected*/ = function(e){
    PL$28.reject(e);
  };
  var PL$34/*callback*/;
  var PL$36/*jsStr*/;
  var PL$41/*codeStr*/;
  var PL$43/*parser*/;
  var PL$45/*res*/;
  PL$30/*promiseland exception catcher*/(function(){
  
    ;
    PL$32/*console*/["log"]("...");
    PL$16/*block*/().then(PL$30/*promiseland exception catcher*/(function(PL$33){PL$33;
    PL$34/*callback*/ = new PL$35/*Callback*/();
    PL$32/*console*/["log"](("processing:" + PL$11/*fname*/));
    PL$36/*jsStr*/ = "";
    var PL$37 = new __Promise();
    var PL$38 = new __Promise();
    var PL$39/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$38.resolve(e); }; }; };
    var PL$40 = function(e){ PL$38.resolve(e); };
    PL$39/*try catch*/(function(){
      PL$7/*fs*/["readFile"](PL$11/*fname*/, {
        "encoding": "utf8"
      }, PL$34/*callback*/);
      PL$34/*callback*/["promise"].then(PL$39/*try catch*/(function(PL$42){PL$41/*codeStr*/ = PL$42[1];
      PL$43/*parser*/ = new PL$44/*promiseland*/["Parser"]();
      PL$43/*parser*/["parse"](PL$41/*codeStr*/).then(PL$39/*try catch*/(function(PL$46){PL$45/*res*/ = PL$46;
      if((PL$45/*res*/["errors"] && PL$45/*res*/["errors"]["length"])){
        PL$32/*console*/["log"](PL$45/*res*/["errors"][0]);
        PL$36/*jsStr*/ = "";
      }else{
      PL$36/*jsStr*/ = PL$45/*res*/["javascript"];
      };
      ;
      PL$37.resolve();}), PL$40);
    ;}), PL$40);
    ;})();
    PL$38.then(PL$30/*promiseland exception catcher*/(function(PL$47/*e*/){
      PL$32/*console*/["log"]("error");
      PL$32/*console*/["log"](PL$47/*e*/);
      PL$37.resolve();;}));
    PL$37.then(PL$30/*promiseland exception catcher*/(function(){;
    ;
    var PL$48 = new __Promise();
    var PL$49 = new __Promise();
    var PL$50/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$49.resolve(e); }; }; };
    var PL$51 = function(e){ PL$49.resolve(e); };
    PL$50/*try catch*/(function(){
      PL$34/*callback*/ = new PL$35/*Callback*/();
      PL$7/*fs*/["writeFile"]((PL$11/*fname*/["substr"](0, (PL$11/*fname*/["length"] - 6)) + ".js"), PL$36/*jsStr*/, PL$34/*callback*/);
      PL$34/*callback*/["promise"].then(PL$50/*try catch*/(function(PL$52){PL$52;
      PL$48.resolve();}), PL$51);
    ;})();
    PL$49.then(PL$30/*promiseland exception catcher*/(function(PL$47/*e*/){
      PL$32/*console*/["log"]("error");
      PL$32/*console*/["log"](PL$47/*e*/);
      PL$48.resolve();;}));
    PL$48.then(PL$30/*promiseland exception catcher*/(function(){;
    ;
    PL$26/*unblock*/();
    PL$28.resolve(); return;}), PL$31/*catch rejected*/)}), PL$31/*catch rejected*/)}), PL$31/*catch rejected*/);
    ;
  })();return PL$28;
  });
  
  var PL$53 = new __Promise();if(PL$9/*argv*/["watch"]){
    __requireFun("watch").then(PL$3/*promiseland exception catcher*/(function(PL$55){PL$54/*watch*/ = PL$55;
    PL$56/*dir*/ = (PL$9/*argv*/["dir"] || PL$57/*process*/["cwd"]());
    PL$58/*cb*/ = new PL$35/*Callback*/();
    PL$54/*watch*/["createMonitor"](PL$56/*dir*/, PL$58/*cb*/);
    PL$58/*cb*/["promise"].then(PL$3/*promiseland exception catcher*/(function(PL$60){PL$59/*monitor*/ = PL$60[0];
    PL$59/*monitor*/["on"]("created", (function(PL$61/*f*/, PL$62/*stat*/){
    
      ;
      if(PL$62/*stat*/["isDirectory"]()){
        return;
      };
      ;
      if(! PL$10/*isPlandFile*/(PL$61/*f*/)){
        return;
      };
      ;
      PL$27/*compile*/(PL$61/*f*/);
      ;}));
    PL$59/*monitor*/["on"]("changed", (function(PL$61/*f*/, PL$63/*curr*/, PL$64/*prev*/){
    
      ;
      if(! PL$10/*isPlandFile*/(PL$61/*f*/)){
        return;
      };
      ;
      PL$27/*compile*/(PL$61/*f*/);
      ;}));
    PL$59/*monitor*/["on"]("removed", (function(PL$61/*f*/, PL$62/*stat*/){
    
      ;
      ;}));
    PL$53.resolve();;}), PL$4/*catch rejected*/);
    ;}), PL$4/*catch rejected*/);
    ;
  }else{PL$53.resolve();
  };PL$53.then(PL$3/*promiseland exception catcher*/(function(PL$65){PL$65;;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();