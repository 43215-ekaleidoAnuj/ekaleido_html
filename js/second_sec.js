const ufo_tween = new TimelineLite();
const ufo_path = {
	curviness: 0,
	autoRotate: true,
	values: [
		{x: 0, y: 50},
		{x: -500, y: 50},
		{x: 0, y: 50},
		{x: 500, y: 50},
		{x: 0, y: 50},
	],
};

ufo_tween.add(
	TweenLite.to(".ufo", 1, {
		rotation: 0,
		bezier: ufo_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".second_sec",
		duration: 2000,
		triggerHook: 0,
	})
		.setTween(ufo_tween)
		.addTo(controller);
});

// --------------------------------------------------------------- //

const about_tween = new TimelineLite();
const about_path = {
	curviness: 0,
	autoRotate: true,
	values: [
		{x: 0, y: -10},
		{x: 500, y: -10},
		{x: 0, y: -10},
		{x: 0, y: -20},
		{x: 0, y: -300},
	],
};

about_tween.add(
	TweenLite.to(".about_us", 1, {
		rotation: 0,
		scale: 0.5,
		bezier: about_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".second_sec",
		duration: 2000,
		triggerHook: 0,
	})
		.setTween(about_tween)
		.setPin(".second_sec")
		.addTo(controller);
});

// --------------------------------------------------------------- //

const blackhole_tween = new TimelineLite();
blackhole_tween.add(
	TweenLite.from("#img_vector", 0.1, {
		css: {scale: 0.01, rotation: 360, opacity: 1},
	})
);

blackhole_tween.add(
	TweenLite.to("#img_vector", 0.1, {
		css: {scale: 3, rotation: 360, opacity: 0.1},
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 2000,
		triggerHook: 0,
	})
		.setTween(blackhole_tween)
		.setPin(".third_sec")
		.addTo(controller);
});

// --------------------------------------------------------------- //
