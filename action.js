function showSelectedCountry(){
    country = document.getElementById("country");
    selectedCountry = country.options[country.selectedIndex].value;
    document.getElementById("selectedData").innerHTML = country.options[country.selectedIndex].value;
    document.getElementById("selectedData").style.visibility = "visible";
}