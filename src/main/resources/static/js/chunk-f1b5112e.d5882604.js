(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1b5112e"],{"28f8":function(e,t,a){},7901:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aplayer",{directives:[{name:"show",rawName:"v-show",value:e.fileList.length>0&&-1!==e.audioIndex,expression:"fileList.length > 0 && audioIndex !== -1"}],ref:"aplayer",attrs:{id:"aplyer",fixed:"",audio:e.fileList},on:{listSwitch:e.updateCover}})},r=[],s=(a("ac4d"),a("8a81"),a("ac6a"),a("c5f6"),{name:"AudioPlayer",data:function(){return{audioInfo:{}}},props:{fileList:Array,audioIndex:Number},methods:{updateCover:function(){var e=this,t=this.$refs.aplayer.currentMusic;this.$http.get("common/audio-info",{params:{url:t.url}}).then((function(t){var a=t.data.data,i=e.$refs.aplayer.$el;i.getElementsByClassName("aplayer-pic")[0].style.backgroundImage="url("+a.cover+")",i.getElementsByClassName("aplayer-list-light")[0].getElementsByClassName("aplayer-list-author")[0].innerHTML=a.artist}))}},watch:{audioIndex:function(){this.fileList.length>0&&-1!==this.audioIndex?(this.$refs.aplayer.play(),this.$refs.aplayer.switch(this.audioIndex)):this.$refs.aplayer.pause()},fileList:function(e){if(0===e.length)this.$refs.aplayer.pause();else{var t=!0,a=!1,i=void 0;try{for(var r,s=this.fileList[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var l=r.value;l.artist="",l.cover=""}}catch(n){a=!0,i=n}finally{try{t||null==s.return||s.return()}finally{if(a)throw i}}}}},mounted:function(){var e=this.$refs.aplayer.$el;e.getElementsByClassName("aplayer-miniswitcher")[0].click(),e.getElementsByClassName("aplayer-icon-order")[0].setAttribute("title","播放顺序"),e.getElementsByClassName("aplayer-icon-loop")[0].setAttribute("title","循环模式"),e.getElementsByClassName("aplayer-icon-menu")[0].setAttribute("title","播放列表")}}),l=s,n=(a("a710"),a("2877")),o=Object(n["a"])(l,i,r,!1,null,"0d5a77b5",null);t["default"]=o.exports},a710:function(e,t,a){"use strict";var i=a("28f8"),r=a.n(i);r.a}}]);