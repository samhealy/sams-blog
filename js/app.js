$(document).ready(function() {

	console.log("Collapsing home page into sidebar");
	var navigationFullscreen = true;

// Animate fullscreen sidebar to collapse
	animateSidebarRight = function(){
		if (navigationFullscreen) {
			$(".interactive-sidebar").animate({
				left: "+=80%"
			}, 1000);
			navigationFullscreen = false;
		};
	};

// While fullscreen, hides pages that aren't needed based on sidebar option clicked and animates sidebar to collapse
	$('.main-wrapper').children().click(function(){
		if (this.id === "index-sidebar" && !navigationFullscreen){
			$(".interactive-sidebar").finish().animate({
				left: "0%"
			}, 1000, function() {$(".page-container").css("display", "none");});
			navigationFullscreen = true;
			$("#index-sidebar").css("cursor", "default");
		}
		else if (this.id === 'portfolio-sidebar' || this.id === 'about-sidebar' || this.id === 'blog-sidebar') {
			$(".page-container").css("display", "none");
			if (this.id === 'portfolio-sidebar') {
				$("#portfolio-container").css("display", "block");
			
			}
			else if (this.id === "about-sidebar") {
				$("#about-container").css("display", "block");
			}
			else if (this.id === "blog-sidebar") {
				$("#blog-container").css("display", "block");
			}
			animateSidebarRight();
			$("#index-sidebar").css("cursor", "pointer");
		}
	});

// Show teaser on mouseover if nav fullscreen, else animate sidebar to slide
	$('.interactive-sidebar').mouseenter(function() {
		if (this.id === "index-sidebar" && !navigationFullscreen){
			$(this).animate({left: "0%"}, 1000);
			$("#portfolio-container", "#about-container", "#blog-container").css("display", "none");
		}	
		else if (this.id === "portfolio-sidebar" && navigationFullscreen){
			$("#portfolio-container").fadeIn("fast").css("display", "block");
		}
		else if (this.id === "about-sidebar" && navigationFullscreen){
			$("#about-container").fadeIn("fast").css("display", "block");
		}
		else if (this.id === "blog-sidebar" && navigationFullscreen){
			$("#blog-container").fadeIn("fast").css("display", "block");
		}
		else if (!navigationFullscreen){
			$(this).animate({left: "0%"}, 1000);
		};
	});

	$('.interactive-sidebar').mouseleave(function() {
		if (this.id === "index-sidebar" && !navigationFullscreen){
			$(this).animate({left: "+80%"}, 2000);
		}
		else if (this.id === "portfolio-sidebar" && navigationFullscreen){
			$("#portfolio-container").fadeIn("fast").css("display", "none");
		}
		else if (this.id === "about-sidebar" && navigationFullscreen){
			$("#about-container").fadeIn("fast").css("display", "none");
		}
		else if (this.id === "blog-sidebar" && navigationFullscreen){
			$("#blog-container").fadeIn("fast").css("display", "none");
		}
		else if (!navigationFullscreen) {
			$(this).animate({left: "+80%"}, 2000);
		};
	});
});