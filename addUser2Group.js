var siteUrl = '/sites/MySiteCollection ';

function addUserToSharePointGroup() {

    var clientContext = new SP.ClientContext(siteUrl);
    var collGroup = clientContext.get_web().get_siteGroups();
    var oGroup = collGroup.getById(7);
    var userCreationInfo = new SP.UserCreationInformation();
    userCreationInfo.set_email('alias@somewhere.com');
    userCreationInfo.set_loginName('DOMAIN\alias');
    userCreationInfo.set_title('John');
    this.oUser = oGroup.get_users().add(userCreationInfo);
    
    clientContext.load(oUser);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}

function onQuerySucceeded() {
        
    alert(this.oUser.get_title() + " added.");
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}
