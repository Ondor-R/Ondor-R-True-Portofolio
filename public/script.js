let lastScrollTop = 0;
const header = document.getElementById("page-header");
const rotatingSpans = document.querySelectorAll('.content-header span');
const socialIcons = document.querySelectorAll('.icon-medsos');
const bookieImg = document.querySelector('.img-bookie');



//--------------------------------------------------------------ROTATION LOGIC FUNCTION//
function updateRotation() {
    const windowCenter = window.innerHeight / 2;

    rotatingSpans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const elementCenter = rect.top + (rect.height / 2);
        const distance = elementCenter - windowCenter;

        // THIS IS WHERE YOU CAN ADJUST ROTATION SPEED
        let rotation = (distance / windowCenter) * 5;

        span.style.transform = `rotate(${rotation * -1}deg)`;
    });
}
updateRotation();

//--------------------------------------------------------------SCROLL LISTENER//
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll < 0) currentScroll = 0;

    // HEADER SHOW/HIDE LOGIC
    if (currentScroll > lastScrollTop) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }
    lastScrollTop = currentScroll;

    updateRotation();
});

//--------------------------------------------------------------SOCIAL ICONS HOVER LOGIC//
socialIcons.forEach((icon) => {
    const originalSrc = icon.src; 
    const blueSrc = originalSrc.replace('.svg', '-blue.svg'); 

    icon.addEventListener('mouseover', () => {
        icon.src = blueSrc;
    });

    icon.addEventListener('mouseout', () => {
        icon.src = originalSrc;
    });
});

//--------------------------------------------------------------BOOKIE IMG AT FOOTER//
bookieImg.addEventListener('mouseover', () => {
    bookieImg.src = '../assets/pngs/bookie-1.png';
})

bookieImg.addEventListener('mouseout', () => {
    bookieImg.src = '../assets/pngs/bookie-0.png';
})

bookieImg.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});