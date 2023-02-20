const fade = document.querySelectorAll(".fade")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    root: document,
    rootMargin: '0% 0% 0% 0%',
})

fade.forEach(fade => { observer.observe(fade) })