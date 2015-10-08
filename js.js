$(document).ready(
	function(){
		$('div').on('click',function() {
			$(this).fadeOut();
		});

		$('div').blurjs({ source: 'body', radius: 10, overlay: 'rgba(255,255,255,0.4)' });
	
	});

	
