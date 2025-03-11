const links = document.querySelectorAll('aside .link')
const sections = document.querySelectorAll('#wrap>section')
let pageNum = 0
let totalNum = sections.length

init(pageNum)

function init(i) {

    links.forEach((link) => {
        link.classList.remove('active')
    })
    sections.forEach((link) => {
        link.classList.remove('currnt')
    })


    links[i].classList.add('active')
    sections[i].classList.add('current')
}

links.forEach(function (link, index) {

    link.addEventListener('click', function () {

        init(index)
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#s${index}`
            }
        })
    })
})