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
		.setClassToggle("#img_vector", "scale")
		.setPin(".third_sec")
		.addTo(controller);
});


$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".second_sec",
    duration: 1500,
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
    triggerElement: ".div_meteoroid",
    duration: 1500,
    triggerHook: 0,
  })
    .setClassToggle(".fontSOCIAL", "left_social")
    .addTo(controller);
});


$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
	  triggerElement: ".div_meteoroid",
	  duration: 1500,
	  triggerHook: 0,
	})
	  .setClassToggle(".Advertising", "right_Advertising")
	  .addTo(controller);
  });

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".fifth_sec",
    duration: 1000,
    triggerHook: 0,
  })
    .setClassToggle("#air_lines", "plane_lift")
	.addTo(controller);
});



$(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
	  triggerElement: ".fifth_sec",
	  duration: 1000,
	  triggerHook: 0,
	})
	  .setClassToggle(".plane_pro", "pro_text")
	  .addTo(controller);
  });


  $(document).ready(function () {
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
	  triggerElement: ".fifth_sec",
	  duration: 1000,
	  triggerHook: 0,
	})
	  .setClassToggle(".plane_buy", "buy_text")
	  .addTo(controller);
  });
  

  


// $(document).ready(function () {
// 	var controller = new ScrollMagic.Controller();
// 	var ourScene = new ScrollMagic.Scene({
// 	  triggerElement: ".div_meteoroid",
// 	  duration: 1500,
// 	  triggerHook: 0,
// 	})
// 	  .setClassToggle("#meteoroid_img", "meteoroid-roid")
// 	  .addTo(controller);
//   });

const flightPath = {
  curviness: 4,
  autoRoted: false,
  value: [
    { x: 500, y: 500 },
  ],
};

const tween_meteor = new TimelineLite();
tween_meteor.add(
  TweenLite.to(".meteoroid_img", 0.5, {
    bezier: flightPath,
    ease: Power2.easeInout
  })
);

var meteor_controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
		triggerElement: ".div_meteoroid",
		duration: "500",
		triggerHook: 0,
	})
	.setTween(tween_meteor)
	
	
	.addTo(meteor_controller)

