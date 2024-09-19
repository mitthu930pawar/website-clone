var tl = gsap.timeline()

tl.from(".load h1,.load h2", {
    y:130,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2,
})
tl.to(".load", {
    opacity: 0,
    delay: 1.6,
    stagger: -0.2
})

tl.to("#loader", {
    top: "-100%",
    duration: 1,
})

var timer = document.querySelector("#timer h4")
var grow = 0;
var int = setInterval(function () {
    if (grow < 100) {
        grow++
        timer.innerHTML = grow
       
    }
}, 30)

setTimeout(function () {
    clearInterval(int)

},8000)

tl.from(".text h1", {
    y: 130,
    duration: 0.7,
    delay: 0.1,
    stagger: 0.2,
})
tl.from("#nav", {
    opacity: 0,
})

Shery.mouseFollower()


function page2animation() {
    var videoc = document.querySelector("#video-containor")
    videoc.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0
        })
    })

    videoc.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1
        })
        gsap.to("#play-btn", {
            top: "3%",
            left: "80%",

        })

    })

    var videoimage = document.querySelector("#video-containor img")
    var videoVideo = document.querySelector("#video-containor video")
    var flag = 0;
    videoc.addEventListener("click", function () {
        if (flag == 0) {
            gsap.to(videoVideo, {
                opacity: 1
            })
            gsap.to(videoimage, {
                opacity: 0
            })
            gsap.to("#play-btn", {
                scale: 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            videoVideo.play()
            flag = 1
        }
        else {
            gsap.to(videoVideo, {
                opacity: 0

            })
            gsap.to(videoimage, {
                opacity: 1
            })
            gsap.to("#play-btn", {
                scale: 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'
            videoVideo.pause()
            flag = 0
        }

    })

    videoc.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 555,
            top: dets.y - 200,
        })
    })

}
page2animation();

function SheryAnimation() {

    Shery.imageEffect(".image", {
        style: 6,
        debug: true,
        gooey: true,
        config:{"noiseDetail":{"value":10.69,"range":[0,100]},"distortionAmount":{"value":2.52,"range":[0,10]},"scale":{"value":43.51,"range":[0,100]},"speed":{"value":0.47,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.92061490159858},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.32,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.34,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
            }    )}
SheryAnimation()
 
var containor4= document.querySelector("#circle-containor4")

containor4.addEventListener("mouseenter",function(){
    gsap.to("#circle-containor4",{
       scale:0.5,
})
containor4.addEventListener("mouseleave",function(){
    gsap.to("#circle-containor4",{
       scale:1,
})

})
})

function linkscroll(){
    gsap.to(" #page5 .link1 h2",{
        x:-800,
   scrollTrigger: {
    trigger:"#page5",
    scroller:"body",
    start:"top -50%",
    end:"top 150%",
    scrub:3,
    markers:true,
   } 
    })
    gsap.to(" #page5 .link2 h2",{
        x:-800,
   scrollTrigger:{
    trigger:"#page5",
    scroller:"body",
    start:"top -40%",
    end:"top 200%",
    scrub:3,
    markers:true,
   } 
}
    )

}
linkscroll();



var btn = document.querySelector("#page1 #btn")
flag=0;
 btn.addEventListener("click",function(){
    if(flag==0){
    document.documentElement.style.setProperty("--color1","#000");
    document.documentElement.style.setProperty("--color2","#fff");
   flag=1;
    }
    else
    {
        document.documentElement.style.setProperty("--color2","#000");
        document.documentElement.style.setProperty("--color1","#fff");
        flag=0;
    }
 })

   var backflage= document.querySelector("#content")
 backflage.addEventListener ("mousemove", function(dets){
   gsap.to("#backflag img",{
    left:dets.x-300,
    top:dets.y-100,
   })
    })


var textchange= document.querySelector("#textweb")
textchange.addEventListener("mouseenter",function(){
    gsap.to("#textweb",{
        
    } )
    
      
    })





