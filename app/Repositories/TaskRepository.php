<?php

namespace App\Repositories;

use App\ {
    Task,
};

class TaskRepository
{

    /**
     * The Model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $taskmodel;  

    /**
     * Create a new TaskRepository instance.
     *
     * @param  \App\Models\Task $model      
     */
    public function __construct(Task $taskmodel)
    {
        $this->taskmodel = $taskmodel;
    } 

    /**
     * Display a listing of all items.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function getData()
    {
       $query = $this->taskmodel
                     ->with('category')
                     ->where('user_id', \Auth::guard('api')->user()->id);

       return $query->get();       
    }

    /**
     * Store new item.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function storeData($request)
    {
        $this->taskmodel->user_id = \Auth::guard('api')->user()->id;
        $this->taskmodel->category_id = $request->categoryId;
        $this->taskmodel->name = $request->name;
        $this->taskmodel->result = 0;
        //$this->taskmodel->datecreate = date('Y-m-d H:i:s'); 
        $this->taskmodel->datecreate = date("Y-m-d", strtotime($request->datecreate)); 
        $this->taskmodel->save();       
    }      

    /**
     * Update selected item (as resulted task).
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function updateData($task)
    {
        $task->result = 1; 
        $task->dateresult = date('Y-m-d H:i:s');  
        $task->save();
    }    
}
