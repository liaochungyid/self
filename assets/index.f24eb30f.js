import{r as o,j as D,u as v,L as F,F as b,a as L,b as x,c as y,d as j,e as f,f as N,R as P,g as C,h as S,i as w,B as I}from"./vendor.313be41c.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerpolicy&&(n.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?n.credentials="include":u.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(u){if(u.ep)return;u.ep=!0;const n=a(u);fetch(u.href,n)}};O();const R="_title_116b8_3",M="_navbar_116b8_15",$="_navLink_116b8_27",G="_active_116b8_51";var l={title:R,navbar:M,navLink:$,active:G};const k=o.exports.createContext({selfIntro:["\u71B1\u611B\u89E3\u6C7A\u5404\u5F0F\u554F\u984C\uFF0C\u6E05\u6670\u7684\u908F\u8F2F\u63A8\u7406\uFF0C\u4F7F\u6211\u5728\u6B77\u7D93\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u5747\u7372\u5F97\u540C\u4E8B\u8207\u4E3B\u7BA1\u7684\u8A8D\u53EF","\u5C0D\u65BC\u6A21\u7CCA\u4E0D\u78BA\u5B9A\u7684\u672A\u4F86\u8DA8\u52E2\uFF0C\u6210\u70BA\u9A45\u52D5\u6211\u8F49\u63DB\u8DD1\u9053\u7684\u52D5\u529B","\u5E7E\u7D93\u8F49\u63DB\u8077\u5834\uFF0C\u6700\u7D42\u56DE\u6B78\u6700\u521D\u71B1\u611B\u7DB2\u9801\u958B\u767C\uFF0C\u5C08\u6CE8\u516B\u500B\u6708\u5728 Alpha Camp fullstack \u8AB2\u7A0B\uFF0C\u638C\u63E1\u6700\u57FA\u790E\u80FD\u529B\uFF0C\u4E26\u6301\u7E8C\u4EE5\u5BE6\u4F5C\u589E\u9032\u958B\u767C\u80FD\u529B"],resume:{"Cake Page":"https://www.cakeresume.com/me/liaochungyid","Cake Resume":"https://www.cakeresume.com/liaochungyid"},link:{Linkedin:"https://www.linkedin.com/in/chungyi-liao/",Facebook:"https://www.facebook.com/chungyi.liao/",Github:"https://github.com/liaochungyid",Medium:"https://medium.com/@chungyiliao_29727",Learning:"https://medium.com/@chungyiliao_29727/%E5%BE%9E%E7%97%9E%E5%AE%A2%E9%82%A6%E8%BD%89%E7%A7%BB%E5%88%B0medium-b35ebe603dea?p=b35ebe603dea"},education:[{place:"\u6D77\u8ECD\u8ECD\u5B98\u5B78\u6821",year:"Sep. 2009 - Jun. 2013",position:"\u61C9\u7528\u79D1\u5B78",description:"\u540C\u7D1A\u7B2C\u4E00\u540D\u7562\u696D",order:1,extend:{image:"https://i.imgur.com/2Kw3IdJl.jpg"}},{place:"Cranfield University",year:"Oct. 2018 - Aug. 2019",position:"Pre-master in Engineering",description:"\u56E0\u75AB\u60C5\uFF0C\u672A\u5B8C\u6210\u78A9\u58EB\u5B78\u4F4D",order:3,extend:!1}],skill:{main:["HTML/CSS","JavaScript","TypeScript","Node.js","Git","MySQL","MongoDB","GraphQL","Docker"],framework:["Express","React"],other:["RESTful Api","MVC","Oauth","ES6"]},project:[{name:"Demo on GCP",image:"https://images.cakeresume.com/2p1ZA/liaochungyid/2918ebd7-ec03-4367-8879-d68a2e385b3f.png",intro:"\u4F7F\u7528 GCP \u5C55\u793A Kubernetes \u8207 cloud SQL \u529F\u80FD",features:["\u4F7F\u7528 Kubenetes Engine (LoadBalancer)","\u4F7F\u7528 GCP Cloud SQL proxy (sidecar pattern)","\u4F7F\u7528 GCP Cloud SQL","\u4F7F\u7528 Docker Container"],links:{Git:"https://github.com/liaochungyid/demo-gcp"}},{name:"Simple Twitter",image:"https://images.cakeresume.com/2p1ZA/liaochungyid/27a3eef8-07da-45c0-a236-52c1e0106f24.png",intro:"\u4F7F\u7528 Node.js\u3001express framework\u3001MySQL\u3001Socket.IO \u7B49\u5C55\u793A\u7C21\u6613\u7684 Twitter \u529F\u80FD",features:["MySQL \u8CC7\u6599\u5EAB\u898F\u5283\u5EFA\u7ACB","\u8CC7\u6599\u5EAB CRUD \u64CD\u4F5C\u53CA\u9032\u968E\u95DC\u806F","RESTful \u8DEF\u7531\u53CA API \u8A2D\u8A08","MVC \u67B6\u69CB"],links:{Git:"https://github.com/liaochungyid/twitter-fullstack-2020","Live Demo":"https://simple-twitter-acj.herokuapp.com/signin",Blog:"https://medium.com/@chungyiliao_29727/%E7%AC%AC%E4%B8%80%E5%80%8B%E5%8D%94%E4%BD%9C%E5%B0%88%E6%A1%88-%E5%AF%86%E9%9B%86%E9%96%8B%E7%99%BC%E7%9A%84%E5%8D%94%E4%BD%9C-baa7061c6ccd"}},{name:"One Hundred Peaks - Taiwan",image:"https://images.cakeresume.com/2p1ZA/liaochungyid/2d3ab8b1-911a-490e-94d1-b1cf7aeeaa1f.png",intro:"Node.js \u539F\u751F\u8A9E\u8A00\u958B\u767C(\u7121\u5F8C\u7AEF\u5957\u4EF6)\uFF0C\u5C55\u793A RESTful API \u5F8C\u7AEF\u529F\u80FD\uFF0CXMLHttpsRequest \u65B9\u5F0F\u5C55\u793A\u524D\u5F8C API \u4E32\u63A5",features:["file system \u6A21\u64EC\u8CC7\u6599\u5EAB CRUD","file system \u53CA string.replace \u6A21\u64EC\u6A21\u677F","crypto hash function \u6A21\u64EC\u767B\u5165 session"],links:{Git:"https://github.com/liaochungyid/oneHundredPeaks-taiwan","Live Demo":"https://tranquil-lake-73390.herokuapp.com/"}},{name:"Restaurant Forum",image:"https://images.cakeresume.com/2p1ZA/liaochungyid/4af56138-6016-417d-8e15-e67bbbaec979.png",intro:"",features:["JWT\u8A8D\u8B49\u6A5F\u5236","express \u5F8C\u7AEF\u6846\u67B6","admin\u6B0A\u9650 email:root@example.com password:12345678","user\u6B0A\u9650 email:user1@example.com password: 12345678"],links:{"Live Demo":"https://forum-express-mysql.herokuapp.com/restaurants"}},{name:"\u5BB6\u5EAD\u8A18\u5E33\u672C",image:"https://images.cakeresume.com/2p1ZA/liaochungyid/d292b727-8c1f-48ba-b119-fde715c7f223.png",intro:"",features:["Passport.js Local\u767B\u5165\u8A8D\u8B49\u6A5F\u5236","Passport.js Facebook\u7B2C\u4E09\u65B9\u8A8D\u8B49\u767B\u5165\u6A5F\u5236","NoSQL MongoDB \u8CC7\u6599\u5EAB\u64CD\u4F5C"],links:{"Live Demo":"https://expense-tracker-liaochungyi.herokuapp.com/users/login"}}],experience:{irrelevant:[{place:"\u4E2D\u83EF\u6C11\u570B\u6D77\u8ECD",year:"Jul. 2013 - Aug. 2018",position:"\u6D77\u8ECD\u8F2A\u6A5F\u8ECD\u5B98",description:"\u66FE\u8D74\u7F8E\u63A5\u8266\uFF0C\u671F\u9593\u8CA0\u8CAC\u8F2A\u6A5F\u6599\u914D\u4EF6\u63A1\u8CFC\u8207\u5C08\u6848\u9032\u5EA6\u63A8\u9032",order:2,extend:!1},{place:"\u5927\u4E43\u7DA0\u5FAA\u74B0\u79D1\u6280",year:"Dec. 2019 - Feb. 2021",position:"\u5C08\u6848\u7D93\u7406",description:"\u64D4\u4EFB\u5EE0\u52D9\u898F\u5283\u3001\u74B0\u4FDD\u80FD\u6E90\u8A08\u756B\u9001\u5BE9\u7D93\u7406\uFF0C\u7D44\u7E54\u5718\u968A\u65BC6\u500B\u6708\u5167\u5B8C\u6210\u74B0\u4FDD\u5224\u5B9A\uFF0C\u4E26\u53D6\u5F97\u518D\u751F\u80FD\u6E90\u8A2D\u65BD\u8A2D\u7F6E\u8A31\u53EF\u8B49",order:4,extend:!1},{place:"\u83EF\u5FD7\u71DF\u9020",year:"Mar. 2021 - Nov. 2021",position:"\u73FE\u5834\u5DE5\u7A0B\u5E2B",description:"\u65BC\u53F0\u96FB\u5927\u6F6D\u96FB\u5EE0\u65B0\u5EFA\u54E1\u5DE5\u5BBF\u820D\u8207\u6D3B\u52D5\u4E2D\u5FC3\u64D4\u4EFB\u73FE\u5834\u5DE5\u7A0B\u5E2B\uFF0C\u8CA0\u8CAC\u88DD\u4FEE\u8A73\u5716\u7E6A\u88FD\u3001\u9001\u5BE9\u3001\u76E3\u5DE5",order:5,extend:!1}],related:[{place:"ALPHA Camp \u7DDA\u4E0A\u5B78\u7FD2",year:"Mar. 2021 - Dec. 2021",position:"Fullstack Developer (Specialize in Back-end)",description:"\u904B\u7528\u4E0B\u73ED\u6642\u9593\u81EA\u4E3B\u5B78\u7FD2",order:6,extend:{url:"https://global.turingcerts.com/co/cert?hash=d8e5c68f34d6c0409524e05de2419295bcb29fe1c06e8bd0e135b9891d04a2fa"}}]}}),e=D.exports.jsx,t=D.exports.jsxs;function H(){const i=o.exports.useContext(k),[r,a]=o.exports.useState("");let c=v();o.exports.useEffect(()=>{a(c.pathname)},[c]);function u(n,s){return r===s?[n,l.active].join(" "):n}return t("header",{children:[t("div",{className:l.title,children:[t("div",{children:[e("h1",{children:"\u5ED6\u4EF2\u9038"}),e("h2",{children:"Lyle Liao"})]}),e("button",{type:"button"})]}),t("div",{className:l.navbar,children:[e(F,{className:u(l.navLink,"/"),to:"/",children:"Home"}),e(F,{className:u(l.navLink,"/work"),to:"/work",children:"Work"}),e(F,{className:u(l.navLink,"/profile"),to:"profile",children:"Profile"}),e("a",{className:l.navLink,href:i.resume["Cake Resume"],target:"_blank",children:"Resume"})]})]})}const Q="_introduction_192di_1",T="_h1_192di_15",z="_span_192di_27",q="_a_192di_59",J="_img_192di_107";var m={introduction:Q,h1:T,span:z,a:q,img:J};const U="_icon_1sygq_1";var h={icon:U};function g(i){return t("div",{children:[e("a",{className:h.icon,target:"_blank",href:i.link.Linkedin,children:e(b,{})}),e("a",{className:h.icon,target:"_blank",href:i.link.Github,children:e(L,{})}),e("a",{className:h.icon,target:"_blank",href:i.link.Facebook,children:e(x,{})}),e("a",{className:h.icon,target:"_blank",href:i.link.Medium,children:e(y,{})}),e("a",{className:h.icon,target:"_blank",href:i.link.Learning,children:e(j,{})})]})}function W(i){return t("div",{className:m.introduction,children:[t("h1",{className:m.h1,children:["I'm a ",e("span",{className:m.span,children:"Fullstack Developer"}),e("br",{}),"Welcome ",e("br",{}),"to contact, ",t("a",{className:m.a,target:"_blank",href:"mailto:liaochungyid@gmail.com",children:["here to email me ",e(f,{})]})]}),t("div",{children:[e("img",{className:m.img,src:"https://i.imgur.com/vU6Hba8.jpg?1",alt:"selfie"}),e(g,{link:i.link})]})]})}const Z="_skillContainer_1onmi_1",K="_span_1onmi_9";var B={skillContainer:Z,span:K};function _(i){function r(a){return e("span",{className:B.span,children:a.skillName})}return t("div",{className:B.skillContainer,children:[i.skill.main.map(a=>e(r,{skillName:a},a))," ",e("br",{}),i.skill.framework.map(a=>e(r,{skillName:a},a))," ",e("br",{}),i.skill.other.map(a=>e(r,{skillName:a},a))," ",e("br",{})]})}const V="_project_jbevz_1",X="_card_jbevz_13",Y="_navLink_jbevz_125";var p={project:V,card:X,navLink:Y};function ee(i){function r(u){return e("li",{children:u.feature})}function a(u){return e("a",{href:u.address,children:u.name})}function c(u){return t("div",{className:p.card,children:[e("h2",{children:u.item.name}),e("img",{src:u.item.image,alt:u.item.name}),e("p",{children:u.item.intro}),e("ul",{children:u.item.features.map(n=>e(r,{feature:n},n))}),e("div",{children:Object.keys(u.item.links).map(n=>e(a,{name:n,address:u.item.links.key},n))})]})}return t("div",{className:p.project,children:[i.project.map(u=>e(c,{item:u},u.name)),t(F,{className:p.navLink,to:"/work",children:["MORE...",e(f,{})]})]})}const ue="_profile_1ke0z_1",ne="_intro_1ke0z_17",ie="_eduOrExp_1ke0z_95",te="_navLink_1ke0z_199";var E={profile:ue,intro:ne,eduOrExp:ie,navLink:te};function ae(i){function r(u){return e("p",{children:u.sentence})}function a(u){return t("a",{href:u.link,target:"_blank",children:[u.title," ",e(f,{})]})}function c(u){return t("div",{children:[e("h3",{children:u.item.place}),e("h4",{children:u.item.year}),e("h4",{children:u.item.position}),e("h4",{children:u.item.description})]})}return t("div",{className:E.profile,children:[e("h2",{children:"Profile"}),t("div",{className:E.intro,children:[i.selfIntro.map(u=>e(r,{sentence:u},u)),Object.keys(i.resume).map(u=>e(a,{title:u,link:i.resume[u]},u))]}),e("div",{className:E.eduOrExp,children:i.education.concat(i.experience).map(u=>e(c,{item:u},u.order))}),t(F,{className:E.navLink,to:"/profile",children:["MORE...",e(f,{})]})]})}function re(){const i=o.exports.useContext(k);return t("section",{children:[e(W,{link:i.link}),e(_,{skill:i.skill}),e(ee,{project:i.project.slice(0,2)}),e(ae,{education:i.education,experience:i.experience.related,selfIntro:i.selfIntro,resume:i.resume}),e("div",{className:"homeFootImg",children:e("img",{src:"https://i.imgur.com/iG8QUx8.jpg",alt:"foot image"})})]})}const ce="_profile_1j6ee_1",se="_link_1j6ee_11",le="_selfIntroList_1j6ee_23",oe="_resumeList_1j6ee_31",de="_eduOrExpList_1j6ee_55",me="_extendImg_1j6ee_133";var d={profile:ce,link:se,selfIntroList:le,resumeList:oe,eduOrExpList:de,extendImg:me};function he(i){console.log(i);function r(n){return t("a",{className:d.resumeList,href:n.link,target:"_blank",children:[n.title," ",e(f,{})]})}function a(n){return e("p",{className:d.selfIntroList,children:n.sentence})}function c(n){if(n.extend==="image")return t("span",{className:d.extendImg,children:[n.children," ",e("img",{src:n.data})]});if(n.extend==="url")return e("a",{target:"_blank",href:n.data,children:n.children})}function u(n){return t("div",{className:d.eduOrExpList,children:[e("span",{children:n.item.year}),e("span",{children:n.item.place}),e("span",{children:n.item.position}),n.item.extend!==!1?Object.keys(n.item.extend).map(s=>e(c,{extend:s,data:n.item.extend[s],children:e(N,{})})):"",e("p",{children:n.item.description})]})}return t("div",{className:d.profile,children:[t("div",{className:d.link,children:[e(g,{link:i.link}),Object.keys(i.resume).map(n=>e(r,{title:n,link:i.resume[n]},n))]}),i.selfIntro.map(n=>e(a,{sentence:n},n)),e(_,{skill:i.skill}),i.timeline.map(n=>e(u,{item:n}))]})}function Fe(){const i=o.exports.useContext(k),r=i.education.concat(i.experience.irrelevant).concat(i.experience.related).sort((a,c)=>a.order-c.order);return e("div",{children:e(he,{selfIntro:i.selfIntro,resume:i.resume,link:i.link,timeline:r,skill:i.skill})})}const fe="_project_fc9bp_1",Ee="_card_fc9bp_15",ke="_navLink_fc9bp_151";var A={project:fe,card:Ee,navLink:ke};function Ce(i){function r(u){return e("li",{children:u.feature})}function a(u){return e("a",{href:u.address,children:u.name})}function c(u){return t("div",{className:A.card,children:[e("img",{src:u.item.image,alt:u.item.name}),t("div",{children:[e("h2",{children:u.item.name}),e("p",{children:u.item.intro}),e("ul",{children:u.item.features.map(n=>e(r,{feature:n},n))}),e("div",{children:Object.keys(u.item.links).map(n=>e(a,{name:n,address:u.item.links.key},n))})]})]})}return e("div",{className:A.project,children:i.project.map(u=>e(c,{item:u},u.name))})}function pe(){const i=o.exports.useContext(k);return e("div",{children:e(Ce,{project:i.project})})}function Be(){return t("div",{children:[e(H,{}),t(P,{children:[e(C,{path:"/",element:e(re,{})}),e(C,{path:"/work",element:e(pe,{})}),e(C,{path:"/profile",element:e(Fe,{})})]})]})}S.render(e(w.StrictMode,{children:e(I,{children:e(Be,{})})}),document.getElementById("root"));
