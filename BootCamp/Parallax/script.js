// Custom parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');

    parallax1.style.backgroundPositionY = -(window.scrollY * 0.5) + 'px';
    parallax2.style.backgroundPositionY = -(window.scrollY * 0.5) + 'px';
});
