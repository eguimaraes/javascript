function getItemsByField(list,field,fieldValue) {
$.ajax({
    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    $.ajax({
        url: siteurl + "_api/lists/getbytitle('" + list + "')/items?$filter=" + field + " eq '" + fieldValue+"'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            if (data.d.results.length > 0) {
                alert(data.length)
            }
        },
        error: function (error) {
            alert("Error: " + JSON.stringify(error));
        }
    });
    });
}
