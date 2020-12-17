//= require turbolinksj

var ready = function() {
	// enable bricklayer
	var bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
	console.log("ready");
}

//	$(document).ready(ready);
// for turbolinks
//$(document).on('page:load', ready);

function goViewer(images) {
	const viewer = new Viewer(document.getElementById(images), {
		toolbar:false,
		transition:true,
		rotatable:false,
		hidden() {
			this.viewer.destroy();
		}
	});

	viewer.show()
	
}
