const flightPath = {
    curviness:1.25,
    autoRoted:true,
    value:[{x:50,y:80},{x:90,y:180},{x:50,y:80},{x:90,y:180}]
 }
const tween = new TimelineLite();

tween.add(
    TweenLite.to("img_vector",1,{
         bezier:flightPath,
         ease:Power1.easeInout
    })
)

$(document).ready(function(){
    var controller = new ScrollMagic.Controller()
    var ourScene = new ScrollMagic.Scene({
         triggerElement:".third_sec",
         duration:1000,
         triggerHook: 0,
    })
    .setClassToggle("#img_vector","animate_vector_div")
    .addIndicators()
    .setPin(".third_sec")
    .addTo(controller)
})



