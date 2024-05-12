<?php
/**
 * JUZAWEB CMS - Laravel CMS for Your Project
 *
 * @package    juzaweb/cms
 * @author     The Anh Dang
 * @link       https://juzaweb.com
 * @license    GNU V2
 */

return [
    'authentication' => [
        'users' => [
            'client_id' => env('PASSPORT_USER_GRANT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_USER_GRANT_CLIENT_SECRET'),
        ]
    ],
];
