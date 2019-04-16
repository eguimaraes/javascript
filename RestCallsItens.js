script>
    $.ajax({
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        $.ajax({
                   url: siteurl + "/_api/web/lists/getbytitle('Projects')/items",
                   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                        if (data.d.results.length > 0 ) {
                             //This section can be used to iterate through data and show it on screen
                        }       
                  },
                  error: function (data) {
                      alert("Error: "+ data);
                 }
          });
    });
</script>
