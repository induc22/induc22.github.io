const sliderPhotos = document.querySelector('.slider.photos');
const sliderText = document.querySelector('.slider.text');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    sliderPhotos.style.transform = 'translateX(' + (sectionIndex) * -16.666 + '%)';
    sliderText.style.transform = 'translateY(clamp(' + (sectionIndex) * -40 + 'px, ' + (sectionIndex) * -1.2 + 'em, ' + (sectionIndex) * -11.2 + 'px)';
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