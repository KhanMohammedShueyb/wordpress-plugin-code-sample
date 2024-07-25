<?php get_header(); ?>
<main class="page-main">
    <div class="container">
        <?php 
        ogr_the_post( get_post( get_queried_object_id() ) );
        the_content();
        wp_reset_postdata(); ?>
    </div>
</main><!-- / Page Main -->
<?php get_footer();