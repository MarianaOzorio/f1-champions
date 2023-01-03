function showChampion() {

    let selectedValue = year.options[year.selectedIndex].value
    let answerContainer = document.querySelector('.answer-infos')
    let resultTxt = document.querySelector('.champion-txt')
    let errorTxt = document.querySelector('.error-txt')
    let selectYears = document.querySelector('.select-years')
    let loader = document.querySelector('.loader')


    fetch("champions.json").then((response) => {
        response.json().then((datas) => {
            datas.champion.map((driver) => {
                for(var i = 0; datas.champion.length > i; i++){
                    parseInt(driver.year)
                    if(isNaN(selectedValue)){
                        answerContainer.style.display = "none";
                        errorTxt.style.display = "table";
                        selectYears.style.border = "solid 2px red";
                        errorTxt.innerHTML = "please select an year"; 
                        return;         
                    } else {
                        if(driver.year == selectedValue){
                            setTimeout(() => {
                                loader.style.display = "inline-block";  
                                answerContainer.style.display = "none";
                                errorTxt.style.display = "none";
                            }, 0)
                            setTimeout(() => {
                            loader.style.display = "none";    
                            answerContainer.style.display = "table";
                            errorTxt.style.display = "none";
                            selectYears.style.border = "none";
                            document.querySelector('.champion-photo').setAttribute('src', driver.photoURL);
                            resultTxt.innerHTML = `the world champion in ${selectedValue} was ${driver.name} for ${driver.team}`;
                        }, 1000)
                        }
                    } 
                } 
            })
        })         
    })
}