<?php
/**
 * JUZAWEB CMS - Laravel CMS for Your Project
 *
 * @package    juzaweb/cms
 * @author     The Anh Dang
 * @link       https://juzaweb.com
 * @license    GNU V2
 */

use LarabizCMS\Core\Http\Controllers\Admin\MediaController;
use LarabizCMS\Modules\App\Http\Controllers\DashboardController;
use LarabizCMS\Modules\App\Http\Controllers\ExampleController;

larabiz()->adminPage('dashboard', [DashboardController::class, 'index'])
    ->menuGroup('apps')
    ->title('Dashboard')
    ->menuIcon('dashboard')
    ->menuPriority(10);

larabiz()->adminPage('media', [MediaController::class, 'index'])
    ->title('Media')
    ->menuIcon('PermMedia')
    ->menuGroup('apps')
    ->menuPriority(15);

larabiz()->adminPage('media/{id}', [MediaController::class, 'folder'])
    ->title('Media')
    ->menu(false);

if (config('app.debug')) {
    larabiz()->adminPage('example', [ExampleController::class, 'index'])
        ->title('Example')
        ->menuIcon('TipsAndUpdates')
        ->menuGroup('apps')
        ->menuPriority(20);
}
