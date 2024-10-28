document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        const contactInfo = photo.querySelector('.contact-info');
        contactInfo.style.opacity = contactInfo.style.opacity === '1' ? '0' : '1';
    });
});
