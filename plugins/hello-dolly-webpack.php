<?php
/*
Plugin Name: Hello Dolly Webpack
Description: A simple WordPress plugin using Webpack.
Version: 1.0
Author: Your Name
*/

// Enqueue the JavaScript file
function enqueue_hello_dolly_script() {
    wp_enqueue_script('hello-dolly', plugins_url('dist/hello-dolly.js', __FILE__), array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_hello_dolly_script');
