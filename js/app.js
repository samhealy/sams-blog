$(document).ready(function() {

	console.log("Collapsing home page into sidebar");
	var navigationFullscreen = true;

// Animate fullscreen sidebar to collapse
	animateSidebar = function(){
		if (navigationFullscreen) {
			$(".interactive-sidebar").animate({
				left: "+=80%"
			}, 1000);
			navigationFullscreen = false;
		};
	};

	$("#index-sidebar").click(function() {
		if (!navigationFullscreen){
			$(".interactive-sidebar").animate({
				left: "0%"
			}, 1000);
			navigationFullscreen = true;
			$("#portfolio-container, #about-container, #blog-container").css("display", "none");
		};
	});

	$("#portfolio-sidebar").click(function() {
		$("#portfolio-container").css("display", "block");
		$("#about-container, #blog-container").css("display", "none");
		animateSidebar();
	});

	$("#about-sidebar").click(function() {
		$("#about-container").css("display", "block");
		$("#portfolio-container, #blog-container").css("display", "none");
		animateSidebar();
	});

	$("#blog-sidebar").click(function() {
		$("#blog-container").css("display", "block");
		$("#portfolio-container, #about-container").css("display", "none");
		animateSidebar();
	});

// Show teaser on mouseover if nav fullscreen, else animate sidebar to slide
	$('#index-sidebar').mouseenter(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "0%"}, 1000);
		}
	});

	$('#index-sidebar').mouseleave(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "+80%"}, 2000);
		};
	});


	$('#portfolio-sidebar').mouseenter(function(){
		if (!navigationFullscreen) {
			$(this).animate({left: "0%"}, 1000);
		};
	});

	$('#portfolio-sidebar').mouseleave(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "+80%"}, 2000);
		};
	});

	$("#portfolio-sidebar").mouseenter(function() {
		if (navigationFullscreen) {
			$("#portfolio-container").css("display", "block");
		};
	});

	$("#portfolio-sidebar").mouseleave(function() {
		if (navigationFullscreen) {
			$("#portfolio-container").css("display", "none");
		};
	});


	$('#about-sidebar').mouseenter(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "0%"}, 1000);
		};
	});

	$('#about-sidebar').mouseleave(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "+80%"}, 2000);
		};
	});

	$("#about-sidebar").mouseenter(function() {
		if (navigationFullscreen) {
			$("#about-container").css("display", "block");
		};
	});

	$("#about-sidebar").mouseleave(function() {
		if (navigationFullscreen) {
			$("#about-container").css("display", "none");
		};
	});


	$('#blog-sidebar').mouseenter(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "0%"}, 1000);
		};
	});

	$('#blog-sidebar').mouseleave(function(){
		if (!navigationFullscreen){
			$(this).animate({left: "+80%"}, 2000);
		};
	});

	$("#blog-sidebar").mouseenter(function() {
		if (navigationFullscreen) {
			$("#blog-container").css("display", "block");
		};
	});

	$("#blog-sidebar").mouseleave(function() {
		if (navigationFullscreen) {
			$("#blog-container").css("display", "none");
		};
	});

});