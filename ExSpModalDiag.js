//Using the DialogOptions class.
var options = SP.UI.$create_DialogOptions();

options.title = "My Dialog Title";
options.width = 400;
options.height = 600;
options.url = "/_layouts/DialogPage.aspx";

SP.UI.ModalDialog.showModalDialog(options);

//Using a generic object.
var options = {
    title: "My Dialog Title",
    width: 400,
    height: 600,
    url: "/_layouts/DialogPage.aspx" };

SP.UI.ModalDialog.showModalDialog(options);
