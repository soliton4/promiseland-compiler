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
var PL$31/*console*/;try{PL$31/*console*/ = console;}catch(e){};
var PL$34/*Callback*/;try{PL$34/*Callback*/ = Callback;}catch(e){};
var PL$43/*promiseland*/;try{PL$43/*promiseland*/ = promiseland;}catch(e){};
var PL$56/*process*/;try{PL$56/*process*/ = process;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
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
var PL$53/*watch*/;
var PL$55/*dir*/;
var PL$57/*cb*/;
var PL$58/*monitor*/;
PL$3(function(){;
__requireFun("optimist").then(PL$3(function(PL$6){PL$5/*optimist*/ = PL$6;
__requireFun("fs").then(PL$3(function(PL$8){PL$7/*fs*/ = PL$8;
PL$9/*argv*/ = PL$5/*optimist*/["argv"];
PL$10/*isPlandFile*/ = (function(PL$11/*fname*/){
;
if((PL$11/*fname*/["substr"]((PL$11/*fname*/["length"] - 6)) == ".pland")){
return true;;
};
;
;
});
PL$12/*blockCnt*/ = 0;
PL$13/*stepPs*/ = new PL$14/*Promise*/();
PL$15/*step*/ = (function(){
;
PL$13/*stepPs*/["resolve"]();;
PL$13/*stepPs*/ = new PL$14/*Promise*/();;
;
});
PL$16/*block*/ = (function(){
var PL$17 = new __Promise();
var PL$19 = function(code){ return function(res){ try{code(res);}catch(e){ PL$17.reject(e); }; }; };
var PL$20 = function(e){ PL$17.reject(e); };
PL$19(function(){;
var PL$22 = new __Promise();
var PL$21 = function(){var PL$23 = new __Promise();
if(PL$12/*blockCnt*/){PL$13/*stepPs*/.then(PL$19(function(PL$24){PL$24;;
PL$23.resolve(true); return PL$23;
;
}), PL$20);
;}else{PL$23.resolve(false); return PL$23;
};
PL$23;
return PL$23;
};
var PL$25 = function(){PL$21().then(function(contLoop){
if (contLoop){PL$25();}else{PL$22.resolve();};
});
};
PL$25();
PL$22.then(function(){;
;
PL$12/*blockCnt*/ += 1;;
PL$15/*step*/();;
PL$17.resolve(); return;;
});})();
return PL$17;
});
PL$26/*unblock*/ = (function(){
;
PL$12/*blockCnt*/ -= 1;;
PL$15/*step*/();;
;
});
PL$27/*compile*/ = (function(PL$11/*fname*/){
var PL$28 = new __Promise();
var PL$29 = function(code){ return function(res){ try{code(res);}catch(e){ PL$28.reject(e); }; }; };
var PL$30 = function(e){ PL$28.reject(e); };
var PL$33/*callback*/;
var PL$35/*jsStr*/;
var PL$40/*codeStr*/;
var PL$42/*parser*/;
var PL$44/*res*/;
PL$29(function(){;
PL$31/*console*/["log"]("...");;
PL$16/*block*/().then(PL$29(function(PL$32){PL$32;;
PL$33/*callback*/ = new PL$34/*Callback*/();
PL$31/*console*/["log"](("processing:" + PL$11/*fname*/));;
PL$35/*jsStr*/ = "";
var PL$36 = new __Promise();
var PL$37 = new __Promise();
var PL$38/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$37.resolve(e); }; }; };
var PL$39 = function(e){ PL$37.resolve(e); };
PL$38/*try catch*/(function(){PL$7/*fs*/["readFile"](PL$11/*fname*/, {"encoding": "utf8"}, PL$33/*callback*/);;
PL$33/*callback*/["promise"].then(PL$38/*try catch*/(function(PL$41){PL$40/*codeStr*/ = PL$41[1];
PL$42/*parser*/ = new PL$43/*promiseland*/["Parser"]();
PL$42/*parser*/["parse"](PL$40/*codeStr*/).then(PL$38/*try catch*/(function(PL$45){PL$44/*res*/ = PL$45;
if((PL$44/*res*/["errors"] && PL$44/*res*/["errors"]["length"])){
PL$31/*console*/["log"](PL$44/*res*/["errors"][0]);;
PL$35/*jsStr*/ = "";;

}else{
PL$35/*jsStr*/ = PL$44/*res*/["javascript"];;
};
;
PL$36.resolve();
}), PL$39);
;}), PL$39);
;})();
PL$37.then(PL$29(function(PL$46/*e*/){PL$31/*console*/["log"]("error");;
PL$31/*console*/["log"](PL$46/*e*/);;
PL$36.resolve();;
}));
PL$36.then(PL$29(function(){;
;
var PL$47 = new __Promise();
var PL$48 = new __Promise();
var PL$49/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$48.resolve(e); }; }; };
var PL$50 = function(e){ PL$48.resolve(e); };
PL$49/*try catch*/(function(){PL$33/*callback*/ = new PL$34/*Callback*/();;
PL$7/*fs*/["writeFile"]((PL$11/*fname*/["substr"](0, (PL$11/*fname*/["length"] - 6)) + ".js"), PL$35/*jsStr*/, PL$33/*callback*/);;
PL$33/*callback*/["promise"].then(PL$49/*try catch*/(function(PL$51){PL$51;;
PL$47.resolve();
}), PL$50);
;})();
PL$48.then(PL$29(function(PL$46/*e*/){PL$31/*console*/["log"]("error");;
PL$31/*console*/["log"](PL$46/*e*/);;
PL$47.resolve();;
}));
PL$47.then(PL$29(function(){;
;
PL$26/*unblock*/();;
PL$28.resolve(); return;;
}), PL$30)}), PL$30)}), PL$30);
;})();
return PL$28;
});
var PL$52 = new __Promise();
if(PL$9/*argv*/["watch"]){
__requireFun("watch").then(PL$3(function(PL$54){PL$53/*watch*/ = PL$54;
PL$55/*dir*/ = (PL$9/*argv*/["dir"] || PL$56/*process*/["cwd"]());
PL$57/*cb*/ = new PL$34/*Callback*/();
PL$53/*watch*/["createMonitor"](PL$55/*dir*/, PL$57/*cb*/);;
PL$57/*cb*/["promise"].then(PL$3(function(PL$59){PL$58/*monitor*/ = PL$59[0];
PL$58/*monitor*/["on"]("created", (function(PL$60/*f*/, PL$61/*stat*/){
;
if(PL$61/*stat*/["isDirectory"]()){
return;;
};
;
if(! PL$10/*isPlandFile*/(PL$60/*f*/)){
return;;
};
;
PL$27/*compile*/(PL$60/*f*/);;
;
}));;
PL$58/*monitor*/["on"]("changed", (function(PL$60/*f*/, PL$62/*curr*/, PL$63/*prev*/){
;
if(! PL$10/*isPlandFile*/(PL$60/*f*/)){
return;;
};
;
PL$27/*compile*/(PL$60/*f*/);;
;
}));;
PL$58/*monitor*/["on"]("removed", (function(PL$60/*f*/, PL$61/*stat*/){
;
;
}));;
PL$52.resolve();;
}), PL$4);
;}), PL$4);
;
}else{
PL$52.resolve();}; PL$52.then(function(){;
;
PL$1.resolve(); return;;
});}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();