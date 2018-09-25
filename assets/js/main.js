$(function(){
	$(".carousel").swipe({
		swipeLeft:function(evt) {
			$(this).carousel('next');
		},
		swipeRight:function(evt) {
			$(this).carousel('prev');
		}
	})
});