jQuery(window).load(function(){!function(){var a="",b="",c="",d="",e="",f="";jQuery(".ult-responsive").each(function(g,h){var i=jQuery(h),j=i.attr("data-responsive-json-new"),k=i.data("ultimate-target"),l="",m="",n="",o="",p="",q="";void 0===j&&null==j||jQuery.each(jQuery.parseJSON(j),function(a,b){var c=a;if(void 0!==b&&null!=b){var d=b.split(";");jQuery.each(d,function(a,b){if(void 0!==b||null!=b){var d=b.split(":");switch(d[0]){case"large_screen":l+=c+":"+d[1]+";";break;case"desktop":m+=c+":"+d[1]+";";break;case"tablet":n+=c+":"+d[1]+";";break;case"tablet_portrait":o+=c+":"+d[1]+";";break;case"mobile_landscape":p+=c+":"+d[1]+";";break;case"mobile":q+=c+":"+d[1]+";"}}})}}),""!=q&&(f+=k+"{"+q+"}"),""!=p&&(e+=k+"{"+p+"}"),""!=o&&(d+=k+"{"+o+"}"),""!=n&&(c+=k+"{"+n+"}"),""!=m&&(b+=k+"{"+m+"}"),""!=l&&(a+=k+"{"+l+"}")});var g="<style>\n/** Ultimate: CountDown Responsive **/ ";g+=b,g+="\n@media (min-width: 1824px) { "+a+"\n}",g+="\n@media (max-width: 1199px) { "+c+"\n}",g+="\n@media (max-width: 991px)  { "+d+"\n}",g+="\n@media (max-width: 767px)  { "+e+"\n}",g+="\n@media (max-width: 479px)  { "+f+"\n}",g+="\n/** Ultimate: Tooltipster Responsive - **/</style>",jQuery("head").append(g)}(),jQuery(".ult_countdown-dateAndTime").each(function(){var a=new Date(jQuery(this).html()),b=(jQuery(this).data("time-zone"),jQuery(this).data("countformat")),c=jQuery(this).data("labels"),d=c.split(","),e=jQuery(this).data("labels2"),f=e.split(","),g=function(){return new Date(jQuery(this).data("time-now"))},h=function(a){var b=jQuery(".ult_countdown-dateAndTime").attr("data-responsive-json-new"),c=jQuery(".ult_countdown-dateAndTime").attr("data-ultimate-target"),d=jQuery(".ult_countdown").attr("data-responsive-json-new"),e=jQuery(".ult_countdown").attr("data-ultimate-target");jQuery(".ult_countdown-period").addClass("ult-responsive");var f=jQuery(this).find(".ult_countdown-amount"),g=jQuery(this).find(".ult_countdown-period"),h=(jQuery(this).data("tick-col"),jQuery(this).data("tick-p-size"),jQuery(this).data("tick-font-family")),i=jQuery(this).data("br-color"),j=jQuery(this).data("br-size"),k=jQuery(this).data("br-style"),l=jQuery(this).data("br-radius"),m=jQuery(this).data("bg-color"),n=jQuery(this).data("padd");f.attr({"data-ultimate-target":c,"data-responsive-json-new":b}),g.attr({"data-ultimate-target":e,"data-responsive-json-new":d}),f.addClass("ult-responsive"),f.css({"font-family":h,"border-width":j,"border-style":k,"border-radius":l,background:m,padding:n,"border-color":i})};jQuery(this).hasClass("ult-usrtz")?jQuery(this).ult_countdown({labels:d,labels1:f,until:a,format:b,padZeroes:!0,onTick:h}):jQuery(this).ult_countdown({labels:d,labels1:f,until:a,format:b,padZeroes:!0,onTick:h,serverSync:g})})});