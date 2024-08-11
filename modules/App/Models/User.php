<?php

namespace LarabizCMS\Modules\App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection as BaseCollection;
use LarabizCMS\Core\Contracts\Permissions\Permission as PermissionContract;
use LarabizCMS\Core\Contracts\Permissions\Role;
use LarabizCMS\Core\Models\PasswordReset;
use LarabizCMS\Core\Models\Permissions\Permission;
use LarabizCMS\Core\Models\Users\User as UserBase;
use LarabizCMS\Mediable\Models\Media;
use LarabizCMS\Mediable\Traits\HasMedia;
use Laravel\Passport\Client;
use Laravel\Passport\Token;

/**
 * LarabizCMS\Modules\App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string $uuid
 * @property-read Collection<int, Client> $clients
 * @property-read int|null $clients_count
 * @property-read DatabaseNotificationCollection<int, DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read Collection<int, Token> $tokens
 * @property-read int|null $tokens_count
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static Builder|User query()
 * @method static Builder|User whereCreatedAt($value)
 * @method static Builder|User whereEmail($value)
 * @method static Builder|User whereEmailVerifiedAt($value)
 * @method static Builder|User whereId($value)
 * @method static Builder|User whereName($value)
 * @method static Builder|User wherePassword($value)
 * @method static Builder|User whereRememberToken($value)
 * @method static Builder|User whereUpdatedAt($value)
 * @method static Builder|User whereUuid($value)
 * @method static Builder|User permission(PermissionContract|BaseCollection|array|string|int $permissions)
 * @property-read Collection<int, Permission> $permissions
 * @property-read int|null $permissions_count
 * @property Carbon|null $birthday
 * @property string $status
 * @property bool $is_super_admin
 * @property-read Media|null $avatar
 * @property-read Collection<int, Media> $media
 * @property-read int|null $media_count
 * @property-read Collection<int, PasswordReset> $passwordResets
 * @property-read int|null $password_resets_count
 * @property-read Collection<int, \LarabizCMS\Core\Models\Permissions\Role> $roles
 * @property-read int|null $roles_count
 * @method static Builder|User api(array $params = [])
 * @method static Builder|User filter(array $params)
 * @method static Builder|User inApi(array $params = [])
 * @method static Builder|User role(Role|BaseCollection|array|string|int $roles, ?string $guard = null)
 * @method static Builder|User search(string $keyword)
 * @method static Builder|User sort(array $params)
 * @method static Builder|User whereBirthday($value)
 * @method static Builder|User whereIsSuperAdmin($value)
 * @method static Builder|User whereStatus($value)
 * @method static Builder|User withMedia(array|string|null $channel = null)
 * @property-read Collection<int, \LarabizCMS\Core\Models\Users\UserSocialConnection> $socialConnections
 * @property-read int|null $social_connections_count
 * @mixin Eloquent
 */
class User extends UserBase
{
    use HasMedia;

    public const STATUS_ACTIVE = 'active';

    public const STATUS_INACTIVE = 'inactive';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'birthday',
        'status',
        'is_super_admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'birthday' => 'date',
        'is_super_admin' => 'boolean',
    ];

    protected $searchable = ['name', 'email'];

    protected $filterable = ['status', 'is_super_admin'];

    protected $sortable = ['id', 'name', 'email', 'status'];

    protected $sortDefault = ['id' => 'DESC'];

    protected $appends = ['avatar'];

    public function scopeInApi(Builder $builder, array $params = []): Builder
    {
        return $builder->withMedia('avatar');
    }

    public function getAvatarAttribute(): ?Media
    {
        if (! $this->relationLoaded('media')) {
            return null;
        }

        return $this->getFirstMedia('avatar');
    }
}
