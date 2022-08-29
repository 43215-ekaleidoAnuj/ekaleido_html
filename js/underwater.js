const tenticles_tween = new TimelineLite();
const tenticles_path = {
	curviness: 0,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 0, y: -200},
	],
};

tenticles_tween.add(
	TweenLite.to(".tenticles1", 1, {
		rotation: 0,
		bezier: tenticles_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".six",
		duration: 1300,
		triggerHook: 0,
	})
		.setTween(tenticles_tween)
		.addTo(controller);
});

// ------------------------------------------------------- //

const tenticles2_tween = new TimelineLite();
const tenticles2_path = {
	curviness: 0,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 0, y: -200},
	],
};

tenticles2_tween.add(
	TweenLite.to(".tenticles2", 1, {
		rotation: 0,
		bezier: tenticles2_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".six",
		duration: 2500,
		triggerHook: 0,
	})
		.setTween(tenticles2_tween)
		.setPin(".six")
		.addTo(controller);
});
