var siteUrl = '/sites/MySiteCollection ';

function retrieveAllUsersInGroup() {

    var clientContext = new SP.ClientContext(siteUrl);
    var collGroup = clientContext.get_web().get_siteGroups();
    var oGroup = collGroup.getById(7);
    this.collUser = oGroup.get_users();
    clientContext.load(collUser);


    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function onQuerySucceeded() {

    var userInfo = '';

    var userEnumerator = collUser.getEnumerator();
    while (userEnumerator.moveNext()) {
        var oUser = userEnumerator.get_current();
        this.userInfo += '\nUser: ' + oUser.get_title() + 
            '\nID: ' + oUser.get_id() + 
            '\nEmail: ' + oUser.get_email() + 
            '\nLogin Name: ' + oUser.get_loginName();
    }
      
    alert(userInfo);
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

var siteUrl = '/sites/MySiteCollection ';

function retrieveSpecificUserProperties() {

    var clientContext = new SP.ClientContext(siteUrl);
    var collGroup = clientContext.get_web().get_siteGroups();
    var oGroup = collGroup.getById(7);
    this.collUser = oGroup.get_users();
    clientContext.load(collUser, 'Include(Title, LoginName, Email)');


    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function onQuerySucceeded() {

    var userInfo = '';

    var userEnumerator = collUser.getEnumerator();
    while (userEnumerator.moveNext()) {
        var oUser = userEnumerator.get_current();
        this.userInfo += '\nUser: ' + oUser.get_title() + 
            '\nEmail: ' + oUser.get_email() + 
            '\vLogin Name: ' + oUser.get_loginName();
    }
        
    alert(userInfo);
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

var siteUrl = '/sites/MySiteCollection ';

function retrieveAllUsersAllGroups() {

    var clientContext = new SP.ClientContext(siteUrl);
    this.collGroup = clientContext.get_web().get_siteGroups();
    clientContext.load(collGroup);
    clientContext.load(collGroup, 'Include(Users)');

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function onQuerySucceeded() {

    var userInfo = '';

    var groupEnumerator = collGroup.getEnumerator();
    while (groupEnumerator.moveNext()) {
        var oGroup = groupEnumerator.get_current();
        var collUser = oGroup.get_users();
        var userEnumerator = collUser.getEnumerator();
        while (userEnumerator.moveNext()) {
            var oUser = userEnumerator.get_current();
            this.userInfo += '\nGroup ID: ' + oGroup.get_id() + 
                '\nGroup Title: ' + oGroup.get_title() + 
                '\nUser: ' + oUser.get_title() + 
                '\nLogin Name: ' + oUser.get_loginName();
        }
    }
        
    alert(userInfo);
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

var siteUrl = '/sites/MySiteCollection ';

function retrieveAllUsersAllGroupsSpecificProperties() {

    var clientContext = new SP.ClientContext(siteUrl);
    this.collGroup = clientContext.get_web().get_siteGroups();
    clientContext.load(collGroup, 'Include(Title,Id,Users.Include(Title,LoginName))');

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function onQuerySucceeded() {

    var userInfo = '';

    var groupEnumerator = collGroup.getEnumerator();
    while (groupEnumerator.moveNext()) {
        var oGroup = groupEnumerator.get_current();
        var collUser = oGroup.get_users();
        var userEnumerator = collUser.getEnumerator();
        while (userEnumerator.moveNext()) {
            var oUser = userEnumerator.get_current();
            this.userInfo += '\nGroup ID: ' + oGroup.get_id() + 
                '\nGroup Title: ' + oGroup.get_title() + 
                '\nUser: ' + oUser.get_title() + 
                '\nLogin Name: ' + oUser.get_loginName();
        }
    }
        
    alert(userInfo);
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

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

