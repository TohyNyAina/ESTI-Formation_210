<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\message as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class message extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
     /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $table = "messages";
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'message',
    ];

     /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        //
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        //
    ];
}
