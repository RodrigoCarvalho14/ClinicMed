const labelCod = document.getElementById("codigo")

function gcode() {
    const cod = Math.floor(Math.random() * 10000) + 1000
    return cod
}

function next() {
    const screen_1 = document.getElementById("s1")
    const screen_2 = document.getElementById("s2")
    screen_1.style.display = 'none'
    screen_2.style.display = 'flex'
    const codigoGerado = gcode()
    labelCod.innerHTML = `Clinic Med - Código gerado:${codigoGerado}`
    window.open('list.html', '_blank')

}
