<script>
    $.ajax({
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        $.ajax({
                   url: siteurl + "/_api/web/lists/getbytitle('Projects')/items(1)",
                   method: "DELETE",
                   headers: { "Accept": "application/json; odata=verbose",
                                   "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                                   "If-Match": "*"
                   },
                   success: function (data) {
                              
                  },
                  error: function (error) {
                      alert("Error: "+ JSON.stringify(error));
                 }
          });
    });
</script>
