(function(e){function t(t){for(var o,d,c=t[0],i=t[1],l=t[2],u=0,g=[];u<c.length;u++)d=c[u],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&g.push(r[d][0]),r[d]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(g.length)g.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},r={legend:0},a=[];function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/vcytoscape/demo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;a.push([3,"chunk-vendors","chunk-common"]),n()})({1155:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("8bbf"),r=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cytoscape",attrs:{id:"app"}},[n("vcytoscape",{ref:"cytoscape",staticClass:"cytoscape",attrs:{option:e.option,category:e.category,data:e.graphData}}),n("vcytoscape-legend",{attrs:{data:e.graphData,option:e.legend.nodes,category:e.category},model:{value:e.legendNodeModel,callback:function(t){e.legendNodeModel=t},expression:"legendNodeModel"}})],1)},d=[],c=(n("4de4"),n("caad"),n("45fc"),n("b64b"),n("2532"),n("df9d")),i=n("ea42"),l=n.n(i),s=n("31af"),u=n.n(s),g=n("bf3e"),p=n.n(g),f=n("4b09"),h=n.n(f),b={nodes:{key:"group",styles:{hospital:{"background-image":l.a,"background-width":"80%","background-height":"80%","background-repeat":"no-repeat"},clothes:{"background-image":h.a,"background-width":"80%","background-height":"80%","background-repeat":"no-repeat"},computer:{"background-image":p.a,"background-width":"80%","background-height":"80%","background-repeat":"no-repeat"},person:{"background-image":u.a,"background-width":"80%","background-height":"80%","background-repeat":"no-repeat"}}},edges:[{name:"love",matching:function(e){return"love"===e.group},style:{"source-arrow-shape":"vee","line-style":"dashed","line-color":"#61a0a8",width:1}},{name:"goto",matching:function(e){return"goto"===e.group},style:{"line-style":"dashed","line-color":"#2f4554",width:1}},{name:"has",matching:function(e){return"has"===e.group},style:{"line-style":"dashed","line-color":"#c23531",width:1}}]},y=n("cddb"),v=(n("4160"),n("ac1f"),n("5319"),n("159b"),{nodes:{show:!0,formatter:function(e){var t={hospital:"医院",clothes:"衣服",computer:"电脑",person:"个人"};return Object.keys(t).forEach((function(n){e=e.replace(n,t[n])})),e},orient:"vertical",style:{padding:"10px",top:0,left:0},tagStyle:{borderWidth:"1px",borderStyle:"solid"},inactiveTagStyle:{borderColor:"#ccc"}},edges:{show:!0,style:{padding:"10px",top:0,right:0},tagStyle:{borderRadius:0,borderWidth:0,borderTopWidth:"2px",height:"0px","line-height":"10px"},inactiveTagStyle:{borderColor:"#ccc",backgroundColor:"none"},formatter:function(e){var t={has:"拥有",love:"喜欢",goto:"去过"};return Object.keys(t).forEach((function(n){e=e.replace(n,t[n])})),e}}}),m={name:"cytoscapePage",data:function(){return{category:b,option:y,legend:v,graphData:[],legendNodeFilterId:"",legendEdgeFilterId:"",legendNodeModel:{},legendEdgeModel:{}}},watch:{legendNodeModel:{handler:function(e){this.legendChange(e,"nodes")},deep:!0},legendEdgeModel:{handler:function(e){this.legendChange(e,"edges")},deep:!0}},methods:{legendChange:function(e,t){var n=this.$refs.cytoscape,o=Object.keys(e).filter((function(t){return!e[t]}));"nodes"===t?o.length?this.legendNodeFilterId=n.filterByFunction((function(e){return e.filter((function(e){return e.isEdge()||e.isNode()&&!o.includes(e.data("group"))}))}),this.legendNodeFilterId):this.legendNodeFilterId&&n.resetFilter(this.legendNodeFilterId):o.length?this.legendEdgeFilterId=n.filterByFunction((function(e){var t=e.filter((function(e){return e.isEdge()&&!o.includes(e.data("group"))}));return e.filter((function(e){return t.contains(e)||t.some((function(t){return t.source()===e||t.target()===e}))}))}),this.legendEdgeFilterId):this.legendEdgeFilterId&&n.resetFilter(this.legendEdgeFilterId)}},mounted:function(){var e=this;setTimeout((function(){e.graphData=Object(c["a"])(80)}),100)}},k=m,w=(n("8ca9"),n("2877")),x=Object(w["a"])(k,a,d,!1,null,"1ca37515",null),O=x.exports,j=n("a6bf");r.a.use(j["a"]),new r.a({render:function(e){return e(O)}}).$mount("#app")},"1f1b":function(e,t,n){var o=n("66a3");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("01fa55a0",o,!0,{sourceMap:!1,shadowMode:!1})},3:function(e,t,n){e.exports=n("1155")},"5f72":function(e,t){e.exports=element-ui},"66a3":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".cytoscape[data-v-1ca37515]{position:absolute;left:0;top:0;bottom:0;right:0;z-index:1}",""]),e.exports=t},"8bbf":function(e,t){e.exports=vue},"8ca9":function(e,t,n){"use strict";var o=n("1f1b"),r=n.n(o);r.a},cddb:function(e){e.exports=JSON.parse('{"style":[{"selector":"node","style":{"shape":"round-rectangle"}},{"selector":"node:parent","style":{"background-opacity":0,"border-width":0}},{"selector":"edge","style":{"width":1,"curve-style":"bezier","target-arrow-shape":"vee"}},{"selector":"node[label]","style":{"label":"data(label)","font-size":"9px","color":"#666","z-index":2}},{"selector":"edge[label]","style":{"font-size":"9px","color":"#626867","z-index":1}}],"layout":{"name":"random"}}')}});
//# sourceMappingURL=legend.a6cbf0e3.js.map