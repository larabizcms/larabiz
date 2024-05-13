<?php
/**
 * JUZAWEB CMS - Laravel CMS for Your Project
 *
 * @package    juzaweb/cms
 * @author     The Anh Dang
 * @link       https://juzaweb.com
 * @license    GNU V2
 */

customizer()->adminMenu('dashboard')
    ->title('Dashboard')
    ->icon('fas fa-home')
    ->add();

customizer()->apiDocumentation('auth/login')
    ->tags('Auth');
