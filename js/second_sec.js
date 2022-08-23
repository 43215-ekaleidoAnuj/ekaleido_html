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
		.setPin(".second_sec")
		.addTo(controller);
});

const blackhole_tween = new TimelineLite();

blackhole_tween.add(
	TweenLite.from("#img_vector", 0.1, {
		css: {scale: 0.01, rotation: 360},
		ease: Quad.easeInOut,
	})
);

blackhole_tween.add(
	TweenLite.to("#img_vector", 0.1, {
		css: {scale: 1},
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
		.setTween(blackhole_tween)
		.setPin(".third_sec")
		.addTo(controller);
});
