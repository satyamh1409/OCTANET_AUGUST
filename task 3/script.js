const section6 = document.querySelector('.section-6');

const section6Left1 = document.querySelector('.section-6-left-1');
const section6Left2 = document.querySelector('.section-6-left-2');
const section6Left3 = document.querySelector('.section-6-left-3');
const section6Left4 = document.querySelector('.section-6-left-4');

const section6RightImg = document.querySelector('.section-6-right-img');

const section6RightImage1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const section6RightImage2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const section6RightImage3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const section6RightImage4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";

//add scroll event listner

window.addEventListener('scroll' , () => {
    const scrollPosition = window.scrollY;
    const section6OffsetTop = section6.offsetTop;
    const section6Height = section6.clientHeight;

    if((scrollPosition > section6OffsetTop) && (scrollPosition < section6Height + section6OffsetTop)){

        if(scrollPosition > section6OffsetTop && scrollPosition < section6OffsetTop +300){
            section6Left1.style.opacity = 1;
            section6Left1.style.transition = "opacity 1s ease-in-out";
        } else if (scrollPosition > section6OffsetTop + innerHeight && scrollPosition < section6OffsetTop + innerHeight + 300){
            section6Left2.style.opacity = 1;
            section6Left2.style.transition = "opacity 1s ease-in-out";
        } else if (scrollPosition > section6OffsetTop + innerHeight*2 && scrollPosition < section6OffsetTop + innerHeight*2 + 300){
            section6Left3.style.opacity = 1;
            section6Left3.style.transition = "opacity 1s ease-in-out";
        } else if (scrollPosition > section6OffsetTop + innerHeight*3 && scrollPosition < section6OffsetTop + innerHeight*3 + 300){
            section6Left4.style.opacity = 1;
            section6Left4.style.transition = "opacity 1s ease-in-out";
        }else{
            section6Left1.style.opacity = 0;
            section6Left2.style.opacity = 0;
            section6Left3.style.opacity = 0;
            section6Left4.style.opacity = 0;
        }

        if(scrollPosition > section6OffsetTop && scrollPosition < section6OffsetTop + innerHeight){
            section6RightImg.src = section6RightImage1;
            section6RightImg.style.transition = "opacity 1s ease-in-out";
        } else if(scrollPosition > section6OffsetTop + innerHeight && scrollPosition < section6OffsetTop + innerHeight*2){
            section6RightImg.src = section6RightImage2;
            section6RightImg.style.transition = "opacity 1s ease-in-out";
        } else if(scrollPosition > section6OffsetTop + innerHeight*2 && scrollPosition < section6OffsetTop + innerHeight*3){
            section6RightImg.src = section6RightImage3;
            section6RightImg.style.transition = "opacity 1s ease-in-out";
        } else if(scrollPosition > section6OffsetTop + innerHeight*3 && scrollPosition < section6OffsetTop + innerHeight*4){ 
            section6RightImg.src = section6RightImage4;
            section6RightImg.style.transition = "opacity 1s ease-in-out";
        } else{
            section6RightImg.src = section6RightImage1;
        }
    }
})