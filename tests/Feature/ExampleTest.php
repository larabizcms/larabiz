<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');

        $response->assertStatus(302);
    }

    public function test_the_admin_returns_a_successful_response()
    {
        $response = $this->get('/admin-cp');

        $response->assertStatus(302);

        $response = $this->get('/user/login');

        $response->assertStatus(200);
    }
}
