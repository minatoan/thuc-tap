function load_data() {
    console.log("load_data");
    var url = getip() + "/nhacungcap";        
    log(url);
    tableload(url);
}


function them() {

    var url = getip() + "/nhacungcap/";
    var nhacungcap = {};
    nhacungcap.tenNCC = $("#txttenNCC").val();
    nhacungcap.sdt = $("#txtsdt").val();
    nhacungcap.email = $("#txtemail").val();
    nhacungcap.nganHang = $("#txtnganHang").val();
    nhacungcap.soTaiKhoan = $("#txtsoTaiKhoan").val();
    nhacungcap.maSoThue = $("#txtmaSoThue").val();
    nhacungcap.diaChi = $("#txtdiaChi").val();
    nhacungcap.ngayCapNhat = $("#txtngayCapNhat").val();
    var nhacungcapObj = JSON.stringify(nhacungcap);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: nhacungcapObj,
        contentType: "application/json; charset=utf-8",
        success: function () {

            toastr.success("Thêm thành công");
            var url = getip() + "/nhacungcap";
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
                var url = getip() + "/nhacungcap/";
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
        '<button type="button" data-toggle="modal" data-target="#mySuancc" onclick="edit(' +
        value +
        ')" class="btn"><i class="fa fa-edit" style="color:orange"></i></button>  <button type="button" onclick="del(' +
        value +
        ')" class="btn"><i class="fa fa-trash" style="color:red"></i></button> '
    );
}

function edit(id) {
    var url = getip() + "/nhacungcap/" + id;
    // var url = "http://10.151.125.151:8081/api/restful/nhacungcap" +id;
    console.log("url: " + url);
    $.getJSON(url, function (data) {
        console.log("data:" + JSON.stringify(data));
        var obj = JSON.parse(JSON.stringify(data));
        console.log(obj.idNCC);
        $(".card-body #idNCC").val(obj.idNCC);
        $(".card-body #tenNCC").val(obj.tenNCC);
        $(".card-body #sdt").val(obj.sdt);
        $(".card-body #email").val(obj.email);
        $(".card-body #nganHang").val(obj.nganHang);
        $(".card-body #soTaiKhoan").val(obj.soTaiKhoan);
        $(".card-body #maSoThue").val(obj.maSoThue);
        $(".card-body #diaChi").val(obj.diaChi);
        $(".card-body #ngayCapNhat").val(obj.ngayCapNhat);
    });
}

function luu(idNCC) {
    var cungcap = {};
    cungcap.tenNCC = $("#tenNCC").val();
    cungcap.sdt = $("#sdt").val();
    cungcap.email = $("#email").val();
    cungcap.nganHang = $("#nganHang").val();
    cungcap.soTaiKhoan = $("#soTaiKhoan").val();
    cungcap.maSoThue = $("#maSoThue").val();
    cungcap.diaChi = $("#diaChi").val();
    cungcap.ngayCapNhat = $("#ngayCapNhat").val();
    var idNCC = $("#idNCC").val();
    var nhacungcapObj = JSON.stringify(cungcap);
    var url = getip() + "/nhacungcap/" ;
    $.ajax({
        url: url + idNCC,
        method: "PUT",
        data: nhacungcapObj,
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

//Amend Data Array

