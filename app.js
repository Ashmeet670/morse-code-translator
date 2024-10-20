translateMode = "textMorse"

function translationModeChange(btn){
    document.getElementById("morseText").classList.remove("translatorButtonSelected")
    document.getElementById("textMorse").classList.remove("translatorButtonSelected")

    btn.classList.add("translatorButtonSelected")
    translateMode = btn.id
    console.log(translateMode)
}