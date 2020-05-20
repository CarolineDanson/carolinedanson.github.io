(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),c=(t(16),t(1)),o=t(2),i=t(4),m=t(3),u=t(7),p=t(10),d=t.n(p),E=(t(19),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,r=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hello there. I'm ",e,"."),l.a.createElement("div",{className:"background-box"},l.a.createElement("h3",null,"I'm a ",l.a.createElement("span",null,a)," based in ",n,". ",t,".")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},r))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Caroline Danson"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,s=this.props.data.address.zip,c=this.props.data.phone,o=this.props.data.email,i=this.props.data.contactmessage;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("span",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Caroline Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("h2",null,"Get in touch?"),l.a.createElement("p",null,i," ",l.a.createElement("a",{className:"smoothscroll",href:"#contact"},l.a.createElement("strong",null," by clicking here"))," or use my contact details below to reach me:"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),s,", ",r),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("span",null,o)))))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h2",null,"RESUME"),l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,l.a.createElement("strong",null,e)),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),g=t(6),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).submitForm=n.submitForm.bind(Object(g.a)(n)),n.state={status:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.status;return l.a.createElement("section",{id:"contact"},l.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mbjzlepr",method:"POST"},l.a.createElement("h1",null,"Contact"),l.a.createElement("br",null),l.a.createElement("p",null,"Please fill in your details and I will get back to you as soon as possible."),l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",required:!0}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",required:!0}),l.a.createElement("label",null,"Message:"),l.a.createElement("textarea",{type:"text",name:"message",cols:"30",rows:"8",required:!0}),"SUCCESS"===e?l.a.createElement("p",null,l.a.createElement("strong",null,"Thanks for contacting me!")):l.a.createElement("button",{className:"button"},"Send message"),"ERROR"===e&&l.a.createElement("p",null,"Ooops! There was an error. Try again!")))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):(l.status,a.setState({status:"ERROR"})))},l.send(n)}}]),t}(n.Component),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"background-box"},l.a.createElement("h1",null,"Current and previous projects"),l.a.createElement("span",{className:"grid-container-first"},l.a.createElement("span",null),l.a.createElement("span",null,l.a.createElement("h5",null,"ParkHere"),l.a.createElement("span",{className:"text-style"},"The ParkHere web app was created by the ParkHere team that I was a part of during my final exam project at my Java developer studies at Academy. The aim with the app was to help customers park correctly, because haven't we all struggled with what the parking signs actually mean? The app has an backend in Java and frontend in ReactJS. Press the images below to see more and the code! ")),l.a.createElement("span",null)),l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",null),l.a.createElement("div",null,l.a.createElement("section",{id:"portfoilo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CarolineDanson/ParkhereBackend"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"img-size",alt:"ParkHere",src:"images/portfolio/ParkHereJava.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,"ParkHere"),l.a.createElement("p",null,"Github Backend")))))))),l.a.createElement("div",null,l.a.createElement("section",{id:"portfoilo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CarolineDanson/ParkhereFrontend"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"img-size",alt:"ParkHere",src:"images/portfolio/FrontEnd.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,"ParkHere"),l.a.createElement("p",null,"Github Frontend")))))))),l.a.createElement("div",null)),l.a.createElement("span",{className:"grid-container-first"},l.a.createElement("span",null),l.a.createElement("span",null,l.a.createElement("h5",null,"Eat well"),l.a.createElement("span",{className:"text-style"},"Eat well is a Flutter app with a backend in Java. This is an ongoing project where I have created an app where you can save your favourite recipes so that when it is time for some dinner you can get some food suggestions! In Java I have used Spring Framework to build an REST API and used JPA to connect to a database to save all the recipes. The fronend part with Flutter is still in the early stages. Press the image to see more and the code!")),l.a.createElement("span",null)),l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",null),l.a.createElement("div",null,l.a.createElement("section",{id:"portfoilo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CarolineDanson/EatWellBackend"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"img-size",alt:"ParkHere",src:"images/portfolio/EatwellBackend.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,"Eat well"),l.a.createElement("p",null,"Github Backend")))))))),l.a.createElement("div",null,l.a.createElement("section",{id:"portfoilo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CarolineDanson/EatWellFrontend"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"img-size",alt:"ParkHere",src:"images/portfolio/EatWellFrontend.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,"Eat Well"),l.a.createElement("p",null,"Github Frontend")))))))),l.a.createElement("div",null)),l.a.createElement("span",{className:"grid-container-first"},l.a.createElement("span",null),l.a.createElement("span",null,l.a.createElement("h5",null,"Flutter apps"),l.a.createElement("span",{className:"text-style"},"During my free time I have learned Flutter. I took an online course created in collaboration with the Flutter Team at Google and after that I have made several apps. If you wish to see more about this please visit my GitHub by pressing the image below.")),l.a.createElement("span",null)),l.a.createElement("div",{className:"grid-container-one"},l.a.createElement("div",null),l.a.createElement("div",null,l.a.createElement("section",{id:"portfoilo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CarolineDanson/FlutterApps"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{className:"img-size",alt:"ParkHere",src:"images/portfolio/FlutterImg.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,"Flutter apps"),l.a.createElement("p",null,"Flutter apps using Dart")))))))),l.a.createElement("div",null),l.a.createElement("div",null))))))}}]),t}(n.Component),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.testimonials}),l.a.createElement(f,{data:this.state.resumeData.resume}),l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(h,{data:this.state.resumeData.main}))}}]),t}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.ec931f35.chunk.js.map