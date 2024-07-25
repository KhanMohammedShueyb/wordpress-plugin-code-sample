/* LIVE   */
/* LIVE   */
 function calculate_mmr(clicked_id){
	console.log('asdfasf');
	var my_mrr = jQuery('#my_mrr').val();
	var desirder_mrr = jQuery('#desirder_mrr').val();
	var values;
    jQuery( "#slider-range" ).slider({
      range: true,
	  step: 35,
      min: 70,
      max: 6510,
      values: [ my_mrr, desirder_mrr ]
	});
	console.log(values);
	 min_val = jQuery('#my_mrr').val();
	   max_val = jQuery('#desirder_mrr').val();
       jQuery( "#my_mrr" ).val(min_val);
       jQuery( "#desirder_mrr" ).val(max_val );
	   mmr_points = max_val - min_val;
	   ////console.log(min_val);
	   ////console.log(max_val);
			if(min_val >= 0 && min_val <= 119 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #119_mmr").show();
								
			}
			else if(min_val >= 120 && min_val <= 239 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #239_mmr").show();
				
			}
			else if(min_val >= 240 && min_val <= 359 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #359_mmr").show();
					
			}
			else if(min_val >= 360 && min_val <= 479 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #479_mmr").show();	
			}
			else if(min_val >= 480 && min_val <= 599 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #599_mmr").show();	
			}
			else if(min_val >= 599 && min_val <= 719 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #719_mmr").show();	
			}
			else if(min_val >= 719 && min_val <= 839 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #839_mmr").show();	
			}
			else if(min_val >= 840 && min_val <= 959 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #959_mmr").show();	
			}
			else if(min_val >= 960 && min_val <= 1079 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1079_mmr").show();	
			}
			else if(min_val >= 1079 && min_val <= 1199 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1199_mmr").show();	
			}
			else if(min_val >= 1120 && min_val <= 1319 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1319_mmr").show();	
			}
			else if(min_val >= 1320 && min_val <= 1439 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1439_mmr").show();	
			}
			else if(min_val >= 1440 && min_val <= 1559 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1559_mmr").show();	
			}
			else if(min_val >= 1560 && min_val <= 1679 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1679_mmr").show();	
			}
			else if(min_val >= 1680 && min_val <= 1799 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1799_mmr").show();	
			}
			else if(min_val >= 1800 && min_val <= 1919 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1919_mmr").show();	
			}
			else if(min_val >= 1920 && min_val <= 2039 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2039_mmr").show();	
			}
			else if(min_val >= 2040 && min_val <= 2159 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2159_mmr").show();	
			}
			else if(min_val >= 2160 && min_val <= 2279 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2279_mmr").show();	
			}
			else if(min_val >= 2280 && min_val <= 2399 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2399_mmr").show();	
			}
			else if(min_val >= 2400 && min_val <= 2519 ){
					jQuery("#my_current_mmr .medal_icon").hide();				
					jQuery("#my_current_mmr #2519_mmr").show();	
			}
			else if(min_val >= 2520 && min_val <= 2639 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2639_mmr").show();	
			}
			else if(min_val >= 2639 && min_val <= 2759 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2759_mmr").show();	
			}
			else if(min_val >= 2760 && min_val <= 2879 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2879_mmr").show();	
			}
			else if(min_val >= 2880 && min_val <= 2999 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2999_mmr").show();	
			}
			else if(min_val >= 2999 && min_val <= 3119 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3119_mmr").show();	
			}
			else if(min_val >= 3120 && min_val <= 3239 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3239_mmr").show();	
			}
			else if(min_val >= 3240 && min_val <= 3359 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3359_mmr").show();	
			}
			else if(min_val >= 3360 && min_val <= 3479 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3479_mmr").show();	
			}
			else if(min_val >= 3480 && min_val <= 3599 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3599_mmr").show();	
			}
			else if(min_val >= 3500 && min_val <= 3719 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3719_mmr").show();	
			}
			else if(min_val >= 3720 && min_val <= 3839 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3839_mmr").show();	
			}
			else if(min_val >= 3840 && min_val <= 3959 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3959_mmr").show();	
			}
			else if(min_val >= 3960 && min_val <= 4079 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4079_mmr").show();	
			}
			else if(min_val >= 4080 && min_val <= 4199 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4199_mmr").show();	
			}
			else if(min_val >= 4200 && min_val <= 4319 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4319_mmr").show();	
			}
			else if(min_val >= 4319 && min_val <= 4439 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4439_mmr").show();	
			}
			else if(min_val >= 4440 && min_val <= 4559 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4559_mmr").show();	
			}
			else if(min_val >= 4560 && min_val <= 4679 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4679_mmr").show();	
				console.log('4679_mmr');
			}
			else if(min_val >= 4680 && min_val <= 4799 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4799_mmr").show();	
			}
			else if(min_val >= 4800 && min_val <= 4919 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4919_mmr").show();	
			}
			else if(min_val >= 4920 && min_val <= 5039 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5039_mmr").show();	
			}
			else if(min_val >= 5040 && min_val <= 5159 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5159_mmr").show();	
			}
			else if(min_val >= 5160 && min_val <= 5279 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5279_mmr").show();	
			}
			else if(min_val >= 5280 && min_val <= 5399 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5399_mmr").show();	
			}
			else if(min_val >= 5400 && min_val <= 5519 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5519_mmr").show();	
			}
			else if(min_val >= 5520 && min_val <= 5639 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5639_mmr").show();	
			}
			else if(min_val >= 5640 && min_val <= 5739 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5740_mmr").show();	
			}
			else if(min_val >= 5740 && min_val <= 5845 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5845_mmr").show();	
			}
			else if(min_val >= 5846 && min_val <= 6195 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #6200_mmr").show();	
			}
			
			// desired mmr conditions
			if(max_val >= 0 && max_val <= 119 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #119_mmr").show();
								
			}
			else if(max_val >= 120 && max_val <= 239 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #239_mmr").show();
				
			}
			else if(max_val >= 240 && max_val <= 359 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #359_mmr").show();
					
			}
			else if(max_val >= 360 && max_val <= 479 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #479_mmr").show();	
			}
			else if(max_val >= 480 && max_val <= 599 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #599_mmr").show();	
			}
			else if(max_val >= 599 && max_val <= 719 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #719_mmr").show();	
			}
			else if(max_val >= 719 && max_val <= 839 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #839_mmr").show();	
			}
			else if(max_val >= 840 && max_val <= 959 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #959_mmr").show();	
			}
			else if(max_val >= 960 && max_val <= 1079 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1079_mmr").show();	
			}
			else if(max_val >= 1079 && max_val <= 1199 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1199_mmr").show();	
			}
			else if(max_val >= 1120 && max_val <= 1319 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1319_mmr").show();	
			}
			else if(max_val >= 1320 && max_val <= 1439 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1439_mmr").show();	
			}
			else if(max_val >= 1440 && max_val <= 1559 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1559_mmr").show();	
			}
			else if(max_val >= 1560 && max_val <= 1679 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1679_mmr").show();	
			}
			else if(max_val >= 1680 && max_val <= 1799 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1799_mmr").show();	
			}
			else if(max_val >= 1800 && max_val <= 1919 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1919_mmr").show();	
			}
			else if(max_val >= 1920 && max_val <= 2039 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2039_mmr").show();	
			}
			else if(max_val >= 2040 && max_val <= 2159 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2159_mmr").show();	
			}
			else if(max_val >= 2160 && max_val <= 2279 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2279_mmr").show();	
			}
			else if(max_val >= 2280 && max_val <= 2399 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2399_mmr").show();	
			}
			else if(max_val >= 2400 && max_val <= 2519 ){
					jQuery("#my_desired_mmr .medal_icon").hide();				
					jQuery("#my_desired_mmr #2519_mmr").show();	
			}
			else if(max_val >= 2520 && max_val <= 2639 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2639_mmr").show();	
			}
			else if(max_val >= 2639 && max_val <= 2759 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2759_mmr").show();	
			}
			else if(max_val >= 2760 && max_val <= 2879 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2879_mmr").show();	
			}
			else if(max_val >= 2880 && max_val <= 2999 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2999_mmr").show();	
			}
			else if(max_val >= 2999 && max_val <= 3119 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3119_mmr").show();	
			}
			else if(max_val >= 3120 && max_val <= 3239 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3239_mmr").show();	
			}
			else if(max_val >= 3240 && max_val <= 3359 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3359_mmr").show();	
			}
			else if(max_val >= 3360 && max_val <= 3479 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3479_mmr").show();	
			}
			else if(max_val >= 3480 && max_val <= 3599 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3599_mmr").show();	
			}
			else if(max_val >= 3500 && max_val <= 3719 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3719_mmr").show();	
			}
			else if(max_val >= 3720 && max_val <= 3839 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3839_mmr").show();	
			}
			else if(max_val >= 3840 && max_val <= 3959 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3959_mmr").show();	
			}
			else if(max_val >= 3960 && max_val <= 4079 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4079_mmr").show();	
			}
			else if(max_val >= 4080 && max_val <= 4199 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4199_mmr").show();	
			}
			else if(max_val >= 4200 && max_val <= 4319 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4319_mmr").show();	
			}
			else if(max_val >= 4319 && max_val <= 4439 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4439_mmr").show();	
			}
			else if(max_val >= 4440 && max_val <= 4559 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4559_mmr").show();	
			}
			else if(max_val >= 4560 && max_val <= 4679 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4679_mmr").show();	
				console.log('4679_mmr');
			}
			else if(max_val >= 4680 && max_val <= 4799 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4799_mmr").show();	
			}
			else if(max_val >= 4800 && max_val <= 4919 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4919_mmr").show();	
			}
			else if(max_val >= 4920 && max_val <= 5039 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5039_mmr").show();	
			}
			else if(max_val >= 5040 && max_val <= 5159 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5159_mmr").show();	
			}
			else if(max_val >= 5160 && max_val <= 5279 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5279_mmr").show();	
			}
			else if(max_val >= 5280 && max_val <= 5399 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5399_mmr").show();	
			}
			else if(max_val >= 5400 && max_val <= 5519 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5519_mmr").show();	
			}
			else if(max_val >= 5520 && max_val <= 5639 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5639_mmr").show();	
			}
			else if(max_val >= 5640 && max_val <= 5739 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5740_mmr").show();	
			}
			else if(max_val >= 5740 && max_val <= 5845 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5845_mmr").show();	
			}
			else if(max_val >= 5846 && max_val <= 6195 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #6200_mmr").show();	
			}
			// MMR Rate	
			

/* 
solo	
5€ till 105		
1.50€ per 35 Points
2€ per 35 Points
4€ per 35 Points
6€ per 35 Points
11€ per 35 Points
20€ per 35 Points
35€ per 35 Points */

/* 
Party
8 € till 105	
2€ per 35 Points
3€ per 35 Points
4.5€ per 35 Points
7€ per 35 Points
13€ per 35 Points
22€ per 35 Points
38€ per 35 Points */
			var game_type = jQuery("#game_type").val();
			var estimated_days = 1;
			var rush_my_order = jQuery('#rush_my_order').val();
			var schedule_time = jQuery('#schedule_time').val();
			var i_choose_heros = jQuery('#i_choose_heros').val();
			base_price_calculation(game_type);
			if(rush_my_order == 'on'){
				rush_my_order_calculation(rush_my_order);
			}
			if(i_choose_heros == 'on'){
				i_choose_heros_calculation();
			}
			if(schedule_time == 'on'){
				schedule_time_calculation();
			}
			
		jQuery("#mmr_points").val(mmr_points);
		if(mmr_points < 105){
			jQuery("#my_mrr").addClass('wcg_error_field');
			jQuery("#desirder_mrr").addClass('wcg_error_field');
			jQuery(".single_add_to_cart_button").attr('disabled','disabled');
			jQuery(".wcg_error_msg").show();
		}else{
			jQuery(".wcg_error_msg").hide();
			jQuery("#my_mrr").removeClass('wcg_error_field');
			jQuery("#desirder_mrr").removeClass('wcg_error_field');
			jQuery(".single_add_to_cart_button"). removeAttr("disabled");
		}
		base_price = jQuery("#mmr_price_base").val();			
		mmr_price_additional = jQuery('#mmr_price_additional').val();
		var mmr_price_additional_rush = jQuery('#mmr_price_additional_rush').val();
		var mmr_price_additional_schedule_time = jQuery('#schedule_time_val').val();
		var mmr_price_additional_i_choose_heros = jQuery('#i_choose_heros_val').val();
		mmr_price = parseFloat(base_price) + parseFloat(mmr_price_additional) + parseFloat(mmr_price_additional_rush) + parseFloat(mmr_price_additional_i_choose_heros)+ parseFloat(mmr_price_additional_schedule_time);
		jQuery('#mmr_price').val(mmr_price.toFixed(2));
 }


 function calculate_addition(clicked_id){
		////console.log(clicked_id);
		var mmr_price = jQuery('#mmr_price').val();
		var mmr_price_base = jQuery('#mmr_price_base').val();
		var mmr_price_additional = jQuery('#mmr_price_additional').val();
		var game_type = jQuery( "#game_type" ).val();
		if(clicked_id == 'solo'){
			jQuery('#party').removeClass("active");
			jQuery('#'+clicked_id).addClass("active");
			jQuery( "#game_type" ).val('solo');
			base_price_calculation(clicked_id);
		}else if(clicked_id == 'party'){
			jQuery('#solo').removeClass("active");
			jQuery('#'+clicked_id).addClass("active");
			jQuery( "#game_type" ).val('party');
			base_price_calculation(clicked_id);
		}
		if(clicked_id == 'rush_my_order'){
			if (jQuery('#'+clicked_id).val() == "on") {
				 jQuery('#'+clicked_id).val("off");
				 jQuery('#'+clicked_id+'_input').val("off");
				  jQuery('#'+clicked_id).removeClass("on");
				  jQuery('#'+clicked_id).removeClass("off");
				  jQuery('#'+clicked_id).addClass("off");
				  jQuery('#'+clicked_id).text('RUSH ON');
				mmr_price_additional_rush = 0;
				jQuery('#mmr_price_additional_rush').val(mmr_price_additional_rush.toFixed(2));
				estimated_days_pre = jQuery('#estimated_days').val();
				estimated_days = Math.round(estimated_days_pre * 2);
				jQuery('#estimated_days').val(estimated_days);
			}else{
			  jQuery('#'+clicked_id).val("on");
			  jQuery('#'+clicked_id+'_input').val("on");
			  jQuery('#'+clicked_id).removeClass("on");
			  jQuery('#'+clicked_id).removeClass("off");
			  jQuery('#'+clicked_id).addClass("on");
			  jQuery('#'+clicked_id).text('RUSH OFF');
			  rush_my_order = 'on';
			  rush_my_order_calculation(rush_my_order);
		   }	
		}	
		if(clicked_id == 'i_want_stream'){
			if (jQuery('#'+clicked_id).val() == "on") {
				  jQuery('#'+clicked_id).val("off");
				  jQuery('#'+clicked_id+'_input').val("off");
			      jQuery('#'+clicked_id).removeClass("on");
			      jQuery('#'+clicked_id).removeClass("off");
			      jQuery('#'+clicked_id).addClass("off");
			      jQuery('#'+clicked_id).text('SCHEDULE TIME ON');
				   /* mmr_price calculation */
					mmr_price_additional = jQuery('#mmr_price_additional').val();
					additional_value = 10;
					mmr_price_additional_iws = parseFloat(mmr_price_additional) - parseFloat(additional_value);
					jQuery('#mmr_price_additional').val(mmr_price_additional_iws.toFixed(2));
		   }else{
			  jQuery('#'+clicked_id).val("on");
			  jQuery('#'+clicked_id+'_input').val("on");
			  jQuery('#'+clicked_id).removeClass("on");
			  jQuery('#'+clicked_id).removeClass("off");
			  jQuery('#'+clicked_id).addClass("on");
			  jQuery('#'+clicked_id).text('SCHEDULE TIME OFF');
			  /* mmr_price calculation */
				mmr_price_additional = jQuery('#mmr_price_additional').val();
				additional_value = 10;
				mmr_price_additional_iws = parseFloat(mmr_price_additional) + parseFloat(additional_value);
				jQuery('#mmr_price_additional').val(mmr_price_additional_iws.toFixed(2));
		   }
		} 	
		if(clicked_id == 'i_choose_heros'){
			if (jQuery('#'+clicked_id).val() == "on") {
				  jQuery('#'+clicked_id).val("off");
				  jQuery('#'+clicked_id+'_input').val("off");
			      jQuery('#'+clicked_id).removeClass("on");
			      jQuery('#'+clicked_id).removeClass("off");
			      jQuery('#'+clicked_id).addClass("off");
			      jQuery('#'+clicked_id).text('CHOOSE HEROES ON');
				   /* mmr_price calculation */
					 
					mmr_price_additional = jQuery('#mmr_price_additional').val();
					mmr_price_base = jQuery('#mmr_price_base').val();
					additional_value = 0 ;
					//mmr_price_additional_iws = parseFloat(mmr_price_additional) - parseFloat(additional_value);
					jQuery('#i_choose_heros_val').val(additional_value.toFixed(2));
			   }
			   else {
			      jQuery('#'+clicked_id).val("on");
				  jQuery('#'+clicked_id+'_input').val("off");
			      jQuery('#'+clicked_id).removeClass("on");
			      jQuery('#'+clicked_id).removeClass("off");
			      jQuery('#'+clicked_id).addClass("on");
			      jQuery('#'+clicked_id).text('CHOOSE HEROES OFF');
				   /* mmr_price calculation */
					mmr_price_additional = jQuery('#mmr_price_additional').val();
					mmr_price_base = jQuery('#mmr_price_base').val();
					additional_value = parseFloat(mmr_price_base) * 0.20 ;
					//mmr_price_additional_iws = parseFloat(mmr_price_additional) + parseFloat(additional_value);
					jQuery('#i_choose_heros_val').val(additional_value.toFixed(2));
			     
			   }
		}
		if(clicked_id == 'schedule_time'){
			if (jQuery('#'+clicked_id).val() == "on") {
					jQuery('#'+clicked_id).val("off");
					jQuery('#'+clicked_id+'_input').val("off");
			      jQuery('#'+clicked_id).removeClass("on");
			      jQuery('#'+clicked_id).removeClass("off");
			      jQuery('#'+clicked_id).addClass("off");
			      
			      jQuery('#'+clicked_id).text('SELFPLAY ON');
				   /* mmr_price calculation */
					mmr_price_additional = jQuery('#mmr_price_additional').val();
					mmr_price_base = jQuery('#mmr_price_base').val();
					additional_value = 0 ;
					jQuery('#schedule_time_val').val(additional_value.toFixed(2));
			   }
			   else {
			      jQuery('#'+clicked_id).val("on");
				  jQuery('#'+clicked_id+'_input').val("on");
			      jQuery('#'+clicked_id).removeClass("on");
			      jQuery('#'+clicked_id).removeClass("off");
			      jQuery('#'+clicked_id).addClass("on");
			      jQuery('#'+clicked_id).text('SELFPLAY OFF');
				   /* mmr_price calculation */
					mmr_price_additional = jQuery('#mmr_price_additional').val();
					mmr_price_base = jQuery('#mmr_price_base').val();
					additional_value = parseFloat(mmr_price_base) * 0.50 ;
					mmr_price_additional_iws = parseFloat(mmr_price_additional) + parseFloat(additional_value);
					jQuery('#schedule_time_val').val(mmr_price_additional_iws.toFixed(2));
			     
			   }
		}
		mmr_price_base = jQuery('#mmr_price_base').val();
		mmr_price_additional = jQuery('#mmr_price_additional').val();
		var mmr_price_additional_rush = jQuery('#mmr_price_additional_rush').val();
		var mmr_price_additional_i_choose_heros = jQuery('#i_choose_heros_val').val();
		var mmr_price_additional_schedule_time = jQuery('#schedule_time_val').val();
		mmr_price = parseFloat(mmr_price_base) + parseFloat(mmr_price_additional)+ parseFloat(mmr_price_additional_rush)+ parseFloat(mmr_price_additional_i_choose_heros)+ parseFloat(mmr_price_additional_schedule_time);
		////console.log(mmr_price_base);
		console.log('mmr_price_additional_rush');
		console.log(mmr_price_additional_rush);
		console.log(mmr_price_additional_i_choose_heros);
		////console.log(mmr_price);
		jQuery('#mmr_price').val(mmr_price);
	} 
	
function base_price_calculation(game_type){
	var min = jQuery("#my_mrr").val();
	var max	= jQuery("#desirder_mrr").val();
	var range_value = [];
	var ranges = [105,2500, 3500, 4500, 5000, 5500, 5800, 6195,6300,6520];
	var from = 1;
	var to = ranges[0];
	var range_prices = [0,0.75,0.75,0.75,2,3, 6, 10,14,16];
	//var range_prices = [5,1.5, 2, 4, 6, 9, 15, 20];
	var party_range_prices = [7,1.3, 2.2, 2.8, 4.6, 8, 10, 14];
	//var party_range_prices = [8,2, 3, 4.5, 7, 13, 22, 38];
	var estimted_days = [1,1, 1, 1, 2, 2, 3, 4,4,2];
	var count = Object.keys(ranges).length;
	var range_keys = Object.keys(range_prices);

	var min_range = 105;
	var step = 35;
	var mmr_points_step = 0;
	var days_step = 105;
	var base_price = parseFloat(0);
	var total_estimated_days = 0;
	if(min >= 35 && max <= 140 ){
		base_price_root_1 = 5;
		price = base_price_root_1;
		estimated_days = 1;
	}
	for(var i = 0; i < count; i++){
				to = ranges[i];
			
			var range_used = 0;
				
			if(min >= from && max >= to)
				range_used = (parseFloat(to) - parseFloat(min));
				
			else if(min <= from && max >= to)
				range_used = parseFloat(to) - parseFloat(from);
			
			else if(min <= from && max <= to)
				range_used = max - parseFloat(from);
			
			else if(min >= from && max <= to)
				range_used = max - min;				
			
			if(range_used < 0)
				range_used = 0;	
			
			range_value[i] = range_used;
			range_used = range_used.toFixed(2);
			if(game_type == 'solo'){
				base_price_root = range_prices[i];
			}else if(game_type == 'party'){
				console.log('party');
				console.log(game_type);
				base_price_root = party_range_prices[i];
			}
			mmr_points_step = range_used / step;
			price = base_price_root * mmr_points_step;
			estimated_days_root = estimted_days[i];
			mmr_points_ed_step = range_used / days_step;
			estimated_days = Math.round(estimated_days_root * mmr_points_ed_step);
			
			base_price += price;
			total_estimated_days += estimated_days;
			
			from = to+1;
}
jQuery("#estimated_days").val(total_estimated_days);
jQuery("#mmr_price_base").val(base_price.toFixed(2));
}
function i_choose_heros_calculation(){
	mmr_price_base = jQuery('#mmr_price_base').val();
	additional_value = parseFloat(mmr_price_base) * 0.20 ;
	//mmr_price_additional_iws = parseFloat(mmr_price_additional) + parseFloat(additional_value);
	jQuery('#i_choose_heros_val').val(additional_value.toFixed(2));
}
function schedule_time_calculation(){
	mmr_price_base = jQuery('#mmr_price_base').val();
	additional_value = parseFloat(mmr_price_base) * 0.50;
	//mmr_price_additional_iws = parseFloat(mmr_price_additional) + parseFloat(additional_value);
	jQuery('#schedule_time_val').val(additional_value.toFixed(2));
}
function rush_my_order_calculation(rush_my_order){
	var min = jQuery("#my_mrr").val();
	var max	= jQuery("#desirder_mrr").val();
	var range_value = [];
	var range_price = [];
	var ranges = [105,2500, 3500, 4500, 5000, 5500, 5800, 6195,6300,6520];
	var estimted_days = [1,1, 1, 1, 2, 2, 3, 4,4,2];
	var from = 1;
	var to = ranges[0];
	var range_prices = [0,0.75,0.75,0.75,2,3, 6, 10,14,16];
	//var range_prices = [0,0.44,0.44,0.44,1.25,2.25, 6, 10];
	//var range_prices = [0,0.88,0.88,0.88,2.80,5.25, 9.10, 14.0];
	var count = Object.keys(ranges).length;
	var range_keys = Object.keys(range_prices);
	var step = 35;
	var days_step = 105;
	var mmr_points_step = 0;
	var rush_price = parseFloat(0);
	var total_estimated_days = 0;
	for(var i = 0; i < count; i++){
			to = ranges[i];
			
			var range_used = 0;
				
			if(min >= from && max >= to)
				range_used = (parseFloat(to) - parseFloat(min));
				
			else if(min <= from && max >= to)
				range_used = parseFloat(to) - parseFloat(from);
			
			else if(min <= from && max <= to)
				range_used = max - parseFloat(from);
			
			else if(min >= from && max <= to)
				range_used = max - min;				
			
			if(range_used < 0)
				range_used = 0;	
			
			range_value[i] = range_used;
			range_used = range_used.toFixed(2);
			base_price_root = range_prices[i];
			mmr_points_step = range_used / step;
			price = base_price_root * mmr_points_step;
			estimated_days_root = estimted_days[i];
			mmr_points_ed_step = range_used / days_step;
			estimated_days = Math.round(estimated_days_root * mmr_points_ed_step);
			
			rush_price += price;
			total_estimated_days += estimated_days;
			from = to+1;
	}
	estimated_days_rush = total_estimated_days/2;
	estimated_days_rush = Math.round(estimated_days_rush);
	jQuery("#estimated_days").val(estimated_days_rush);
	jQuery("#mmr_price_additional_rush").val(rush_price.toFixed(2));
}


// Rush my order
		// Rush my order End

jQuery( function() {
	
	var base_price = 0;
	var mmr_points = 0;
	var mmr_points_step = 0;
	var min_val = 0;
	var max_val = 0;
	jQuery("#my_current_mmr #1919_mmr").show();
	jQuery("#my_desired_mmr #4079_mmr").show();
	jQuery("#my_mrr").val('2030');
	jQuery("#estimated_days").val(20);
	jQuery("#mmr_points").val(1995);
	jQuery("#desirder_mrr").val('4025');
	jQuery("#mmr_price").val(134.61);
	jQuery("#wcg-price-value").html(134.61);
	jQuery("#my_desired_mmr #4079_mmr").show();
    jQuery( "#slider-range" ).slider({
      range: true,
	  step: 35,
      min: 70,
      max: 6510,
      values: [ 2000, 4000 ],
      slide: function( event, ui ) {
	   min_val = ui.values[ 0 ];
	   max_val = ui.values[ 1 ];
       jQuery( "#my_mrr" ).val(min_val);
       jQuery( "#desirder_mrr" ).val(max_val );
	   mmr_points = max_val - min_val;
	   ////console.log(min_val);
	   ////console.log(max_val);
			if(min_val >= 0 && min_val <= 153 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #119_mmr").show();
								
			}
			else if(min_val >= 154 && min_val <= 307 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #239_mmr").show();
				
			}
			else if(min_val >= 308 && min_val <= 461 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #359_mmr").show();
					
			}
			else if(min_val >= 462 && min_val <= 615 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #479_mmr").show();	
			}
			else if(min_val >= 616 && min_val <= 769 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #599_mmr").show();	
			}
			else if(min_val >= 770 && min_val <= 923 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #719_mmr").show();	
			}
			else if(min_val >= 924  && min_val <= 839 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #839_mmr").show();	
			}
			else if(min_val >= 840 && min_val <= 959 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #959_mmr").show();	
			}
			else if(min_val >= 960 && min_val <= 1077 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1079_mmr").show();	
			}
			else if(min_val >= 1078  && min_val <= 1231 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1199_mmr").show();	
			}
			else if(min_val >= 1232 && min_val <= 1385 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1319_mmr").show();	
			}
			else if(min_val >= 1386  && min_val <= 1539 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1439_mmr").show();	
			}
			else if(min_val >= 1540  && min_val <= 1693 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1559_mmr").show();	
			}
			else if(min_val >= 1694  && min_val <= 1847 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1679_mmr").show();	
			}
			else if(min_val >= 1848  && min_val <= 2001 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1799_mmr").show();	
			}
			else if(min_val >= 2002  && min_val <= 2155 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #1919_mmr").show();	
			}
			else if(min_val >= 2156  && min_val <= 2309 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2039_mmr").show();	
			}
			else if(min_val >= 2310 && min_val <= 2463 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2159_mmr").show();	
			}
			else if(min_val >= 2464  && min_val <= 2617 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2279_mmr").show();	
			}
			else if(min_val >= 2618  && min_val <= 2771 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2399_mmr").show();	
			}
			else if(min_val >= 2772  && min_val <= 2925 ){
					jQuery("#my_current_mmr .medal_icon").hide();				
					jQuery("#my_current_mmr #2519_mmr").show();	
			}
			else if(min_val >= 2926  && min_val <= 3079 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2639_mmr").show();	
			}
			else if(min_val >= 3080  && min_val <= 3233 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2759_mmr").show();	
			}
			else if(min_val >= 3234  && min_val <= 3387 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2879_mmr").show();	
			}
			else if(min_val >= 3388  && min_val <= 3541 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #2999_mmr").show();	
			}
			else if(min_val >= 3542  && min_val <= 3695 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3119_mmr").show();	
			}
			else if(min_val >= 3696  && min_val <= 3849 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3239_mmr").show();	
			}
			else if(min_val >= 3850  && min_val <= 4003 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3359_mmr").show();	
			}
			else if(min_val >= 4004  && min_val <= 4157 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3479_mmr").show();	
			}
			else if(min_val >= 4158  && min_val <= 4311 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3599_mmr").show();	
			}
			else if(min_val >= 4312  && min_val <= 4465 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3719_mmr").show();	
			}
			else if(min_val >= 4466  && min_val <= 4619 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3839_mmr").show();	
			}
			else if(min_val >= 4620  && min_val <= 4819 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #3959_mmr").show();	
			}
			else if(min_val >= 4820  && min_val <= 5019 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4079_mmr").show();	
			}
			else if(min_val >= 5020  && min_val <= 5219 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4199_mmr").show();	
			}
			else if(min_val >= 5220  && min_val <= 5419 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4319_mmr").show();	
			}
			else if(min_val >= 5420  && min_val <= 4439 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4439_mmr").show();	
			}
			else if(min_val >= 4440 && min_val <= 4559 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4559_mmr").show();	
			}
			else if(min_val >= 4560 && min_val <= 4679 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4679_mmr").show();	
				console.log('4679_mmr');
			}
			else if(min_val >= 4680 && min_val <= 4799 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4799_mmr").show();	
			}
			else if(min_val >= 4800 && min_val <= 4919 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #4919_mmr").show();	
			}
			else if(min_val >= 4920 && min_val <= 5039 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5039_mmr").show();	
			}
			else if(min_val >= 5040 && min_val <= 5159 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5159_mmr").show();	
			}
			else if(min_val >= 5160 && min_val <= 5279 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5279_mmr").show();	
			}
			else if(min_val >= 5280 && min_val <= 5399 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5399_mmr").show();	
			}
			else if(min_val >= 5400 && min_val <= 5519 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5519_mmr").show();	
			}
			else if(min_val >= 5520 && min_val <= 5639 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5639_mmr").show();	
			}
			else if(min_val >= 5640 && min_val <= 5739 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5740_mmr").show();	
			}
			else if(min_val >= 5740 && min_val <= 5845 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #5845_mmr").show();	
			}
			else if(min_val >= 5846 && min_val <= 6195 ){
				jQuery("#my_current_mmr .medal_icon").hide();				
				jQuery("#my_current_mmr #6200_mmr").show();	
			}
			
			// desired mmr conditions
			if(max_val >= 0 && max_val <= 119 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #119_mmr").show();
								
			}
			else if(max_val >= 120 && max_val <= 239 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #239_mmr").show();
				
			}
			else if(max_val >= 240 && max_val <= 359 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #359_mmr").show();
					
			}
			else if(max_val >= 360 && max_val <= 479 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #479_mmr").show();	
			}
			else if(max_val >= 480 && max_val <= 599 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #599_mmr").show();	
			}
			else if(max_val >= 599 && max_val <= 719 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #719_mmr").show();	
			}
			else if(max_val >= 719 && max_val <= 839 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #839_mmr").show();	
			}
			else if(max_val >= 840 && max_val <= 959 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #959_mmr").show();	
			}
			else if(max_val >= 960 && max_val <= 1079 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1079_mmr").show();	
			}
			else if(max_val >= 1079 && max_val <= 1199 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1199_mmr").show();	
			}
			else if(max_val >= 1120 && max_val <= 1319 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1319_mmr").show();	
			}
			else if(max_val >= 1320 && max_val <= 1439 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1439_mmr").show();	
			}
			else if(max_val >= 1440 && max_val <= 1559 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1559_mmr").show();	
			}
			else if(max_val >= 1560 && max_val <= 1679 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1679_mmr").show();	
			}
			else if(max_val >= 1680 && max_val <= 1799 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1799_mmr").show();	
			}
			else if(max_val >= 1800 && max_val <= 1919 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #1919_mmr").show();	
			}
			else if(max_val >= 1920 && max_val <= 2039 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2039_mmr").show();	
			}
			else if(max_val >= 2040 && max_val <= 2159 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2159_mmr").show();	
			}
			else if(max_val >= 2160 && max_val <= 2279 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2279_mmr").show();	
			}
			else if(max_val >= 2280 && max_val <= 2399 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2399_mmr").show();	
			}
			else if(max_val >= 2400 && max_val <= 2519 ){
					jQuery("#my_desired_mmr .medal_icon").hide();				
					jQuery("#my_desired_mmr #2519_mmr").show();	
			}
			else if(max_val >= 2520 && max_val <= 2639 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2639_mmr").show();	
			}
			else if(max_val >= 2639 && max_val <= 2759 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2759_mmr").show();	
			}
			else if(max_val >= 2760 && max_val <= 2879 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2879_mmr").show();	
			}
			else if(max_val >= 2880 && max_val <= 2999 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #2999_mmr").show();	
			}
			else if(max_val >= 2999 && max_val <= 3119 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3119_mmr").show();	
			}
			else if(max_val >= 3120 && max_val <= 3239 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3239_mmr").show();	
			}
			else if(max_val >= 3240 && max_val <= 3359 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3359_mmr").show();	
			}
			else if(max_val >= 3360 && max_val <= 3479 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3479_mmr").show();	
			}
			else if(max_val >= 3480 && max_val <= 3599 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3599_mmr").show();	
			}
			else if(max_val >= 3500 && max_val <= 3719 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3719_mmr").show();	
			}
			else if(max_val >= 3720 && max_val <= 3839 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3839_mmr").show();	
			}
			else if(max_val >= 3840 && max_val <= 3959 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #3959_mmr").show();	
			}
			else if(max_val >= 3960 && max_val <= 4079 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4079_mmr").show();	
			}
			else if(max_val >= 4080 && max_val <= 4199 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4199_mmr").show();	
			}
			else if(max_val >= 4200 && max_val <= 4319 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4319_mmr").show();	
			}
			else if(max_val >= 4319 && max_val <= 4439 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4439_mmr").show();	
			}
			else if(max_val >= 4440 && max_val <= 4559 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4559_mmr").show();	
			}
			else if(max_val >= 4560 && max_val <= 4679 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4679_mmr").show();	
				console.log('4679_mmr');
			}
			else if(max_val >= 4680 && max_val <= 4799 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4799_mmr").show();	
			}
			else if(max_val >= 4800 && max_val <= 4919 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #4919_mmr").show();	
			}
			else if(max_val >= 4920 && max_val <= 5039 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5039_mmr").show();	
			}
			else if(max_val >= 5040 && max_val <= 5159 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5159_mmr").show();	
			}
			else if(max_val >= 5160 && max_val <= 5279 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5279_mmr").show();	
			}
			else if(max_val >= 5280 && max_val <= 5399 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5399_mmr").show();	
			}
			else if(max_val >= 5400 && max_val <= 5519 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5519_mmr").show();	
			}
			else if(max_val >= 5520 && max_val <= 5639 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5639_mmr").show();	
			}
			else if(max_val >= 5640 && max_val <= 5739 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5740_mmr").show();	
			}
			else if(max_val >= 5740 && max_val <= 5845 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #5845_mmr").show();	
			}
			else if(max_val >= 5846 && max_val <= 6195 ){
				jQuery("#my_desired_mmr .medal_icon").hide();				
				jQuery("#my_desired_mmr #6200_mmr").show();	
			}
			// MMR Rate	
			

/* 
solo	
5€ till 105		
1.50€ per 35 Points
2€ per 35 Points
4€ per 35 Points
6€ per 35 Points
11€ per 35 Points
20€ per 35 Points
35€ per 35 Points */

/* 
Party
8 € till 105	
2€ per 35 Points
3€ per 35 Points
4.5€ per 35 Points
7€ per 35 Points
13€ per 35 Points
22€ per 35 Points
38€ per 35 Points */
			var game_type = jQuery("#game_type").val();
			var estimated_days = 1;
			var rush_my_order = jQuery('#rush_my_order').val();
			var schedule_time = jQuery('#schedule_time').val();
			var i_choose_heros = jQuery('#i_choose_heros').val();
			base_price_calculation(game_type);
			if(rush_my_order == 'on'){
				rush_my_order_calculation(rush_my_order);
			}
			if(i_choose_heros == 'on'){
				i_choose_heros_calculation();
			}
			if(schedule_time == 'on'){
				schedule_time_calculation();
			}
			
		jQuery("#mmr_points").val(mmr_points);
		if(mmr_points < 105){
			jQuery("#my_mrr").addClass('wcg_error_field');
			jQuery("#desirder_mrr").addClass('wcg_error_field');
			jQuery(".single_add_to_cart_button").attr('disabled','disabled');
			jQuery(".wcg_error_msg").show();
		}else{
			jQuery(".wcg_error_msg").hide();
			jQuery("#my_mrr").removeClass('wcg_error_field');
			jQuery("#desirder_mrr").removeClass('wcg_error_field');
			jQuery(".single_add_to_cart_button"). removeAttr("disabled");
		}
		base_price = jQuery("#mmr_price_base").val();			
		mmr_price_additional = jQuery('#mmr_price_additional').val();
		var mmr_price_additional_rush = jQuery('#mmr_price_additional_rush').val();
		var mmr_price_additional_schedule_time = jQuery('#schedule_time_val').val();
		var mmr_price_additional_i_choose_heros = jQuery('#i_choose_heros_val').val();
		mmr_price = parseFloat(base_price) + parseFloat(mmr_price_additional) + parseFloat(mmr_price_additional_rush) + parseFloat(mmr_price_additional_i_choose_heros)+ parseFloat(mmr_price_additional_schedule_time);
		jQuery('#mmr_price').val(mmr_price.toFixed(2));
			
      }
    });
  } );
