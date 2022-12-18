import{d as l,o as e,c as t,a as i,t as n,b as g,F as r,r as F,e as h,_ as m,f as D,n as A,g as B,u as C,h as d,i as E}from"./app.681e70df.js";import{T as _}from"./chunks/Title.1267c9d1.js";const y={class:"root"},k=["href"],w=["src","alt"],x={class:"info"},b=["href"],v={class:"intro"},f={class:"tags"},M={class:"tag"},z={class:"tag"},S={key:0},N={key:1},I={class:"tag"},$=l({__name:"AppItem",props:{item:null},setup(u){return(s,c)=>(e(),t("div",null,[i("div",y,[i("a",{href:u.item.link,target:"_blank"},[i("img",{class:"icon",src:u.item.icon,alt:u.item.name},null,8,w)],8,k),i("div",x,[i("span",null,n(u.item.updated),1),g(" | "),i("span",null,n(u.item.category),1)]),i("a",{class:"name",href:u.item.link,target:"_blank"},n(u.item.name),9,b),i("div",v,n(u.item.intro),1),i("div",f,[(e(!0),t(r,null,F(u.item.chip,(a,o)=>(e(),t("div",M,n(a),1))),256)),(e(!0),t(r,null,F({charge:u.item.charge,size:u.item.size},(a,o)=>(e(),t("div",z,[o==="size"?(e(),t("div",S,n(a),1)):h("",!0),o==="charge"?(e(),t("div",N,n(a),1)):h("",!0)]))),256)),(e(!0),t(r,null,F(u.item.tags,(a,o)=>(e(),t("div",I,n(a),1))),256))])])]))}});const P=m($,[["__scopeId","data-v-1bc5d151"]]),T={class:"root"},X={class:"category"},H=["onClick"],O={class:"content"},V=l({__name:"AppStore",props:{apps:null},setup(u){const s=u,c=D({items:["\u5168\u90E8",...new Set(s.apps.map(a=>a.category))],current:"\u5168\u90E8"});return(a,o)=>(e(),t("div",null,[i("div",T,[i("div",X,[(e(!0),t(r,null,F(c.value.items,p=>(e(),t("div",{class:A(["category-item",{"category-item-active":c.value.current===p}]),key:p,onClick:G=>c.value.current=p},n(p),11,H))),128))]),i("div",O,[(e(!0),t(r,null,F(u.apps.filter(p=>c.value.current===c.value.items[0]?!0:p.category===c.value.current),p=>(e(),B(P,{item:p},null,8,["item"]))),256))])])]))}});const L=m(V,[["__scopeId","data-v-fe2808d7"]]),R=[{name:"ClashX",intro:"\u7B80\u5355\u8F7B\u91CF\u5316\u7684\u4EE3\u7406\u5BA2\u6237\u7AEF",link:"https://github.com/yichengchen/clashX",icon:"https://img.in-x.cc/app-icon/clashx.webp",category:"\u7F51\u7EDC\u4EE3\u7406",updated:"2022-12-12",charge:"\u514D\u8D39\u5F00\u6E90",size:"20MB",chip:["AppleChip"],tags:["\u79D1\u5B66\u4E0A\u7F51"]},{name:"SwitchHosts",intro:"\u65B9\u4FBF\u5FEB\u6377\u7684\u7BA1\u7406/\u5207\u6362 Host \u6587\u4EF6",link:"https://swh.app/",icon:"https://img.in-x.cc/app-icon/switchhosts.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-12",charge:"\u514D\u8D39\u5F00\u6E90",size:"81.8MB",chip:["AppleChip","Windows","Linux"],tags:["\u79D1\u5B66\u4E0A\u7F51"]},{name:"Pixelmator Pro",intro:"\u7B80\u5355\u6613\u7528\u7684\u4E13\u4E1A\u56FE\u50CF\u7F16\u8F91\u5DE5\u5177",link:"https://www.pixelmator.com/pro/",icon:"https://img.in-x.cc/app-icon/pixelmator-pro.webp",category:"\u56FE\u50CF\u7F16\u8F91",updated:"2022-12-12",charge:"\u514D\u8D397\u5929+\u4E70\u65AD",size:"81.8MB",chip:["AppleChip"],tags:[]},{name:"Keka",intro:"\u5C0F\u5DE7\u8F7B\u4FBF\u7684\u6587\u4EF6\u538B\u7F29\u5DE5\u5177",link:"http://www.keka.io/zh-cn/",icon:"https://img.in-x.cc/app-icon/keka.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-12",charge:"\u81EA\u613F\u4ED8\u8D39",size:"36.4MB",chip:["AppleChip"],tags:["\u6587\u4EF6\u538B\u7F29"]},{name:"SnippetsLab",intro:"\u4EE3\u7801\u7247\u6BB5 + Markdown \u7BA1\u7406\u5DE5\u5177",link:"https://www.renfei.org/snippets-lab/",icon:"https://img.in-x.cc/app-icon/snippets-lab.webp",category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-12",charge:"\u4E70\u65AD",size:"50.5MB",chip:["AppleChip"],tags:["\u4EE3\u7801\u7247\u6BB5","Markdown"]},{name:"Rectangle Pro",intro:"\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E\u6765\u79FB\u52A8/\u8C03\u6574\u7A97\u53E3\u5927\u5C0F",link:"https://rectangleapp.com/pro",icon:"https://img.in-x.cc/app-icon/rectangle-pro.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D3910\u5929+\u4E70\u65AD",chip:["AppleChip"],size:"14.7MB",tags:["\u7A97\u53E3\u8C03\u6574"]},{name:"HapiGo",intro:"\u591A\u5408\u4E00\u542F\u52A8\u5668\uFF0C\u5373\u65F6\u641C\u7D22\u3001\u5FEB\u901F\u9884\u89C8\u53CA\u76F4\u63A5\u542F\u52A8",link:"https://hapigo.com/",icon:"https://img.in-x.cc/app-icon/hapigo.webp",category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39+\u8BA2\u9605",size:"31.8MB",chip:["AppleChip"],tags:["\u542F\u52A8\u5668","\u526A\u8D34\u677F","\u7FFB\u8BD1"]},{name:"HyperSwitch",intro:"\u8FD8\u539F Windows \u7A97\u53E3\u5207\u6362",link:"https://bahoom.com/hyperswitch",icon:"https://img.in-x.cc/app-icon/hyperswitch.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"2.2\u2006MB",chip:["AppleChip"],tags:["\u7A97\u53E3\u5207\u6362"]},{name:"Karabiner Elements",intro:"\u952E\u76D8/\u9F20\u6807\u6539\u952E\u5DE5\u5177",link:"https://karabiner-elements.pqrs.org/",icon:"https://img.in-x.cc/app-icon/karabiner-elements.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"20.7\u2006MB",chip:["AppleChip"],tags:["\u6539\u952E"]},{name:"MacCopier",intro:"\u81EA\u52A8\u590D\u5236\u77ED\u4FE1\u9A8C\u8BC1\u7801\u5230\u526A\u8D34\u677F",link:"https://github.com/DreamSaddle/MacCopier",icon:"https://img.in-x.cc/app-icon/maccopier.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39\u5F00\u6E90",size:"20.7\u2006MB",chip:["AppleChip"],tags:["\u6539\u952E"]},{name:"\u56FE\u538B",intro:"\u7B80\u5355\u6613\u7528\u7684\u56FE\u7247\u538B\u7F29\u8F6F\u4EF6",link:"https://tuya.xinxiao.tech/",icon:"https://img.in-x.cc/app-icon/tuya.webp",category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39\u5F00\u6E90",size:"75.1MB",chip:["AppleChip","Windows"],tags:["\u56FE\u7247\u538B\u7F29"]},{name:"Android \u6587\u4EF6\u4F20\u8F93",intro:"\u5728 Mac \u7535\u8111\u548C Android \u8BBE\u5907\u4E4B\u95F4\u6D4F\u89C8\u548C\u4F20\u8F93\u6587\u4EF6",link:"https://tuya.xinxiao.tech/",icon:"https://img.in-x.cc/app-icon/usbfistman.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"3.7\u2006MB",chip:["AppleChip"],tags:["\u6587\u4EF6\u4F20\u8F93"]},{name:"MenubarX",intro:"Mac \u83DC\u5355\u680F\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u5728\u83DC\u5355\u680F\u56FA\u5B9A\u4EFB\u4F55\u7F51\u9875",link:"https://menubarx.app/",icon:"https://img.in-x.cc/app-icon/menubarx.webp",category:"\u6548\u7387\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39+\u4E70\u65AD",size:"8\u2006MB",chip:["AppleChip"],tags:["\u6D4F\u89C8\u5668","\u83DC\u5355\u680F\u589E\u5F3A"]},{name:"OpenEmu",intro:"\u591A\u5408\u4E00\u638C\u673A/\u8857\u673A\u6A21\u62DF\u5668\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E GBA/NDS/FC/PSP/\u2026\u2026",link:"https://openemu.org/",icon:"https://img.in-x.cc/app-icon/openemu.webp",category:"\u6E38\u620F\u5DE5\u5177",updated:"2022-12-11",charge:"\u514D\u8D39\u5F00\u6E90",size:"32MB",chip:["AppleChip"],tags:["\u6E38\u620F\u673A\u6A21\u62DF\u5668"]},{name:"Shottr",intro:"\u5C4F\u5E55\u622A\u56FE\u5DE5\u5177\uFF0C\u652F\u6301\u53D6\u8272/\u8D34\u56FE/\u6807\u6CE8/\u6D4B\u91CF/OCR/\u65E0\u75D5\u6253\u7801/\u6EDA\u52A8\u622A\u56FE\u2026\u2026",link:"https://shottr.cc/",icon:"https://img.in-x.cc/app-icon/shottr.webp",category:"\u7CFB\u7EDF\u589E\u5F3A",updated:"2022-12-11",charge:"\u514D\u8D39",size:"1.3MB",chip:["AppleChip"],tags:["\u5C4F\u5E55\u622A\u56FE","\u56FE\u7247\u6253\u7801","OCR"]}],J=JSON.parse('{"title":"INX \u5E94\u7528\u5546\u5E97","titleTemplate":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97","description":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97","frontmatter":{"layout":"page","title":"INX \u5E94\u7528\u5546\u5E97","titleTemplate":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97","description":"\u81F4\u529B\u4E8E\u63A8\u5E7F\u5404\u7C7B\u9AD8\u54C1\u8D28\u8F6F\u4EF6\u7684\u5728\u7EBF\u5E94\u7528\u5546\u5E97"},"headers":[],"relativePath":"app/index.md","lastUpdated":1671154714000}'),W={name:"app/index.md"},U=l({...W,setup(u){const{frontmatter:s}=C();return(c,a)=>(e(),t("div",null,[d(_,{title:E(s).title,subtitle:E(s).titleTemplate},null,8,["title","subtitle"]),d(L,{apps:E(R)},null,8,["apps"])]))}});export{J as __pageData,U as default};