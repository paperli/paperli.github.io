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

function goViewer(images) {
	const viewer = new Viewer(document.getElementById(images), {
		toolbar:false,
		transition:false,
		rotatable:false,
		hidden() {
			this.viewer.destroy();
		}
	});

	viewer.show()
	
}