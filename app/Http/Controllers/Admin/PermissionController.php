<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:50|unique:permissions,name']);
        $permission = Permission::create(['name' => $request->name]);

        return to_route('admin.roles.index');
    }

    public function update(Request $request, Permission $permission)
    {
        $request->validate([
            'name' => 'required|string|max:50|unique:permissions,name,' . $permission->id,
        ]);

        $permission->update(['name' => $request->name]);

        return to_route('admin.roles.index');
    }

    public function destroy(Permission $permission)
    {
        $permission->delete();

        return to_route('admin.roles.index');
    }
}
