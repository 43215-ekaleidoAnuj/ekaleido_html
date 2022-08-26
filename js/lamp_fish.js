const fish_tween = new TimelineLite();
const fish_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: 100, y: 20},
		{x: 200, y: 40},
		{x: 300, y: 20},
		{x: 500, y: 0},
		{x: 650, y: 20},
		{x: 700, y: 40},
		{x: 900, y: 20},
		{x: 1000, y: 0},
		{x: 1200, y: 20},
	],
};

fish_tween.add(
	TweenLite.to(".lamp_fish", 1, {
		rotation: 0,
		bezier: fish_path,
		ease: Power1.easeInOut,
	})
);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".seven",
	duration: "1500",
	triggerHook: 0,
})
	.setPin(".seven")
	.addIndicators()
	.setTween(fish_tween)
	.addTo(controller);
