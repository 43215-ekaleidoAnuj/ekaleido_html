






const tween_meteor = new TimelineLite();
const tween_social = new TimelineLite();
const tween_advert = new TimelineLite();

const meteorPath = {
	curviness: 1,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: -1000, y: 210},
	],
};
const socialPath = {
	curviness: 1,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 900, y: 0},
	],
};
const advertisePath = {
	curviness: 1,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: -800, y: 0},
	],
};

tween_meteor.add(
	TweenLite.to(".meteoroid_img", 1, {
		rotation: 0,
		bezier: meteorPath,
		ease: Power1.easeInOut,
	})
);
tween_social.add(
	TweenLite.to(".font_social", 1, {
		rotation: 0,
		bezier: socialPath,
		ease: Power1.easeInOut,
	})
);
tween_advert.add(
	TweenLite.to(".font_advertising", 1, {
		rotation: 0,
		bezier: advertisePath,
		ease: Power1.easeInOut,
	})
);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".div_meteoroid",
	duration: "800",
	triggerHook: 0,
})
	.setTween(tween_social)
	.addTo(controller);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".div_meteoroid",
	duration: "1000",
	triggerHook: 0,
})
	.setTween(tween_meteor)
	.setPin(".div_meteoroid")
	.addTo(controller);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".div_meteoroid",
	duration: "800",
	triggerHook: 0,
})
	.setTween(tween_advert)
	.addTo(controller);

  
   

