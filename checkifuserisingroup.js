
var retorno=false; 
var siteUrl=_spPageContextInfo.webAbsoluteUrl;
var clientContext = new SP.ClientContext(siteUrl);
var web =clientContext.get_web();
var groupCollection = web.get_siteGroups();
var groupp = groupCollection.getByName(gid);
clientContext.load(web); 
clientContext.load(groupCollection); 
clientContext.load(groupp,"CanCurrentUserViewMembership"); 

clientContext.executeQueryAsync(
function () {
permissaoItem=groupp.get_canCurrentUserViewMembership();
