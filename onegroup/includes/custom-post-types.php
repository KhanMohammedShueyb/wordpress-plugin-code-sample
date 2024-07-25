<?php

add_action( 'init', '_onegroup_register_cpt' );
function _onegroup_register_cpt(){
    
    // Location
    register_taxonomy( 'location', 'post', [
        'labels' => [
            'name' => __( 'Locations', 'onegroup' ),
            'singular_name' => __( 'Location', 'onegroup' ),
        ],
        'public'             => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_admin_column'  => true,
        'show_in_quick_edit' => true,
        'hierarchical'       => true,
        'show_in_rest' => true
    ] );
    
    // Section
    register_post_type( 'section', [
        'labels' => [
            'name' => __( 'Sections', 'onegroup' ),
            'singular_name' => __( 'Section', 'onegroup' ),
        ],
        'public'             => false,
        'show_ui'            => true,
        'show_in_rest' => true,
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'supports'           => ['title', 'editor'],
    ] );
    
    // Service
    register_post_type( 'service', [
        'labels' => [
            'name' => __( 'Services', 'onegroup' ),
            'singular_name' => __( 'Service', 'onegroup' ),
        ],
        'public'             => true,
        'show_ui'            => true,
        'show_in_rest' => true,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'supports'           => ['title', 'thumbnail', 'editor'],
        'taxonomies' => ['service_category'],
        'rewrite' => [
            'slug' => 'services'
        ]
    ] );
    
    register_taxonomy( 'service_category', 'service', [
        'labels' => [
            'name' => __( 'Service Categories', 'onegroup' ),
            'singular_name' => __( 'Service Category', 'onegroup' ),
        ],
        'public'             => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_admin_column'  => true,
        'show_in_quick_edit' => true,
        'hierarchical'       => true,
        'show_in_rest' => true
    ] );
    
    // Success Story
    register_post_type( 'success_story', [
        'labels' => [
            'name' => __( 'Success Stories', 'onegroup' ),
            'singular_name' => __( 'Success Story', 'onegroup' ),
        ],
        'public'             => true,
        'show_ui'            => true,
        'show_in_rest' => true,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'supports'           => ['title', 'thumbnail', 'editor', 'excerpt'],
        'taxonomies' => ['category', 'location'],
        'rewrite' => [
            'slug' => 'success-stories'
        ]
    ] );
    
    // Testimonial
    register_post_type( 'testimonial', [
        'labels' => [
            'name' => __( 'Testomonials', 'onegroup' ),
            'singular_name' => __( 'Testomonial', 'onegroup' ),
        ],
        'public'             => true,
        'show_ui'            => true,
        'show_in_rest' => false,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'supports'           => ['title', 'thumbnail', 'editor'],
        'rewrite' => [
            'slug' => 'testimonials'
        ]
    ] );
    
    // Report
    register_post_type( 'report', [
        'labels' => [
            'name' => __( 'Reports', 'onegroup' ),
            'singular_name' => __( 'Report', 'onegroup' ),
        ],
        'public'             => true,
        'show_ui'            => true,
        'show_in_rest' => false,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'supports'           => ['title', 'thumbnail', 'editor'],
        'taxonomies' => ['category', 'location'],
        'rewrite' => [
            'slug' => 'reports'
        ]
    ] );
    
    // Team Member
    register_post_type( 'team_member', [
        'labels' => [
            'name' => __( 'Team Members', 'onegroup' ),
            'singular_name' => __( 'Team Member', 'onegroup' ),
        ],
        'public'             => true,
        'show_ui'            => true,
        'show_in_rest' => true,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'supports'           => ['title', 'thumbnail', 'editor'],
        'rewrite' => [
            'slug' => 'team-member'
        ]
    ] );
    
    // Team Group
    register_taxonomy( 'team_group', 'team_member', [
        'labels' => [
            'name' => __( 'Team Groups', 'onegroup' ),
            'singular_name' => __( 'Team Group', 'onegroup' ),
        ],
        'public'             => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_admin_column'  => true,
        'show_in_quick_edit' => true,
        'hierarchical'       => true,
        'show_in_rest' => true
    ] );
}

// === Save Data === //
add_action( 'save_post', '_onegroup_save_post_meta' );
function _onegroup_save_post_meta( $post_id ) {
    $meta_data = filter_input( INPUT_POST, 'ogr', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
    if( empty( $meta_data ) ) {
        return;
    }
    
    update_post_meta( $post_id, 'ogr_data', $meta_data );
}

// === Metaboxes === //
add_action( 'add_meta_boxes', '_onegroup_add_meta_boxes' );
function _onegroup_add_meta_boxes() {
    add_meta_box( 'ogr-service-cta', __( 'CTA', 'onegroup' ),
        '_onegroup_metabox_service_cta', 'service', 'side' );
    add_meta_box( 'ogr-headline', __( 'Headline', 'onegroup' ),
        '_onegroup_metabox_headline', 'success_story', 'advanced' );
    add_meta_box( 'ogr-testimonial', __( 'Testimonial Attributes', 'onegroup' ),
        '_onegroup_metabox_testimonial', 'testimonial', 'advanced' );
    add_meta_box( 'ogr-report', __( 'Report File', 'onegroup' ),
        '_onegroup_metabox_report', 'report', 'advanced' );
    add_meta_box( 'ogr-team-member', __( 'About', 'onegroup' ),
        '_onegroup_metabox_team_member', 'team_member', 'side' );
    add_meta_box( 'ogr-long-title', __( 'Long Title', 'onegroup' ),
        '_onegroup_metabox_post', 'post', 'side' );
}

/* Post Long Title */
function _onegroup_metabox_post( $post ) {
    $data = get_post_meta( $post->ID, 'ogr_data', true );
    $data = wp_parse_args( $data, [
        'long_title' => ''
    ] );
    extract( [ 'data' => $data ] );
    include ONEGROUP_INCLUDES_PATH . 'metaboxes/long_title.php';
}

/* Service CTA */
function _onegroup_metabox_service_cta( $post ) {
    $data = get_post_meta( $post->ID, 'ogr_data', true );
    $data = wp_parse_args( $data, [
        'button_text' => ''
    ] );
    extract( [ 'data' => $data ] );
    include ONEGROUP_INCLUDES_PATH . 'metaboxes/service_cta.php';
}

/* Headline */
function _onegroup_metabox_headline( $post ) {
    $data = get_post_meta( $post->ID, 'ogr_data', true );
    $data = wp_parse_args( $data, [
        'headline' => ''
    ] );
    extract( [ 'data' => $data ] );
    include ONEGROUP_INCLUDES_PATH . 'metaboxes/headline.php';
}

/* Testimonial */
function _onegroup_metabox_testimonial( $post ) {
    $data = get_post_meta( $post->ID, 'ogr_data', true );
    $data = wp_parse_args( $data, [
        'author' => '',
        'company' => '',
        'logo_id' => ''
    ] );
    extract( [ 'data' => $data ] );
    include ONEGROUP_INCLUDES_PATH . 'metaboxes/testimonial.php';
}

/* Report */
function _onegroup_metabox_report( $post ) {
    $data = get_post_meta( $post->ID, 'ogr_data', true );
    $data = wp_parse_args( $data, [
        'file_id' => 0
    ] );
    extract( [ 'data' => $data ] );
    include ONEGROUP_INCLUDES_PATH . 'metaboxes/report.php';
}


/* Team Member */
function _onegroup_metabox_team_member( $post ) {
    $data = get_post_meta( $post->ID, 'ogr_data', true );
    $data = wp_parse_args( $data, [
        'role' => ''
    ] );
    extract( [ 'data' => $data ] );
    include ONEGROUP_INCLUDES_PATH . 'metaboxes/team_member.php';
}