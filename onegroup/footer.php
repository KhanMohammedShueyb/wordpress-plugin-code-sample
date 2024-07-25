<?php 
    $footer_logo = ogr_get_setting( 'footer', 'logo', 'image' );
    $copyright_text = ogr_get_setting( 'footer', 'bottom', 'copyright_text' );
    $has_logo = ( '' !== $footer_logo );
    $has_navs = has_nav_menu( 'footer_1' ) || has_nav_menu( 'footer_2' ) || has_nav_menu( 'footer_3' ) || has_nav_menu( 'footer_4' );
    $has_primary_section = $has_logo || $has_navs;
    $has_socials = has_nav_menu( 'footer_social' );
    $has_copyright = ( '' !== $copyright_text );
    $has_footer_nav = has_nav_menu( 'footer' );
    $has_minifooter = $has_copyright|| $has_footer_nav;
?>
    </div>
    <footer class="footer">
        <div class="footer-inner">
            <?php if( $has_primary_section ): ?>
                <div class="footer-primary-section">
                    <?php if( $has_logo ): ?>
                        <div class="footer-logo">
                            <img src="<?php echo esc_attr( $footer_logo ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" class="footer-logo-image" />
                        </div>
                    <?php endif; 
                    if( $has_navs ): ?>
                        <div class="footer-navs">
                            <?php for( $i = 1; $i < 5; $i ++ ):
                                $location = "footer_$i";
                                if( ! has_nav_menu( $location ) ) {
                                    continue;
                                }
                                $nav_title = trim( wp_get_nav_menu_name( $location ) );
                                ?>
                                <div class="footer-nav">
                                    <?php if( '' !== $nav_title ): ?>
                                        <h2 class="footer-nav-title"><?php echo $nav_title; ?></h2>
                                    <?php endif;
                                    wp_nav_menu( [
                                        'theme_location' => $location,
                                        'container' => false
                                    ] ); ?>
                                </div>
                            <?php endfor; ?>
                        </div><!-- / Footer Navigations -->
                    <?php endif; ?>
                </div><!-- / Footer Primary Section -->
            <?php endif;
            if( $has_socials ): ?>
                <div class="footer-socials-section">
                    <?php wp_nav_menu( [
                        'theme_location' => 'footer_social',
                        'container' => false,
                        'menu_class' => 'social-links'
                    ] ); ?>
                </div><!-- / Footer Socials Section -->
            <?php endif; 
            if( $has_minifooter ): ?>
                <div class="minifooter">
                    <?php if( $has_copyright ): ?>
                        <small class="copyright"><?php echo $copyright_text; ?></small>
                    <?php endif;
                    if( $has_footer_nav ):
                        wp_nav_menu( [
                            'theme_location' => 'footer',
                            'container_class' => 'minifooter-nav',
                        ] );
                    endif; ?>
                </div><!-- / MiniFooter -->
            <?php endif; ?>
        </div>
    </footer><!-- / Footer -->
    <?php wp_footer(); ?>
</body>
</html>