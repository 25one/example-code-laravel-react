<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model {

    protected $fillable = [
         'user_id', 'name', 'result', 'datecreate', 'dateresult',
    ];    

    /**
     * One to One relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * One to One relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }    

}
