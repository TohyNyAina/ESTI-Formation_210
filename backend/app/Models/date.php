<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\date as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class date extends Model
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $table = "dates";
    protected $fillable = [
        'title',
        'start',
        'end',
    ];
}
