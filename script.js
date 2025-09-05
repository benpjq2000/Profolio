// 图片点击放大
document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        if (img.style.transform === 'scale(1.5)') {
            img.style.transform = 'scale(1)';
        } else {
            img.style.transform = 'scale(1.5)';
        }
        img.style.transition = 'transform 0.3s ease';
    });
});