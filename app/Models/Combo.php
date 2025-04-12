<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Combo extends Model
{
    protected $fillable = [
        'name',
        'price',
        'discount_price',
        'has_discount',
        'image_path'
    ];

    public function getImagePathAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'combo_services');
    }
}
