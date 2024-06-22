<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \LarabizCMS\Modules\App\Models\User::factory(10)->create();

        // \LarabizCMS\Core\Models\Media::factory(1)->create();
    }
}
