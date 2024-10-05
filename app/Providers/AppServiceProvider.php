<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Intervention\Image\Image;
use LarabizCMS\Core\Media\Contracts\ImageConversion;
use LarabizCMS\Core\Providers\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        /**
         * Enable Model strict mode.
         * See more: https://laravel.com/docs/9.x/eloquent#configuring-eloquent-strictness
         */
        Model::preventLazyLoading(! $this->app->isProduction());

        $this->app[ImageConversion::class]->register(
            'thumb',
            function (Image $image) {
                // you have access to intervention/image library,
                // perform your desired conversions here
                return $image->fit(64, 64);
            }
        );

        $this->loadCustomizer(__DIR__ . '/../customizer.php');
    }
}
