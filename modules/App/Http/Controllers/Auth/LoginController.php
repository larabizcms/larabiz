<?php
/**
 * JUZAWEB CMS - Laravel CMS for Your Project
 *
 * @package    juzaweb/cms
 * @author     The Anh Dang
 * @link       https://juzaweb.com
 * @license    GNU V2
 */

namespace Modules\App\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use LarabizCom\Core\Http\Controllers\Controller;
use Modules\App\Events\LoginSuccess;
use Modules\App\Http\Requests\LoginRequest;
use Modules\App\Models\User;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(LoginRequest $request)
    {
        $response = Http::asForm()->post('/oauth/token', [
            'grant_type' => 'password',
            'client_id' => config('app-module.authentication.users.client_id'),
            'client_secret' => config('app-module.authentication.users.client_secret'),
            'username' => $request->post('email'),
            'password' => $request->post('password'),
            'scope' => '*',
        ])->throw();

        $user = User::find($response->json('user_id'));

        event(new LoginSuccess($user));

        return $response->json();
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
