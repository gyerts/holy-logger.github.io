(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports={App:"_1o-FpbQrR11SDFN-G7O4U3"}},function(t,e,a){t.exports={Header:"oE2FHo7cZNlt-AhRCtIz3"}},function(t,e,a){t.exports={StatusBar:"_3EeJdNaFlDNPhXTT3h_GUJ"}},function(t,e,a){},function(t,e,a){t.exports={DltLogsViewer:"_3h396Gs-cL24ohYXwZkctS"}},function(t,e,a){t.exports=a(26)},,,,,function(t,e,a){},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(8),i=a.n(s),r=(a(19),a(2)),l=a(3),c=a(6),u=a(4),h=a(5),d=a(1),m=a(9),g=a.n(m),p=a(10),f=a.n(p),v=function(){var t=[f.a.Header,"col-xs-12","col-sm-12","col-md-12","col-lg-12"];return o.a.createElement("div",{className:t.join(" ")})},w=a(11),b=a.n(w),j=function(){return o.a.createElement("div",{className:b.a.StatusBar})},E=a(12),L=a.n(E),x=function t(e){Object(r.a)(this,t),this.count=e.count,this.date=e.date,this.time=e.time,this.msFromStartUp=e.msFromStartUp,this.wtf1=e.wtf1,this.projectName=e.projectName,this.dltAppId=e.dltAppId,this.dltCtx=e.dltCtx,this.wtf2=e.wtf2,this.wtf3=e.wtf3,this.type=e.type,this.mode=e.mode,this.wtf4=e.wtf4,this.message=e.message},O=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={logs:""},a.setLogs=a.setLogs.bind(Object(d.a)(Object(d.a)(a))),a.generate=a.generate.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"setLogs",value:function(t){this.setState({logs:t})}},{key:"generate",value:function(){var t=[],e=this.state.logs.split("\n");for(var a in e)if(e[a]){var n=e[a].split(" "),o=new x({count:n[0],date:n[1],time:n[2],msFromStartUp:n[3],wtf1:n[4],projectName:n[5],dltAppId:n[6],dltCtx:n[7],wtf2:n[7],wtf3:n[8],type:n[9],mode:n[10],wtf4:n[10],message:n.splice(13,n.length).join(" ")});t.push(o)}this.props.onLogsChangeHandler(t)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:L.a.DltLogLoader},o.a.createElement("textarea",{value:this.state.logs,onChange:function(e){return t.setLogs(e.target.value)},name:"dltLogs",id:"dltLogs",cols:"1000",rows:"1000000"}),o.a.createElement("button",{onClick:this.generate},"Generate"))}}]),e}(o.a.Component),y=a(13),N=a.n(y),k=function(t){return console.log(t.log),o.a.createElement("div",{style:{height:"40px",maxHeight:"40px",overflow:"hidden",border:"1px solid #eee",top:"".concat(40*t.log.count,"px"),position:"absolute"}},o.a.createElement("b",null,t.log.count),": ",t.log.message)},C=function(t){return o.a.createElement("div",{style:{border:"1px solid #eee",width:"600px",height:"100%"}},o.a.createElement("h2",null,t.title),o.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},t.children))},S=function(t){var e={};t.logs.map(function(t){var a="".concat(t.dltAppId,": ").concat(t.dltCtx);a in e||(e[a]=[]),e[a].push(t)});var a=[];for(var n in e){var s=[];for(var i in e[n])s.push(o.a.createElement(k,{log:e[n][i]}));a.push(o.a.createElement(C,{title:n},s))}return o.a.createElement("div",{className:N.a.DltLogsViewer},a)},A=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={waitLogs:!0,logs:[]},a.setLogs=a.setLogs.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"setLogs",value:function(t){this.setState({logs:t,waitLogs:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:g.a.App},o.a.createElement(v,null),this.state.waitLogs?o.a.createElement(O,{onLogsChangeHandler:this.setLogs}):o.a.createElement(S,{logs:this.state.logs}),o.a.createElement(j,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.6b068521.chunk.js.map