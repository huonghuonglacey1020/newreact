(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(54)},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),c=(a(26),a(57)),s=a(58),i=a(59),m=a(6),u=a(7),d=a(10),h=a(8),E=a(11),f=a(5),v=a.n(f),b={getGoogleSearchBooks:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)}};a(45);var k=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex align-items-center"},o.a.createElement("div",{className:"container text-center"}))};function p(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function g(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function N(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(46);var B=function(e){return 0===e.savedBooks.length?o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body player"},o.a.createElement("div",{className:"article"},o.a.createElement("h3",null,"Books that You Saved")))):o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body player"},o.a.createElement("div",{className:"article"},o.a.createElement("h3",null,"Books that You Saved"),e.savedBooks.map(function(t){return o.a.createElement("li",{className:"saved-list list-group-item"},o.a.createElement(g,{className:"SearchResult",id:t.title+"Card",key:t._id},o.a.createElement(N,{size:"2",className:"bookImage"},o.a.createElement("img",{src:t.image,alt:t.title})),o.a.createElement(N,{size:"1",className:"emptyCol"}),o.a.createElement(N,{size:"9",className:"bookInfo"},o.a.createElement(g,null,o.a.createElement("h2",{className:"bookTitle"},t.title)),o.a.createElement(g,null,o.a.createElement("h3",{className:"bookAuthor"},t.authors)),o.a.createElement(g,null,o.a.createElement("p",{className:"bookDescription"},t.description)))),o.a.createElement("br",null),o.a.createElement(g,{className:"buttonDiv "},o.a.createElement("button",{className:"deleteBook btn btn-danger",id:t._id,onClick:function(){return e.handleDeleteButton(t._id)}},"Delete Book"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.link},o.a.createElement("button",{className:"viewBook btn btn-success"},"View Book"))))}))))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.handleDeleteButton=function(e){b.deleteBook(e).then(function(e){return a.componentDidMount()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.getBooks().then(function(t){return e.setState({savedBooks:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(p,{fluid:!0,className:"container"},o.a.createElement(k,null),o.a.createElement(p,null,o.a.createElement(B,{savedBooks:this.state.savedBooks,handleDeleteButton:this.handleDeleteButton})))}}]),t}(n.Component),y=(a(47),function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"BookSearchLabel"},o.a.createElement("h3",null,"Search For Book")),o.a.createElement("br",null),o.a.createElement("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Enter Book's Name",onChange:e.handleInputChange})),o.a.createElement("button",{type:"submit",className:"submitBtn  btn-danger",onClick:e.handleFormSubmit},"Submit"))}),S=(a(48),function(e){return 0===e.books.length?o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body player"},o.a.createElement("div",{className:"article"},o.a.createElement("h3",null,"Search Results")))):o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body player"},o.a.createElement("div",{className:"article"},o.a.createElement("h3",null,"Search Results"),e.books.map(function(t){return o.a.createElement("li",{className:"search-list list-group-item"},o.a.createElement(g,{className:"SearchResult row",id:t.title+"Card",key:t._id},o.a.createElement(N,{size:"2",className:"bookImage"},o.a.createElement("img",{src:t.image,alt:t.title})),o.a.createElement(N,{size:"1",className:"emptyCol"}),o.a.createElement(N,{size:"9",className:"bookInfo"},o.a.createElement(g,null,o.a.createElement("h3",{className:"bookTitle"},t.title)),o.a.createElement(g,null,o.a.createElement("h4",{className:"bookAuthor"},t.author)),o.a.createElement(g,null,o.a.createElement("p",{className:"bookDescription"},t.description)))),o.a.createElement("br",null),o.a.createElement(g,{className:"buttonDiv "},o.a.createElement("button",{className:"saveBook btn btn-primary",id:t.id,onClick:function(t){return e.handleSavedButton(t)}},"Save Book"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.link},o.a.createElement("button",{className:"viewBook btn btn-success"},"View Book"))))}))))}),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",books:[],error:"",message:""},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),b.getGoogleSearchBooks(a.state.search).then(function(e){if("error"===e.data.items)throw new Error(e.data.items);var t=e.data.items;t=t.map(function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}}),a.setState({books:t,error:""})}).catch(function(e){return a.setState({error:e.items})})},a.handleSavedButton=function(e){e.preventDefault(),console.log(a.state.books);var t=a.state.books.filter(function(t){return t.id===e.target.id});t=t[0],b.saveBook(t).then(a.setState({message:alert("Your book is saved")})).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(p,{fluid:!0},o.a.createElement(k,null,o.a.createElement("h1",{className:"text-white"},"Let find Books together")),o.a.createElement(p,null,o.a.createElement(g,null,o.a.createElement(N,{size:"12"},o.a.createElement(y,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})))),o.a.createElement("br",null),o.a.createElement(p,null,o.a.createElement(S,{books:this.state.books,handleSavedButton:this.handleSavedButton})))}}]),t}(n.Component);var C=function(){return o.a.createElement(p,{fluid:!0},o.a.createElement(g,null,o.a.createElement(N,{size:"md-12"},o.a.createElement(k,null,o.a.createElement("h1",{className:"text-white"},"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var x=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("h2",{className:"text-white"},"Google Book Search")),o.a.createElement("div",{id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item",id:"home"},o.a.createElement("a",{className:"nav-link",href:"/"},o.a.createElement("button",{type:"button",className:"btn btn-danger text-white"},"Search Books"))),o.a.createElement("li",{className:"nav-item",id:"report"},o.a.createElement("a",{className:"nav-link",href:"/saved"},o.a.createElement("button",{type:"button",className:"btn btn-success text-white"},"Saved Books"))))))},D=(a(49),function(){return o.a.createElement("footer",{class:"page-footer font-small special-color-dark "},o.a.createElement("div",{class:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",o.a.createElement("a",{href:"https://mdbootstrap.com/"}," MDBootstrap.com")))});a(50);var I=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement(s.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:j}),o.a.createElement(i.a,{exact:!0,path:"/saved",component:w}),o.a.createElement(i.a,{exact:!0,path:"/saved/:id",component:w}),o.a.createElement(i.a,{component:C})),o.a.createElement(D,null)))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):z(e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.81279ddd.chunk.js.map