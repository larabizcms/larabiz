<?php

namespace LarabizCMS\Modules\App\Http\Controllers;

use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\Support\PageBuilder\Elements\Box;
use LarabizCMS\Core\Support\PageBuilder\Page;

class DashboardController extends Controller
{
    public function index()
    {
        return Page::make(
            [
                Box::make(
                    [

                    ]
                )
            ]
        )->title('Dashboard');
    }
}
