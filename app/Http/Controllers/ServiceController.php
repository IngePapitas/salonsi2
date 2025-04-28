<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::orderBy('updated_at', 'desc')->with('specialist')->get();

        return Inertia::render('Services/index', [
            'services' => $services
        ]);
    }

    public function create()
    {
        $employees = User::role('employee')->get();
        return Inertia::render('Services/create',  [
            'employees' => $employees
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'discount_price' => 'nullable|numeric',
            'specialist_id' => 'nullable|numeric',
            'has_discount' => 'boolean',
            'has_available' => 'boolean',
            'image' => 'nullable|image|max:2048',
        ]);

        // Log::info("ServiceController@store data", (array) $validated);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['image_path'] = $path;
        }

        if ($request->id) {
            $service = Service::find($request->id);
            $service->update($validated);
        } else {
            $service = Service::create($validated);
        }

        return response()->json([
            'message' => 'Servicio actualizado',
            'service' => $service
        ]);
    }

    public function edit(Service $service)
    {
        $employees = User::role('employee')->get();

        return Inertia::render('Services/create', [
            'service' => $service,
            'employees' => $employees,
        ]);
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('services.index')->with('message', 'Servicio eliminado');
    }

    public function getList()
    {
        $services = Service::orderBy('updated_at')->get();
        return response()->json([
            'services' => $services
        ]);
    }
}
