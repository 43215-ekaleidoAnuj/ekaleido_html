const rocket_tween = new TimelineLite();
const rocket_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 300, y: -100},
		{x: 700, y: -680},
	],
};

rocket_tween.add(
	TweenLite.to(".rocket_img", 1, {
		rotation: 0,
		bezier: rocket_path,
		ease: Power1.easeInOut,
	})
);

const prog_tween = new TimelineLite();
const prog_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 1000, y: 0},
	],
};
prog_tween.add(
	TweenLite.to(".programmatic", 1, {
		rotation: 0,
		bezier: prog_path,
		ease: Power1.easeInOut,
	})
);

const buy_tween = new TimelineLite();
const buy_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: -750, y: 0},
	],
};
buy_tween.add(
	TweenLite.to(".buying", 1, {
		rotation: 0,
		bezier: buy_path,
		ease: Power1.easeInOut,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 1500,
		triggerHook: 0,
	})
		.setTween(rocket_tween)
		.setPin(".rocket")
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 1500,
		triggerHook: 0,
	})
		.setTween(prog_tween)
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 1500,
		triggerHook: 0,
	})
		.setTween(buy_tween)
		.addTo(controller);
});
