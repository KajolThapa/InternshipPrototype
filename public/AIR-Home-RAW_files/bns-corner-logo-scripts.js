/**
 * This file is part of BNS Corner Logo.
 *
 * Copyright 2009-2016  Edward Caissie  (email : edward.caissie@gmail.com)
 *
 * BNS Corner Logo is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License, version 2, as published
 * by the Free Software Foundation.
 *
 * You may NOT assume that you can use any other version of the GPL.
 *
 * BNS Corner Logo is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the
 *
 *      Free Software Foundation, Inc.
 *      51 Franklin St, Fifth Floor
 *      Boston, MA  02110-1301  USA
 */

jQuery( document ).ready( function ( $ ) {
	/** Note: $() will work as an alias for jQuery() inside of this function */
	/**
	 * Stop Gravatar Hovercard effect by adding 'no-grav' class to the
	 * gravatar HTML image tag.
	 */
	$( 'div.bns-logo a img.avatar' ).addClass( 'no-grav' );
} );