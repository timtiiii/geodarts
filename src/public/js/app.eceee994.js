(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0508":function(t,e,n){},"09ab":function(t,e,n){"use strict";var a=n("cd7f"),r=n.n(a);r.a},1:function(t,e){},1100:function(t,e,n){t.exports=n.p+"img/background.8882e097.jpg"},1771:function(t,e,n){var a={"./background.jpg":"1100","./geoDarts.png":"92f9","./germany_logo.png":"c72b","./logo.png":"cf05","./logo.svg":"9b19"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="1771"},"23ae":function(t,e,n){"use strict";var a=n("74c9"),r=n.n(a);r.a},2976:function(t,e,n){"use strict";var a=n("8bc0"),r=n.n(a);r.a},"2b4a":function(t,e,n){"use strict";var a=n("f8bc"),r=n.n(a);r.a},"2f46":function(t,e,n){},"426a":function(t,e,n){"use strict";var a=n("0508"),r=n.n(a);r.a},4562:function(t,e,n){"use strict";var a=n("2f46"),r=n.n(a);r.a},"507f":function(t,e,n){},"50cb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"app"},c=i,l=n("2877"),u=Object(l["a"])(c,s,o,!1,null,null,null),d=u.exports,m=n("f309");a["a"].use(m["a"]);var p=new m["a"]({theme:{themes:{light:{primary:"#415d68"}}}}),f=n("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"5",align:"center"}},[a("v-img",{attrs:{id:"logo",src:n("92f9")}}),a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Neues Spiel")])],1),a("v-row",[a("GameModeStarter",{attrs:{descr:"Städte in Deutschland",filename:"germany_logo.png"}})],1)],1)],1)],1)],1)],1)],1)},v=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centerContainer"},[a("div",{staticClass:"preview_label",on:{click:function(e){return t.createGameRoom()}}},[a("v-img",{staticClass:"preview-image",attrs:{src:n("1771")("./"+t.filename)}}),a("p",{staticClass:"mode_label font-weight-bold"},[t._v(t._s(t.descr))])],1)])},b=[],y={methods:{addSocketListener:function(t,e){this.$socket.on(t,e)}}},k={props:["descr","filename"],name:"GameModeStarter",mixins:[y],methods:{startRoom:function(t){this.$router.push({name:"invitation",params:{roomId:t.roomId}})},createGameRoom:function(){this.$socket.emit("createRoom","de_cities")}},mounted:function(){this.$socket.connect(),this.addSocketListener("roomCreated",this.startRoom)}},_=k,w=(n("426a"),n("6544")),I=n.n(w),C=n("adda"),$=Object(l["a"])(_,g,b,!1,null,"f3bc485a",null),x=$.exports;I()($,{VImg:C["a"]});var S={name:"App",components:{GameModeStarter:x},data:function(){return{}},created:function(){this.$store.state.playerName=null,this.$store.state.roomId=null}},L=S,O=(n("5df8"),n("7496")),R=n("b0af"),M=n("62ad"),j=n("a523"),E=n("a75b"),T=n("0fd9"),N=n("71d9"),P=n("2a7f"),G=Object(l["a"])(L,h,v,!1,null,null,null),V=G.exports;I()(G,{VApp:O["a"],VCard:R["a"],VCol:M["a"],VContainer:j["a"],VContent:E["a"],VImg:C["a"],VRow:T["a"],VToolbar:N["a"],VToolbarTitle:P["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"pre-game-countdown"}},[a("div",{attrs:{id:"pre-game-countdown-innner"}},[a("v-img",{attrs:{id:"logo",src:n("92f9"),width:"20vw"}}),a("label",{staticStyle:{"background-color":"white"}},[t._v("Das Spiel beginnt...")]),a("label",[t._v("5")])],1)]),a("div",{attrs:{id:"game-layout"}},[a("RankingSection",{attrs:{id:"ranking-section","round-scores":t.roundScores,"total-scores":t.totalScores,round:t.round,"max-round":t.maxRound}}),a("div",{attrs:{id:"game-main-section"}},[a("div",{attrs:{id:"round-header"}},[a("span",{attrs:{id:"city-name"}},[t._v("Wo liegt "+t._s(this.currentCity)+"?")]),a("span",{attrs:{id:"counter"}})]),a("div",{staticClass:"map-container-wrapper"},[a("MapDiv",{ref:"mapDiv",attrs:{guessing:t.guessing}})],1)]),a("ChatSection",{attrs:{id:"chat-section"}})],1)])},D=[],A=(n("c975"),n("baa5"),n("d81d"),n("b0c0"),n("b85c")),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mapContainer"}})},U=[],J=n("e192"),H=n.n(J),W=new a["a"],Y={name:"MapDiv",props:["guessing"],created:function(){var t=this;W.$on("getLngLat",(function(){W.$emit("returnLngLat",t.getLngLat())})),W.$on("clearMarkers",(function(){t.clearTmpMarkers()})),W.$on("showResults",(function(e){t.showResults(e)}))},mounted:function(){this.createMap(),this.map.getCanvas().style="cursor:default",this.map.getCanvas().id="map-canvas",this.map.fitBounds([[10,55],[11,47.2]])},methods:{clearTmpMarkers:function(){var t,e=Object(A["a"])(this.tmpMarkers);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.remove()}}catch(a){e.e(a)}finally{e.f()}this.tmpMarkers=[]},showResults:function(t){this.marker&&(this.marker.remove(),this.marker=null);var e,n=Object(A["a"])(t[0]);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(a.lngLat){var r=(new H.a.Marker).setLngLat(a.lngLat).setPopup(new H.a.Popup({offset:25}).setHTML('<label style="font-weight: bold">'+a.playername+"</label>"));r.addTo(this.map),r.getElement().style.cursor="pointer",this.tmpMarkers.push(r)}}}catch(o){n.e(o)}finally{n.f()}var s=new H.a.Marker({color:"red"}).setLngLat(t[1]);s.addTo(this.map),this.tmpMarkers.push(s),s.getElement().style.cursor="default"},setMarker:function(t){this.marker||(this.marker=new H.a.Marker),this.marker.setLngLat([t.lngLat.lng,t.lngLat.lat]),this.marker.addTo(this.map)},getLngLat:function(){var t;return this.marker&&this.marker._lngLat&&(t=[this.marker._lngLat.lng,this.marker._lngLat.lat]),t},createMap:function(){var t=this;this.map=new H.a.Map({container:"mapContainer",style:"mapbox://styles/ji016/ck9ydjwta2a8e1ipej6d6bsf3/draft",accessToken:"pk.eyJ1IjoiamkwMTYiLCJhIjoiY2s5eWRhOTJ3MDU2MjNncXBnNjN2Y2lkbiJ9.eCET7Z0sCO-ZqAfrtK4WPg",dragPan:!1,center:[10.5,51],zoom:5.2,scrollZoom:!1}),this.map.on("click",(function(e){t.guessing&&(t.setMarker(e),t.$emit("mapClick"))}))}},data:function(){return{roundOngoing:!1,map:{},tmpMarkers:[],marker:null}}},Z=Y,F=(n("2b4a"),Object(l["a"])(Z,z,U,!1,null,"6323e7bb",null)),q=F.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"ranking-section-outer"}},[n("span",{attrs:{id:"round-counter"}},[t._v("Runde "+t._s(t.round)+"/"+t._s(t.maxRound))]),n("div",{attrs:{id:"ranking-section-inner"}},[n("div",[n("span",{staticClass:"table-description"},[t._v("Rundenwertung")]),n("table",{staticClass:"ranking-table",attrs:{id:"round-ranking"}},[t._m(0),t._l(t.roundScores,(function(e){return n("tr",{key:e.playername},[n("td",{staticClass:"name-column"},[t._v(t._s(e.playername))]),n("td",[t._v(t._s(e.distance))]),n("td",[t._v("+"+t._s(e.points))])])}))],2)]),n("div",[n("span",{staticClass:"table-description"},[t._v("Gesamtwertung")]),n("table",{staticClass:"ranking-table ",attrs:{id:"game-ranking"}},[t._m(1),t._l(t.totalScores,(function(e){return n("tr",{key:t.totalScores.indexOf(e)},[n("td",{staticClass:"rank-column"},[t._v(t._s(t.totalScores.indexOf(e)+1)+".")]),n("td",{staticClass:"name-column"},[t._v(t._s(e.playername))]),n("td",{staticClass:"total-column"},[t._v(t._s(e.total))])])}))],2)])])])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{staticClass:"name-column"},[t._v("Spieler")]),n("th",{staticClass:"distance-column"},[t._v("Entfernung")]),n("th",{staticClass:"points-column"},[t._v("Punkte")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{staticClass:"name-column",attrs:{colspan:"2"}},[t._v("Spieler")]),n("th",{staticClass:"total-column"},[t._v("Gesamtpunktzahl")])])}],Q={name:"RankingSection",props:["roundScores","totalScores","round","maxRound"]},tt=Q,et=(n("23ae"),Object(l["a"])(tt,K,X,!1,null,"7684460f",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"chat-section-outer-container"}},[n("span",{attrs:{id:"chat-header"}},[t._v("Chat ")]),n("div",{attrs:{id:"chat"}},[n("div",{attrs:{id:"chat-table-box"}},[n("table",{attrs:{id:"chat-table"}},t._l(t.messages,(function(e){return n("tr",{key:t.messages.indexOf(e)},[n("td",{staticClass:"chat-message-playername"},[t._v(t._s(e.playername)+":")]),n("td",{staticClass:"chat-message-text"},[t._v(t._s(e.message))])])})),0)]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.messageInput,expression:"messageInput"}],attrs:{type:"text",placeholder:"Nachricht",id:"message-input",autofocus:""},domProps:{value:t.messageInput},on:{keydown:t.sendChatMessage,input:function(e){e.target.composing||(t.messageInput=e.target.value)}}})])])])},rt=[],st={name:"ChatSection",mixins:[y],created:function(){var t=this;this.$socket.off("receiveMsg"),this.addSocketListener("receiveMsg",(function(e){return t.addChatMessage(e)}))},methods:{sendChatMessage:function(t){"Enter"===t.key&&(this.$socket.emit("sendMsg",this.messageInput),this.messageInput="")},addChatMessage:function(t){this.$store.state.messages.push({playername:t.playername,message:t.msg}),this.messages=this.$store.state.messages,setTimeout((function(){var t=document.getElementById("chat-table").childNodes;t.length>0&&t[t.length-1].scrollIntoView()}),0)}},data:function(){return{messageInput:"",messages:this.$store.state.messages}}},ot=st,it=(n("09ab"),Object(l["a"])(ot,at,rt,!1,null,"76da6034",null)),ct=it.exports,lt={name:"Game",components:{ChatSection:ct,RankingSection:nt,MapDiv:q},props:["test"],mixins:[y],created:function(){var t=this;this.$store.state.messages=[],this.addSocketListener("startRound",(function(e){t.startRound(e.city),t.round=e.round+1,t.maxRound=e.max_round,t.guessing=!0})),this.addSocketListener("showResult",(function(e){return t.showResults(e)})),this.addSocketListener("roundOver",(function(){W.$emit("getLngLat"),t.showRanking=!0,t.guessing=!1})),this.addSocketListener("gameOver",(function(e){t.newRoomId=e.roomId;var n=e.result.sort((function(t,e){return t.total>e.total||t.total===e.total&&t.totalDistance<e.totalDistance?-1:1}));t.$router.push({name:"results",params:{roomId:t.$store.state.roomId,results:n,newRoomId:t.newRoomId}})}))},mounted:function(){var t=this,e=window.location.href;this.$store.state.roomToken!==e.substring(e.lastIndexOf("/")+1,e.length)?this.$router.push("/"):this.startPreGameCountdown(),W.$on("returnLngLat",(function(e){t.sendMarker(e)}))},methods:{sendMarker:function(t){var e,n=t||null;e={lngLat:n,distance:null,socketId:this.$socket.id},this.$socket.emit("submitMarker",e)},startPreGameCountdown:function(){var t=this,e=5,n=document.getElementById("pre-game-countdown-innner").lastChild;n.innerText=e,this.preGameCounterId=setInterval((function(){e>1?(e-=1,n.innerText=e):(document.getElementById("pre-game-countdown").style.display="none",clearInterval(t.preGameCounterId))}),1e3)},startRound:function(t){var e,n=this;e=t.indexOf(",")>-1?t.substring(0,t.indexOf(",")):t,this.currentCity=e;var a=10;document.getElementById("counter").innerHTML=a,this.counterId=setInterval((function(){a>=1?(a-=1,document.getElementById("counter").innerHTML=a):clearInterval(n.counterId)}),1e3),W.$emit("clearMarkers")},showResults:function(t){W.$emit("showResults",t);var e,n=[],a=[],r=Object(A["a"])(t[0]);try{for(r.s();!(e=r.n()).done;){var s=e.value,o=s.playername;n.push({distance:Math.round(s.distance),playername:o,points:s.points}),a.push({playername:o,total:s.total})}}catch(c){r.e(c)}finally{r.f()}n.sort((function(t,e){return t.distance===e.distance?0:t.distance?e.distance&&t.distance>e.distance?1:-1:1})),a.sort((function(t,e){return t.total>e.total?-1:e.total>t.total?1:0}));var i=function(t){return t?t+"km":"nicht gesetzt"};n.map((function(t){t.distance=i(t.distance)})),this.roundScores=n,this.totalScores=a}},data:function(){return{counterId:null,preGameCounterId:null,roundScores:[],totalScores:[],currentCity:"...",guessing:!1,round:null,maxRound:null,newRoomId:null}},beforeRouteLeave:function(t,e,n){document.getElementById("city-name").innerHTML="",document.getElementById("counter").innerHTML="",clearInterval(this.counterId),clearInterval(this.preGameCounterId),W.$off(),"results"!==t.name&&(this.$store.state.roomToken=null,this.$socket.removeAllListeners(),this.$socket.disconnect()),n()}},ut=lt,dt=(n("4562"),Object(l["a"])(ut,B,D,!1,null,"4babdd8d",null)),mt=dt.exports;I()(dt,{VApp:O["a"],VImg:C["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"fill-height",attrs:{fluid:"",id:"outer-container"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"column"},[n("div",{attrs:{id:"center-card"}},[n("div",{staticClass:"link-container"},[n("p",[t._v("Schicke den folgenden Link an Freunde, um sie zum Spiel einzuladen!")]),n("UrlBox",{attrs:{url:t.link}})],1),this.$store.state.playerName||t.nameEntered?n("v-btn",{attrs:{outlined:"",id:"start-button"},on:{click:t.startGame}},[t._v("Spiel starten ")]):n("NameInput",{ref:"nameInput",on:{nameEntered:t.submitName}})],1),t.numberOfPlayers>0?n("PlayerList",{attrs:{id:"players",names:t.playerNames,"number-of-players":t.numberOfPlayers}}):t._e()],1)])],1)],1)},ft=[],ht=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"url-field"}},[n("input",{staticClass:"noselect",attrs:{type:"text",id:"url",readonly:"",size:t.url.length-10},domProps:{value:t.url}}),n("div",{attrs:{id:"copy-button",title:"Link kopieren"},on:{click:function(e){return t.CopyToClipboard("copy-button")}}},[n("content-copy-icon",{attrs:{id:"copy-icon",title:""}})],1)])}),vt=[],gt=n("3c43"),bt={name:"UrlBox",props:["url"],components:{ContentCopyIcon:gt["a"]},methods:{CopyToClipboard:function(){var t=document.getElementById("url");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.getSelection().empty(),document.getElementById("copy-button").classList.add("clicked")}}},yt=bt,kt=(n("81b0"),Object(l["a"])(yt,ht,vt,!1,null,"3c875a84",null)),_t=kt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"name-input-row"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"name",id:"name-input"},domProps:{value:t.name},on:{keydown:t.enter,input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("button",{attrs:{disabled:t.isDisabled,id:"submit-name"},on:{click:t.submitName}},[t._v("Spiel beitreten")])])},It=[],Ct={name:"NameInput",data:function(){return{name:""}},methods:{enter:function(t){"Enter"===t.key&&this.submitName()},submitName:function(){this.$store.state.playerName=this.name,this.$socket.emit("joinRoom",{roomId:this.$store.state.roomId,name:this.name}),this.$emit("nameEntered",this.name)}},computed:{isDisabled:function(){return this.name.length<1}}},$t=Ct,xt=(n("2976"),Object(l["a"])($t,wt,It,!1,null,"733b94f6",null)),St=xt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"player-list"}},[n("label",[t._v("Beigetreten:")]),n("label",[t._v(" "+t._s(t.numberOfPlayers)+" Spieler")]),n("ul",t._l(t.names,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0)])])},Ot=[],Rt={name:"PlayerList",props:["names","numberOfPlayers"]},Mt=Rt,jt=(n("77f5"),Object(l["a"])(Mt,Lt,Ot,!1,null,"55e1ca2e",null)),Et=jt.exports,Tt={name:"InvitationPage",props:["playerName"],components:{PlayerList:Et,NameInput:St,UrlBox:_t},mixins:[y],methods:{startGame:function(){this.$socket.emit("startGame")},submitName:function(t){this.nameEntered=!0,this.$store.state.playerName=t}},mounted:function(){var t=this,e=window.location.href;this.$store.state.roomId=e.substring(e.lastIndexOf("/")+1,e.length),this.addSocketListener("gameStarted",(function(){t.$store.state.roomToken=t.$store.state.roomId,t.$router.replace("/game/"+t.$store.state.roomId)})),this.addSocketListener("playerUpdate",(function(e){t.numberOfPlayers=e.length,t.playerNames=e.map((function(t){return t.playername}))})),this.addSocketListener("err",(function(){window.location.href="/"}));var n=this.$store.state.playerName;this.$store.state.playerName&&this.$socket.emit("joinRoom",{roomId:this.$store.state.roomId,name:n})},data:function(){return{link:window.location.href,nameEntered:!1,playerNames:[],numberOfPlayers:0}}},Nt=Tt,Pt=(n("f0b1"),n("8336")),Gt=Object(l["a"])(Nt,pt,ft,!1,null,"4ebab161",null),Vt=Gt.exports;I()(Gt,{VApp:O["a"],VBtn:Pt["a"],VContainer:j["a"],VRow:T["a"]});var Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"fill-height",staticStyle:{"justify-content":"center"},attrs:{id:"results-background",fluid:""}},[n("div",{attrs:{id:"final-results-box"}},[n("h1",[t._v("Endergebnis")]),n("table",[n("tr",[n("th",[t._v("Platz")]),n("th",[t._v("Name")]),n("th",[t._v("Gesamtentfernung")]),n("th",[t._v("Punkte")])]),t._l(t.results,(function(e){return n("tr",{key:e.playername},[n("td",{staticClass:"rank"},[t._v(t._s(t.results.indexOf(e)+1)+".")]),n("td",[t._v(t._s(e.playername))]),n("td",{staticClass:"distance"},[t._v(t._s(e.totalDistance)+"km")]),n("td",{staticClass:"points"},[t._v(t._s(e.total))])])}))],2),n("v-btn",{attrs:{id:"new-game-button",outlined:""},on:{click:t.newGame}},[t._v("neues Spiel")])],1),n("ChatSection",{attrs:{id:"chat-section"}})],1)],1)},Dt=[],At={name:"Results",components:{ChatSection:ct},mixins:[y],props:["results","newRoomId"],mounted:function(){var t=this,e=window.location.href;this.$store.state.roomToken!==e.substring(e.lastIndexOf("/")+1,e.length)&&this.$router.push("/"),this.addSocketListener("roomCreated",this.startRoom),this.addSocketListener("checkRoomAnswer",(function(e){2===e?t.$socket.emit("createRoom",{gameType:"de_cities",roomId:t.newRoomId}):1===e&&t.startRoom({roomId:t.newRoomId})}))},data:function(){return{playAnother:!1}},methods:{newGame:function(){this.playAnother=!0,this.$socket.emit("checkRoom",this.newRoomId)},startRoom:function(t){this.$store.state.roomId=t.roomId,this.$router.replace({name:"invitation",params:{roomId:t.roomId}})}},beforeRouteLeave:function(t,e,n){this.$store.state.roomToken=null,this.$socket.removeAllListeners(),this.playAnother||this.$socket.disconnect(),n()}},zt=At,Ut=(n("eeb8"),Object(l["a"])(zt,Bt,Dt,!1,null,"0686eddd",null)),Jt=Ut.exports;I()(Ut,{VApp:O["a"],VBtn:Pt["a"],VContainer:j["a"]}),a["a"].use(f["a"]);var Ht=new f["a"]({routes:[{path:"/game/*",name:"game",component:mt},{path:"/invitation/:roomId",name:"invitation",component:Vt},{path:"/results/:roomId",name:"results",component:Jt,props:!0},{path:"/",name:"landing",component:V},{path:"/*",redirect:"/"}],mode:"history"}),Wt=n("8055"),Yt=n.n(Wt);a["a"].use(r["a"]),a["a"].config.productionTip=!1,a["a"].prototype.$socket=Yt()({transports:["websocket"]}),a["a"].prototype.$messages=[];var Zt=new r["a"].Store({state:{}});new a["a"]({data:{roomId:"abc"},store:Zt,vuetify:p,render:function(t){return t(d)},router:Ht}).$mount("#app")},"5df8":function(t,e,n){"use strict";var a=n("e880"),r=n.n(a);r.a},"74c9":function(t,e,n){},"77f5":function(t,e,n){"use strict";var a=n("8579"),r=n.n(a);r.a},"81b0":function(t,e,n){"use strict";var a=n("c13f"),r=n.n(a);r.a},8579:function(t,e,n){},"8bc0":function(t,e,n){},"92f9":function(t,e,n){t.exports=n.p+"img/geoDarts.c011a72d.png"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},c13f:function(t,e,n){},c72b:function(t,e,n){t.exports=n.p+"img/germany_logo.f5fd5aae.png"},cd7f:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e880:function(t,e,n){},eeb8:function(t,e,n){"use strict";var a=n("50cb"),r=n.n(a);r.a},f0b1:function(t,e,n){"use strict";var a=n("507f"),r=n.n(a);r.a},f8bc:function(t,e,n){}});
//# sourceMappingURL=app.eceee994.js.map