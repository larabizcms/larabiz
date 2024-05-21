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

customizer()->adminPage('dashboard', [DashboardController::class, 'index'])
    ->title('Dashboard')
    ->icon('dashboard');
//
// customizer()->adminPage('settings')
//     ->title('Settings')
//     ->icon('fas fa-home');
