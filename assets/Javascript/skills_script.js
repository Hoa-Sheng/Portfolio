var sliders = $(".sliders li").length;
var index = 0;
var size = 100/sliders;
var translated = 0;
console.log(sliders);

$(".prev").on("click",function(){
  if(index > 0){
    console.log(index);
    index--;
    translated += size;
   $(".sliders").css({
     'transform' : 'translateX('+translated+'%)',
     'transition' : ' transform 1s ease'
   });
    }
});
$(".next").on("click",function(){
  if(index < sliders-1){
    index++;
    console.log(index);
    translated -= size;
    console.log(translated);
    $(".sliders").css({
         'transform' : 'translateX('+translated+'%)',
         'transition' : ' transform 1s ease'
     });
    }
});