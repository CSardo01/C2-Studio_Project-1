const fade = document.querySelectorAll(".fade")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
})

fade.forEach(fade => { observer.observe(fade) })