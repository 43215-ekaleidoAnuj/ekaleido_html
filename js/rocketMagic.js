const rocket_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 300, y: -100},
		{x: 750, y: -480},
	],
};

const rocket_tween = new TimelineLite();
rocket_tween.add(
	TweenLite.to(".rocket_img", 1, {
		rotation: 0,
		bezier: rocket_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 2000,
		triggerHook: 0,
	})
		.setTween(rocket_tween)
		.setPin(".rocket")
		.addTo(controller);
});
