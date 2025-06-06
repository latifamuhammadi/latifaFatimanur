const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const rightHover = item.querySelector('.right-hover');
    const centerHover = item.querySelector('.center-hover');
    const details = item.querySelector('.details');
    const defaultImg = item.querySelector('.default-img');

    item.addEventListener('mousemove', (event) => {
        const { offsetX } = event;
        const width = item.offsetWidth;

        // Show right image
        if (offsetX > width * 0.66) {
            rightHover.style.opacity = 1;
            centerHover.style.opacity = 0;
            details.style.opacity = 0;
        } 
        // Show center image
        else if (offsetX > width * 0.33) {
            rightHover.style.opacity = 0;
            centerHover.style.opacity = 1;
            details.style.opacity = 0;
        } 
        // Show details
        else {
            rightHover.style.opacity = 0;
            centerHover.style.opacity = 0;
            details.style.opacity = 1;
        }
    });

    item.addEventListener('mouseleave', () => {
        // Reset all states
        rightHover.style.opacity = 0;
        centerHover.style.opacity = 0;
        details.style.opacity = 0;
        defaultImg.style.opacity = 1;
    });
});
