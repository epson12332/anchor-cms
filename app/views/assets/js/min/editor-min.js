$(function(){function t(t){t.preventDefault(),i.toggleClass("editing")}var e=$("[data-editor]"),a=$("textarea.editor"),i=$("body"),s,n=new Pen({editor:e[0],list:["blockquote","h2","h3","insertorderedlist","insertunorderedlist","bold","italic","createlink"],stay:!1});e.addClass("initial").on({focus:function(){e.removeClass("initial"),i.addClass("editing")},blur:function(){i.removeClass("editing")},keyup:function(){var t=e.text();a.val(t);var i=t.length,s=t.replace(/\s{2,}/g,"").split(" ").length,n=s/175,l=Math.round(n),o=Math.round(n%60*60);o>60&&(o=59),$(".characters").text(i),$(".words").text(s),$(".min").text(l),$(".sec").text(o)}}),(s=a.val())&&e.removeClass("initial").html(s);var l=$("[data-slugify]"),o=function(t){return"-"===t.charAt(0)&&(t=t.substr(1)),t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")};l.on("keyup",function(t){l.val(o(l.val()))});var r=$(".tabs a");r.click(function(){var t=$(this),e=t.text().split(" ")[0].toLowerCase();return t.addClass("active").siblings().removeClass("active"),$(".tab-"+e).show().siblings().hide(),!1}),location.hash&&r.filter(':contains("'+location.hash[1].toUpperCase()+location.hash.substr(2)+'")').click(),$(".focus-toggle").click(t)});