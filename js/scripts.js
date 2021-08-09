jQuery( document ).ready( function( $ ) {
	
	let video = 0;
	
	$( '.js_pp_btn' ).click( function( e ) {
		
		e.preventDefault();
		
		let tmp = $( this ).data( 'video' );
		
		if ( tmp ) {
			
			video = tmp;
			
			$( '.js_pp[data-video] iframe' ).hide( 0 );
			$( '.js_video_' + video ).show( 0 );
			$( '.js_video_' + video )[ 0 ].contentWindow.postMessage( '{"event":"command","func":"' + 'playVideo' + '","args":""}', '*' );
			$( '.js_pp[data-video]' ).fadeIn( 300 );
		
		} else {
			$( '.js_pp[data-form]' ).fadeIn( 300 );
		}
		
	});
	
	$( '.js_pp_in' ).click( function( e ) {
		e.preventDefault();	
	});
	
	$( '.js_pp' ).click( function( e ) {
		
		$( '.js_pp' ).fadeOut( 300 );
		$( '.js_video_' + video )[ 0 ].contentWindow.postMessage( '{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*' );
		
	});
	
});