translateMode = "textMorse"

function translationModeChange(btn){
    document.getElementById("morseText").classList.remove("translatorButtonSelected")
    document.getElementById("textMorse").classList.remove("translatorButtonSelected")

    btn.classList.add("translatorButtonSelected")
    translateMode = btn.id
    console.log(translateMode)
}


function buttonClick(btn){
    btn.classList.add("buttonClickAnimate")

    setTimeout(() => {
        btn.classList.remove("buttonClickAnimate")
    }, 350);
}


function translateButton(){
    console.log(translateMode)
    if (translateMode == "textMorse"){
        translatesTextMorse()
    }
    else if (translateMode == "morseText"){
        translatesMorseText()
    }
}


text = ""
morse = ""

function translatesTextMorse(){
    text = document.getElementById("inputTextBox").value
    console.log(text)
}

function translatesMorseText(){
    console.log("e")
}