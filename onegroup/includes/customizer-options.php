<?php

return [
    'header' => [
        'title' => __( 'Header', 'onegroup' ),
        'sections' => [
            'logo' => [
                'title' => __( 'Logo', 'onegroup' ),
                'settings' => [
                    'image' => [
                        'title' => __( 'Logo', 'onegroup' ),
                        'type' => 'image'
                    ],
                ]
            ],
            'button' => [
                'title' => __( 'Button', 'onegroup' ),
                'settings' => [
                    'text' => [
                        'title' => __( 'Text', 'onegroup' ),
                        'type' => 'text'
                    ],
                    'url' => [
                        'title' => __( 'URL', 'onegroup' ),
                        'type' => 'text'
                    ],
                ]
            ],
        ]
    ],
    'footer' => [
        'title' => __( 'Footer', 'onegroup' ),
        'sections' => [
            'logo' => [
                'title' => __( 'Logo', 'onegroup' ),
                'settings' => [
                    'image' => [
                        'title' => __( 'Logo', 'onegroup' ),
                        'type' => 'image'
                    ],
                ]
            ],
            'bottom' => [
                'title' => __( 'Bottom', 'onegroup' ),
                'settings' => [
                    'copyright_text' => [
                        'title' => __( 'Copyright Text', 'onegroup' ),
                        'type' => 'textarea'
                    ]
                ]
            ]
        ]
    ],
    'general' => [
        'title' => __( 'General', 'onegroup' ),
        'sections' => [
            'report' => [
                'title' => __( 'Report', 'onegroup' ),
                'settings' => [
                    'archive_page' => [
                        'title' => __( 'Archive Page', 'onegroup' ),
                        'type' => 'dropdown-pages'
                    ],
                    'download_button_text' => [
                        'title' => __( 'Download Button Text', 'onegroup' ),
                        'type' => 'text'
                    ]
                ]
            ],
            'blog' => [
                'title' => __( 'Blog', 'onegroup' ),
                'settings' => [
                    'related_posts_title' => [
                        'title' => __( 'Related Posts Title', 'onegroup' ),
                        'type' => 'text'
                    ]
                ]
            ],
            'success_story' => [
                'title' => __( 'Success Story', 'onegroup' ),
                'settings' => [
                    'archive_page' => [
                        'title' => __( 'Archive Page', 'onegroup' ),
                        'type' => 'dropdown-pages'
                    ],
                    'single_bottom_section' => [
                        'title' => __( 'Single Story Bottom Section', 'onegroup' ),
                        'type' => 'dropdown-custom-post-type',
                        'post_type' => 'section'
                    ]
                ]
            ],
            'service' => [
                'title' => __( 'Service', 'onegroup' ),
                'settings' => [
                    'archive_page' => [
                        'title' => __( 'Archive Page', 'onegroup' ),
                        'type' => 'dropdown-pages'
                    ]
                ]
            ],
            'testimonial' => [
                'title' => __( 'Testimonial', 'onegroup' ),
                'settings' => [
                    'archive_page' => [
                        'title' => __( 'Archive Page', 'onegroup' ),
                        'type' => 'dropdown-pages'
                    ],
                    'item_headline' => [
                        'title' => __( 'Item Headline', 'onegroup' ),
                        'type' => 'text'
                    ]
                ]
            ],
            'team_member' => [
                'title' => __( 'Team Member', 'onegroup' ),
                'settings' => [
                    'archive_page' => [
                        'title' => __( 'Archive Page', 'onegroup' ),
                        'type' => 'dropdown-pages'
                    ],
                    'breadcrumps_text' => [
                        'title' => __( 'Breadcrumps Text', 'onegroup' ),
                        'type' => 'text'
                    ],
                    'single_bottom_section' => [
                        'title' => __( 'Single Team Member Bottom Section', 'onegroup' ),
                        'type' => 'dropdown-custom-post-type',
                        'post_type' => 'section'
                    ]
                ]
            ],
        ]
    ]
];