jQuery(document).ready(function(){
	var fblbOrgRight=jQuery('.fblbCenterOuter').css('right');
	var fblbOrgLeft=jQuery('.fblbCenterOuter').css('left');
	jQuery('.fblbRight').find('.fblbForm').hover(
		function(){
			jQuery(this).parents('.fblbCenterOuter').stop(true,false).animate({
				right: -3
			}, jQuery('.fblbForm').width());
		},
		function(){
			jQuery(this).parents('.fblbCenterOuter').stop(true,false).animate({
				right: fblbOrgRight
			}, jQuery('.fblbForm').width());
		}
		);
	jQuery('.fblbLeft').find('.fblbForm').hover(
		function(){
			jQuery(this).parents('.fblbCenterOuter').stop(true,false).animate({
				left: -3
			}, jQuery('.fblbForm').width());
		},
		function(){
			jQuery(this).parents('.fblbCenterOuter').stop(true,false).animate({
				left: fblbOrgLeft
			}, jQuery('.fblbForm').width());
		}
		);			
});