const terms = document.querySelector('.terms')
const btn = document.querySelector('.btn')
const watch = document.querySelector('.watch')

function obCallback(payload) {
    if(payload[0].intersectionRatio === 1) {
        btn.disabled = false
        // ob.unobserve(terms.lastElementChild)
    } else {
        btn.disabled = true
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
})

ob.observe(terms.lastElementChild)
