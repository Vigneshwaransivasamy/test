setTimeout(function(){
    try{
        var _global = WAXJS || SymMobWax || "Not Available";
        } catch(e){
            try{
                var _global = SymMobWax || "Not Available";
            } catch(e){
                console.log(e);
            }
        }
    alert(_global);
    if(_global){
        _global.webPageData.pageUrl = "https://www.google.com/";
        let data = WaxInterface.getSavedLogins(_global.webPageData);
        let stringifiedData = JSON.stringify(data);
        document.getElementById("data").innerText = stringifiedData;
        alert("WaxJS available")
    }

    alert("WaxJS not available");

}, 200);
