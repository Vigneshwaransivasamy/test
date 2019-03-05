setTimeout(function(){

    if(window.WAXJS){
        WAXJS.webPageData.pageUrl = "https://www.google.com/";
        let data = WaxInterface.getSavedLogins(WAXJS.webPageData);
        let stringifiedData = JSON.stringify(data)
        document.getElementById("id").innerText = stringifiedData;
    }

});
