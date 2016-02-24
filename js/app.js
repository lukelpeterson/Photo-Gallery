// Add light box to Gallery

var $overlay = $('<div id="overlay" class="animsition"></div>');
var $image = $("<img class='animsition lightbox-open'>");
var $caption = $("<p class='animsition'></p>");
var $previous = $('<button class="lightbox-open" id="previous"><</button>');
var $next = $('<button class="lightbox-open" id="next">></button>');

$('img').addClass('animisition');

// Add image to overlay
$overlay.append($image);

// Add overlay
$("body").append($overlay);

// Add Caption
$overlay.append($caption);

// Add Next and Previous
$overlay.append($previous);
$overlay.append($next);

// container for image and navigation
$( ".lightbox-open" ).wrapAll( "<div class='gallery-container' />");

// Click event link to image
$(".photo-gallery a").click(function(event){
  event.preventDefault();
  // Display Image
  getCurrentImage(this);

  // Show the overlay
  $overlay.show();

    // Set Caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});



// Get Next Image
$("#next").click(function(event){
  getNextImage();
});

// Get Previous Image
$("#previous").click(function(event){
  getPrevImage();
});

function getCurrentImage (currentImage) {
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //Get child's alt attribute and set caption
    var captionText = $(currentImage).children("img").attr("alt");
    $caption.text(captionText);
}

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if(imageParent.length!==0){
    thisImage = $(imageParent).children("a");
    }
    getCurrentImage(thisImage);
}

function getPrevImage() {
    imageParent = $(thisImage).parent().prev();
    if(imageParent.length!==0){
      thisImage = $(imageParent).children("a");
    }
    getCurrentImage(thisImage);

}
// Close overlay when clicked
$overlay.click(function(event){
    //Hide overlay
    if(event.target.id == "overlay")
    $overlay.hide();
});

// Animation

$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
