const flightPath = {
	curviness: 1.25,
	autoRoted: true,
	value: [
		{x: 50, y: 80},
		{x: 90, y: 180},
		{x: 50, y: 80},
		{x: 90, y: 180},
	],
};
const tween = new TimelineLite();

tween.add(
	TweenLite.to("img_vector", 1, {
		bezier: flightPath,
		ease: Power1.easeInout,
	})
);

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".third_sec",
		duration: 1000,
		triggerHook: 0,
	})
		// .addIndicators()
        .setClassToggle("#img_vector", "scalE")
		.setPin(".third_sec")
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".scrollMagic_div1",
		duration: 250,
		triggerHook: 0.25,
	})
		.setClassToggle("#img_vector", "animate_vector_div_1")
		.addIndicators()
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".scrollMagic_div2",
		duration: 250,
		triggerHook: 0.25,
	})
		.setClassToggle("#img_vector", "animate_vector_div_2")
		.addIndicators()
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".scrollMagic_div3",
		duration: 250,
		triggerHook: 0.25,
	})
		.setClassToggle("#img_vector", "animate_vector_div_3")
		.addIndicators()
		.addTo(controller);
});


$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".scrollMagic_div4",
		duration: 250,
		triggerHook: 0.25,
	})
		.setClassToggle("#img_vector", "animate_vector_div_4")
		.addIndicators()
		.addTo(controller);
});





