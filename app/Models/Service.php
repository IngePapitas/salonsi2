<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    protected $fillable = [
        'name',
        'price',
        'discount_price',
        'specialist_id',
        'has_discount',
        'has_available',
        'image_path'
    ];

    public function getImagePathAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }

    public function specialist(): BelongsTo
    {
        return $this->belongsTo(User::class, 'specialist_id');
    }
}
