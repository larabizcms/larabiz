## Installtion

- Install composer
```bash
composer create-project larabizcom/larabiz larabiz
```

- Install Larabiz
```bash
cd larabiz
composer install
php artisan larabiz:install
```

## Usage

### Customizer
- Add admin menu
```php
customizer()->adminMenu('dashboard')
    ->title('Dashboard')
    ->icon('fas fa-home')
    ->add();
```

- Add api documentation
```php
customizer()->apiDocumentation('auth/login')
    ->tags('Auth');
```

- Add setting

```php
customizer()->setting('title')->name('Title');

// Add setting with validations
customizer()->setting('description')->name('Description')->validations(['required', 'string', 'max:230']);
```

Add an API

```php
customizer()->api()->post('auth/login', [Controllers\Auth\LoginController::class, 'login'])
    ->guest()
    ->tags('Auth')
    ->description('Login');
```
