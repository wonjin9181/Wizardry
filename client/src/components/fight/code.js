var numberCode

function Code(id) {
    let num = id
    
    if (num === 1) {

        randomNumber()
        console.log(numberCode)

        return "babadiboo"
    }
    else if (num === 2) {
        return "wonwonkalham"
    }
    else if (num === 3) {
        return "kalhamwonwonbabadiboo"
    }
    else if (num === 4) {
        return "liditanheigbabadiboowonwonkalham"
    }

}

function randomNumber(){
    var number = Math.floor(1 + Math.random() * 4)
    numberCode =+ number
}

export default Code