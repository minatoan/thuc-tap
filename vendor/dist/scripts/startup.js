$(document).ready(function() {
    saveip();

    $.getJSON("../../menu2.json", function(json) {
        //console.log('get menu:'+json); 
        var items = JSON.stringify(json);
        var $menu = $('#myMenu').renderizeMenu(items, {
            rootClass: "metismenu",
            linkHasMenuClass: "has-arrow",
            menuLinkHasSubmenuClass: "has-arrow"
        });
        $menu.metisMenu();
    });

    // $.ajax({
    //     type: "GET",
    //     url: 'http://10.151.125.161:3000/sidebarmenu',
    //     data: "check",
    //     success: function(response) {
    //         //alert(response);
    //         // console.log('json:' + JSON.stringify(response));
    //         var items = JSON.stringify(response);
    //         var $menu = $('#myMenu').renderizeMenu(items, {
    //             rootClass: "metismenu",
    //             linkHasMenuClass: "has-arrow",
    //             menuLinkHasSubmenuClass: "has-arrow"
    //         });
    //         $menu.metisMenu();
    //     }
    // });

    log('ip đang save:'+ getip());
}
)

