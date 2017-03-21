<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php the_title_attribute(); ?></title>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<?php wp_head();

	if (WP_DEBUG){
		echo '<script src="'.get_theme_file_uri( "resources/assets/js/main.js" ).'"></script>';
	} else{
		echo '<script src="'.get_theme_file_uri( "resources/assets/js/main.min.js" ).'"></script>';
	}
	if (WP_DEBUG){
		echo '<link rel="stylesheet" type="text/css" href="'.get_theme_file_uri( "style.css" ).'">';
	} else{
		echo '<link rel="stylesheet" type="text/css" href="'.get_theme_file_uri( "style.min.css" ).'">';
	}
	?>

</head>
<body>
