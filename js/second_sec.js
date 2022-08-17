const ufo_tween = new TimelineLite();
const ufo_path = {
	curviness: 0,
	autoRotate: true,
	values: [
		{x: 0, y: 100},
		{x: -500, y: 100},
		{x: 0, y: 100},
		{x: 500, y: 100},
		{x: 0, y: 100},
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
		.setPin(".second_sec")
		.addTo(controller);
});

const tween = new TimelineLite();
tween.add(
	TweenLite.to("#img_vector", 0.1, {
		rotation: 360,
		ease: Linear.easyNone,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 2000,
		triggerHook: 0,
	})
		.setTween(tween)
		.setPin(".third_sec")
		.addTo(controller);
});
