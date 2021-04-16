//https://gist.github.com/ktskumar/a9e9df497673e9fd26ead8532b9ff425
//getRequest method reference
function getRequest(url) {
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
            if (request.readyState !== 4) return;
            if (request.status >= 200 && request.status < 300) {
                resolve(request);
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }
        };

        request.open('GET', url, true);
        request.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        request.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
        request.setRequestHeader("ODATA-VERSION", "4.0");
        request.send();

    });
}

//Get the Request location from the browser URL
var path = location.href.replace(location.search, "") + "?as=json";

//Returns the current user, item, page and context information
getRequest(path).then(function(response) {
    console.log(JSON.parse(response.response));
});
