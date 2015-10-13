$(document).ready(
	function(){
		var istzelle = $('<div id="iszelle"></div>');
		$('div').find(".zelle").on('click',function() {
			$(this).append(istzelle);
		});

		// $('.spilebrett').blurjs({ source: 'body', radius: 10, overlay: 'rgba(255,255,255,0.4)' });
	
	});

	
