async function loadStaff() {
    try {
        const res = await fetch("staff_members.json")
        const staff = await res.json()

        const grid = document.getElementById("staff-grid")

        const html = staff.map(member => `
    <div class="staff-card">
        <div class="staff-avatar">
            <img src="images/pfps/${member.image}" alt="${member.name}" loading="lazy" decoding="async">
        </div>
        <h3>${member.name}</h3>
        <p class="role">${member.role}</p>
        <p class="bio">${member.bio}</p>
    </div>
`).join("")

        grid.innerHTML = html

    }
    catch (err) {
        console.error("Failed to load staff_members.json:", err)
    }
}

loadStaff()


document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section")
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        console.log("Observing section:", section.id)
        observer.observe(section)
    }
})


const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
}

const observer = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (entry.isIntersecting) {
            console.log("Section visible:", entry.target.id)
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
        }
    }
}, observerOptions)



// Scroll effects and navbar glow
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
        if (navbar) {
            navbar.classList.add("scrolled")
        }
    }
    else {
        if (navbar) {
            navbar.classList.remove("scrolled")
        }
    }
})

// Card hover effects
const cards = document.querySelectorAll(".info-card, .server-card, .staff-card")
for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    card.addEventListener("mouseenter", function () {
        this.classList.add("hovered")
    })

    card.addEventListener("mouseleave", function () {
        this.classList.remove("hovered")
    })

}
// Dynamic styles


// Join server button handlers
const joinButtons = document.querySelectorAll(".join-btn")
for (let i = 0; i < joinButtons.length; i++) {
    const button = joinButtons[i]
    button.addEventListener("click", function () {
        console.log("Join server button clicked for server:", this.textContent)
        alert("Server join functionality would be implemented here")
    })
}
// Countdown timer
const countdownElement = document.getElementById("countdown")

if (countdownElement) {
    console.log("Countdown element found - starting timer")
    function updateCountdown() {
        const targetDate = new Date(2026, 3, 27, 0, 0, 0).getTime()
        const now = new Date().getTime()
        const difference = targetDate - now

        const items = countdownElement.querySelectorAll(".countdown-item")

        if (difference > 0 && items.length === 5) {
            const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
            const days = Math.floor(difference % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24))
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(difference % (1000 * 60) / 1000)

            const values = [weeks, days, hours, minutes, seconds]
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                const value = item.querySelector(".countdown-value")
                if (value) {
                    value.textContent = values[i]
                }
            }
        }
        else if (items.length === 5) {
            console.log("Countdown reached - setting to LIVE NOW")
            const titleElement = document.querySelector(".countdown-title")
            if (titleElement) {
                titleElement.textContent = "Luminescent Launch - Out of beta. LIVE NOW!"
            }
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                const value = item.querySelector(".countdown-value")
                if (value) {
                    value.textContent = "0"
                }
            }
        }
    }

    updateCountdown()
    setInterval(updateCountdown, 1000)
}
else {
    console.warn("Countdown element not found")
}

// Page load fade in
window.addEventListener("load", function () {
    console.log("Page load complete - fading in body")
    document.body.classList.add("loaded")
})

console.log("%c✨ Welcome to Luminescent Network ✨", "color: #d946ef; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #a855f7;")
console.log("%cPowered by neon purple aesthetics and smooth animations", "color: #a855f7; font-size: 14px;")
