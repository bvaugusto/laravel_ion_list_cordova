<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // fillable field
    // mass assignment
    protected $fillable = [
    	'task',
    	'status'
    ];
}
