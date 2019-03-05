setTimeout(function(){
    let _global = window.WAXJS || window.SymMobWax;
    if(_global){
        _global.webPageData.pageUrl = "https://www.google.com/";
        let data = WaxInterface.getSavedLogins(_global.webPageData);
        let stringifiedData = JSON.stringify(data);
        document.getElementById("data").innerText = stringifiedData;
        alert("WaxJS available")
    }

    alert("WaxJS not available");

}, 200);
