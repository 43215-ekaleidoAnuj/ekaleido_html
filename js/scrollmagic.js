const flightPath = {
    curviness:1.25,
    autoRoted:true,
    value:[{x:50,y:80},{x:90,y:180},{x:50,y:80},{x:90,y:180}]
 }
const tween = new TimelineLite();

tween.add(
    TweenLite.to("img-vector",1,{
         bezier:flightPath,
         ease:Power1.easeInout
    })
)

$(document).ready(function(){
    var controller = new ScrollMagic.Controller()
    var ourScene = new ScrollMagic.Scene({
         triggerElement:"#vector_div",
         duration:1000,
         triggerHook: 0.5,
    })
    .setClassToggle("#img-vector","fade-in")
    .addIndicators()
    .setPin("#vector_div")
    .addTo(controller)
})



