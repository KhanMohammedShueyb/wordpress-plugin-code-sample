<?php

if( empty( $child_blocks ) ) {
    return;
}

$logo_ids = $child_blocks[0]['attrs']['ids'];
if( empty( $logo_ids ) ) {
    return;
}

$title = trim( $data['title'] );

?>
<div class="partners">
    <?php if( '' !== $title ): ?>
        <h2 class="partners-title"><?php echo $title; ?></h2>
    <?php endif;
    foreach( $logo_ids as $logo_id ):
        $logo_image = ogr_get_image( $logo_id, 'medium' );
        if( empty( $logo_image ) ) {
            continue;
        }
        ?>
        <div class="partner-logo"><?php echo $logo_image; ?></div>
    <?php endforeach; ?>
</div><!-- / Partners -->