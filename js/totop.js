$(function(){var t=$("#totop"),e=$("#totop-canvas"),o=$("#totop-percent"),a=e.width(),n=e.height(),i=a/2,l=parseInt((a-3)/2),c=e[0].getContext("2d");function r(t,e){c.beginPath();c.arc(i,i,l,-Math.PI/2,Math.PI*1.5*e,false);c.strokeStyle=t;c.lineCap="round";c.lineWidth=3;c.stroke()}t.click(function(){$("body, html").animate({scrollTop:0},800)});$(window).scroll(function(){var e=$(document).height()-$(window).height(),i=parseInt($(window).scrollTop()/e*100);if(i>=8){t.addClass("display");c.clearRect(0,0,a,n);r("#efefef",1);r("#555555",i/100)}else t.removeClass("display");o.attr("data-percent",i)})});