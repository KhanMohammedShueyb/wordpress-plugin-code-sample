<?php

$related_posts = ogr_get_related_posts( get_the_ID() );
if( empty( $related_posts ) ) {
    return;
}
$title = ogr_get_setting( 'general', 'blog', 'related_posts_title' );
?>
<section class="related-posts">
    <?php if( '' !== $title ): ?>
        <header class="related-posts-header">
            <h2 class="related-posts-title"><?php echo $title; ?></h2>
        </header>
    <?php endif; ?>
    <div class="loop-items">
        <?php foreach( $related_posts as $post ): ogr_the_post( $post ); ?>
            <div class="loop-item-container">
                <?php get_template_part( 'template-parts/loop-item' ); ?>
            </div>
        <?php endforeach;
        wp_reset_postdata(); ?>
    </div>
</section><!-- / Related Posts -->