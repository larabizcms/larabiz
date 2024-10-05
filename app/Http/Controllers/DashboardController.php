<?php

namespace App\Http\Controllers;

use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\PageBuilder\Elements\Grids\ContainerGrid;
use LarabizCMS\Core\PageBuilder\Elements\Grids\ItemGrid;
use LarabizCMS\Core\PageBuilder\Page;
use LarabizCMS\Core\Support\Analytic;
use LarabizCMS\Core\Support\Customizers\Traits\HasTitle;

class DashboardController extends Controller
{
    use HasTitle {
        HasTitle::getTitle as getTitleTrait;
    }

    public function index()
    {
        $page = Page::make(['title' => __('Dashboard')]);

        $container = ContainerGrid::make()->attributes([
            'container' => true, 'rowSpacing' => 4.5, 'columnSpacing' => 2.75
        ]);

        $container->add(Analytic::userCard(), Analytic::pageViewCard(), Analytic::visitorCard(), Analytic::returningCard());

        $container->add(ItemGrid::make()->attributes(['item' => true, 'xs' => 12, 'sm' => 12, 'md' => 8])
            ->add(Analytic::visitorChart()));

        $container->add(ItemGrid::make()->attributes(['item' => true, 'xs' => 12, 'sm' => 12, 'md' => 4])
            ->add(Analytic::topCountriesChart()));

        $container->add(ItemGrid::make()->attributes(['item' => true, 'xs' => 12, 'sm' => 12, 'md' => 8])
            ->add(Analytic::mostVisitedPagesChart()));

        $container->add(ItemGrid::make()->attributes(['item' => true, 'xs' => 12, 'sm' => 12, 'md' => 4])
            ->add(Analytic::visitorTypesChart()));

        $container->add(ItemGrid::make()->attributes(['item' => true, 'xs' => 12])
            ->add(Analytic::topReferrersChart()));

        $container->add(ItemGrid::make()->add(Analytic::userChart()));

        return $page->add($container)->showTitle(false);
    }

    public function settings()
    {
        //
    }
}
