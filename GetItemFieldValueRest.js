function getItemsByField(list, field, fieldValue) {
    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    var url = siteurl + "/_api/lists/getbytitle('" + list + "')/items?$filter=" + field + " eq '" + fieldValue + "'";
    alert(url)
        $.ajax({
        url: url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose", "X-RequestDigest": $("#__REQUESTDIGEST").val()},
        success: function (data) {
            if (data.d.results.length > 0) {
                alert(data.length)
            }
        },
        error: function (error) {
            alert("Error: " + JSON.stringify(error));
        }
    });
}
