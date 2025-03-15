const images= ["images/download.jpg","images/images.jpg","images/omnya.jpeg"];
const texts= ["This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.","I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.","Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."]

let index =0;
let index_text=0;

function image_1(){
index= (index+1)% images.length;
document.getElementById("image_1").src = images[index];
}

function text(){
    index_text=(index_text+1)%texts.length;
    document.getElementById("text").textContent=texts[index_text];

}
setInterval(image_1,3000);
setInterval(text,3000);