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
		.addIndicators()
		.setClassToggle("#img_vector", "scale")
		.setPin(".third_sec")
		.addTo(controller);
});
