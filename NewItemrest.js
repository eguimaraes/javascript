<script>
    var data = {
            __metadata: { 'type': 'SP.Data.ProjectsListItem' },
           Title: 'Please provide title here',
           Description: 'Please provide multi line text here',
           Start_x0020_Date: new Date().toISOString();
      };
    $.ajax({
        var siteurl = _spPageContextInfo.webAbsoluteUrl;
        $.ajax({
                   url: siteurl + "/_api/web/lists/getbytitle('Projects')/items",
                   method: "POST",
                                 data: JSON.stringify(data),
                   headers: { "Accept": "application/json; odata=verbose",
                                   "X-RequestDigest": $("#__REQUESTDIGEST").val()                                  
                   },
                   success: function (data) {
                              alert('Item added successfully');
                  },
                  error: function (error) {
                      alert("Error: "+ JSON.stringify(error));
                 }
          });
    });
</script>
