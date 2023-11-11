<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo e(config('app.name')); ?></title>
    <!-- Styles CSS -->
    <!-- bootstrap css -->
    <link rel="stylesheet" href="<?php echo e(asset('css/bootstrap.min.css')); ?>">
    <!-- awesome css -->  
    <link rel="stylesheet" href="<?php echo e(asset('css/fontawesome.min.css')); ?>">  
    <!-- main.css (template) -->
    <link rel="stylesheet" href="<?php echo e(asset('css/main.css')); ?>">

    <link rel="stylesheet" href="<?php echo e(asset('css/material_green.css')); ?>">

    <!-- app css (laravel) -->    
    <!-- <link rel="stylesheet" href="<?php echo e(asset('public/css/app.css')); ?>"> --> <!-- чпу -->
    <!-- <link rel="stylesheet" href="<?php echo e(asset('css/app.css')); ?>"> --> <!-- server.php -->
    <link rel="stylesheet" href="<?php echo e(mix('css/app.css')); ?>"> <!-- mix -->

    <?php echo $__env->yieldContent('css'); ?>

</head>
<body>  
    <div id="app">
       <?php echo $__env->yieldContent('main'); ?>
    </div>
<!-- Scripts JS -->   
<!-- app js (laravel) -->
<!-- <script src="<?php echo e(asset('public/js/app.js')); ?>"></script> --> <!-- чпу -->
<!-- <script src="<?php echo e(asset('js/app.js')); ?>"></script> --> <!-- server.php -->
<script src="<?php echo e(mix('js/app.js')); ?>"></script> <!-- mix -->
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

<?php echo $__env->yieldContent('js'); ?> 

</body>
</html>
<?php /**PATH /var/www/resources/views/layout.blade.php ENDPATH**/ ?>