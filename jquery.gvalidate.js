/*
 * jQuery gvalidate plug-in v.0.1.0
 *
 *
 * Create by Gil Vieira <ogilvieira@gmail.com> <@ogilvieira>
 * 
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 */
 "use strict";

$.fn.gvalidate = function( inputsOptions ) {
	var myInputs = inputsOptions || {};

	this.submit(function(){

		var Validate = new Gvalidate($(this), myInputs );

		if( Validate.getErrors() ) {
			return false;
		};

	});
};


var Gvalidate = function( element, inputs ){

	var checkEmail = function( input, value, callback) {
		if ( input.inputType == 'email' && ( value.indexOf('@')==-1 || value.indexOf('.')==-1 ) ) {
			return callback();
		}
	}

	var checkRequired = function( input, value, callback) {
		if ( input.required && !value ) {
			return callback();
		}
	}

	var checkMinLength = function( input, value, callback) {
		if( Number(input.minlength) && ( value.length < Number(input.minlength) ) ) {
			return callback();
		}
	}	
	this.getErrors = function(){
		var errors = [];

		$.each(inputs, function(k, v){
			var target = element.find('[name='+k+']'),
				value =  target.val();

			target.removeClass('is-err');

			checkRequired( v, value, function(){
				errors.push( k );
			});

			checkEmail( v, value, function(){
				errors.push( k );
			});

			checkMinLength( v, value, function(){
				errors.push( k );
			});
		});

		if( errors.length ) {
			$.each(errors, function(k, v){
				element.find('[name='+v+']').addClass('is-err');
			});
			return true;
		} 

		return false;
	} 

};
