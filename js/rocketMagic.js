



             

const rocket_tween = new TimelineLite();
const rocket_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 750, y: -600},
	],
};

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
		duration: 1000,
		triggerHook: 0,
	})
		.setTween(rocket_tween)
		.setPin(".rocket")
		.addTo(controller);
});

// ------------------------------------------------------ //

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

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 1000,
		triggerHook: 0.5,
	})
		.setTween(prog_tween)
		.addTo(controller);
});

// ----------------------------------------------------- //

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
		duration: 1000,
		triggerHook: 0.5,
	})
		.setTween(buy_tween)
		.addTo(controller);
});

// ----------------------------------------- //

const para_tween = new TimelineLite();
para_tween.add(
	TweenLite.from(".text_programatic", 1, {css: {scale: 0, opacity: 0}})
);
para_tween.add(
	TweenLite.to(".text_programatic", 1, {css: {scale: 1, opacity: 1}})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 1000,
		triggerHook: 0.2,
	})
		.setTween(para_tween)
		.addTo(controller);
});

// ----------------------------------------- //

const list_tween = new TimelineLite();
list_tween.add(TweenLite.from(".ul_rocket", 1, {css: {scale: 0, opacity: 0}}));
list_tween.add(TweenLite.to(".ul_rocket", 1, {css: {scale: 1, opacity: 1}}));

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".rocket",
		duration: 1000,
		triggerHook: 0,
	})
		.setTween(list_tween)
		.addTo(controller);
});

