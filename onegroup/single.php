<?php get_header(); ?>
<main class="page-main">
    <div class="container">
        <?php while( have_posts() ): the_post();
            $data = ogr_get_data( get_the_ID() );
            $long_title = trim( $data['long_title'] );
            $title = ( '' === $long_title ) ? get_the_title() : $long_title; 
            $out_locations = get_the_term_list( get_the_ID(), 'location', '', '<span class="sep"></span>' );
            $out_categories = get_the_category_list( '<span class="sep"></span>' );
            $has_terms = ( ! empty( $out_categories ) || ! empty( $out_locations ) );
            ?>
            <article class="blog-entry">
                <header class="blog-entry-header">
                    <div class="breadcrumps">
                        <a href="<?php echo esc_attr( get_post_type_archive_link( 'post' ) ); ?>"><?php _e( 'Insights', 'onegroup' ); ?></a>
                        <span><?php the_title(); ?></span>
                    </div>
                    <h1 class="blog-entry-title"><?php echo $title; ?></h1>
                </header>
                <div class="blog-entry-meta">
                    <span class="blog-entry-date"><?php the_time( 'j F Y' ); ?></span>
                    <?php if( $has_terms ): ?>
                        <div class="blog-entry-terms">
                            <?php if( ! empty( $out_locations ) ): ?>
                                <div class="blog-entry-locations"><?php echo $out_locations; ?></div>
                            <?php endif; 
                            if( ! empty( $out_categories ) ): ?>
                                <div class="blog-entry-categories"><?php echo $out_categories; ?></div>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
                <?php if( has_post_thumbnail() ): ?>
                    <div class="blog-entry-image"><?php the_post_thumbnail( 'full' ); ?></div>
                <?php endif; ?>
                <div class="blog-entry-contents"><?php the_content(); ?></div>
                <footer class="blog-entry-credits">
                    <p><?php 
                        printf( __( 'Written by %s on %s', 'onegroup' ), 
                            sprintf( '<strong>%s</strong>', get_the_author() ),
                            sprintf( '<strong>%s</strong>', get_the_time( 'F, j Y' ) )
                        ); ?></p>
                </footer>
            </article><!-- / Blog Entry -->
        <?php endwhile;
        get_template_part( 'template-parts/related-posts' );
        wp_reset_postdata(); ?>
    </div>
</main><!-- / Page Main -->
<?php get_footer();