<?php

namespace LarabizCMS\Modules\App\Providers;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'LarabizCMS\Modules\App\Models\Model' => 'LarabizCMS\Modules\App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     * @throws AuthorizationException
     */
    public function boot()
    {
        $this->registerPolicies();

        // Enable Passport Password Grant
        Passport::enablePasswordGrant();
        Passport::hashClientSecrets();

        // Passport token expirations
        Passport::tokensExpireIn(now()->addDay());
        Passport::refreshTokensExpireIn(now()->addDays(30));
        // Passport::personalAccessTokensExpireIn(now()->addMonths(6));

        // Before check user permission
        Gate::before(function ($user, $ability) {
            if ($user->isSuperAdmin()) {
                return true;
            }

            if ($user->isBanned()) {
                return false;
            }
        });
    }
}
