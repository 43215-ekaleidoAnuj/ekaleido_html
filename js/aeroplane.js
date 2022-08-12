// Aeroplane section
const plane_tween = new TimelineLite();
const para_plane_tween = new TimelineLite();
const plane_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 3000, y: -1500},
	],
};

const para_plane_path = {
	curviness: 0,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 0, y: -500},
	],
};

plane_tween.add(
	TweenLite.to(".aeroplane", 1, {
		rotation: 0,
		bezier: plane_path,
		ease: Power1.easeInOut,
	})
);

para_plane_tween.add(
	TweenLite.to(".para_plane", 1, {
		rotation: 0,
		bezier: para_plane_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".fifth_sec",
		duration: 2000,
		triggerHook: 1,
	})
		.setTween(plane_tween)
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".fifth_sec",
		duration: 2000,
		triggerHook: 0,
	})
		.setPin(".top_plane")
		.setTween(para_plane_tween)
		.addIndicators()
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".fifth_sec",
		duration: 1000,
		triggerHook: 0.5,
	})
		.setClassToggle(".plane_pro", "pro_text")
		.addIndicators()
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".fifth_sec",
		duration: 1000,
		triggerHook: 0.5,
	})
		.setClassToggle(".plane_buy", "buy_text")
		.addTo(controller);
});
