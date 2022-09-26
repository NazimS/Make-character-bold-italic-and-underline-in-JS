const cumle = document.getElementById('cumle')

function bold() {
    let kod = cumle.innerHTML
    if( kod.includes("<b>") ) {
        kod = kod.replace("<b>","")
        kod = kod.replace("</b>","")
        cumle.innerHTML = kod
    } else {
        cumle.innerHTML = "<b>" + kod + "</b>"
    }
}
function italic() {
    let kod = cumle.innerHTML
    if( kod.includes("<i>") ) {
        kod = kod.replace("<i>","")
        kod = kod.replace("</i>","")
        cumle.innerHTML = kod
    } else {
        cumle.innerHTML = "<i>" + kod + "</i>"
    }
}
function underline() {
    let kod = cumle.innerHTML
    if( kod.includes("<u>") ) {
        kod = kod.replace("<u>","")
        kod = kod.replace("</u>","")
        cumle.innerHTML = kod
    } else {
        cumle.innerHTML = "<u>" + kod + "</u>"
    }
}