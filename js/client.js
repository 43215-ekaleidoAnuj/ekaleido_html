const client_tween = new TimelineLite();
const client_path = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 0, y: 0},
		{x: -2000, y: 0},
		
	],
};

client_tween.add(
	TweenLite.to(".carousel_parachute", 1, {
		rotation: 0,
		bezier: client_path,
		ease: Power1.easeInOut,
	})
);

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: ".mid_plane",
	duration: "2000",
	triggerHook: 0,
})
	.setTween(client_tween)
	.setPin(".mid_plane")
	.addTo(controller);
