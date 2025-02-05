// === Blocks === //
( function( blocks, editor, blockEditor, element, components ) {
    var el = element.createElement;
    var TextControl = components.TextControl;
    var MediaUpload = blockEditor.MediaUpload;
    var RichText = blockEditor.RichText;
    var InnerBlocks = blockEditor.InnerBlocks;
    var AlignmentToolbar = editor.AlignmentToolbar;
    var BlockControls = editor.BlockControls;
    
    function get_title_el( title ){
        return el( 'h2', { className: 'onegroup-block-title' }, 'Block: ' + title );
    }
    
    function text_field( props, attribute, label, callback ){
        callback = callback || false;
        return el( TextControl, {
            label: label,
            value: props.attributes[ attribute ],
            onChange: function( val ){
                if( false !== callback ) {
                    val = callback( val );
                }
                var value_obj = {};
                value_obj[ attribute ] = val;
                props.setAttributes( value_obj );
            }
        } );
    }
    
    function select_field( props, attribute, label, options ) {
        var select_options = [
            {
                label: '- Select -',
                value: ''
            }
        ];
        Object.keys( options ).forEach( function( option_value ) {
            select_options.push( {
                label: options[ option_value ],
                value: option_value
            } );
        } );
        
        return el( components.SelectControl, {
            label: label,
            value: props.attributes[ attribute ],
            options: select_options,
            onChange: function( val ){
                var value_obj = {};
                value_obj[ attribute ] = val;
                props.setAttributes( value_obj );
            }
        } );
    }
    
    function inner_block( block_name ) {
        var block_names = Array.isArray( block_name ) ? block_name : [ block_name ];
        return el( InnerBlocks, {
            allowedBlocks: block_names
        } );
    }
    
    function _file_field( type, props, attribute_base, label ){
        return el( 'div', { className: 'onegroup-video-block-container' }, 
                el( components.BaseControl , {
                    id: 'onegroup'
                }, label ),
                el( MediaUpload, {
                    onSelect: function( media ) {
                        var attributes = {};
                        if( 'image' === type ) {
                            var url = ( 'thumbnail' in media.sizes ) ? media.sizes.thumbnail.url : media.url;
                            attributes[ attribute_base + '_id' ] = media.id;
                            attributes[ attribute_base + '_url' ] = url;
                        }
                        else{
                            attributes[ attribute_base + '_id' ] = media.id;
                            attributes[ attribute_base + '_url' ] = media.image.src;
                        }
                        props.setAttributes( attributes );
                    },
                    allowedTypes: type,
                    value: props.attributes[ attribute_base + '_id' ],
                    render: function( obj ) {
                        var button_text = ( 'image' === type ) ? 'Image' : 'Video';
                        return el( 'div', {
                                className: 'onegroup-image-block'
                            },
                            el( 'div', {
                                    className: 'onegroup-image-preview'
                                },  
                                props.attributes[ attribute_base + '_id' ] 
                                    ? el( 'img', { src: props.attributes[ attribute_base + '_url' ] } )
                                    : '' ),
                            el( components.Button, {
                                className: 'button button-large',
                                onClick: ! props.attributes[ attribute_base + '_id' ] 
                                    ? obj.open 
                                    : function(){
                                        var attributes = {};
                                        attributes[ attribute_base + '_id' ] = 0;
                                        attributes[ attribute_base + '_url' ] = '';
                                        props.setAttributes( attributes );
                                    } },
                                ! props.attributes[ attribute_base + '_id' ]  ? 'Upload ' + button_text : 'Remove ' + button_text
                            )
                        );
                    }
                } )
            );
    }
    
    function video_field( props, attribute_base, label ){
        return _file_field( 'video', props, attribute_base, label );
    }
    
    function image_field( props, attribute_base, label ){
        return _file_field( 'image', props, attribute_base, label );
    }
    
    function rich_text_field( props, attribute, label, inline, tag ){
        tag = tag || 'div';
        inline = inline || false;
        return el( RichText, {
            tagName: tag,
            inline: inline,
            placeholder: label,
            value: props.attributes[ attribute ],
            onChange: function( value ) {
                var attrs = {};
                attrs[ attribute ] = value;
                props.setAttributes( attrs );
            }
        } );
    }
    
    function title_field( props, attribute, label, tag ) {
        tag = tag || 'h2';
        return rich_text_field( props, attribute, label, true, tag );
    }
    
    function register_block( name, title, attributes, render_callback, parent, has_children ){
        var block_attributes = {};
        jQuery.each( attributes, function( attribute_id, attribute_type ) {
            if( 'file' === attribute_type ) {
                block_attributes[ attribute_id + '_id' ] = {
                    type: 'number'
                };
                block_attributes[ attribute_id + '_url' ] = {
                    type: 'string'
                };
                return true;
            }
            block_attributes[ attribute_id ] = {
                type: attribute_type
            };
        } );
        parent = parent || '';
        if( '' !== parent ) {
            if( 'string' === typeof parent ) {
                parent = [ parent ];
            }
            jQuery.each( parent, function( i, parent_block_name ) {
                parent[ i ] = 'onegroup/' + parent_block_name;
            } );
        }
        has_children = has_children || false;
        
        blocks.registerBlockType( 'onegroup/' + name, {
            title: title,
            icon: 'image-filter',
            category: 'onegroup',
            parent: parent,
            attributes: block_attributes,
            edit: function( props  ) {
                return el( 'div', { className: props.className},
                    get_title_el( title ),
                    render_callback( props )
                );
            },
            save: function( props ) {
                if( has_children ) {
                    return el(
                        'div',
                        { className: props.className },
                        el( InnerBlocks.Content )
                    );
                }
            }
        } );
    }
    
    function register_parent_block( name, title, attributes, render_callback ){
        register_block( name, title, attributes, render_callback, '', true );
    }
    
    function register_child_block( parent, name, title, attributes, render_callback ){
        register_block( name, title, attributes, render_callback, parent, false );
    }
    
    // === Hero === //
    register_block( 'hero', 'Hero', {
        bg_image: 'file',
        bg_video: 'file',
        title: 'string',
        button_text: 'string',
        button_url: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'title', 'Title' ),
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col-auto' },
                        image_field( props, 'bg_image', 'Background Image' )
                    ),
                    el( 'div', { className: 'onegroup-col-auto' },
                        video_field( props, 'bg_video', 'Background video' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'button_text', 'Button Text' ),
                        text_field( props, 'button_url', 'Button URL' )
                    ),
                ),
            );
    } );
    
    // === Partners === //
    register_parent_block( 'partners', 'Partners', {
        title: 'string',
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'title', 'Title' ),
                inner_block( 'core/gallery' )
            );
    } );
    
    // === Services === //
    register_child_block( 'services', 'service-tab', 'Service Tab', {
        title: 'string',
        category_id: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'title', 'Title' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'category_id', 'Category', OneGroupData.service_categories )
                    ),
                )
            );
    } );
    register_parent_block( 'services', 'Services', {
        title: 'string',
        quantity: 'string',
        button_text: 'string',
        layout: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'title', 'Title' ),
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'quantity', 'Quantity' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'button_text', 'Button Text' ),
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'layout', 'Layout', {
                            standard: 'Standard',
                            wide: 'Wide'
                        } ),
                    ),
                ),
                inner_block( 'onegroup/service-tab' )
            );
    } );
    
    // === Featured Success Stories === //
    register_child_block( 'featured-success-stories', 'success-story', 'Success Story', {
        id: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            select_field( props, 'id', 'Success Story', OneGroupData.success_stories )
        );
    } );
    register_parent_block( 'featured-success-stories', 'Featured Success Stories', {
        background: 'string',
        tagline: 'string',
        archive_link_text: 'string',
        read_more_text: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'background', 'Background', {
                            white: 'White',
                            none: 'None'
                        } )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'tagline', 'Tagline' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'archive_link_text', 'Archive Link Text' ),
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'read_more_text', 'Read More Link Text' ),
                    ),
                ),
                inner_block( 'onegroup/success-story' )
            );
    } );
    
    // === Featured Testimonials === //
    register_child_block( 'featured-testimonials', 'testimonial', 'Testimonial', {
        id: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            select_field( props, 'id', 'Testimonial', OneGroupData.testimonials )
        );
    } );
    register_parent_block( 'featured-testimonials', 'Featured Testimonials', {
        tagline: 'string',
        archive_link_text: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'tagline', 'Tagline' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'archive_link_text', 'Archive Link Text' ),
                    ),
                ),
                inner_block( 'onegroup/testimonial' )
            );
    } );
    
    // === Visit Cards === //
    register_child_block( 'visit-cards', 'visit-card', 'Visit Card', {
        bg_image: 'file',
        title: 'string',
        subtitle: 'string',
        link_text: 'string',
        link_url: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            el( 'div', { className: 'onegroup-row' }, 
                el( 'div', { className: 'onegroup-col-auto' },
                    image_field( props, 'bg_image', 'Background Image' )
                ),
                el( 'div', { className: 'onegroup-col' },
                    title_field( props, 'title', 'Title', 'h3' ),
                    text_field( props, 'subtitle', 'Subtitle' ),
                ),
            ),
            el( 'div', { className: 'onegroup-row' }, 
                el( 'div', { className: 'onegroup-col' },
                    text_field( props, 'link_text', 'Link Text' ),
                ),
                el( 'div', { className: 'onegroup-col' },
                    text_field( props, 'link_url', 'Link URL' ),
                ),
            ),
        );
    } );
    register_parent_block( 'visit-cards', 'Visit Cards', {
        style: 'string',
        title: 'string',
    }, function( props ) {
        return el( 'div', {}, 
                select_field( props, 'style', 'Style', {
                    'top-border': 'Top Border'
                } ),
                title_field( props, 'title', 'Title' ),
                inner_block( 'onegroup/visit-card' )
            );
    } );
    
    // === Callout === //
    register_block( 'callout', 'Callout', {
        bg_image: 'file',
        title: 'string',
        button_text: 'string',
        button_url: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'title', 'Title' ),
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col-auto' },
                        image_field( props, 'bg_image', 'Background Image' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'button_text', 'Button Text' ),
                        text_field( props, 'button_url', 'Button URL' )
                    ),
                ),
            );
    } );
    
    // === Video Callout === //
    register_block( 'video-callout', 'Video Callout', {
        headline: 'string',
        title: 'string',
        content: 'string',
        button_text: 'string',
        button_url: 'string',
        video_thumbnail: 'file',
        video: 'file',
        youtube_url: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col-auto' },
                        el( 'div', { className: 'onegroup-row' }, 
                            el( 'div', { className: 'onegroup-col' },
                                image_field( props, 'video_thumbnail', 'Video Thumbnail' ),
                            ),
                            el( 'div', { className: 'onegroup-col' },
                                video_field( props, 'video', 'Video' )
                            )
                        ),
                        text_field( props, 'youtube_url', 'YouTube URL' ),
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        title_field( props, 'headline', 'Headline', 'h4' ),
                        title_field( props, 'title', 'Title' ),
                        rich_text_field( props, 'content', 'Content' ),
                        el( 'div', { className: 'onegroup-row' }, 
                            el( 'div', { className: 'onegroup-col' },
                                text_field( props, 'button_url', 'Button URL' ),
                            ),
                            el( 'div', { className: 'onegroup-col' },
                                text_field( props, 'button_text', 'Button Text' ),
                            )
                        )
                    ),
                ),
            );
    } );
    
    // === Reports === //
    register_child_block( 'reports', 'report-tab', 'Report Tab', {
        category_id: 'string',
        report_id: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'category_id', 'Location', OneGroupData.locations )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        ( props.attributes['category_id'] in OneGroupData.location_reports 
                            ? select_field( props, 'report_id', 'Report', OneGroupData.location_reports[ props.attributes['category_id'] ] )
                            : ''
                        )
                    ),
                )
            );
    } );
    register_parent_block( 'reports', 'Reports', {
        link_text: 'string',
    }, function( props ) {
        return el( 'div', {}, 
            text_field( props, 'link_text', 'Link Text' ),
            inner_block( 'onegroup/report-tab' )
        );
    } );
    
    // === Angled Hero === //
    register_block( 'angled-hero', 'Angled Hero', {
        image: 'file',
        headline: 'string',
        title: 'string',
        content: 'string',
        style: 'string',
        button_url: 'string',
        button_text: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                select_field( props, 'style', 'Style', {
                    diagonal: 'Diagonal',
                    'diagonal-reverse': 'Diagonal Reverse',
                    angled: 'Angled'
                } ),
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col-auto' },
                        image_field( props, 'image', 'Image' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        title_field( props, 'headline', 'Headline', 'h4' ),
                        title_field( props, 'title', 'Title' ),
                        rich_text_field( props, 'content', 'Content' ),
                        el( 'div', { className: 'onegroup-row' }, 
                            el( 'div', { className: 'onegroup-col' },
                                text_field( props, 'button_url', 'Button URL' )
                            ),
                            el( 'div', { className: 'onegroup-col' },
                                text_field( props, 'button_text', 'Button Text' )
                            ),
                        ),
                    ),
                ),
            );
    } );
    
    // === Content === //
    register_block( 'content', 'Content', {
        title: 'string',
        content: 'string',
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'title', 'Title' ),
                rich_text_field( props, 'content', 'Content' ),
            );
    } );
    
    // === Video Callout === //
    register_block( 'video', 'Video', {
        title: 'string',
        video_thumbnail: 'file',
        video: 'file',
        youtube_url: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col-auto' },
                        image_field( props, 'video_thumbnail', 'Video Thumbnail' ),
                    ),
                    el( 'div', { className: 'onegroup-col-auto' },
                        video_field( props, 'video', 'Video' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        title_field( props, 'title', 'Title' ),
                        text_field( props, 'youtube_url', 'YouTube URL' ),
                    ),
                ),
            );
    } );
    
    // === Featured Testimonials === //
    register_child_block( 'featured-team', 'team-member', 'Team Member', {
        id: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            select_field( props, 'id', 'Team Member', OneGroupData.team_members )
        );
    } );
    register_parent_block( 'featured-team', 'Featured Team', {
        headline: 'string',
        title: 'string',
        button_text: 'string',
        background: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'title', 'Title' ),
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'background', 'Background', {
                            angled: 'Angled White'
                        } )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'headline', 'Headline' )
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        text_field( props, 'button_text', 'Button Text' ),
                    ),
                ),
                inner_block( 'onegroup/team-member' )
            );
    } );
    
    // === Iconics === //
    register_child_block( 'iconics', 'iconic', 'Iconic', {
        icon: 'file',
        title: 'string',
        content: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            el( 'div', { className: 'onegroup-row' }, 
                el( 'div', { className: 'onegroup-col-auto' },
                    image_field( props, 'icon', 'Icon' )
                ),
                el( 'div', { className: 'onegroup-col' },
                    title_field( props, 'title', 'Title' ),
                    rich_text_field( props, 'content', 'Content' )
                ),
            ),
        );
    } );
    register_parent_block( 'iconics', 'Iconics', {
        headline: 'string',
        title: 'string',
        style: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'headline', 'Headline', 'h5' ),
                title_field( props, 'title', 'Title' ),
                select_field( props, 'style', 'Style', {
                    'white-boxed': 'White Boxed'
                } ),
                inner_block( 'onegroup/iconic' )
            );
    } );
    
    // === Loop === //
    register_block( 'loop', 'Loop', {
        type: 'string',
        headline: 'string',
        title: 'string',
        description: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            title_field( props, 'headline', 'Headline', 'h4' ),
            title_field( props, 'title', 'Title' ),
            rich_text_field( props, 'description', 'Description' ),
            select_field( props, 'type', 'Type', {
                blog: 'Insights',
                report: 'Reports',
                success_story: 'Success Stories',
                testimonial: 'Testimonials'
            } )
        );
    } );    
    
    // === White Box === //
    register_parent_block( 'white-box', 'White Box', {
    }, function( props ) {
        return el( 'div', {}, 
                inner_block( ['core/heading', 'core/paragraph', 'core/image'] )
            );
    } );
    
    // === Tabs === //
    register_child_block( 'tabs', 'tab', 'Tab', {
        tab_icon: 'file',
        tab_title: 'string',
        content_title: 'string',
        content_text: 'string',
        content_button_url: 'string',
        content_button_text: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            title_field( props, 'tab_title', 'Tab Title', 'h3' ),
            el( 'div', { className: 'onegroup-row' }, 
                el( 'div', { className: 'onegroup-col-auto' },
                    image_field( props, 'tab_icon', 'Icon' )
                ),
                el( 'div', { className: 'onegroup-col' },
                    title_field( props, 'content_title', 'Content Title', 'h4' ),
                    rich_text_field( props, 'content_text', 'Content Text' ),
                    el( 'div', { className: 'onegroup-row' }, 
                        el( 'div', { className: 'onegroup-col' },
                            text_field( props, 'content_button_url', 'Content Button URL' )
                        ),
                        el( 'div', { className: 'onegroup-col' },
                            text_field( props, 'content_button_text', 'Content Button Text' )
                        ),
                    ),
                ),
            ),
        );
    } );
    register_parent_block( 'tabs', 'Tabs', {
        headline: 'string',
        title: 'string',
        style: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                select_field( props, 'style', 'Style', {
                    standard: 'Standard',
                    'white-skewed': 'White Skewed'
                } ),
                title_field( props, 'headline', 'Headline', 'h5' ),
                title_field( props, 'title', 'Title' ),
                inner_block( 'onegroup/tab' )
            );
    } );
    
    // === Header === //
    register_block( 'header', 'Header', {
        headline: 'string',
        title: 'string',
        description: 'string'
    }, function( props ) {
        return el( 'div', {}, 
                title_field( props, 'headline', 'Headline', 'h3' ),
                title_field( props, 'title', 'title' ),
                rich_text_field( props, 'description', 'Description' )
            );
    } );
    
    // === Team Members === //
    register_block( 'team-members', 'Team Members', {
        title: 'string',
        group_id: 'string',
        display: 'string',
        layout: 'string'
    }, function( props ) {
        return el( 'div', {}, 
            title_field( props, 'title', 'title' ),
            el( 'div', { className: 'onegroup-col' },
                el( 'div', { className: 'onegroup-row' }, 
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'group_id', 'Group', OneGroupData.team_groups ),
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'display', 'Display', {
                            'with-bio' : 'With Bio'
                        } ),
                    ),
                    el( 'div', { className: 'onegroup-col' },
                        select_field( props, 'layout', 'Layout', {
                            '2-cols' : '2 Columns'
                        } ),
                    ),
                ),
            ),
        );
    } );
} )( window.wp.blocks, window.wp.editor, wp.blockEditor, window.wp.element, window.wp.components );