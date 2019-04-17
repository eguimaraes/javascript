   $(document).ready(function() {  
        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', showModalPopUp);  
    });  
  
    function showModalPopUp() {  
        //Set options for Modal PopUp  
        var options = {  
            url: '/sites/HOL/Pages/Custom-Publishing-Page.aspx?IsDlg=1', //Set the url of the page  
            title: 'SharePoint Modal Pop Up', //Set the title for the pop up  
            allowMaximize: false,  
            showClose: true,  
            width: 600,  
            height: 400  
        };  
        //Invoke the modal dialog by passing in the options array variable  
        SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);  
        return false;  
    }  
