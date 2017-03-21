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
define('DB_CHARSET', 'utf8');

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
define('AUTH_KEY',         '|Tb0]FHR:&}(`2(RGGR/*W0Cpr#tq#O-#55<|uA+!cyW)Vm::]YDCSIxdEnU(fc!');
define('SECURE_AUTH_KEY',  'PnT!vW/wp3jqGB<%VIU!h%Hx@P(|i71q |@$8Z#Z+]i(u(=$ 1#b(a%Jdti=xi1#');
define('LOGGED_IN_KEY',    'RLts~1o2V0JJGk+bwNV(2Bz6I+[.TG`+>es|^BYYOu$D$l du#mj@TPHiQ?6C!4U');
define('NONCE_KEY',        'u7i`5+b8~|hj4eeXrcGvTSPK_Jg)P%,I4q<5%ZbMRBy>c_X<)IW<9HU[n?APoCW0');
define('AUTH_SALT',        'nbl|{pbp)wo-{|s|$[eT`H:.*[M( ,2pKiRP|Y<e9tAn;j;S%}=$VL=kGo|bR|8G');
define('SECURE_AUTH_SALT', '?sN|+2N^bO/c1xnfw!t:P<=<TTP9l{3$S=F|~ZDocRM}11MjyW]{.[ig>*~a9)+9');
define('LOGGED_IN_SALT',   '&[dZ>p8)f)*]L-+L^HT1_%*ME:5<6Q(X2%KeHym:[E#k|LgJGOWjT==wG?,*#FB7');
define('NONCE_SALT',       'fvS%gT7V+GViA+{+[(rkM+)3[?D!r;+~akS^d0c.gc9r9aAG1Y*yF%h6:M3Hb2_k');

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
