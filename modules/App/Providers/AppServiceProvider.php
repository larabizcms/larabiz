<?php

namespace LarabizCom\Modules\App\Providers;

use LarabizCom\Core\Providers\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->loadCustomizer(__DIR__ . '/../customizer.php');
    }
}
