translateMode = "textMorse"

function translationModeChange(btn) {
    document.getElementById("morseText").classList.remove("translatorButtonSelected")
    document.getElementById("textMorse").classList.remove("translatorButtonSelected")

    btn.classList.add("translatorButtonSelected")
    translateMode = btn.id
}


function buttonClick(btn) {
    btn.classList.add("buttonClickAnimate")

    setTimeout(() => {
        btn.classList.remove("buttonClickAnimate")
    }, 350);
}


function translateButton() {
    if (translateMode == "textMorse") {
        translatesTextMorse()
    }
    else if (translateMode == "morseText") {
        translatesMorseText()
    }
}


const alphabetMorse = {
    'A': '&bull;&mdash;', 'B': '&mdash;&bull;&bull;&bull;', 'C': '&mdash;&bull;&mdash;&bull;', 'D': '&mdash;&bull;&bull;', 'E': '&bull;',
    'F': '&bull;&bull;&mdash;&bull;', 'G': '&mdash;&mdash;&bull;', 'H': '&bull;&bull;&bull;&bull;', 'I': '&bull;&bull;', 'J': '&bull;&mdash;&mdash;&mdash;',
    'K': '&mdash;&bull;&mdash;', 'L': '&bull;&mdash;&bull;&bull;', 'M': '&mdash;&mdash;', 'N': '&mdash;&bull;', 'O': '&mdash;&mdash;&mdash;',
    'P': '&bull;&mdash;&mdash;&bull;', 'Q': '&mdash;&mdash;&bull;&mdash;', 'R': '&bull;&mdash;&bull;', 'S': '&bull;&bull;&bull;', 'T': '&mdash;',
    'U': '&bull;&bull; &mdash;', 'V': '&bull;&bull;&bull;&mdash;', 'W': '&bull;&mdash;&mdash;', 'X': '&mdash;&bull;&bull;&bull;', 'Y': '&mdash;&bull;&mdash;&mdash;',
    'Z': '&mdash;&mdash;&bull;&bull;',
    '1': '&bull;&mdash;&mdash;&mdash;&mdash;', '2': '&bull;&bull;&mdash;&mdash;&mdash;', '3': '&bull;&bull;&bull;&mdash;&mdash;', '4': '&bull;&bull;&bull;&bull;&mdash;', '5': '&bull;&bull;&bull;&bull;&bull;',
    '6': '&mdash;&bull;&bull;&bull;&bull;', '7': '&mdash;&mdash;&bull;&bull;&bull;', '8': '&mdash;&mdash;&mdash;&bull;&bull;', '9': '&mdash;&mdash;&mdash;&mdash;&bull;', '0': '&mdash;&mdash;&mdash;&mdash;&mdash;',
    " ": "&nbsp;&nbsp;&nbsp;"
};

text = ""
morse = ""

function translatesTextMorse() {
    if(document.getElementById("inputTextBox").value.toUpperCase() != ""){
        text = document.getElementById("inputTextBox").value.toUpperCase()
        morseT = ""
        for (i in text) {
            morseT += `${alphabetMorse[text[i]]}` + "&nbsp;&nbsp;"
        }
    
        document.getElementById("outputText").innerHTML = ""
        document.getElementById("outputText").insertAdjacentHTML("beforeend", morseT)
        document.getElementById("translatedResult").classList.remove("d-none")
    }
}



function translatesMorseText() {
   
}