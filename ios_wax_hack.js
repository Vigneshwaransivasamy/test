setTimeout(function(){
    try{
        var _global = WaxMobileAdapter || "Not Available";
    } catch(e){
        console.log(e);   
    }
    // alert(_global);
    if(_global){
        alert("WaxJS available")
        _global.webPageData.pageUrl = "https://www.google.com/";
        WaxInterface.getSavedLogins(_global.webPageData);
        WaxInterface.fillUserSelectedLogin = function(data){
            let stringifiedData = JSON.stringify(data);
            document.getElementById("data").innerText = stringifiedData;
            alert(stringifiedData);
        };
        
    } else {
        alert("WaxJS not available");
    }
    

}, 200);
