$(document).ready(function(){
    var controller = new ScrollMagic.Controller()
    var ourScene = new ScrollMagic.Scene({
         triggerElement:"#vector_div"
    })
    .setClassToggle("#vector_div","fade-in")
    .addTo(controller)
})



