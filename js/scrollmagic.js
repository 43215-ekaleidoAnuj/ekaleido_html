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
    .setClassToggle(".rays", "opacitY")

    .addTo(controller);
});

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".height-ufo",
    duration: 1500,
    triggerHook: 0.25,
  })
    .setClassToggle(".rays", "height_magic_ufo")

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

const flightPath = {
  curviness: 1.25,
  autoRoted: true,
  value: [
    { x: -500, y: 500 },
    { x: 1000, y: 1000 },
  ],
};
const tween_meteor = new TimelineLite();

tween_meteor.add(
  TweenLite.to("#meteoroid_img", 0.5, {
    bezier: flightPath,
    ease: Power1.easeInout
  })
);
var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
		triggerElement: ".fourth_section",
		duration: "1000",
	
	})
	.setTween(tween_meteor)
	.addIndicators()
	.addTo(controller)

