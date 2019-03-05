setTimeout(function(){
    alert("WaxJS not available")
    if(window.WAXJS){
        WAXJS.webPageData.pageUrl = "https://www.google.com/";
        let data = WaxInterface.getSavedLogins(WAXJS.webPageData);
        let stringifiedData = JSON.stringify(data);
        document.getElementById("data").innerText = stringifiedData;
        alert("WaxJS available")
    }

}, 200);
