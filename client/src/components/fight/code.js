var numberCode

function Code(id) {
    let num = id

    if (num === 1) {

        randomNumber()

        console.log(numberCode)

        return "lidi"
    }
    else if (num === 2) {
        return "wontan"
    }
    else if (num === 3) {
        return "haigowon"
    }
    else if (num === 4) {
        return "lidihaigotan"
    }

}

function randomNumber() {
    var number = Math.floor(1 + Math.random() * 4)
    numberCode = + number
}

export default Code