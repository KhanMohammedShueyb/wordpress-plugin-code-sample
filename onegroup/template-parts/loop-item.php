<?php

$out_locations = ogr_get_post_terms_list( get_the_ID(), 'location' );
$out_categories = ogr_get_post_terms_list( get_the_ID(), 'category' );
$has_terms = ( ! empty( $out_categories ) || ! empty( $out_locations ) );
$excerpt = trim( get_the_excerpt() );

?>
<article class="loop-item">
    <?php if( has_post_thumbnail() ): ?>
        <div class="loop-item-media">
            <a class="loop-item-image" href="<?php echo esc_attr( get_the_permalink() ); ?>"><?php the_post_thumbnail( 'large' ); ?></a>
        </div>
    <?php endif; ?>
    <div class="loop-item-main">
        <div class="loop-item-meta">
            <span class="loop-item-date"><?php the_time( 'j F Y' ); ?></span>
            <?php if( $has_terms ): ?>
                <div class="loop-item-terms">
                    <?php if( ! empty( $out_locations ) ): ?>
                        <div class="loop-item-locations"><?php echo $out_locations; ?></div>
                    <?php endif; 
                    if( ! empty( $out_categories ) ): ?>
                        <div class="loop-item-categories"><?php echo $out_categories; ?></div>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
        <h3 class="loop-item-title">
            <a href="<?php echo esc_attr( get_the_permalink() ); ?>"><?php the_title(); ?></a>
        </h3>
        <?php if( '' !== $excerpt ): ?>
            <p class="loop-item-excerpt"><?php echo $excerpt; ?></p>
        <?php endif; ?>
        <a href="<?php echo esc_attr( get_the_permalink() ); ?>" class="loop-item-link"><?php _e( 'Read more', 'onegroup' ); ?></a>
    </div>
</article><!-- / Loop Item -->