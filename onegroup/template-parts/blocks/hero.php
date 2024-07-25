<?php

$title = trim( $data['title'] );
$button_text = trim( $data['button_text'] );
$button_url = trim( $data['button_url'] );
$bg_image = ogr_get_image( $data['bg_image_id'] );
$bg_video = ogr_get_video( $data['bg_video_id'] );


$has_button = ( '' !== $button_text && '' !== $button_url );
$has_content = ( '' !== $title || $has_button );
$has_media = ( ! empty( $bg_image ) || ! empty( $bg_video ) );

if( ! $has_content && ! $has_media ) {
    return;
}

ogr_close_container();
?>
<div class="hero">
    <?php if( $has_media ): ?>
        <div class="hero-media">
            <?php if( ! empty( $bg_image ) ): ?>
                <div class="hero-image">
                    <?php echo $bg_image; ?>
                </div>
            <?php endif; 
            if( ! empty( $bg_video ) ): 
                if( ! empty( $bg_image ) ) {
                    $bg_image_url = ogr_get_image_url( $data['bg_image_id'] );
                    $attrs = ( ! empty( $bg_image_url ) ) ? ' poster="' . esc_attr( $bg_image_url ) . '"' : '';
                }
                ?>
                <div class="hero-video">
                    <video loop muted autoplay<?php echo $attrs; ?>>
                        <source src="<?php echo esc_attr( $bg_video['url'] ); ?>" type="<?php echo esc_attr( $bg_video['mime'] ); ?>"></source>
                    </video>
                </div>
            <?php endif; ?>
        </div><!-- / Hero: Media -->
        <?php if( $has_content ): ?>
            <div class="hero-inner">
                <div class="hero-content">
                    <?php if( '' !== $title ): ?>
                        <h1 class="hero-title"><?php echo $title; ?></h1>
                    <?php endif;
                    if( $has_button ): ?>
                        <a href="<?php echo esc_attr( $button_url ); ?>" class="hero-button"><?php echo $button_text; ?></a>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>
    <?php endif; ?>
</div><!-- / Hero -->
<?php
ogr_open_container();