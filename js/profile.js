$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:3000,
        nav:true,
    });

    const headterms = ["Vyshnav","Web designer","Frontend developer","Backend developer"]
    var toggle = document.getElementById("toggle")
    var index = 0
    toggleHead = () => {
        var item = headterms[index]
        toggle.textContent = `${item}`
        index = (index + 1) % headterms.length
    }
    toggleHead()
    animationforward = () => {
        // toggle.style.transform = 'translateY(10px)'
        // toggle.style.transition = 'transform 1.5s ease'
    }
    animationforward()
    animationbackward = () => {
        
    }
    headterms.forEach(toggleHead)

    setInterval(toggleHead,3000)
})