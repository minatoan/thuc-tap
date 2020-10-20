function load_data() {
    console.log("load_data");
    var url = getip() + "/congty";
        
    log(url);
    tableload(url);

}
function them() {

    var url = getip() + "/congty/";
    var congty = {};
    congty.tenCongTy = $("#txttenCongTy").val();
    congty.diaChi = $("#txtdiaChi").val();
    congty.sdt = $("#txtsdt").val();
    var congtyObj = JSON.stringify(congty);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: congtyObj,
        contentType: "application/json; charset=utf-8",
        success: function () {
            toastr.success("Thêm thành công");
            var url = getip() + "/congty";
            tableload(url);
        },
        error: function (error) {
            bootbox.alert({
                message: "Thêm không thành công",
                size: "small"
            });
        }
    });
}


function del(id) {
 
    bootbox.confirm({
        message: "Bạn muốn xóa không?",
        buttons: {
            confirm: {
                label: "Có",
                className: "btn-success"
            },
            cancel: {
                label: "Không",
                className: "btn-danger"
            }
        },
        callback: function (result) {
            console.log("This was logged in the callback: " + result);
            if (result) {
                var url = getip() + "/congty/";
                log(url);
                $.ajax({
                    url: url + id,
                    method: "DELETE",
                    success: function () {
                        // bootbox.alert('Xóa thành công');
                        toastr.success("Xóa thành công");
                        load_data();
                    },
                    error: function (error) {
                        bootbox.alert("Xóa không thành công");
                    }
                });
            }
        }
    });
}

function ThaotacFormatter(value, row, index) {
    return (
        '<button type="button" data-toggle="modal" data-target="#myModalsua" onclick="edit(' +
        value +
        ')" class="btn"><i class="fa fa-edit" style="color:orange"></i></button>  <button type="button" onclick="del(' +
        value +
        ')" class="btn"><i class="fa fa-trash" style="color:red"></i></button> '
    );
}



function edit(id) {
    var url = getip() + "/congty/" + id;
    console.log("url: " + url);
    $.getJSON(url, function (data) {
        console.log("data:" + JSON.stringify(data));
        var obj = JSON.parse(JSON.stringify(data));
        console.log(obj.idcongty);
        $(".card-body #idcongty").val(obj.idcongty);
        $(".card-body #tenCongTy").val(obj.tenCongTy);
        $(".card-body #diaChi").val(obj.diaChi);
        $(".card-body #sdt").val(obj.sdt);
    });
}
function luu(idcongty) {
    var congty = {};
    congty.tenCongTy = $("#tenCongTy").val();
    congty.diaChi = $("#diaChi").val();
    congty.sdt = $("#sdt").val();

    var idcongty = $("#idcongty").val();
    var congtyObj = JSON.stringify(congty);
    var url = getip() + "/congty/";
    $.ajax({
        url: url + idcongty,
        method: "PUT",
        data: congtyObj,
        contentType: "application/json; charset=utf-8",
        success: function () {
            // bootbox.alert('Sửa thành công');
            toastr.success("Sửa thành công");
            load_data();
        },
        error: function (error) {
            bootbox.alert("Sửa không thành công");
        }
    });
}

$(document).ready(function () {
    load_data();

    

    
});


