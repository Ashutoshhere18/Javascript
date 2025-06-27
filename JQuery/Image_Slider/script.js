const next=document.getElementById("next");
const prev=document.getElementById("prev");
const slideshow=document.getElementById("slideshow");
const stop=document.getElementById("stop");
const slider=document.getElementById("slider");

let id;
let images=[
   
     "https://jooinn.com/images/3d-nature-2.jpg",
      "https://wallpapers.com/images/hd/dark-nature-2560-x-1600-background-dwolohvgfkc0axso.jpg",
      "https://www.hdwallpapers.in/download/beautiful_lake_trees_branches_sunset_nature_dark_night_sky_wallpaper_background_4k_hd_nature-HD.jpg",
      "https://c4.wallpaperflare.com/wallpaper/623/262/507/sunset-lake-night-blue-wallpaper-preview.jpg",
      "https://w0.peakpx.com/wallpaper/208/848/HD-wallpaper-beautiful-scenery-nature-pier-in-dark-background-dark.jpg",
]
let index=0;
function showImage(index){
    slider.src=images[index];
}

function nextImage(){
if(index<images.length-1){
 index++;
}else{
  index=0;
}
 slider.src=images[index];
}
function prevImage(){
if(index>0){
index--;
slider.src=images[index];
}
}
function StopSlideShow(){

    clearInterval(id);
}
function slideShow(){
 id=setInterval(()=>{
    nextImage();
},1000)
}



next.addEventListener('click',()=>{
nextImage();
})

prev.addEventListener('click',()=>{
prevImage();
})

slideshow.addEventListener('click',()=>{
  slideShow();  
})

stop.addEventListener('click',()=>{
    StopSlideShow();
})

showImage(0);