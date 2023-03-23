// const txts=document.querySelector(".animate-text").children,
//         txtsLen=txts.length;
//     let index=0;
//     const textInTimer=3000,
//         textOutTimer=2800;

//     function animateText() {
//     for(let i=0; i<txtsLen; i++){
//         txts[i].classList.remove("text-in","text-out");  
//     }
//     txts[index].classList.add("text-in");

//     setTimeout(function(){
//         txts[index].classList.add("text-out");              
//     },textOutTimer)

//     setTimeout(function(){

//         if(index == txtsLen-1){
//             index=0;
//         }
//         else{
//             index++;
//             }
//         animateText();
//     },textInTimer); 
//     }
    
//     window.onload=animateText;

const sliderPhotos = document.querySelector('.slider.photos');
const sliderText = document.querySelector('.slider.text');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    sliderPhotos.style.transform = 'translateX(' + (sectionIndex) * -16.666 + '%)';
    sliderText.style.transform = 'translateY(' + (sectionIndex) * -16.666 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 5;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 5) ? sectionIndex + 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});