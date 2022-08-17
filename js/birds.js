const bird_tween = new TimelineLite();
const bird_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: -0, y: 0},
		{x: -100, y: 90},
		{x: -200, y: 100},
		{x: -300, y: 90},
		{x: -900, y: 100},
		{x: -1000, y: 90},
		{x: -1500, y: 100},
		{x: -2000, y: 90},
	],
};

bird_tween.add(
	TweenLite.to(".bird", 1, {
		rotation: 0,
		bezier: bird_path,
		ease: Power1.easeInOut,
	})
);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".building",
	duration: "2000",
	triggerHook: 0,
})
	.setTween(bird_tween)
	.setPin(".building")
	.addTo(controller);

//
const bird2_tween = new TimelineLite();
const bird2_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: -0, y: 200},
		{x: -100, y: 200},
		{x: -200, y: 200},
		{x: -300, y: 200},
		{x: -900, y: 200},
		{x: -1000, y: 200},
		{x: -1500, y: 200},
		{x: -2500, y: 200},
	],
};

bird2_tween.add(
	TweenLite.to(".bird2", 1, {
		rotation: 0,
		bezier: bird2_path,
		ease: Power1.easeInOut,
	})
);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".building",
	duration: "3000",
	triggerHook: 0,
})
	.setTween(bird2_tween)
	.addTo(controller);
