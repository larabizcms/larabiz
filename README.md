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
customizer()->apiDocumentation()
    ->post('auth/login', 'Login')
    ->tags('Auth')
    ->requestBody([
        'required' => true,
        'content' => [
            'multipart/form-data' => [
                'schema' => [
                    'required' => [
                        'email',
                        'password',
                    ],
                    'properties' => [
                        'email' => [
                            'description' => 'Email',
                            'type' => 'string',
                        ],
                        'password' => [
                            'description' => 'password',
                            'type' => 'string',
                            'format' => 'password',
                        ],
                    ],
                    'type' => 'object',
                ],
            ],
        ],
    ]);
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

`restSuccess` Response append data

```php
return $this->restSuccess(
    $data,
    'Get data successfully.'
)->appendData(['code' => 'CUSTOM_CODE']);
```
