function ApplyCouponCode(r){var o=jQuery("#gf_coupon_code_"+r).val();"undefined"!==o&&""!=o&&(showCouponSpinner(r),jQuery("#gf_coupons_container_"+r+" #gf_coupon_button").prop("disabled",!0),jQuery.post(gform_coupon_script_strings.ajaxurl,{action:"gf_apply_coupon_code",couponCode:o,existing_coupons:jQuery("#gf_coupon_codes_"+r).val(),formId:r,total:jQuery("#gf_total_no_discount_"+r).val()},function(o){o=jQuery.parseJSON(o);if(jQuery("#gf_coupons_container_"+r+" .gf_coupon_invalid").remove(),jQuery("#gf_coupon_code_"+r).val(""),o.is_valid){window["gf_coupons"+r]=o.coupons;var n,e="",_=0;for(n in window["gf_coupons"+r])0<_&&(e+=","),e+=window["gf_coupons"+r][n].code,_++;jQuery("#gf_coupon_codes_"+r).val(e).change(),jQuery("#gf_coupons_"+r).val(jQuery.toJSON(window["gf_coupons"+r])),gformCalculateTotalPrice(r)}else jQuery("#gf_coupons_container_"+r+" #gf_coupon_info").prepend("<div class='gf_coupon_invalid gfield_description gfield_validation_message'><span>"+o.invalid_reason+"</span></div>");hideCouponSpinner(r)}))}function GetDiscount(o,n,e,_,r){var u;return e-=_,u="flat"==o?Number(n):e*Number(n/100),gform.applyFilters("gform_coupons_discount_amount",u,o,n,e,_,r)}function PopulateDiscountInfo(o,n){var e,_,r,u="",i=0,c=new Currency(gf_global.gf_currency_config);for(e in void 0===window["gf_coupons"+n]&&(window["gf_coupons"+n]=jQuery.evalJSON(jQuery("#gf_coupons_"+n).val())),window["gf_coupons"+n])i+=r=GetDiscount((_=window["gf_coupons"+n][e]).type,_.amount,o,i,n),u+='<tr class="gf_coupon_item gfield_description" id="gf_coupon_'+_.code.replace(/[^A-Za-z0-9]/g,"")+'"><td class="gf_coupon_name_container">   <a href="javascript:void(0);" class="remove-coupon gform-theme__no-reset--el" aria-label="Remove coupon" onclick="DeleteCoupon(\''+_.code+"' , '"+n+'\');">[Remove]</a>   <span class="gf_coupon_name gform-field-label gform-field-label--type-sub-large">'+_.name+'</span></td><td class="gf_coupon_discount_container">   <span class="gf_coupon_discount gform-field-label gform-field-label--type-sub-large">-'+c.toMoney(r,!0)+"</span></td></tr>";return jQuery("#gf_coupons_container_"+n+" #gf_coupon_info").html("<table>"+u+"</table>"),i}function DisableApplyButton(o){0==window["new_total_"+o]||""==jQuery("#gf_coupon_code_"+o).val()?jQuery("#gf_coupons_container_"+o+" #gf_coupon_button").prop("disabled",!0):jQuery("#gf_coupons_container_"+o+" #gf_coupon_button").prop("disabled",!1)}function DeleteCoupon(o,n){var e,_,r;jQuery("#gf_coupons_container_"+n+" #gf_coupon_spinner").is(":visible")||(e=o.replace(/[^A-Za-z0-9]/g,""),jQuery("#gf_coupons_container_"+n+" #gf_coupon_"+e).remove(),showCouponSpinner(n),jQuery("#gf_coupons_container_"+n+" #gf_coupon_button").prop("disabled",!0),_=(e=jQuery("#gf_coupon_codes_"+n)).val().split(","),-1!=(r=jQuery.inArray(o,_))&&(_.splice(r,1),e.val(_.join(",")).change(),o in window["gf_coupons"+n]&&(delete window["gf_coupons"+n][o],jQuery("#gf_coupons_"+n).val(jQuery.toJSON(window["gf_coupons"+n]))),gformCalculateTotalPrice(n),gform.doAction("gform_coupons_post_delete_coupon",o,n)))}function showCouponSpinner(o){var n;"function"==typeof gformInitializeSpinner&&formUsesFramework(o)?(n=jQuery("#gf_coupons_container_"+o+" #gf_coupon_button"),gformInitializeSpinner(o,n,"gform-coupons-spinner-"+o)):jQuery("#gf_coupons_container_"+o+" #gf_coupon_spinner").show()}function hideCouponSpinner(o){"function"==typeof gformRemoveSpinner&&formUsesFramework(o)?gformRemoveSpinner("gform-coupons-spinner-"+o):jQuery("#gf_coupons_container_"+o+" #gf_coupon_spinner").hide()}function formUsesFramework(o){return jQuery("#gform_wrapper_"+o).hasClass("gform-theme--framework")}gform.addFilter("gform_product_total",function(o,n){if(0==jQuery("#gf_coupon_code_"+n).length)return o;jQuery("#gf_total_no_discount_"+n).val(o);var e,_=o;return(""!=(gformIsHidden(jQuery("#gf_coupon_code_"+n))?"":jQuery("#gf_coupon_codes_"+n).val())||""!=jQuery("#gf_coupons_"+n).val())&&(e=PopulateDiscountInfo(o,n),(_=o-gformRoundPrice(e))<0)&&(_=0),hideCouponSpinner(n),window["new_total_"+n]=_,DisableApplyButton(n),_},50),gform.addFilter("gform_is_value_match",function(o,n,e){n=jQuery("#field_"+n+"_"+e.fieldId).find("#gf_coupon_codes_"+n);return n.length?gf_matches_operation(n.val(),e.value,e.operator):o}),gform.addAction("gform_post_conditional_logic_field_action",function(o,n,e,_,r){r||"hide"!=n||(n=(r=jQuery(e)).find("tr.gf_coupon_item")).length&&(n.remove(),r.find("input[type=hidden]").val("").change())}),gform.addFilter("gform_field_meta_raw_input_change",function(o,n,e){return n.attr("id")&&0===n.attr("id").indexOf("gf_coupon_codes_")&&(o.fieldId=n.attr("name").split("_")[1],o.formId=n.attr("id").split("_")[3]),o});