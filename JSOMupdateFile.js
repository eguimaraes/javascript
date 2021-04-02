function updateFile(resultpanel) {
    var clientContext;
    var oWebsite;
    var oList;
    var fileCreateInfo;
    var fileContent;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();
    oList = oWebsite.get_lists().getByTitle("Shared Documents");

    fileCreateInfo = new SP.FileCreationInformation();
    fileCreateInfo.set_url("TextFile1.txt");
    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
    fileCreateInfo.set_overwrite(true);
    fileContent = "The updated content of my file";

    for (var i = 0; i < fileContent.length; i++) {

        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
    }

    this.existingFile = oList.get_rootFolder().get_files().add(fileCreateInfo);

    clientContext.load(this.existingFile);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, successHandler),
        Function.createDelegate(this, errorHandler)
    );

    function successHandler() {
        resultpanel.innerHTML =
            "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to see the updated \"TextFile1.txt\" file.";
    }

    function errorHandler() {
        resultpanel.innerHTML =
            "Request failed: " + arguments[1].get_message();
    }
}
