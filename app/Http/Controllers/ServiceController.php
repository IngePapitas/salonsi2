<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index ()
    {
        return Inertia::render('Services/index', [
            'services' => Service::all()
        ]);
    }

    public function create () 
    {
        return Inertia::render('Services/create');
    }

    public function store (Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'discount_price' => 'nullable|numeric',
            'has_discount' => 'boolean',
            'image' => 'nullable|image|max:2048', 
        ]);
    
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['image_path'] = $path;
        }

        if($request->id)
        {
            $service = Service::find($request->id);
            $service->update($validated);
            
        }
        else
        {
            $service = Service::create($validated);
        }
    
    
        return response()->json([
            'message' => 'Servicio actualizado',
            'service' => $service
        ]);
    }

    public function edit (Service $service)
    {
        return Inertia::render('Services/create', [
            'service' => $service
        ]);
    }

    public function destroy (Service $service)
    {
        $service->delete();
    
        return redirect()->route('services.index')->with('message', 'Servicio eliminado');
    }

    public function getList()
    {
        $services = Service::all();
        return response()->json([
            'services' => $services
        ]);
    }

}
