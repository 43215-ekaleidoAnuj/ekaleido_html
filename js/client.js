const client_tween = new TimelineLite();
const client_path = {
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

client_tween.add(
	TweenLite.to(".client", 1, {
		rotation: 0,
		bezier: client_path,
		ease: Power1.easeInOut,
	})
);