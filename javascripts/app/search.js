!function(e){function t(){$("h1").each(function(){var e=$(this),t=e.nextUntil("h1"),i=$('<section id="section-'+e.prop("id")+'"></section>');e.after(i.append(t)),i.prepend(e),v.add({id:e.prop("id"),title:e.text(),body:t.text()})})}function i(){u=$(".content"),d=$(".dark-box"),f=$(".search-info"),$("#input-search").on("keyup",s).on("focus",a).on("blur",l)}function n(e){return $(".tocify-item[data-unique="+e+"]").closest(".tocify-header")}function o(e,t){var i=parseInt(t.id.replace(/[^\d]/g,""),10),n=parseInt(e.id.replace(/[^\d]/g,""),10);return i===n?0:n>i?-1:1}function r(){var e=$(".tocify-header").sort(o);$.each(e,function(e,t){$(t).insertBefore($("#toc ul:first-child"))})}function s(e){var t=$("section, #toc .tocify-header");if(f.hide(),c(),27===e.keyCode&&(this.value=""),this.value){t.hide();var i=v.search(this.value);if(i.length){r();var o;if($.each(i,function(e,t){if(!(t.score<=1e-4)){var i=t.ref;$("#section-"+i).show();var r=n(i);o&&n(o).insertBefore(r),r.show(),o=i}}),i.length>1){var s=i[0].ref,a=i[1].ref;n(s).insertBefore(n(a))}h.call(this)}else t.show(),f.text('No Results Found for "'+this.value+'"').show()}else t.show();p.triggerHandler("scroll.tocify"),p.triggerHandler("resize")}function a(){s.call(this,{})}function l(){c(),f.hide()}function h(){this.value&&u.highlight(this.value,g)}function c(){u.unhighlight(g)}var u,d,f,p=$(e),g={element:"span",className:"search-highlight"},v=new lunr.Index;v.ref("id"),v.field("title",{boost:10}),v.field("body"),v.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(t),$(i)}(window);