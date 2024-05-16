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
