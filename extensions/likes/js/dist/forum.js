module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=14)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},,function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),s=o.n(r),i=o(4),a=o.n(i),u=o(5),c=o.n(u),l=o(6),p=o.n(l),f=o(7),d=o.n(f),k=o(2),h=o.n(k),y=o(8),b=o.n(y),x=o(3),v=o.n(x),_=o(9),g=o.n(_);function j(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var M=o(10),O=o.n(M),P=o(11),L=o.n(P),N=function(t){function e(){return t.apply(this,arguments)||this}j(e,t);var o=e.prototype;return o.className=function(){return"PostLikesModal Modal--small"},o.title=function(){return app.translator.trans("flarum-likes.forum.post_likes.title")},o.content=function(){return m("div",{className:"Modal-body"},m("ul",{className:"PostLikesModal-list"},this.props.post.likes().map(function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},L()(t)," "," ",v()(t)))})))},e}(O.a),S=o(12),C=function(t){function e(){return t.apply(this,arguments)||this}j(e,t);var o=e.prototype;return o.icon=function(){return"far fa-thumbs-up"},o.href=function(){return app.route.post(this.props.notification.subject())},o.content=function(){var t=this.props.notification.fromUser();return app.translator.transChoice("flarum-likes.forum.notifications.post_liked_text",1,{user:t})},o.excerpt=function(){return this.props.notification.subject().contentPlain()},e}(o.n(S).a);s.a.initializers.add("flarum-likes",function(){s.a.notificationComponents.postLiked=C,a.a.prototype.canLike=c.a.attribute("canLike"),a.a.prototype.likes=c.a.hasMany("likes"),Object(n.extend)(h.a.prototype,"actionItems",function(t){var e=this.props.post;if(!e.isHidden()&&e.canLike()){var o=s.a.session.user&&e.likes().some(function(t){return t===s.a.session.user});t.add("like",d.a.component({children:s.a.translator.trans(o?"flarum-likes.forum.post.unlike_link":"flarum-likes.forum.post.like_link"),className:"Button Button--link",onclick:function(){o=!o,e.save({isLiked:o});var t=e.data.relationships.likes.data;t.some(function(e,o){if(e.id===s.a.session.user.id())return t.splice(o,1),!0}),o&&t.unshift({type:"users",id:s.a.session.user.id()})}}))}}),Object(n.extend)(h.a.prototype,"footerItems",function(t){var e=this.props.post,o=e.likes();if(o&&o.length){var n=o.length>4,r=o.sort(function(t){return t===s.a.session.user?-1:1}).slice(0,n?3:4).map(function(t){return m("a",{href:s.a.route.user(t),config:m.route},t===s.a.session.user?s.a.translator.trans("flarum-likes.forum.post.you_text"):v()(t))});if(n){var i=o.length-r.length;r.push(m("a",{href:"#",onclick:function(t){t.preventDefault(),s.a.modal.show(new N({post:e}))}},s.a.translator.transChoice("flarum-likes.forum.post.others_link",i,{count:i})))}t.add("liked",m("div",{className:"Post-likedBy"},g()("far fa-thumbs-up"),s.a.translator.transChoice("flarum-likes.forum.post.liked_by"+(o[0]===s.a.session.user?"_self":"")+"_text",r.length,{count:r.length,users:b()(r)})))}}),Object(n.extend)(p.a.prototype,"notificationTypes",function(t){t.add("postLiked",{name:"postLiked",icon:"far fa-thumbs-up",label:s.a.translator.trans("flarum-likes.forum.settings.notify_post_liked_label")})})})}]);
//# sourceMappingURL=forum.js.map