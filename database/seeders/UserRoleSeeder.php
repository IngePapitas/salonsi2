<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('123')
        ];

        $roles = [
            'admin',
            'client',
            'employee'
        ];
        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }
        User::create($user)->assignRole('admin');
    }
}
