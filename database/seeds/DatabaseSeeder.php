<?php

use Illuminate\Database\Seeder;
use App\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Category::create(
            [
                'name' => 'family',
            ]
        ); 
        Category::create(
            [
                'name' => 'home',
            ]
        ); 
        Category::create(
            [
                'name' => 'work',
            ]
        ); 
        Category::create(
            [
                'name' => 'friends',
            ]
        );                        
    }
}
