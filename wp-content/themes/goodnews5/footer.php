      </div> <!--content boxed wrapper-->
            <?php do_action('mom_after_content'); ?>
<?php if (mom_option('hide_footer_widgets') != true ) { ?>
            <footer id="footer">
                <div class="inner">
	     <?php $footer_layout = mom_option('footer_layout'); if ( $footer_layout == 'third') { ?>
			<div class="one_third">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>

			</div><!-- End third col -->
			<div class="one_third">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div><!-- End third col -->
			<div class="one_third last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>

			</div><!-- End third col -->
	    <?php } elseif ($footer_layout == 'one') { ?>
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
	    <?php } elseif ($footer_layout == 'one_half') { ?>
			<div class="one_half">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_half last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>
	    <?php } elseif ($footer_layout == 'fourth') { ?>
			<div class="one_fourth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fourth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fourth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fourth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>
	    <?php } elseif ($footer_layout == 'fifth') { ?>
			<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_fifth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer5')){ }else { ?>
	        <?php } ?>
			</div>
	    <?php } elseif ($footer_layout == 'sixth') { ?>
			<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer5')){ }else { ?>
	        <?php } ?>
			</div>
			<div class="one_sixth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer6')){ }else { ?>
	        <?php } ?>
			</div>

    	    <?php } elseif ($footer_layout == 'half_twop') { ?>
	    		<div class="one_half" style="margin-right: 3%;">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fourth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fourth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>
	    
    	    <?php } elseif ($footer_layout == 'twop_half') { ?>
	    		<div class="one_fourth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fourth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_half last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>

    	    <?php } elseif ($footer_layout == 'half_threep') { ?>
	    		<div class="one_half">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>
    	    <?php } elseif ($footer_layout == 'threep_half') { ?>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_half last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>

    	    <?php } elseif ($footer_layout == 'third_threep') { ?>
	    		<div class="one_third">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fifth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>


    	    <?php } elseif ($footer_layout == 'threep_third') { ?>

	    		<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_fifth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>
			
			<div class="one_third last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>

    	    <?php } elseif ($footer_layout == 'third_fourp') { ?>
			<div class="one_third">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer5')){ }else { ?>
	        <?php } ?>
			</div>


       	    <?php } elseif ($footer_layout == 'fourp_third') { ?>
	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer1')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer2')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer3')){ }else { ?>
	        <?php } ?>
			</div>

	    		<div class="one_sixth">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer4')){ }else { ?>
	        <?php } ?>
			</div>
	    
	    <div class="one_third last">
		<?php if  (function_exists('dynamic_sidebar') && dynamic_sidebar('footer5')){ }else { ?>
	        <?php } ?>
			</div>
	    <?php } ?>    

        <div class="clear"></div>                    
                </div> <!--// footer inner-->
            </footer> <!--//footer-->
<?php } ?>
<?php if (mom_option('hide_footer_c') != true ) { ?>
            <div class="copyrights-area">
                <div class="inner">
                    <p class="copyrights-text"><?php echo do_shortcode(mom_option('copyrights')); ?></p>
					<div class="counters">
					
						<div class="item">
						
						
						</div>
					
						<div class="item">
							
<a href="http://ping-admin.ru/free_uptime/stat/d11d0e47ae67ccf6fb35289693f075fa6774.html" target="_blank"><img src="//images.ping-admin.ru/i/free_uptime/d4b9cfd158ef3a08823f4b6e352822ea6774_109.gif" width="88" height="31" border="0" alt="Перевірити доступність серверу"></a>
							
						</div>
					
						<div class="item">
						
<!--LiveInternet counter--><script type="text/javascript"><!--
document.write("<a href='//www.liveinternet.ru/click' "+
"target=_blank><img src='//counter.yadro.ru/hit?t18.6;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random()+
"' alt='' title='LiveInternet: показано число переглядів за 24"+
" години, відвідувачів за 24 години і за сьогодні' "+
"border='0' width='88' height='31'><\/a>")
//--></script><!--/LiveInternet-->
						
						</div>
						<div class="item">
							
<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=29702975&amp;from=informer"
target="_blank" rel="nofollow"><img src="//bs.yandex.ru/informer/29702975/3_0_FFFFFFFF_FFF5EEFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данні за сьогодні (перегляди, візити і унікальні відвідувачі)" onclick="try{Ya.Metrika.informer({i:this,id:29702975,lang:'ru'});return false}catch(e){}"/></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter29702975 = new Ya.Metrika({id:29702975,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/29702975" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
							<!--Yandex-->
							
						</div>
					</div>
					
                    <?php /*
                    if (mom_option('copyrights_right') == 'social') {
                            get_template_part('elements/social', 'icons');
                        } else {
                            if ( has_nav_menu( 'footer' ) ) { 
                                wp_nav_menu ( array( 'menu_class' => 'footer_menu','container'=> 'ul', 'theme_location' => 'footer' )); 
                            }
                        } */
                    ?>
                </div>
            </div>
<?php } ?>
            <div class="clear"></div>
        </div> <!--Boxed wrap-->
        <?php if (mom_option('scroll_top_bt') == 1) { ?><a href="#" class="scrollToTop button"><i class="enotype-icon-arrow-up"></i></a><?php } ?>
	<?php echo mom_option('footer_script'); ?>
        <?php wp_footer(); ?>
    </body>
</html>