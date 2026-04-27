fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data
        const menuToggleButton = document.querySelector(".hamburger")
        const navigationMenu = document.querySelector(".nav-menu")

        if (!menuToggleButton || !navigationMenu) {
            return
        }

        menuToggleButton.addEventListener("click", function (event) {
            event.preventDefault()
            event.stopPropagation()
            menuToggleButton.classList.toggle("active")
            navigationMenu.classList.toggle("active")
        })

        const navLinks = document.querySelectorAll(".nav-link")
        for (let i = 0; i < navLinks.length; i++) {
            const link = navLinks[i]
            link.addEventListener("click", function () {
                menuToggleButton.classList.remove("active")
                navigationMenu.classList.remove("active")
            })
        }

        document.addEventListener("click", function (e) {
            if (!e.target.closest(".nav-container")) {
                menuToggleButton.classList.remove("active")
                navigationMenu.classList.remove("active")
            }
        })
    })