<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); 
    $logo = ogr_get_setting( 'header', 'logo', 'image' );
    $sitename = get_bloginfo( 'name' );
    $button_text = ogr_get_setting( 'header', 'button', 'text' );
    $button_url = ogr_get_setting( 'header', 'button', 'url' );
    ?>
    <header class="header">
        <div class="header-inner">
            <div class="logo">
            <?php if( '' !== $logo ): ?>
                <a href="<?php echo esc_attr( home_url() ); ?>" class="logo-url" title="<?php echo esc_attr( $sitename ); ?>">
                    <img src="<?php echo esc_attr( $logo ); ?>" alt="<?php printf( __( '%s logo', 'onegroup' ), $sitename ); ?>" class="logo-image" />
                </a>
            <?php endif; ?>
            </div><!-- / Logo -->
            <div class="menus">
                <?php if( has_nav_menu( 'main' ) ):
                    wp_nav_menu( [
                        'container' => 'nav',
                        'container_class' => 'main-nav',
                        'theme_location' => 'main',
                        'debth' => 3,
                        'walker' => ( new \OneGroup\Main_Menu_Walker() )
                    ] ); ?><!-- / Main Navigation -->
                <?php endif; 
                if( '' !== $button_text && '' !== $button_url ): ?>
                    <div class="main-button-container">
                        <a href="<?php echo esc_attr( $button_url ); ?>" class="main-button"><?php echo esc_html( $button_text ); ?></a>
                    </div><!-- / Main Button -->
                <?php endif; ?>
            </div><!-- / Menus -->
        </div>
    </header><!-- / Header -->
    <div class="main-container">