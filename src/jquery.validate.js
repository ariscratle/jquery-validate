/*
 * jQuery validate plug-in v.0.1.0
 *
 *
 * https://github.com/ogilvieira/jquery-validate
 * 
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 */
 "use strict";

$.fn.jvalidate = function( inputsOptions ) {
	var myInputs = {} || inputsOptions;

	this.submit(function(){

		var Validate = new Gvalidate($(this), myInputs );

		if( Validate.getErrors() ) {
			return false;
		};

	});
};