const blackhole_tween = new TimelineLite();
blackhole_tween.add(
	TweenLite.from("#img_vector", 0.1, {
		css: {scale: 0.01, rotation: 360, opacity: 1},
	})
);

blackhole_tween.add(
	TweenLite.to("#img_vector", 0.1, {
		css: {scale: 3, rotation: 360, opacity: 0},
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 1000,
		triggerHook: 0,
	})
		.setTween(blackhole_tween)
		.setPin(".third_sec")
		.addTo(controller);
});

// --------------------------------------------------------------- //

const text_tween = new TimelineLite();
text_tween.add(
	TweenLite.from("#text_1", 0.1, {
		css: {scale: 0, opacity: 1},
	})
);

text_tween.add(
	TweenLite.to("#text_1", 0.1, {
		css: {scale: 1, opacity: 1},
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 5000,
		triggerHook: 0,
	})
		.setTween(text_tween)
		.addTo(controller);
});

// -------------------------------------------------------------- //

const text2_tween = new TimelineLite();
text2_tween.add(
	TweenLite.from("#text_2", 0.1, {
		css: {scale: 0, opacity: 1},
	})
);

text2_tween.add(
	TweenLite.to("#text_2", 0.1, {
		css: {scale: 3, opacity: 0},
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 500,
		triggerHook: 0.25,
	})
		.setTween(text2_tween)
		.addTo(controller);
});

// -------------------------------------------------------------- //

const text3_tween = new TimelineLite();
text3_tween.add(
	TweenLite.from("#text_3", 0.1, {
		css: {scale: 0, opacity: 1},
	})
);

text3_tween.add(
	TweenLite.to("#text_3", 0.1, {
		css: {scale: 3, opacity: 0},
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 500,
		triggerHook: 0.5,
	})
		.setTween(text3_tween)
		.addTo(controller);
});

// -------------------------------------------------------------- //

const text4_tween = new TimelineLite();
text4_tween.add(
	TweenLite.from("#text_4", 0.1, {
		css: {scale: 0, opacity: 1},
	})
);

text4_tween.add(
	TweenLite.to("#text_4", 0.1, {
		css: {scale: 3, opacity: 0},
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 500,
		triggerHook: 0.75,
	})
		.setTween(text4_tween)
		.addTo(controller);
});
