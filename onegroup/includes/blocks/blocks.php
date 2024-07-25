<?php

function _onegroup_block_categories( $categories, $post ) {
	return array_merge(
            $categories,
            [
                [
                    'slug' => 'onegroup',
                    'title'=> __( '1Group', 'onegroup' )
                ]
            ]
	);
}
add_filter( 'block_categories', '_onegroup_block_categories', 10, 2 );

function _onegroup_gutenberg_register_blocks() {
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }
    wp_register_script( 'onegroup-blocks', ONEGROUP_URI . 'includes/blocks/blocks.js',
        [ 'wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'jquery' ], '1.0.0'
    );
    wp_register_style( 'onegroup-blocks', ONEGROUP_URI . 'includes/blocks/blocks.css' );
    
    $block_names = ['hero', 'partners', 'services', 'service-tab', 'featured-success-stories',
        'success-story', 'featured-testimonials', 'testimonial', 'visit-cards', 'callout',
        'video-callout', 'reports', 'report-tab', 'angled-hero', 'video', 'featured-team', 
        'team-member', 'iconics', 'iconic', 'loop', 'while-box', 'tabs', 'header', 
        'team-members'];
    
    foreach( $block_names as $block_name ) {
        register_block_type( "onegroup/$block_name", [
            'style' => 'onegroup-blocks',
            'editor_script' => 'onegroup-blocks',
        ] );
    }
}
add_action( 'init', '_onegroup_gutenberg_register_blocks' );

function _onegroup_blocks_scripts(){
    wp_enqueue_script( 'onegroup-blocks' );
    wp_enqueue_style( 'onegroup-blocks' );
    
    // service categories
    $service_category_terms = get_terms( 'service_category', [
        'hide_empty' => false,
    ] );
    $service_categories = [];
    foreach( $service_category_terms as $service_category_term ) {
        $service_categories[ $service_category_term->term_id ] = $service_category_term->name;
    }
    
    // team categories
    $team_group_terms = get_terms( 'team_group', [
        'hide_empty' => false,
    ] );
    $team_groups = [];
    foreach( $team_group_terms as $team_group_term ) {
        $team_groups[ $team_group_term->term_id ] = $team_group_term->name;
    }
    
    // success stories
    $wp_success_stories = get_posts( [
        'posts_per_page' => -1,
        'post_type' => 'success_story'
    ] );
    $success_stories = [];
    foreach( $wp_success_stories as $wp_success_story ) {
        $success_stories[ $wp_success_story->ID ] = $wp_success_story->post_title;
    }
    
    // testimonials
    $wp_testimonials = get_posts( [
        'posts_per_page' => -1,
        'post_type' => 'testimonial'
    ] );
    $testimonials = [];
    foreach( $wp_testimonials as $wp_testimonial ) {
        $testimonials[ $wp_testimonial->ID ] = $wp_testimonial->post_title;
    }
    
    // team_members
    $wp_team_members = get_posts( [
        'posts_per_page' => -1,
        'post_type' => 'team_member'
    ] );
    $team_members = [];
    foreach( $wp_team_members as $wp_team_member ) {
        $team_members[ $wp_team_member->ID ] = $wp_team_member->post_title;
    }
    
    // locations
    $location_terms = get_terms( 'location', [
        'hide_empty' => false,
    ] );
    $locations = [];
    foreach( $location_terms as $location_term ) {
        $locations[ $location_term->term_id ] = $location_term->name;
    }
    
    // reports
    $wp_reports = get_posts( [
        'posts_per_page' => -1,
        'post_type' => 'report'
    ] );

    $location_reports = [];
    foreach( $wp_reports as $wp_report ) {
        $report_locations = wp_get_post_terms( $wp_report->ID , 'location' );
        if( empty( $report_locations ) ) {
            continue;
        }
        foreach( $report_locations as $report_location ) {
            if( ! isset( $location_reports[ $report_location->term_id ] ) ) {
                $location_reports[ $report_location->term_id ] = [];
            }
            $location_reports[ $report_location->term_id ][ $wp_report->ID ] = $wp_report->post_title;
        }
    }        

    wp_localize_script( 'onegroup-blocks', 'OneGroupData', [
        'service_categories' => $service_categories,
        'success_stories' => $success_stories,
        'testimonials' => $testimonials,
        'location_reports' => $location_reports,
        'locations' => $locations,
        'team_members' => $team_members,
        'team_groups' => $team_groups
    ] );
}
add_action( 'admin_enqueue_scripts', '_onegroup_blocks_scripts' );

function _onegroup_blocks_the_content( $the_content ){
    if( is_admin() ) {
        remove_filter( 'the_content', '_onegroup_blocks_the_content' );
        return $the_content;
    }
    $content = get_the_content( null, false, get_post() ); 
    $blocks = parse_blocks( $content );
    
    if( empty( $blocks ) ) {
        remove_filter( 'the_content', '_onegroup_blocks_the_content' );
        return $the_content;
    }
    
    ob_start();
    foreach( $blocks as $block ) {
        $block_name = $block['blockName'];
        $block_name_parts = explode( '/', $block_name );
        $group_name = ( ! empty( $block_name_parts ) ) ? $block_name_parts[0] : '';
        
        if( 'onegroup' !== $group_name ) {
            echo render_block( $block );
            continue;
        }
        
        $block_pure_name = $block_name_parts[1];
        extract( [
            'data' => $block['attrs'],
            'child_blocks' => $block['innerBlocks']
        ] );
        
        $file = ONEGROUP_TEMPLATES_PATH . "blocks/$block_pure_name.php";
        include $file;
        
    }
    
    remove_filter( 'the_content', '_onegroup_blocks_the_content' );
    return ob_get_clean();
}
add_filter( 'the_content', '_onegroup_blocks_the_content' );