<?php
/**
 * JUZAWEB CMS - Laravel CMS for Your Project
 *
 * @package    juzaweb/cms
 * @author     The Anh Dang
 * @link       https://juzaweb.com
 * @license    GNU V2
 */

use LarabizCMS\Modules\App\Http\Controllers\DashboardController;

larabiz()->adminPage('dashboard', [DashboardController::class, 'index'])
    ->menuGroup('apps')
    ->title('Dashboard')
    ->menuIcon('dashboard')
    ->menuPriority(10);

larabiz()->adminPage('media', [DashboardController::class, 'media'])
    ->title('Media')
    ->menuIcon('PermMedia')
    ->menuGroup('apps')
    ->menuPriority(15);

larabiz()->adminPage('settings', [DashboardController::class, 'settings'])
    ->title('General')
    ->menuIcon('Settings')
    ->menuGroup('settings');
