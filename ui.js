function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");
}

UI.prototype.changeUI = function(){

    //Arayuz degisecek
    this.outputImage.src = ` images/${this.languageList.value}.png`;

    this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent; 
    console.log(this.languageList.options[this.languageList.selectedIndex].textContent);
    console.log();
}

UI.prototype.displayTranslate = function(word){

    this.outputWord.textContent = word;
}