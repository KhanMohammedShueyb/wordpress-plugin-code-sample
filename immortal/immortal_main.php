<?php
/*
Plugin Name: Immortal boast
Description: Use this shortcode [show_immortal_form] to display the form 
Version: 1.0.0
Plugin URI: https://www.fiverr.com/logics_buffer
Author: LogicsBuffer 
Author URI: http://logicsbuffer.com/
*/
add_filter( 'woocommerce_email_order_meta_fields', 'woocommerce_email_order_meta_fields_func', 10, 3 );
function woocommerce_email_order_meta_fields_func( $fields, $sent_to_admin, $order ) {

	$fields['skype_id'] = array(
		'label' => __( 'Enter your message to appear on the card', 'woocommerce' ),
		'value' => wptexturize( get_post_meta( $order->id, 'skype_id', true ) ),
	);
	
	$fields['stream_id'] = array(
		'label' => __( 'Delivery date' ),
		'value' => get_post_meta( $order->id, 'stream_id', true ),
	);
	$fields['stream_password'] = array(
		'label' => __( 'Delivery date' ),
		'value' => get_post_meta( $order->id, 'stream_password', true ),
	);

	//... more meta fields goes here

	return $fields;
}

add_action( 'woocommerce_email_after_order_table', 'woocommerce_email_after_order_table_func' );
function woocommerce_email_after_order_table_func( $order ) {
	?>

	<h3>Additional information</h3>
	<table>
		<tr>
			<td>skype_id: </td>
			<td><?php echo wptexturize( get_post_meta( $order->id, 'skype_id', true ) ); ?></td>
		</tr>
		<tr>
			<td>stream_id: </td>
			<td><?php echo wptexturize( get_post_meta( $order->id, 'stream_id', true ) ); ?></td>
		</tr>
		<tr>
			<td>stream_password: </td>
			<td><?php echo wptexturize( get_post_meta( $order->id, 'stream_password', true ) ); ?></td>
		</tr>
	</table>

	<?php
}

add_filter('woocommerce_get_catalog_ordering_args', 'am_woocommerce_catalog_orderby');
function am_woocommerce_catalog_orderby( $args ) {
$args['orderby'] = 'date';
$args['order'] = 'ASC';
return $args;
}

add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
  
function custom_override_checkout_fields( $fields ) {
	unset($fields['billing']['billing_first_name']);
	unset($fields['billing']['billing_last_name']);
	unset($fields['billing']['billing_company']);
	unset($fields['billing']['billing_address_1']);
	unset($fields['billing']['billing_address_2']);
	unset($fields['billing']['billing_city']);
	unset($fields['billing']['billing_postcode']);
	unset($fields['billing']['billing_state']);
	unset($fields['billing']['billing_phone']);
    return $fields;
}

add_action('woocommerce_add_order_item_meta','order_meta_handler', 1, 3);
function order_meta_handler($item_id, $values, $cart_item_key) {
	$cart_session = WC()->session->get('cart');
	if($cart_session[$cart_item_key]['game_type'][0]){
	wc_add_order_item_meta($item_id, "Game type", $cart_session[$cart_item_key]['game_type'][0]);
	}
	if($cart_session[$cart_item_key]['mmr_points'][0]){
	wc_add_order_item_meta($item_id, "MMR points", $cart_session[$cart_item_key]['mmr_points'][0]);
	}
	if($cart_session[$cart_item_key]['estimated_days'][0]){
	wc_add_order_item_meta($item_id, "Estimated days", $cart_session[$cart_item_key]['estimated_days'][0]);
	}
		if($cart_session[$cart_item_key]['my_mrr'][0]){
	wc_add_order_item_meta($item_id, "My mrr", $cart_session[$cart_item_key]['my_mrr'][0]);
	}
		if($cart_session[$cart_item_key]['desirder_mrr'][0]){
	wc_add_order_item_meta($item_id, "Desirder mrr", $cart_session[$cart_item_key]['desirder_mrr'][0]);
	}
		if($cart_session[$cart_item_key]['rush_my_order'][0]){
	wc_add_order_item_meta($item_id, "Rush my order", $cart_session[$cart_item_key]['rush_my_order'][0]);
	}
		if($cart_session[$cart_item_key]['i_want_stream'][0]){
	wc_add_order_item_meta($item_id, "I want stream", $cart_session[$cart_item_key]['i_want_stream'][0]);
	}
	if($cart_session[$cart_item_key]['schedule_time'][0]){
	wc_add_order_item_meta($item_id, "Schedule time", $cart_session[$cart_item_key]['schedule_time'][0]);
	}
	if($cart_session[$cart_item_key]['i_choose_heros'][0]){
	wc_add_order_item_meta($item_id, "I choose heros", $cart_session[$cart_item_key]['i_choose_heros'][0]);
	}
	
}
add_filter('woocommerce_add_cart_item_data', 'add_cart_item_custom_data', 10, 2);

function add_cart_item_custom_data($cart_item_meta, $new_post_id) {
	global $woocommerce;
	$mmr_points= get_post_meta($new_post_id, 'mmr_points');
	$estimated_days=get_post_meta($new_post_id, 'estimated_days' );
	$my_mrr=get_post_meta($new_post_id, 'my_mrr');
	$desirder_mrr=get_post_meta($new_post_id, 'desirder_mrr');			
	$rush_my_order=get_post_meta($new_post_id, 'rush_my_order');			
	$i_want_stream=get_post_meta($new_post_id, 'i_want_stream');			
	$schedule_time=get_post_meta($new_post_id, 'schedule_time');			
	$i_choose_heros=get_post_meta($new_post_id, 'i_choose_heros');			
	$game_type = get_post_meta($new_post_id, 'game_type');
	$cart_item_meta['mmr_points'] = $mmr_points;
	$cart_item_meta['estimated_days'] = $estimated_days;
	$cart_item_meta['my_mrr'] = $my_mrr;
	$cart_item_meta['desirder_mrr'] = $desirder_mrr;
	$cart_item_meta['rush_my_order'] = $rush_my_order;
	$cart_item_meta['i_want_stream'] = $i_want_stream;
	$cart_item_meta['schedule_time'] = $schedule_time;
	$cart_item_meta['i_choose_heros'] = $i_choose_heros;
	$cart_item_meta['game_type'] = $game_type;
	return $cart_item_meta;
}

function iconic_display_engraving_text_cart( $item_data, $cart_item ) {
	$rush_my_order = $cart_item['rush_my_order'][0];
	$i_want_stream = $cart_item['i_want_stream'][0];
	$schedule_time = $cart_item['schedule_time'][0];
	$i_choose_heros = $cart_item['i_choose_heros'][0];
	if($rush_my_order == 'neutral'){
		$rush_my_order = 'off';
	}
	if($cart_item['game_type'][0]){
		$item_data[] = array(
			'key'     => __( 'Game Type', 'iconic' ),
			'value'   => $cart_item['game_type'][0],
			'display' => '',
		);
	}
	if($cart_item['mmr_points'][0]){
		$item_data[] = array(
			'key'     => __( 'MMR Points', 'iconic' ),
			'value'   => $cart_item['mmr_points'][0],
			'display' => '',
		);
	}
	if($cart_item['estimated_days'][0]){
		$item_data[] = array(
			'key'     => __( 'Estimated Days', 'iconic' ),
			'value'   => $cart_item['estimated_days'][0],
			'display' => '',
		);
	}
	if($cart_item['my_mrr'][0]){
		$item_data[] = array(
			'key'     => __( 'Current MMR', 'iconic' ),
			'value'   => $cart_item['my_mrr'][0],
			'display' => '',
		);
	}
	if($cart_item['desirder_mrr'][0]){
		$item_data[] = array(
			'key'     => __( 'Desirder MMR', 'iconic' ),
			'value'   => $cart_item['desirder_mrr'][0],
			'display' => '',
		);
	}
	if($i_want_stream =='on'){
		$item_data[] = array(
			'key'     => __( 'Rush My Order', 'iconic' ),
			'value'   => $rush_my_order,
			'display' => '',
		);
	}
	if($i_want_stream =='on'){
		$item_data[] = array(
			'key'     => __( 'I Want Stream', 'iconic' ),
			'value'   => $cart_item['i_want_stream'][0],
			'display' => '',
		);
	}
	if($schedule_time =='on'){
		$item_data[] = array(
			'key'     => __( 'Schedule Time', 'iconic' ),
			'value'   => $cart_item['schedule_time'][0],
			'display' => '',
		);
	}
	if($i_choose_heros =='on'){
		$item_data[] = array(
			'key'     => __( 'I Choose Heros', 'iconic' ),
			'value'   => $cart_item['i_choose_heros'][0],
			'display' => '',
		);
	}
    return $item_data;
}
 
add_filter( 'woocommerce_get_item_data', 'iconic_display_engraving_text_cart', 10, 2 );
 
function ace_hide_prices_category_pages( $price, $product ) {
	if ( is_tax()) { // Change 'clothing' to your product category slug
		return 'PRICE DEPENDS ON OPTIONS'; // Return a empty string for no price display.
	}
	return $price;
}
add_filter( 'woocommerce_get_price_html', 'ace_hide_prices_category_pages', 10, 2 );


add_action( 'init', 'immortal' );

function immortal() {

	add_shortcode( 'show_immortal_form', 'wp_immortal_form' );
	add_action( 'wp_enqueue_scripts', 'immortal_script' );
	add_action( 'wp_ajax_nopriv_post_love_set_product_canvas', 'post_love_set_product_canvas' );
	add_action( 'wp_ajax_post_love_set_product_canvas', 'post_love_set_product_canvas' );
}

 function immortal_script() {
		        
	
	wp_enqueue_script( 'rt_masking_script', plugins_url().'/immortal/js/masking.js',array(),time());
	wp_enqueue_script( 'jquery-ui', plugins_url().'/immortal/js/jquery-ui.js',array(),time());
	//wp_enqueue_script( 'rt_button_script', plugins_url().'/immortal/js/fa-multi-button.js',array(),time());
	wp_enqueue_style( 'rt_custom_fancy_style', plugins_url().'/immortal/css/custom_fancy.css',array(),time());
	wp_enqueue_style( 'wcg_public', plugins_url().'/immortal/css/wcg-public.css',array(),time());

	if( is_single('dota-2-mmr-boost')){
		wp_enqueue_script( 'rt_custom_fancy_script', plugins_url().'/immortal/js/custom_fancy1.js',array(),time());	
	//wp_enqueue_style( 'rt_fancy_bootstrap', plugins_url().'/immortal/css/bootstrap1.css',array(),time());
	}
} 	
function wp_immortal_form() {
		$plugins_url =  plugins_url( 'images/icons/', __FILE__ );
			global $post;
			//$pagerr = get_page_by_title('DOTA 2 MMR Boost', OBJECT, 'product');
			
			if(isset($_POST['submit_prod'])){
			global $woocommerce;
			$mmr_price= $_POST['mmr_price'];
			$mmr_points= $_POST['mmr_points'];
			$estimated_days= $_POST['estimated_days'];
			$my_mrr = $_POST['my_mrr'];
			$desirder_mrr= $_POST['desirder_mrr'];			
			$rush_my_order = $_POST['rush_my_order'];			 
			$i_want_stream = $_POST['i_want_stream'];			 
			$schedule_time = $_POST['schedule_time'];	
			$i_choose_heros = $_POST['i_choose_heros'];
			$game_type = $_POST['game_type'];			
			$address = $_POST['rt_addr'];			
			$comment = $_POST['rt_comment'];				
			$skuu = "custom_dota_2";
			$new_post_id = get_the_ID();
			update_post_meta($new_post_id, '_sku', $skuu );
			update_post_meta( $new_post_id, '_price', $mmr_price );
			update_post_meta( $new_post_id,'_regular_price', $mmr_price );
				 			
				//set product values:
				update_option( 'wdyw_product',$new_post_id );
				update_post_meta( $new_post_id, '_Sold_individually', "1" );
				update_post_meta($new_post_id, 'mmr_points', $mmr_points);
				update_post_meta($new_post_id, 'estimated_days', $estimated_days);
				update_post_meta($new_post_id, 'my_mrr',  $my_mrr);
				update_post_meta($new_post_id, 'desirder_mrr',$desirder_mrr);			
				update_post_meta($new_post_id, 'rush_my_order',$rush_my_order);			
				update_post_meta($new_post_id, 'i_want_stream',$i_want_stream);			
				update_post_meta($new_post_id, 'schedule_time',$schedule_time);			
				update_post_meta($new_post_id, 'i_choose_heros',$i_choose_heros);			
				update_post_meta($new_post_id, 'game_type',$game_type);					
				$woocommerce->cart->add_to_cart($new_post_id);
				$cart_url = site_url().'/cart/';
				wp_redirect( $cart_url );
				exit;
			}
			
ob_start();
	
			?>
<div class="custom_calculator wcg-slider-content">
		<div id="rt_waiting" style="display: none;"><img src="#" style="width: 120px;"></div>
	<h3 class="rp_wcdpd_product_page_title" style="display: none;">Dota 2 MMR Boost</h3>
	<div class="orderform" id="form1">

	
	<form role="form" action="" method="post" id="add_cart" enctype="multipart/form-data" method="post">						
	 <div class="form-inner-main">
				<div class="items_group clearfix">				    						
				<!-- <span id="price"/></span> -->
				<input type="hidden" id="eprice" />
				<input type="hidden" id="hprice" />						
				<input type="hidden" id="psqft" />						
				<input type="hidden" id="efinal" />
				<input type="hidden" id="qfinal" />
				<input type="hidden" id="sqft_total" />
				<input type="hidden" id="eyeletsT1" />
				<input type="hidden" id="hammingT1" />
				<input type="hidden" id="deliveryT1" />			

 <div class="double_sided images">											

<div class="wcg_input_row">
				
	<div class="wcg_field wcg_center">
		<button type="button" id="solo" class="tab-btn active" style="width: 100%;" onclick="calculate_addition(this.id)" value="solo">MMR</button>
		<button type="button" id="party" class="tab-btn" style="display: none;" onclick="calculate_addition(this.id)" value="party">SUPPORT</button>
		<input class="hide" type="text" id="game_type" name="game_type" value="solo"> 
	</div>
	
</div>
			<div class="medals_icons_container images wcg_input_row">											
				<div class="wcg_field wcg_left" id="my_current_mmr">

					<img id="119_mmr" class="medal_icon" src="<?php echo $plugins_url.'119_mmr.jpg'; ?>">								
					<img id="239_mmr" class="medal_icon" src="<?php echo $plugins_url.'239_mmr.jpg'; ?>">								
					<img id="359_mmr" class="medal_icon" src="<?php echo $plugins_url.'359_mmr.jpg'; ?>">								
					<img id="479_mmr" class="medal_icon" src="<?php echo $plugins_url.'479_mmr.jpg'; ?>">	
					<img id="599_mmr" class="medal_icon" src="<?php echo $plugins_url.'599_mmr.jpg'; ?>">	
					<img id="719_mmr" class="medal_icon" src="<?php echo $plugins_url.'599_mmr.jpg'; ?>">								
					<img id="839_mmr" class="medal_icon" src="<?php echo $plugins_url.'599_mmr.jpg'; ?>">
					
					
					<img id="959_mmr" class="medal_icon" src="<?php echo $plugins_url.'959_mmr.jpg'; ?>">
					<img id="1079_mmr" class="medal_icon" src="<?php echo $plugins_url.'1079_mmr.jpg'; ?>">								
					<img id="1199_mmr" class="medal_icon" src="<?php echo $plugins_url.'1199_mmr.jpg'; ?>">							
					<img id="1319_mmr" class="medal_icon" src="<?php echo $plugins_url.'1319_mmr.jpg'; ?>">								
					<img id="1439_mmr" class="medal_icon" src="<?php echo $plugins_url.'1439_mmr.jpg'; ?>">	
					<img id="1559_mmr" class="medal_icon" src="<?php echo $plugins_url.'1439_mmr.jpg'; ?>">								
					<img id="1679_mmr" class="medal_icon" src="<?php echo $plugins_url.'1439_mmr.jpg'; ?>">	
					
					
					<img id="1799_mmr" class="medal_icon" src="<?php echo $plugins_url.'1799_mmr.jpg'; ?>">								
					<img id="1919_mmr" class="medal_icon" src="<?php echo $plugins_url.'1919_mmr.jpg'; ?>">	
					<img id="2039_mmr" class="medal_icon" src="<?php echo $plugins_url.'2039_mmr.jpg'; ?>">							
					<img id="2159_mmr" class="medal_icon" src="<?php echo $plugins_url.'2159_mmr.jpg'; ?>">								
					<img id="2279_mmr" class="medal_icon" src="<?php echo $plugins_url.'2279_mmr.jpg'; ?>">								
					<img id="2399_mmr" class="medal_icon" src="<?php echo $plugins_url.'2279_mmr.jpg'; ?>">	
					<img id="2519_mmr" class="medal_icon" src="<?php echo $plugins_url.'2279_mmr.jpg'; ?>">	
					
					
					<img id="2639_mmr" class="medal_icon" src="<?php echo $plugins_url.'2639_mmr.jpg'; ?>">								
					<img id="2759_mmr" class="medal_icon" src="<?php echo $plugins_url.'2759_mmr.jpg'; ?>">								
					<img id="2879_mmr" class="medal_icon" src="<?php echo $plugins_url.'2879_mmr.jpg'; ?>">	
					<img id="2999_mmr" class="medal_icon" src="<?php echo $plugins_url.'2999_mmr.jpg'; ?>">								
					<img id="3119_mmr" class="medal_icon" src="<?php echo $plugins_url.'3119_mmr.jpg'; ?>">								
					<img id="3239_mmr" class="medal_icon" src="<?php echo $plugins_url.'3119_mmr.jpg'; ?>">								
					<img id="3359_mmr" class="medal_icon" src="<?php echo $plugins_url.'3119_mmr.jpg'; ?>">	
					
					
					<img id="3479_mmr" class="medal_icon" src="<?php echo $plugins_url.'3479_mmr.jpg'; ?>">								
					<img id="3599_mmr" class="medal_icon" src="<?php echo $plugins_url.'3599_mmr.jpg'; ?>">								
					<img id="3719_mmr" class="medal_icon" src="<?php echo $plugins_url.'3719_mmr.jpg'; ?>">								
					<img id="3839_mmr" class="medal_icon" src="<?php echo $plugins_url.'3839_mmr.jpg'; ?>">	
					<img id="3959_mmr" class="medal_icon" src="<?php echo $plugins_url.'3959_mmr.jpg'; ?>">								
					<img id="4079_mmr" class="medal_icon" src="<?php echo $plugins_url.'3959_mmr.jpg'; ?>">								
					<img id="4199_mmr" class="medal_icon" src="<?php echo $plugins_url.'3959_mmr.jpg'; ?>">	
					
					
					<img id="4319_mmr" class="medal_icon" src="<?php echo $plugins_url.'4319_mmr.png'; ?>">	
					<img id="4439_mmr" class="medal_icon" src="<?php echo $plugins_url.'4439_mmr.jpg'; ?>">								
					<img id="4559_mmr" class="medal_icon" src="<?php echo $plugins_url.'4559_mmr.jpg'; ?>">								
					<img id="4679_mmr" class="medal_icon" src="<?php echo $plugins_url.'4679_mmr.jpg'; ?>">								
					<img id="4799_mmr" class="medal_icon" src="<?php echo $plugins_url.'4799_mmr.jpg'; ?>">	
					<img id="4919_mmr" class="medal_icon" src="<?php echo $plugins_url.'4799_mmr.jpg'; ?>">								
					<img id="5039_mmr" class="medal_icon" src="<?php echo $plugins_url.'4799_mmr.jpg'; ?>">	
					
					<img id="5159_mmr" class="medal_icon" src="<?php echo $plugins_url.'5159_mmr.jpg'; ?>">	
					<img id="5279_mmr" class="medal_icon" src="<?php echo $plugins_url.'5279_mmr.jpg'; ?>">	
					<img id="5399_mmr" class="medal_icon" src="<?php echo $plugins_url.'5399_mmr.jpg'; ?>">								
					<img id="5519_mmr" class="medal_icon" src="<?php echo $plugins_url.'5519_mmr.jpg'; ?>">								
					<img id="5639_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">								
					<img id="5759_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">	
					<img id="5740_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">	
					<img id="5845_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">	
					
					<img id="6200_mmr" class="medal_icon" src="<?php echo $plugins_url.'placed.jpg'; ?>">	

								
									
				</div>	

				<div class="wcg_field wcg_right" id="my_desired_mmr">

					<img id="119_mmr" class="medal_icon" src="<?php echo $plugins_url.'119_mmr.jpg'; ?>">								
					<img id="239_mmr" class="medal_icon" src="<?php echo $plugins_url.'239_mmr.jpg'; ?>">								
					<img id="359_mmr" class="medal_icon" src="<?php echo $plugins_url.'359_mmr.jpg'; ?>">								
					<img id="479_mmr" class="medal_icon" src="<?php echo $plugins_url.'479_mmr.jpg'; ?>">	
					<img id="599_mmr" class="medal_icon" src="<?php echo $plugins_url.'599_mmr.jpg'; ?>">	
					<img id="719_mmr" class="medal_icon" src="<?php echo $plugins_url.'599_mmr.jpg'; ?>">								
					<img id="839_mmr" class="medal_icon" src="<?php echo $plugins_url.'599_mmr.jpg'; ?>">
					
					
					<img id="959_mmr" class="medal_icon" src="<?php echo $plugins_url.'959_mmr.jpg'; ?>">
					<img id="1079_mmr" class="medal_icon" src="<?php echo $plugins_url.'1079_mmr.jpg'; ?>">								
					<img id="1199_mmr" class="medal_icon" src="<?php echo $plugins_url.'1199_mmr.jpg'; ?>">							
					<img id="1319_mmr" class="medal_icon" src="<?php echo $plugins_url.'1319_mmr.jpg'; ?>">								
					<img id="1439_mmr" class="medal_icon" src="<?php echo $plugins_url.'1439_mmr.jpg'; ?>">	
					<img id="1559_mmr" class="medal_icon" src="<?php echo $plugins_url.'1439_mmr.jpg'; ?>">								
					<img id="1679_mmr" class="medal_icon" src="<?php echo $plugins_url.'1439_mmr.jpg'; ?>">	
					
					
					<img id="1799_mmr" class="medal_icon" src="<?php echo $plugins_url.'1799_mmr.jpg'; ?>">								
					<img id="1919_mmr" class="medal_icon" src="<?php echo $plugins_url.'1919_mmr.jpg'; ?>">	
					<img id="2039_mmr" class="medal_icon" src="<?php echo $plugins_url.'2039_mmr.jpg'; ?>">							
					<img id="2159_mmr" class="medal_icon" src="<?php echo $plugins_url.'2159_mmr.jpg'; ?>">								
					<img id="2279_mmr" class="medal_icon" src="<?php echo $plugins_url.'2279_mmr.jpg'; ?>">								
					<img id="2399_mmr" class="medal_icon" src="<?php echo $plugins_url.'2279_mmr.jpg'; ?>">	
					<img id="2519_mmr" class="medal_icon" src="<?php echo $plugins_url.'2279_mmr.jpg'; ?>">	
					
					
					<img id="2639_mmr" class="medal_icon" src="<?php echo $plugins_url.'2639_mmr.jpg'; ?>">								
					<img id="2759_mmr" class="medal_icon" src="<?php echo $plugins_url.'2759_mmr.jpg'; ?>">								
					<img id="2879_mmr" class="medal_icon" src="<?php echo $plugins_url.'2879_mmr.jpg'; ?>">	
					<img id="2999_mmr" class="medal_icon" src="<?php echo $plugins_url.'2999_mmr.jpg'; ?>">								
					<img id="3119_mmr" class="medal_icon" src="<?php echo $plugins_url.'3119_mmr.jpg'; ?>">								
					<img id="3239_mmr" class="medal_icon" src="<?php echo $plugins_url.'3119_mmr.jpg'; ?>">								
					<img id="3359_mmr" class="medal_icon" src="<?php echo $plugins_url.'3119_mmr.jpg'; ?>">	
					
					
					<img id="3479_mmr" class="medal_icon" src="<?php echo $plugins_url.'3479_mmr.jpg'; ?>">								
					<img id="3599_mmr" class="medal_icon" src="<?php echo $plugins_url.'3599_mmr.jpg'; ?>">								
					<img id="3719_mmr" class="medal_icon" src="<?php echo $plugins_url.'3719_mmr.jpg'; ?>">								
					<img id="3839_mmr" class="medal_icon" src="<?php echo $plugins_url.'3839_mmr.jpg'; ?>">	
					<img id="3959_mmr" class="medal_icon" src="<?php echo $plugins_url.'3959_mmr.jpg'; ?>">								
					<img id="4079_mmr" class="medal_icon" src="<?php echo $plugins_url.'3959_mmr.jpg'; ?>">								
					<img id="4199_mmr" class="medal_icon" src="<?php echo $plugins_url.'3959_mmr.jpg'; ?>">	
					
					
					<img id="4319_mmr" class="medal_icon" src="<?php echo $plugins_url.'4319_mmr.png'; ?>">	
					<img id="4439_mmr" class="medal_icon" src="<?php echo $plugins_url.'4439_mmr.jpg'; ?>">								
					<img id="4559_mmr" class="medal_icon" src="<?php echo $plugins_url.'4559_mmr.jpg'; ?>">								
					<img id="4679_mmr" class="medal_icon" src="<?php echo $plugins_url.'4679_mmr.jpg'; ?>">								
					<img id="4799_mmr" class="medal_icon" src="<?php echo $plugins_url.'4799_mmr.jpg'; ?>">	
					<img id="4919_mmr" class="medal_icon" src="<?php echo $plugins_url.'4799_mmr.jpg'; ?>">								
					<img id="5039_mmr" class="medal_icon" src="<?php echo $plugins_url.'4799_mmr.jpg'; ?>">	
					
					<img id="5159_mmr" class="medal_icon" src="<?php echo $plugins_url.'5159_mmr.jpg'; ?>">	
					<img id="5279_mmr" class="medal_icon" src="<?php echo $plugins_url.'5279_mmr.jpg'; ?>">	
					<img id="5399_mmr" class="medal_icon" src="<?php echo $plugins_url.'5399_mmr.jpg'; ?>">								
					<img id="5519_mmr" class="medal_icon" src="<?php echo $plugins_url.'5519_mmr.jpg'; ?>">								
					<img id="5639_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">								
					<img id="5759_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">	
					<img id="5740_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">	
					<img id="5845_mmr" class="medal_icon" src="<?php echo $plugins_url.'5639_mmr.jpg'; ?>">	
					
					<img id="6200_mmr" class="medal_icon" src="<?php echo $plugins_url.'placed.jpg'; ?>">	
	
									
				</div>				
			</div> 
<div class="wcg_input_row">
  <div class="wcg_field wcg_left">
  	 <label for="my_mrr" style="font-size: 14px;line-height: 22px;color: #fff;">MY CURRENT MMR</label>
 	 <input type="text" name="my_mrr" id="my_mrr"  style="border:0; color:#f6931f; font-weight:bold; background: #08080800;" onkeyup="calculate_mmr(this.id)">
  </div>
  
  <div class="wcg_field wcg_right">
  	<label for="desirder_mrr" style="font-size: 14px;line-height: 22px;color: #fff;">DESIRED MMR</label>
  	<input type="text"  name="desirder_mrr" id="desirder_mrr" style="border:0; color:#f6931f; font-weight:bold; background: #08080800;" onkeyup="calculate_mmr(this.id)">
  </div>
</div>
 
<div class="wcg_input_row" id="range_parent">
	<div id="slider-range"></div>

	<div id="hide_slider_row" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-pips">
    	   	
    	<span class="ui-slider-pip ui-slider-pip-label ui-slider-pip-1400" style="left: 1.3918%"><span class="ui-slider-line"></span>
    	<span class="ui-slider-label" data-value="1400">210</span></span>
    	<span class="ui-slider-pip ui-slider-pip-label ui-slider-pip-1400" style="left: 21.30%;"><span class="ui-slider-line"></span>
    	<span class="ui-slider-label" data-value="1400">1400</span></span>
    	<span class="ui-slider-pip ui-slider-pip-label ui-slider-pip-2800" style="left: 44%;"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="2800">2800</span></span>
    	<span class="ui-slider-pip ui-slider-pip-label ui-slider-pip-4200" style="left: 70.1754%"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="4200">4200</span></span>
    	<span class="ui-slider-pip ui-slider-pip-label ui-slider-pip-5600" style="left: 85%;"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="5775">5775</span></span>
    	<span class="ui-slider-pip ui-slider-pip-last ui-slider-pip-label ui-slider-pip-5985" style="left: 92%"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="6195">6195</span></span> 	
		<span class="ui-slider-pip ui-slider-pip-last ui-slider-pip-label ui-slider-pip-5985" style="left: 96%"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="6195">6300</span></span> 	
		<span class="ui-slider-pip ui-slider-pip-last ui-slider-pip-label ui-slider-pip-5985" style="left: 100%"><span class="ui-slider-line"></span><span class="ui-slider-label" data-value="6195">6500</span></span>
	</div>
	<p class="wcg_error_msg" style="display:none;">The minimum order cannot be less than amount of 5</p>
</div>
<div class="wcg_input_row rush_order">
		<div class="wcg_field wcg_left">
			<button type="button" id="rush_my_order"  value="neutral" class="button_switch" onclick="calculate_addition(this.id)" formmethod="post">RUSH ON</button>
			 <input class="hide" type="text" name="rush_my_order" id="rush_my_order_input" value="neutral">
		</div>
		<div class="wcg_field wcg_right">
			<button type="button" id="schedule_time" value="off" class="button_switch" onclick="calculate_addition(this.id)" formmethod="post">SELFPLAY ON</button>
			<input class="hide"  type="text" name="schedule_time_val" id="schedule_time_val" value="0" >
			 <input class="hide"  type="text" name="schedule_time" id="schedule_time_input" value="off">

		</div>
</div>
<div class="wcg_input_row">
		<div class="wcg_field wcg_left">
			<button type="button" id="i_want_stream" value="off" class="button_switch" onclick="calculate_addition(this.id)" formmethod="post">SCHEDULE TIME</button>
			 <input class="hide"  type="text" name="i_want_stream" id="i_want_stream_input" value="off">

		</div>
		<div class="wcg_field wcg_right">
			<button type="button" id="i_choose_heros" value="off" class="button_switch" onclick="calculate_addition(this.id)" formmethod="post">CHOOSE HEROES ON</button>
			<input class="hide"  type="text" name="i_choose_heros_val" id="i_choose_heros_val" value="0" >
			<input class="hide"  type="text" name="i_choose_heros" id="i_choose_heros_input" value="off" >

		</div>
</div>

</div>						
	
</div>

</div>

<div class="items_group clearfix price_buy">															
	<div id="price_dota">
	<input type="text" class="hide1" id="mmr_price" name="mmr_price" value="0"><span><?php echo get_woocommerce_currency_symbol(); ?></span>
	</div>

	<label class="hide" for="mmr_price_additional" style="font-size: 14px;line-height: 22px;color: #000;">mmr_price_additional</label>
	<input class="hide" type="text" class="hide" id="mmr_price_additional" name="mmr_price_additional" value="0">
	<label class="hide" for="mmr_price_additional_rush" style="font-size: 14px;line-height: 22px;color: #000;">mmr_price_additional_rush</label>	
	<input type="text" class="hide" id="mmr_price_additional_rush" name="additional_rush" value="0">
	<label class="hide" for="mmr_price" style="font-size: 14px;line-height: 22px;color: #000;">mmr_points</label>
	<input type="text" class="hide" id="mmr_points" name="mmr_points" value="0">
	<input type="text" class="hide" id="base_price_105" name="base_price_105" value="0">
	<input type="text" class="hide" id="base_price_2500" name="base_price_2500" value="0">
	<input type="text" class="hide" id="base_price_3465" name="base_price_3465" value="0">
		<label class="hide" for="mmr_price_base" style="font-size: 14px;line-height: 22px;color: #000;">mmr_price_base</label>
	<input class="hide" type="text" id="mmr_price_base" name="mmr_price_base" value="134.61">
	<label class="hide" for="mmr_price" style="font-size: 14px;line-height: 22px;color: #000;">estimated_days</label>
	<p style="text-align: center; width: 100%;">Estimated completion time: <span id="delivery"><input type="text" id="estimated_days" name="estimated_days" value="0"></span> day<span id="delivery_end">s</span></p>
	<div class="finishing column one-fifth add_to_cart_btn" style="text-align: center;">
	<input type="submit" name="submit_prod"  class="single_add_to_cart_button button alt" value="Buy now">
	</div>

</div>			
				
			
</form>
	
</div>
</div>

	
<?php 
return ob_get_clean();
}