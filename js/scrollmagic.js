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

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".second_sec",
		duration: 1000,
		triggerHook: 0.25,
	})
		.setClassToggle(".ufo", "ufo_scrollM")
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".second_sec",
		duration: 1000,
		triggerHook: 0.25,
	})
		.setClassToggle(".rays", "height-ray")
		.addTo(controller);
});

$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".fifth_sec",
		duration: 1000,
		triggerHook: 0,
	})
		.setClassToggle("#air_lines", "planeMagic")
		.addTo(controller);
});

