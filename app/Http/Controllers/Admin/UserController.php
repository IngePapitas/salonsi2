<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserController\StoreUserReques;
use App\Http\Requests\Admin\UserController\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::select('id', 'name', 'email')
            ->with([
                'roles:id,name'
            ])
            ->get();
        $roles = Role::select('id', 'name')->get();

        return Inertia::render('Admin/Users/Index', compact('users', 'roles'));
    }

    public function store(StoreUserReques $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']), // ← misma encriptación que Jetstream
        ]);

        $user->assignRole($validated['role_id']);

        return to_route('admin.users.index')->with('success', 'Usuario creado exitosamente.');
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $validated = $request->validated();

        $user->update($validated);
        $user->assignRole($validated['role_id']);

        return to_route('admin.users.index')
            ->with('success', 'Usuario actualizado correctamente.');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return to_route('admin.users.index');
    }
}
