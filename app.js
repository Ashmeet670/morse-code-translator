translateMode = "textMorse"

const previousTextInputValue = {
    "morseText": "",
    "textMorse": ""
}

const inputText = {
    "morseText": 'Type morse code here, use "." key for a dot and "-" key for a dash, (2 spaces) for space between words and (1 space) for space between alphabets',
    "textMorse": 'Type text here, use only alphabets (a-z) and numbers (0-9)'
}

function translationModeChange(btn) {


    document.getElementById("morseText").classList.remove("translatorButtonSelected")
    document.getElementById("textMorse").classList.remove("translatorButtonSelected")

    btn.classList.add("translatorButtonSelected")

    previousTextInputValue[translateMode] = document.getElementById("inputTextBox").value
    translateMode = btn.id
    document.getElementById("inputTextBox").placeholder = inputText[translateMode]
    document.getElementById("inputTextBox").value = previousTextInputValue[translateMode]
    document.getElementById("outputText").innerHTML = ""

}


function buttonClick(btn) {
    btn.classList.add("buttonClickAnimate")

    setTimeout(() => {
        btn.classList.remove("buttonClickAnimate")
    }, 350);
}


function translateButton() {
    if (translateMode == "textMorse") {
        console.log("TexMor")
        translatesTextMorse()
    }
    else if (translateMode == "morseText") {
        console.log("morT")
        translatesMorseText()
    }
}


const alphabetMorse = {
    'A': '&bull;&mdash;', 'B': '&mdash;&bull;&bull;&bull;', 'C': '&mdash;&bull;&mdash;&bull;', 'D': '&mdash;&bull;&bull;', 'E': '&bull;',
    'F': '&bull;&bull;&mdash;&bull;', 'G': '&mdash;&mdash;&bull;', 'H': '&bull;&bull;&bull;&bull;', 'I': '&bull;&bull;', 'J': '&bull;&mdash;&mdash;&mdash;',
    'K': '&mdash;&bull;&mdash;', 'L': '&bull;&mdash;&bull;&bull;', 'M': '&mdash;&mdash;', 'N': '&mdash;&bull;', 'O': '&mdash;&mdash;&mdash;',
    'P': '&bull;&mdash;&mdash;&bull;', 'Q': '&mdash;&mdash;&bull;&mdash;', 'R': '&bull;&mdash;&bull;', 'S': '&bull;&bull;&bull;', 'T': '&mdash;',
    'U': '&bull;&bull; &mdash;', 'V': '&bull;&bull;&bull;&mdash;', 'W': '&bull;&mdash;&mdash;', 'X': '&mdash;&bull;&bull;&mdash;', 'Y': '&mdash;&bull;&mdash;&mdash;',
    'Z': '&mdash;&mdash;&bull;&bull;',
    '1': '&bull;&mdash;&mdash;&mdash;&mdash;', '2': '&bull;&bull;&mdash;&mdash;&mdash;', '3': '&bull;&bull;&bull;&mdash;&mdash;', '4': '&bull;&bull;&bull;&bull;&mdash;', '5': '&bull;&bull;&bull;&bull;&bull;',
    '6': '&mdash;&bull;&bull;&bull;&bull;', '7': '&mdash;&mdash;&bull;&bull;&bull;', '8': '&mdash;&mdash;&mdash;&bull;&bull;', '9': '&mdash;&mdash;&mdash;&mdash;&bull;', '0': '&mdash;&mdash;&mdash;&mdash;&mdash;',
    " ": "   "
};

const convertable = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

text1 = ""
morse1 = ""

function translatesTextMorse() {
    valid = true
    document.getElementById("outputText").innerHTML = ""

    if (document.getElementById("inputTextBox").value != "") {
        text1 = document.getElementById("inputTextBox").value.toUpperCase()


        for (i in text1) {
            if (!convertable.includes(text1[i]) && !convertable.includes(Number(text1[i]))) {
                console.log("E")
                document.getElementById("outputText").textContent = "Invalid Input!"
                valid = false
                break
            }
        }

        if (valid) {

            morse1 = ""
            console.log(valid, "e")

            for (i in text1) {
                console.log(alphabetMorse[text1[i]])
                morse1 += `${alphabetMorse[text1[i]]}` + "&nbsp;&nbsp;"
            }

            document.getElementById("outputText").innerHTML = ""
            document.getElementById("outputText").insertAdjacentHTML("beforeend", morse1)
        }

    }
}


const morseAlphabet = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9', "": "&nbsp;"
};


text2 = ""
morse2 = ""

function translatesMorseText() {
    valid = true
    document.getElementById("outputText").innerHTML = ""

    if (document.getElementById("inputTextBox").value != "") {
        morse2 = document.getElementById("inputTextBox").value

        for (i in morse2) {
            if (![".", "-", " "].includes(morse2[i])) {
                console.log("invalid nput ")
                document.getElementById("outputText").textContent = "Invalid Input!"
                valid = false
                break
            }
        }
        morseL = morse2.split(" ")

        for (i in morseL) {
            if (morseAlphabet[morseL[i]] == undefined) {
                document.getElementById("outputText").textContent = `"${morseL[i]}" chacacter does not exist in morse code, please try again`
                valid = false
                break
            }
        }


        if (valid) {

            text2 = ""
            console.log("e valid in")

            for (i in morseL) {
                if (morseAlphabet[morseL[i]] != undefined) {
                    text2 += `${morseAlphabet[morseL[i]]}`
                }

            }
            document.getElementById("outputText").innerHTML = ""
            document.getElementById("outputText").insertAdjacentHTML("beforeend", text2.toLowerCase())
        }

    }
}


function copyButton() {

}