jQuery(document).ready(function($) {

	$(".run-demo-content").click( function(e){
		e.preventDefault();

		t = jQuery(this);
			jQuery.ajax({
			    type: "post",
			    url: demo_installer.url,
			    dataType: 'html',
			    data: "action=demo_installer&nonce="+demo_installer.nonce,
			    beforeSend: function() {
			    	t.text('Loading ...');
			    },
			    success: function(){
			    	t.text('All done');
				    setTimeout(function(){
	               		window.location.reload();
	        		}, 1000);   
			    }
			});

});
}) // jQuery end 