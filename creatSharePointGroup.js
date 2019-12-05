   function btnCreateCustomGroup_Click() {  
        var grpName = "DSAuditors"  
        var grpDesc = "Auditors custom group with edit access";  
        var grpRole = "Edit";  
        var appweburl = _spPageContextInfo.siteAbsoluteUrl;  
        var clientContext = new SP.ClientContext(appweburl);  
  
  
        CreateCustomGroup(clientContext, grpName, grpDesc, grpRole, true, false, true,  
            function success() {  
                alert("Successfully created group: " + grpName);  
            },  
            function fail(src, info) {  
                alert("Failed to create group: " + grpName + ". " + info.get_message());  
            });  
  
    }  
  
    function CreateCustomGroup(context, name, desc, roleName, canMembersEdit, visibleToMembersOnly, addCurrentUser, success, fail) {  
        var web = context.get_web();  
        //Get all groups in site  
        var groupCollection = web.get_siteGroups();  
        // Create Group information for Group  
        var newGRP = new SP.GroupCreationInformation();  
        newGRP.set_title(name);  
        newGRP.set_description(desc);  
  
        var currentUser = web.get_currentUser();  
        context.load(currentUser);  
  
        context.load(web, 'Title', 'HasUniqueRoleAssignments');  
        context.executeQueryAsync(function() {  
  
            if (!web.get_hasUniqueRoleAssignments()) {  
                web.breakRoleInheritance(true, false);  
            }  
  
            //add group to site gorup collection  
            var newCreateGroup = groupCollection.add(newGRP);  
            //Role Definition   
            var rolDef = web.get_roleDefinitions().getByName(roleName);  
            var rolDefColl = SP.RoleDefinitionBindingCollection.newObject(context);  
            rolDefColl.add(rolDef);  
  
            // Get the RoleAssignmentCollection for the target web.  
            var roleAssignments = web.get_roleAssignments();  
            // assign the group to the new RoleDefinitionBindingCollection.  
            roleAssignments.add(newCreateGroup, rolDefColl);  
            //Set group properties  
            newCreateGroup.set_allowMembersEditMembership(canMembersEdit);  
            newCreateGroup.set_onlyAllowMembersViewMembership(visibleToMembersOnly);  
            //add currect user to group  
            if (addCurrentUser) {  
                newCreateGroup.get_users().addUser(currentUser);  
            }  
  
            newCreateGroup.update();  
            context.load(newCreateGroup);  
  
            //Execute Query  
            context.executeQueryAsync(success, fail);  
  
        }, fail);  
    }  
