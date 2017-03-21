<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tehema');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'kUH|Q>G2#Y<WydUO -6[tRPYIoX@79MC1_xe2&(t*)%oj)6wZOB<d*2R3BMp#=v|');
define('SECURE_AUTH_KEY',  '7D=DG$[SMo}f:9RDf+@CU!s4B$~PyEQz3mXl-nYJYI52NJ7Crf2_``3:&]<*v]bs');
define('LOGGED_IN_KEY',    'oN00Yd.4cdM-`O`lA02S%7@wi/Qn;7jG!4FRYLXp{3-_CvXF(oF/p56Vfy>7=WLX');
define('NONCE_KEY',        '&mX@s F)0cEfZo-!nq.4V.ny7YcJ!#@p{J6BxAWaT]fhuhB~:d%hI`J!*&zyPw]{');
define('AUTH_SALT',        'H1M~~&#d*`&lQ7)bweoV@Oge}z&(c{`>`T&x#]_rkaL|m<RHXOa*}$x!pU&uV?h&');
define('SECURE_AUTH_SALT', 'cQ<bC7HcL1]V{=lUl`~=DW,3f1:r-dlEHa]nLo=gZ#8I>Rk,_b}l<h/}:WfBO) V');
define('LOGGED_IN_SALT',   'svVAVH]/NB&RX!pkLgdF;m_zz*=PGDwx}z|S_HP,E31$!vd|t3]-Bi[{`gUQzN?g');
define('NONCE_SALT',       'xPFiYWd]Noy@F(OEL/6U6^1;iJLt&//ap]B^D9`%F8r-z!D9!;vU*jI_Tw8lq$vq');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'TM_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
