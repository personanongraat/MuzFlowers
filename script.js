setInterval(() => {

    const next = (current + 1) % slides.length;

    slides[next].classList.add("active");

    setTimeout(() => {
        slides[current].classList.remove("active");
        current = next;
    }, 800);

},3000);
