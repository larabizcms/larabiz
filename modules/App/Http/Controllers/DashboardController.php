<?php

namespace LarabizCMS\Modules\App\Http\Controllers;

use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\Support\PageBuilder\Elements\Box;
use LarabizCMS\Core\Support\PageBuilder\Elements\Card;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\TextField;
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
                                    'element' => 'editor',
                                    'attributes' => [
                                        'name' => 'editor',
                                        'label' => 'Editor',
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
        return Page::make(
            []
        )->fill(['title' => 'Media', 'description' => 'Media']);
    }
}
