Shery.imageEffect("#back",{style:5, config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.148190111735243},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true});


var h1s=document.querySelectorAll("h1");
var index=0;
document.querySelector("#main").addEventListener("click",function(){
    gsap.to("h1",{
        top:"-=100%",
        ease:Expo.easeInOut,
        duration:1,

    });
index++;
if(index==5){
    gsap.to("h1",{
        top:"+=400%",
        ease:Expo.easeInOut,
        duration:1,

    });
    index=0;
}
    

});