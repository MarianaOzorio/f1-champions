function showChampion() {

    let selectedValue = year.options[year.selectedIndex].value
    let answerContainer = document.querySelector('.answer-infos')
    let resultTxt = document.querySelector('.champion-txt')
    let errorTxt = document.querySelector('.error-txt')


    fetch("champions.json").then((response) => {
        response.json().then((datas) => {
            datas.champion.map((driver) => {
                for(var i = 0; datas.champion.length > i; i++){
                    parseInt(driver.year)
                    if(isNaN(selectedValue)){
                        answerContainer.style.display = "none";
                        errorTxt.style.display = "table";
                        errorTxt.innerHTML = "please select an year"; 
                        return;         
                    } else {
                        if(driver.year == selectedValue){
                            answerContainer.style.display = "table";
                            errorTxt.style.display = "none";
                            document.querySelector('.champion-photo').setAttribute('src', driver.photoURL);
                            resultTxt.innerHTML = `The world champion in ${selectedValue} was ${driver.name} for ${driver.team}.`;
                        }
                    }
                }
            })
        })         
    })
}

  
