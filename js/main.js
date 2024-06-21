const newName = document.querySelector("#nazevNew")
const newInfo = document.querySelector("#obsahNew")
const confirmButton = document.querySelector(".newNtBtn")
const container = document.querySelector('.actualNotes')
const unfilledWarn = document.querySelector('.nevyplneno')

let name = '';
let info = '';
var numberOfThings = 0

function fullnessCheck() {
    info = newInfo.value;
    name = newName.value;

    if (name != '') {
        createNewElement()
        unfilledWarn.setAttribute('style', '')
    } else {
        unfilledWarn.setAttribute('style', 'display: block')
    }
}

function createNewElement() {
    numberOfThings = numberOfThings + 1

    const ukolElement = document.createElement('div')
    ukolElement.classList = `vytvorenyUkol`
    container.appendChild(ukolElement)

    const textPole = document.createElement('div')
    textPole.classList = `textPole`

    ukolElement.appendChild(textPole)

    const ukolJmeno = document.createElement('div')

    ukolJmeno.innerText = name
    ukolJmeno.classList = `nazevUkolu`
    textPole.appendChild(ukolJmeno)

    if (info != '') {
        const ukolInfo = document.createElement('div')
        ukolInfo.innerText = info
        ukolInfo.classList = `infoUkolu`
        textPole.appendChild(ukolInfo)
    }


    const checkBox = document.createElement('div')
    const checkBoxBtn = document.createElement('button')

    checkBox.classList = `checkBox`

    ukolElement.appendChild(checkBox)
    checkBox.appendChild(checkBoxBtn)

    checkBoxBtn.classList = `unclicked checkBoxBtn a${numberOfThings}`
    checkBoxBtn.innerText = `✔`

    EventListenerAdder('a' + numberOfThings)
}

function EventListenerAdder(id) {
    const buttonCheck = document.querySelector(`.${id}`)
    buttonCheck.addEventListener('click', () => {finishedWork(id)})
}

function finishedWork(id) {
    const checkBoxBtn = document.querySelector(`.${id}`)

    if (checkBoxBtn.classList == `unclicked checkBoxBtn ${id}`) {
        checkBoxBtn.classList = `checkBoxBtn ${id}`
    } else {
        checkBoxBtn.classList = `unclicked checkBoxBtn ${id}`
    }
}

confirmButton.addEventListener('click', fullnessCheck)