$(function(){typeof DUOSHUO!=="undefined"?a():$("#duoshuo-script")[0].onload=a;var s=false;function a(){if(s)return;s=true;var a=DUOSHUO.templates;var n=a.post;a.post=function(s,a){var l=n(s,a);var t=s.post.agent;var c=s.post.author.user_id;var r="";if(c===duoshuo_admin_id)r='<span class="ua admin"><i class="fa fa-user-plus"></i>博主</span>';if(t)l=l.replace(/<\/div><p>/,r+i(t)+e(t)+"</div><p>");return l};a.commentList=function(s){var i=s.list;var e="";if(i){for(var n,l=-1,t=i.length-1;t>l;){n=i[l+=1];e+="<li>";e+='<p><a href="'+n.thread.url+'#comments" class="tooltipped tooltipped-n" aria-label="于 '+n.thread.title+' 中的评论">';e+=(n.message.length>18?n.message.substring(0,18)+"...":n.message)+"</a></p>";e+='<p class="comment-meta">'+a.userAnchor(n.theAuthor)+" "+a.timeText(n.created_at)+"</p>";e+="</li>"}}return e}}function i(s){var a=[],i="";if(a=s.match(/MSIE\s([^\s|;]+)/gi))i='<span class="ua ie"><i class="fa fa-internet-explorer"></i>InterneUA Explorer|'+a[0];else if(a=s.match(/FireFox\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua firefox"><i class="fa fa-firefox"></i>Mozilla FireFox|'+e[1]}else if(a=s.match(/Maxthon([\d]*)\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua maxthon">Maxthon'}else if(a=s.match(/UBrowser([\d]*)\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua ucweb">UCBrowser|'+e[1]}else if(a=s.match(/MetaSr/gi))i='<span class="ua sogou">搜狗浏览器';else if(a=s.match(/2345Explorer/gi))i='<span class="ua explorer2345">2345王牌浏览器';else if(a=s.match(/2345chrome/gi))i='<span class="ua chrome2345">2345加速浏览器';else if(a=s.match(/LBBROWSER/gi))i='<span class="ua lbbrowser">猎豹安全浏览器';else if(a=s.match(/MicroMessenger\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua qq"><i class="fa fa-weixin"></i>微信|'+e[1]}else if(a=s.match(/QQBrowser\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua qq">QQ浏览器|'+e[1]}else if(a=s.match(/QQ\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua qq"><i class="fa fa-qq"></i>QQ|'+e[1]}else if(a=s.match(/MiuiBrowser\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua mi">Miui浏览器|'+e[1]}else if(a=s.match(/Chrome([\d]*)\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua chrome"><i class="fa fa-chrome"></i>Chrome|'+e[1]}else if(a=s.match(/safari\/([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua safari"><i class="fa fa-safari"></i>Apple Safari|'+e[1]}else if(a=s.match(/Operversion[\s|\/]([^\s]+)/gi)){var e=a[0].split("/");i='<span class="ua opera"><i class="fa fa-opera"></i>Opera|'+a[1]}else if(a=s.match(/Trident\/7.0/gi))i='<span class="ua ie"><i class="fa fa-internet-explorer"></i>InterneUA Explorer 11';else i='<span class="ua other">其它浏览器';return i+"</span> "}function e(s){var a="";if(s.match(/win/gi)){if(s.match(/nt 5.1/gi))a='<span class="os winxp"><i class="fa fa-windows"></i>Windows XP';else if(s.match(/nt 6.1/gi))a='<span class="os win7"><i class="fa fa-windows"></i>Windows 7';else if(s.match(/nt 6.2/gi))a='<span class="os win8"><i class="fa fa-windows"></i>Windows 8';else if(s.match(/nt 6.3/gi))a='<span class="os win8_1"><i class="fa fa-windows"></i>Windows 8.1';else if(s.match(/nt 10.0/gi))a='<span class="os win10"><i class="fa fa-windows"></i>Windows 10';else if(s.match(/nt 6.0/gi))a='<span class="os vista"><i class="fa fa-windows"></i>Windows Vista';else if(s.match(/nt 5/gi))a='<span class="os win2000"><i class="fa fa-windows"></i>Windows 2000';else a='<span class="os windows"><i class="fa fa-windows"></i>Windows'}else if(s.match(/android/gi))a='<span class="os android"><i class="fa fa-android"></i>Android';else if(s.match(/ubuntu/gi))a='<span class="os ubuntu"><i class="fa fa-linux"></i>Ubuntu';else if(s.match(/linux/gi))a='<span class="os linux"><i class="fa fa-linux"></i>Linux';else if(s.match(/mac/gi))a='<span class="os mac"><i class="fa fa-apple"></i>Mac OS X';else if(s.match(/unix/gi))a='<span class="os unix">Unix';else if(s.match(/symbian/gi))a='<span class="os nokia">Nokia SymbianOS';else a='<span class="os other">其它操作系统';return a+"</span>"}});