const tabsNav = document.querySelectorAll(".favorites__tabs-button")
const tabsContent = document.querySelectorAll(".favorites__tabs-items")
const underline = document.querySelector(".favorites__tabs-underline")

const slider = new Swiper(".slider", {
    navigation: {
        prevEl: '.slider__button-prev',
        nextEl: '.slider__button-next'
    },

    slidesPerView: 1,
    spaceBetween: 24,

    breakpoints: {
        620: {
            slidesPerView: 2
        },
        980: {
            slidesPerView: 3
        }
    }
})

tabsNav.forEach(function (item) {
    item.addEventListener("click", function () {
        if (!item.classList.contains("active")) {
            let tabId = item.getAttribute("data-tab")
            let width = item.getBoundingClientRect().width
            let height = item.getBoundingClientRect().height
            let left = item.getBoundingClientRect().left + window.scrollX
            let top = item.getBoundingClientRect().top + window.scrollY

            tabsNav.forEach(function (el) {
                el.classList.remove("active")
            })
            tabsContent.forEach(function (el) {
                el.classList.remove("active")
            })

            item.classList.add("active")
            document.querySelector(tabId).classList.add("active")

            underline.style.width = `${width}px`
            underline.style.height = `${height}px`
            underline.style.left = `${left}px`
            underline.style.top = `${top}px`
        }
    })
})

tabsNav[0].click()