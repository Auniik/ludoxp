(function(e){function t(t){for(var i,c,s=t[0],l=t[1],a=t[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var i={},n={app:0},o=[];function c(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=i,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(r,i,function(t){return e[t]}.bind(null,i));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ludoxp/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1253:function(e,t,r){"use strict";r("f61c")},"337a":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("7a23");function n(e,t,r,n,o,c){var s=Object(i["j"])("Board");return Object(i["f"])(),Object(i["c"])("div",null,[Object(i["e"])(s)])}var o={class:"board"},c={class:"container"},s={class:"dice-container"},l={class:"board-outside"},a={class:"path-v"},u={class:"path-h"},d=Object(i["e"])("div",{class:"path-c"},null,-1),b={class:"path-h"},f={class:"path-v"},h={key:0,class:"pawn"},v={class:"dice-container"};function O(e,t,r,n,O,p){var j=Object(i["j"])("Dice"),x=Object(i["j"])("Pawns");return Object(i["f"])(),Object(i["c"])("div",o,[Object(i["e"])("div",c,[Object(i["e"])("div",s,[Object(i["e"])(j,{onClick:t[1]||(t[1]=function(e){return p.roll(1)}),score:O.score[1],isDiceRollable:1===O.visibleDice,key:"1",scoreHistory:O.scoreHistory[1]},null,8,["score","isDiceRollable","scoreHistory"]),Object(i["e"])(j,{onClick:t[2]||(t[2]=function(e){return p.roll(0)}),score:O.score[0],isDiceRollable:0===O.visibleDice,key:"0",scoreHistory:O.scoreHistory[0]},null,8,["score","isDiceRollable","scoreHistory"])]),Object(i["e"])("div",l,[Object(i["e"])("div",{class:"room ".concat(O.rollers[0][0].color)},[Object(i["e"])(x,{onClicked:t[3]||(t[3]=function(e){return p.pawnClickedFromRoom(0,e)}),pawns:O.rollers[0]},null,8,["pawns"])],2),Object(i["e"])("div",a,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(O.aile3,(function(e){return Object(i["f"])(),Object(i["c"])("div",{class:"pawn-race  ".concat(p.isSafe(e)?"".concat(O.rollers[1][0].color):""),key:e},Object(i["k"])(e),3)})),128))]),Object(i["e"])("div",{class:"room ".concat(O.rollers[1][0].color)},[Object(i["e"])(x,{onClicked:t[4]||(t[4]=function(e){return p.pawnClickedFromRoom(1,e)}),pawns:O.rollers[1]},null,8,["pawns"])],2),Object(i["e"])("div",u,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(O.aile2,(function(e){return Object(i["f"])(),Object(i["c"])("div",{class:"pawn-race  ".concat(p.isSafe(e)?"".concat(O.rollers[0][0].color):""),key:e},Object(i["k"])(e),3)})),128))]),d,Object(i["e"])("div",b,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(O.aile4,(function(e){return Object(i["f"])(),Object(i["c"])("div",{class:"pawn-race  ".concat(p.isSafe(e)?"".concat(O.rollers[3][0].color):""),key:e},Object(i["k"])(e),3)})),128))]),Object(i["e"])("div",{class:"room ".concat(O.rollers[2][0].color)},[Object(i["e"])(x,{onClicked:t[5]||(t[5]=function(e){return p.pawnClickedFromRoom(2,e)}),pawns:O.rollers[2]},null,8,["pawns"])],2),Object(i["e"])("div",f,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(O.aile1,(function(e){return Object(i["f"])(),Object(i["c"])("div",{class:"pawn-race  ".concat(p.isSafe(e)?"".concat(O.rollers[2][0].color):""),key:e},[p.isAvailablePawn(0,e)?(Object(i["f"])(),Object(i["c"])("div",h," test ")):Object(i["d"])("",!0)],2)})),128))]),Object(i["e"])("div",{class:"room ".concat(O.rollers[3][0].color)},[Object(i["e"])(x,{onClicked:t[6]||(t[6]=function(e){return p.pawnClickedFromRoom(3,e)}),pawns:O.rollers[3]},null,8,["pawns"])],2)]),Object(i["e"])("div",v,[Object(i["e"])(j,{onClick:t[7]||(t[7]=function(e){return p.roll(2)}),score:O.score[2],isDiceRollable:2===O.visibleDice,key:"2",scoreHistory:O.scoreHistory[2]},null,8,["score","isDiceRollable","scoreHistory"]),Object(i["e"])(j,{onClick:t[8]||(t[8]=function(e){return p.roll(3)}),score:O.score[3],isDiceRollable:3===O.visibleDice,key:"3",scoreHistory:O.scoreHistory[3]},null,8,["score","isDiceRollable","scoreHistory"])])]),Object(i["m"])(Object(i["e"])("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=function(e){return O.rollScore=e}),style:{padding:"14px",outline:"0px","font-size":"20px",border:"1px solid"}},null,512),[[i["l"],O.rollScore]]),Object(i["e"])("button",{style:{padding:"20px",border:"0.5px",margin:"15px","font-size":"medium","box-shadow":"1px 1px 6px #969696",background:"white"},onClick:t[10]||(t[10]=function(){return p.resetGame&&p.resetGame.apply(p,arguments)})},"Reset ")])}r("caad"),r("2532"),r("ac1f"),r("1276");var p=Object(i["n"])("data-v-1665dd38");Object(i["h"])("data-v-1665dd38");var j={class:"dice-digit"};Object(i["g"])();var x=p((function(e,t,r,n,o,c){return Object(i["f"])(),Object(i["c"])("div",null,[Object(i["e"])("div",{style:c.activeStyles,class:"dice"},[Object(i["e"])("div",{class:"dice-digit",innerHTML:c.getScore()},null,8,["innerHTML"])],4),c.getAllHistory().length?(Object(i["f"])(!0),Object(i["c"])(i["a"],{key:0},Object(i["i"])(c.getAllHistory(),(function(e){return Object(i["f"])(),Object(i["c"])("div",{class:"small-dice",key:e},[Object(i["e"])("div",j,Object(i["k"])(e),1)])})),128)):Object(i["d"])("",!0)])})),y=r("2909"),w=(r("99af"),r("38cf"),{name:"Dice",props:{score:Array,isDiceRollable:Boolean,scoreHistory:Object},data:function(){return{round:{}}},methods:{getAllHistory:function(){if(!this.scoreHistory)return[];var e=this.scoreHistory,t=e.used,r=e.unused;return[].concat(Object(y["a"])(t),Object(y["a"])(r))},getScore:function(){var e=Object(y["a"])(this.score);return void 0==e?"...":1==e.length?"⊚ ".repeat(e[0]):2==e.length?"⊚ ".repeat(e[1]):3==e.length?"⊚ ".repeat(e[2]):"..."}},computed:{activeStyles:function(){return this.isDiceRollable?"color:green; box-shadow: #000000 -1px 3px 20px 0px":""}}});r("c4307");w.render=x,w.__scopeId="data-v-1665dd38";var k=w,m=Object(i["n"])("data-v-99e91fbe");Object(i["h"])("data-v-99e91fbe");var g={class:"room-box"};Object(i["g"])();var S=m((function(e,t,r,n,o,c){return Object(i["f"])(),Object(i["c"])("div",g,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(r.pawns,(function(t){return Object(i["f"])(),Object(i["c"])("div",{class:"pawn ".concat(t.color),key:"".concat(t.id,"-").concat(t.color),onClick:function(r){return e.$emit("clicked",t)}},Object(i["k"])(t.isActive?"":t.id),11,["onClick"])})),128))])})),R={name:"Pawns",props:{pawns:Array},data:function(){return{}},methods:{},computed:{}};R.render=S,R.__scopeId="data-v-99e91fbe";var P=R,C=r("b822"),H=r("b822").default,A={name:"Board",components:{Dice:k,Pawns:P},data:function(){return{visibleDice:H.eligibleRoller(),rollers:H.rollers,rollScore:1,score:{0:[],1:[],2:[],3:[]},scoreHistory:{},aile1:["5-44-31-18","56-x-x-x","45-32-19-6","4-43-30-17","55-x-x-x","46-33-20-7","3-42-29-16","54-x-x-x","47-34-21-8","2-41-28-15","53-x-x-x","48-35-22-9","1-40-27-14","52-x-x-x","49-36-23-10","x-39-26-13","51-38-25-12","50-37-24-11"],aile2:["13-x-39-26","12-51-38-25","11-50-37-24","14-1-40-27","x-52-x-x","10-49-36-23","15-2-41-28","x-53-x-x","9-48-35-22","16-3-42-29","x-54-x-x","8-47-34-21","17-4-43-30","x-55-x-x","7-46-33-20","18-5-44-31","x-56-x-x","6-45-32-19"],aile3:["24-11-50-37","25-12-51-38","26-13-x-39","23-10-49-36","x-x-52-x","27-14-1-40","22-9-48-35","x-x-53-x","28-15-2-41","21-8-47-34","x-x-54-x","29-16-3-42","20-7-46-33","x-x-55-x","30-17-4-43","19-6-45-32","x-x-56-x","31-18-5-44"],aile4:["32-19-6-45","x-x-x-56","44-31-18-5","33-20-7-46","x-x-x-55","43-30-17-4","34-21-8-47","x-x-x-54","42-29-16-3","35-22-9-48","x-x-x-53","41-28-15-2","36-23-10-49","x-x-x-52","40-27-14-1","37-24-11-50","38-25-12-51","39-26-13-x"]}},methods:{roll:function(e){if(H.eligibleRoller()==e&&!H.isPawnMoveRequired()){try{var t=H.rollTheDice(parseInt(this.rollScore,10)),r=t.unused;this.score[e]=r.length?r:[H.currentRollScore],this.scoreHistory=H.dice.score,H.isPawnMoveRequired()||(this.visibleDice=H.eligibleRoller())}catch(i){console.log(i)}Object(C["updateBoard"])(H)}},isSafe:function(e){var t=["27-14-1-40","22-9-48-35","14-1-40-27","9-48-35-22","35-22-9-48","40-27-14-1","48-35-22-9","1-40-27-14"].includes(e);return t||e.includes("52")||e.includes("53")||e.includes("54")||e.includes("54")||e.includes("55")||e.includes("56")},isAvailablePawn:function(e,t){t.split("-")[e];this.rollers[e]},pawnClickedFromRoom:function(e,t){console.log(e,t),H.currentRoller==e&&H.getScore().unused.some((function(e){return 6===e}))&&H.moveThePawn(6,t.id)},resetGame:function(){Object(C["resetBoard"])(H),window.location.reload()}},computed:{},mounted:function(){}};r("1253");A.render=O;var _=A,D={name:"App",components:{Board:_}};r("6a2a");D.render=n;var I=D;Object(i["b"])(I).mount("#app")},"6a2a":function(e,t,r){"use strict";r("b1b3")},b1b3:function(e,t,r){},b822:function(e,t,r){"use strict";r.r(t),r.d(t,"updateBoard",(function(){return n})),r.d(t,"resetBoard",(function(){return o}));r("159b");var i=r("e143").default,n=function(e){localStorage.setItem("_board",JSON.stringify(e))},o=function(){localStorage.setItem("_board",JSON.stringify(r("e143").default))};if(localStorage.getItem("_board")){var c=JSON.parse(localStorage.getItem("_board"));Object.setPrototypeOf(c,i.__proto__),Object.setPrototypeOf(c.dice,i.dice.__proto__);var s=i.rollers[0][0].__proto__;c.rollers.forEach((function(e){e.forEach((function(e){Object.setPrototypeOf(e,s)}))})),i=c}else n(i);t["default"]=i},c4307:function(e,t,r){"use strict";r("337a")},e143:function(e,t,r){"use strict";r.r(t);var i=r("2909"),n=r("d4ec"),o=r("bee2"),c=r("ade3"),s=(r("d81d"),r("7db0"),r("4de4"),r("99af"),r("caad"),r("2532"),r("c740"),r("a434"),r("2ef0")),l=r.n(s),a=function(){function e(){Object(n["a"])(this,e),Object(c["a"])(this,"score",{0:{used:[],unused:[]},1:{used:[],unused:[]},2:{used:[],unused:[]},3:{used:[],unused:[]}}),Object(c["a"])(this,"eligibleUnit",0),Object(c["a"])(this,"sixCarrier",0),Object(c["a"])(this,"round",1),Object(c["a"])(this,"roller",0),Object(c["a"])(this,"isRoundCompleted",!1),Object(c["a"])(this,"isBreakForNext",!1),Object(c["a"])(this,"rollerHasActivePawn",!1)}return Object(o["a"])(e,[{key:"roll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||this.randomCount();if(this.roller=this.eligibleUnit,0==this.eligibleUnit&&(this.score[this.roller].unused.some((function(e){return 6==e}))||6==t&&this.resetFullScore(!1)),this.isPawnMoveRequired())throw Error("Pawn move required!");if(6==t&&(this.pushScore(t),this.sixCarrier=this.score[this.roller].unused.filter((function(e){return 6===e})).length),3===this.sixCarrier)return this.reInitScore(),this.sixCarrier=0,this.turnNext(),this.isBreakForNext=!1,t;if(!this.rollerHasActivePawn){if(!this.sixCarrier&&6!=t)return this.reInitScore(),this.turnNext(),t;this.sixCarrier=this.score[this.roller].unused.filter((function(e){return 6===e})).length}return 6!=t?(this.pushScore(t),this.isBreakForNext=!0,this.turnNext(),t):void 0}},{key:"isPawnMoveRequired",value:function(){if(this.isBreakForNext)if(this.rollerHasActivePawn){if(3!=this.sixCarrier)return!0}else if(this.sixCarrier)return!0;return!1}},{key:"pushScore",value:function(e){this.score[this.eligibleUnit].unused=[].concat(Object(i["a"])(this.score[this.eligibleUnit].unused),[e])}},{key:"getScore",value:function(){return this.score[this.roller]}},{key:"movePawn",value:function(e,t){var r=this.score[this.roller],n=r.used,o=r.unused;if(6===e&&this.sixCarrier--,!o.includes(e))throw this.isBreakForNext=!0,Error("DON'T be bad I'm your dad!");var c=o.findIndex((function(t){return t===e}));n=[].concat(Object(i["a"])(n),Object(i["a"])(o.splice(c,1))),this.isBreakForNext=!!l.a.size(o);var s=t.move(e),a=s.position;return a||(n=o=[]),this.score[this.roller]={used:n,unused:o},"Pawn Moved"}},{key:"turnNext",value:function(){var e;if(3==this.eligibleUnit)return this.eligibleUnit=0,this.isRoundCompleted=!0,this.isBreakForNext=!0;this.isRoundCompleted=!1,this.eligibleUnit++,this.isBreakForNext=!!l.a.size(null===(e=this.getScore())||void 0===e?void 0:e.unused)}},{key:"resetFullScore",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.score={0:{used:[],unused:[]},1:{used:[],unused:[]},2:{used:[],unused:[]},3:{used:[],unused:[]}},e&&this.round++}},{key:"reInitScore",value:function(){this.score[this.eligibleUnit]={used:[],unused:[]}}},{key:"randomCount",value:function(){return[0,6,5,4,3,2,1][Math.ceil(6*Math.random())]}}]),e}(),u=function(){function e(t,r){Object(n["a"])(this,e),Object(c["a"])(this,"isActive",!1),Object(c["a"])(this,"isInSafeZone",!1),Object(c["a"])(this,"position",0),this.color=["red","green","blue","yellow"][t],this.id=r}return Object(o["a"])(e,[{key:"move",value:function(e){return this.isActive?(this.position+=e,this.isActive=!0,this.isInSafeZone=[1,8,13,21,26,34,39,48,52].includes(this.position),this.query()):(this.position=6==e?1:0,this.isActive=!!this.position,this.isInSafeZone=!!this.position,this.query())}},{key:"query",value:function(){return{isActive:this.isActive,isSafe:this.isInSafeZone,position:this.position}}}]),e}(),d=function(){function e(t){Object(n["a"])(this,e),Object(c["a"])(this,"safe",[1,9,14,22,27,35,40,49,53,54,55,56]),Object(c["a"])(this,"currentRoller",0),Object(c["a"])(this,"currentRollScore",[]),this.dice=t,this.rollers=Object(i["a"])([0,1,2,3].map((function(e){return[0,1,2,3].map((function(t){return new u(e,t)}))})))}return Object(o["a"])(e,[{key:"rollerHasActivePawn",value:function(){return this.rollers[this.currentRoller].some((function(e){return e.isActive}))}},{key:"rollerDoesntHaveActivePawn",value:function(){return!this.rollerHasActivePawn()}},{key:"allPawnIsActive",value:function(){return this.rollers[this.currentRoller].every((function(e){return e.isActive}))}},{key:"allPawnIsNotActive",value:function(){return this.rollers[this.currentRoller].every((function(e){return!e.isActive}))}},{key:"rollTheDice",value:function(e){return this.currentRoller=this.dice.eligibleUnit,this.dice.rollerHasActivePawn=this.rollerHasActivePawn(),this.currentRollScore=this.dice.roll(e),this.dice.getScore()}},{key:"getScore",value:function(){return this.dice.getScore()}},{key:"getRoundScore",value:function(){return this.dice.score}},{key:"moveThePawn",value:function(e,t){var r=this.rollers[this.currentRoller].find((function(e){return e.id===t}));return this.dice.movePawn(e,r),r}},{key:"eligibleRoller",value:function(){return this.dice.eligibleUnit}},{key:"isPawnMoveRequired",value:function(){return this.dice.isPawnMoveRequired()}},{key:"currentRound",value:function(){return this.dice.round}}]),e}();t["default"]=new d(new a)},f61c:function(e,t,r){}});
//# sourceMappingURL=app.64acf306.js.map