(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216045"],{c156:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"h_100vh text-left text-black"},[a("div",{staticClass:"p-3"},[t._m(0),a("div",{staticClass:"row px-5 pb-5 px-md-6"},[a("div",{staticClass:"col-12 px-0 px_lg_15 col-lg-7 col-xl-8"},[t._m(1),a("div",{staticClass:"fz_lg_24"},[t._v(" 今天是 "+t._s(t.nowDate.year)+" "+t._s(t.nowDate.month)+" "+t._s(t.nowDate.day)+" "),a("span",{staticClass:"d-none d-xl-inline-block"},[t._v("-")]),t._v(" "+t._s(t.nowDate.week)+" ")])]),a("div",{staticClass:"col-0 col-lg-5 col-xl-4"},[a("div",{staticClass:"fz_65 fontOrbitron w_340px text-right time_ml_auto d-none d-lg-block"},[a("div",{staticClass:"d-flex justify-content-start align-items-end"},[a("div",{staticClass:"d-inline-block mr-2"},[t._v(t._s(t.nowDate.hour)+" : "+t._s(t.nowDate.min))]),a("div",{staticClass:"fz_30_important d-inline-block mb_13 w_50px"},[t._v(t._s(t.nowDate.sec))])])])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left d-flex align-items-center fz_20 fz_lg_24\n      font-weight-bold mt-3 mb-4 my-lg-4 px-3 px-md-5"},[a("span",{staticClass:"material-icons fz_30 fz_lg_36 mr-2"},[t._v("home")]),t._v(" 首頁 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"fz_24 fz_lg_36 mb-5"},[t._v("您好，歡迎來到"),a("br"),a("span",{staticClass:"fontOrbitron"},[t._v(" Hardware Store Admin ")]),t._v(" 管理系統 ")])}],i=(a("ac1f"),a("1276"),{data:function(){return{nowDate:{year:"",month:"",day:"",week:"",hour:"",min:"",sec:""}}},methods:{updateTime:function(){var t=new Date,e="星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(",");this.nowDate={year:"".concat(t.getFullYear()," 年"),month:"".concat(t.getMonth()+1," 月"),day:"".concat(t.getDate()," 日"),week:"".concat(e[t.getDay()]),hour:"".concat(t.getHours()),min:"".concat(t.getMinutes()),sec:"".concat(t.getSeconds())}}},mounted:function(){this.updateTime(),setInterval(this.updateTime,1e3)}}),c=i,l=a("2877"),o=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d216045.9ec0b1ad.js.map