function CreateYearList() {
    year = document.querySelector('.select-years') 
    for(let i = 1950; i<2023; i++){ 
        option = document.createElement("option") 
        option.value = i 
        option.text = i 
        year.appendChild(option) 
    }
} CreateYearList()
