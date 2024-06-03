<?php

namespace LarabizCMS\Modules\App\Http\Controllers;

use LarabizCMS\Core\Facades\Breadcrumb;
use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\Support\PageBuilder\Elements\Box;
use LarabizCMS\Core\Support\PageBuilder\Elements\Card;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Text as TextField;
use LarabizCMS\Core\Support\PageBuilder\Elements\Text;
use LarabizCMS\Core\Support\PageBuilder\Page;

class DashboardController extends Controller
{
    public function index()
    {
        return Page::make(
            [
                Card::make(
                    [
                        Box::make(
                            [
                                Text::make('Dashboard', [
                                    'fontWeight' => 600,
                                    //'mt' => '50px',
                                    'color' => '#3f51b5',
                                ]),
                                [
                                    'element' => 'textarea_field',
                                    'attributes' => [
                                        'name' => 'editor',
                                        'label' => 'Editor',
                                        'placeholder' => 'Placeholder',
                                    ]
                                ],
                                [
                                    'element' => 'select_field',
                                    'helpertext' => 'select_field',
                                    'defaultValue' => 'option1',
                                    'attributes' => [
                                        'name' => 'select',
                                        'label' => 'Selector',
                                    ],
                                    'options' => [
                                        '' => '-- Select --',
                                        'option1' => 'Option 1',
                                        'option2' => 'Option 2',
                                        'option3' => 'Option 3',
                                    ]
                                ],
                                TextField::make(['name' => 'textfield', 'label' => 'Textfield'])->placeholder('Placeholder text'),
                            ]
                        )
                    ]
                )->title('Dashboard')
            ]
        )->title('Dashboard')->showTitle(false);
    }

    public function media()
    {
        Breadcrumb::items([
            [
                'title' => 'Dashboard',
                'url' => '/admin-cp/dashboard',
            ],
            [
                'title' => 'Media',
            ],
        ]);

        return Page::make(
            []
        )->fill(['title' => 'Media', 'description' => 'Media']);
    }
}
