<?php

namespace LarabizCMS\Modules\App\Http\Controllers;

use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\Support\PageBuilder\Elements\Card;
use LarabizCMS\Core\Support\PageBuilder\Elements\DataTable;
use LarabizCMS\Core\Support\PageBuilder\Page;

class DashboardController extends Controller
{
    public function index()
    {
        $userCard = Card::make(['title' => 'Users']);

        $userCard->add(DataTable::make()->withColumns(
            [
                'Name',
                'Email',
                'Created At'
            ]
        )->dataUrl('/users'));

        return Page::make()->add($userCard)->title('Dashboard')->showTitle(false);
    }
}
