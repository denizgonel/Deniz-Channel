
window.addEventListener('scroll', function() {
    var page1 = document.getElementById('page1');
    var nextPage = document.getElementById('nextPage');
    
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    
    // If scrolled to the bottom of page 1
    if (scrollTop + windowHeight >= documentHeight) {
        nextPage.classList.remove('hidden');
    }
});