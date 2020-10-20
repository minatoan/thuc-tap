function load_data() {
    var url = getip() + "/taophieuphanbo";
    console.log("load_data");
    log(url);
    tableload(url);
}

function XemchitietFormatter(value, row, index) {
    return (
        '<button type="button" onclick="Redirect(' +
        value +
        ')" class="btn"><i class="fa fa-file-pdf-o" style="color:blue"></i></button> '

    );
}
function Redirect(id) {
    window.location = "chitietdieuchuyen.html?id=" + id;
}
$(document).ready(function () {
    load_data();
    loadselectncc();
    loadselectsanpham();
    loadselectsp();
});


