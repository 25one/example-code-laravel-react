<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterFormRequest;
use App\User;

class RegisterController extends Controller
{
    public function __invoke(RegisterFormRequest $request)
    {
        $user = User::create(array_merge(
            $request->only('name', 'email'),
            ['password' => bcrypt($request->password),
            'api_token' => \Str::random(60)]
            ));
        
        //return response()->json([
        //    'message' => 'You were successfully registered. Use your email and password to sign in.'
        //], 200);

        return response()->json([
            'token_type' => 'Bearer',
            'name' => $user->name,
            'api_token' => $user->api_token,
        ], 200);
    }
}
