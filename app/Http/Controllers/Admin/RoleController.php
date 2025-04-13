<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::with('permissions:id,name')->select('id', 'name')->get();
        $permissions = Permission::select('id', 'name')->get();

        return Inertia::render('Admin/Roles/Index', [
            'roles' => $roles,
            'permissions' => $permissions,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:roles,name']
        ], [
            'name.required' => 'El nombre del rol es obligatorio.',
            'name.unique' => 'Este rol ya existe.',
        ]);

        Role::create(['name' => $request->name]);

        return to_route('admin.roles.index');
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:roles,name,' . $role->id]
        ]);

        $role->update(['name' => $request->name]);

        return to_route('admin.roles.index');
    }

    public function destroy(Role $role)
    {
        // dd($role);
        $role->delete();
        return to_route('admin.roles.index');
    }

    public function assignPermissions(Request $request, Role $role)
    {
        $validated = $request->validate([
            'permissions' => ['array'],
            'permissions.*' => ['exists:permissions,id'],
        ]);

        $role->syncPermissions($validated['permissions'] ?? []);

        return to_route("admin.roles.index");
    }
}
