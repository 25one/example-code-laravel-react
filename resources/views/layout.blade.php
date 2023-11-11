<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>
    <!-- Styles CSS -->
    <!-- bootstrap css -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <!-- awesome css -->  
    <link rel="stylesheet" href="{{ asset('css/fontawesome.min.css') }}">  
    <!-- main.css (template) -->
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">

    <link rel="stylesheet" href="{{ asset('css/material_green.css') }}">

    <!-- app css (laravel) -->    
    <!-- <link rel="stylesheet" href="{{ asset('public/css/app.css') }}"> --> <!-- чпу -->
    <!-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> --> <!-- server.php -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}"> <!-- mix -->

    @yield('css')

</head>
<body>  
    <div id="app">
       @yield('main')
    </div>
<!-- Scripts JS -->   
<!-- app js (laravel) -->
<!-- <script src="{{ asset('public/js/app.js') }}"></script> --> <!-- чпу -->
<!-- <script src="{{ asset('js/app.js') }}"></script> --> <!-- server.php -->
<script src="{{ mix('js/app.js') }}"></script> <!-- mix -->
<!-- jquery scripts -->
<!-- 
<script src="js/jQuery-2.2.0.min.js"></script>
<script src="js/jquery-ui.min.js"></script>  
-->
<!-- <script src="js/main.js"></script> --> 
<!-- my mine.js -->
<!-- 
<script src="js/mine.js"></script>
-->

@yield('js') 

</body>
</html>
