<?php

namespace App\Repositories;

use App\ {
    Category
};

class CategoryRepository
{

    /**
     * The Model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $categorymodel;  

    /**
     * Create a new CategoryRepository instance.
     *
     * @param  \App\Models\Category $model      
     */
    public function __construct(Category $categorymodel)
    {
        $this->categorymodel = $categorymodel;
    } 

    /**
     * Display a listing of all items.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function getData()
    {
       return $this->categorymodel->get();       
    }
 
}
