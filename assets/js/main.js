//= require turbolinksj

var selectedTags = [];

var ready = function() {
	// enable bricklayer
	console.log("ready");
	let params = new URLSearchParams(window.location.search);
	var tagsStr = params.get("tags");
	if (tagsStr != null && tagsStr != "" && tagsStr != " ") {
		tagsStr = decodeURIComponent(tagsStr);
		let tags = tagsStr.split(",");
		selectedTags = tags;
		var query = ".card:not(";
		console.log("tags lenth: " + tags.length + "::" + tagsStr);
		tags.forEach(function(tag) {
			var slug = slugify(tag);
			console.log("slug: " + slug);
			query += `.${slug}`;
			document.querySelector(`.btn-tag.${slug}`).classList.add("active");
		});
		query += ")";
		console.log("query: " + query);
		let elms = document.querySelectorAll(query);
		elms.forEach(function(elm) {
			elm.style.display = "none";
		});
	}
	
	var bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
}

//$(document).ready(ready);
// for turbolinks
$(document).on('turbolinks:load', ready);

//document.addEventListener('turbolinks:load', ready());

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function tagClicked(button, tag) {
  toggleTag(tag);
  button.classList.toggle("active");
  //window.location.search = `tags=${encodeURIComponent(selectedTags.join(","))}`;
  if (selectedTags.length > 0) {
	Turbolinks.visit(`/?tags=${encodeURIComponent(selectedTags.join(","))}`);
  } else {
	Turbolinks.visit("/");
  }
  
  return false;
}

function toggleTag(tag) {
  const index = selectedTags.indexOf(tag);
  if (index < 0) {
	selectedTags.push(tag);
  } else {
	selectedTags.splice(index, 1);
  }
}

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
