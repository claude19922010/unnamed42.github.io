"use strict";function stripper(e){var t=$("<div>"+e+"</div>");t.find("script,style").remove();$(".gutter",t).remove();return t.html()}function getParameterByName(e,t){if(!t)t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=r.exec(t);if(!i)return null;if(!i[2])return"";return decodeURIComponent(i[2].replace(/\+/g," "))}function searchFunc(e,t,r){$.ajax({url:e,dataType:"xml",success:function(e){var i=$("entry",e).map(function(){return{title:$("title",this).text(),content:stripper($("content",this).text()),url:$("url",this).text()}}).get(),a=$("#"+r);if(t.trim().length==0)return;var s='<div class="search-result-list">',n=t.trim().toLowerCase().split(/[\s\-]+/);i.forEach(function(e){var t=true;var r=e.title.trim().toLowerCase();var i=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var a=-1;var c=-1;var l=-1;if(r&&i){n.forEach(function(e,s){a=r.indexOf(e);c=i.indexOf(e);if(a<0&&c<0)t=false;else{if(c<0)c=0;if(!s)l=c}})}if(t){s+='<div class="post">';s+='<div class="post-header"><h2 class="post-title"><a href="'+e.url+'" class="search-result-title">'+e.title+"</a></h2></div>";var o=e.content.trim().replace(/<[^>]+>/g,"");if(l>=0){var f=l-20;var u=l+80;if(f<0)f=0;else if(!f)u=100;if(u>o.length)u=o.length;var v=o.substring(f,u);n.forEach(function(e){v=v.replace(new RegExp(e,"gi"),'<span class="search-keyword">'+e+"</span>")});s+='<div class="post-body">'+(0==f?"":"...")+v+(u==o.length?"":"...")+"</div>"}s+="</div>";$("#no-match").addClass("matched")}});s+="</div>";a.html(s)}})}