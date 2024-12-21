<?php

namespace App\Http\Controllers;

use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\PageBuilder\Elements\Grids\Container;
use LarabizCMS\Core\PageBuilder\Elements\Grids\Col12;
use LarabizCMS\Core\PageBuilder\Page;
use LarabizCMS\Core\Support\Analytic;

class DashboardController extends Controller
{
    public function index(): Page
    {
        $page = Page::make(['title' => __('Dashboard')]);

        $container = Container::make()->attributes([
            'container' => true,
            'rowSpacing' => 4.5,
            'columnSpacing' => 2.75
        ]);

        do_action('dashboard.container.before-analytic-card', $container);

        $container->add(
            Analytic::userCard(),
            Analytic::pageViewCard(),
            Analytic::visitorCard(),
            Analytic::returningCard()
        );

        do_action('dashboard.container.before-user-chart', $container);

        $container->add(Col12::make()->add(Analytic::userChart()));

        do_action('dashboard.container.after-user-chart', $container);

        return $page->add($container)->showTitle(false);
    }
}
