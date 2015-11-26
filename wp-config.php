<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home/u605407226/public_html/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'u605407226_prof');

/** MySQL database username */
define('DB_USER', 'u605407226_stud');

/** MySQL database password */
define('DB_PASSWORD', '6eGaUtGAGv');

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
define('AUTH_KEY',         'a-s%jzmdUQ@MUvJd2=:pAp_k9Suv!f+#7mv:q|tLu+54/zbX< BaIBf47{2&X$q ');
define('SECURE_AUTH_KEY',  '@Tu2Ge4V}|gnw-4L:(3^)vb>]35]I2-Wbn,b;S]Nx0+[yx}e;=iEmu:R9wo5c|]*');
define('LOGGED_IN_KEY',    'flH9*jF%M8sPs[m`aXx ++HGQW+H#M-B@|<95VbyetW.dN+B-s7q?,:kY75.EH,p');
define('NONCE_KEY',        '=}.%Ix^(+q&Owh4ex@VR7tTYzzy&kqQQN@]E;fNt-RL)f*U x;wp2+wMFv+s*-(Q');
define('AUTH_SALT',        ',d17y4u^0>hN]5@: =K{{Be`{wRdO)DT t.wf,QiB=!7yCzsny[XO9I@!a<gt;:W');
define('SECURE_AUTH_SALT', 'y>l*XVw%P-+ewQou:gUShnCqoO]pDlu_a2-k#d8bX$dnO&vVzA(#b2~q]sT3v0i,');
define('LOGGED_IN_SALT',   'P95z?t^zg,)o}t!iCn]rGLd3XPT4m/.s?-{T_IIEHQtf+YB;7UpF{OvH)IOeSv2J');
define('NONCE_SALT',       'A0#b*Jsm@18?I[*;YR18uN~=p1b}>*?]l,-9#f$W.|UKZzSU)d)Y~wfP6w|,-16g');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
