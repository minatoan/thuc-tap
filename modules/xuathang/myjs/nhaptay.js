function load_data() {
    var url = getip() + "/ctpx/";
    console.log("load_data");
    log(url);

}
//tao phieu
function taophieu() {
    console.log("them: 123 ");
    var url = getip() + "/ttpx/";
    var phieuxuat = {};
    phieuxuat.ma_phieu_xuat = $("#ma_phieu_xuat").val();
    phieuxuat.id_nguoi_xuat = localStorage.getItem('id');
    phieuxuat.ten_dang_nhap = $("#ten_dang_nhap").val();
    phieuxuat.ten_khach_hang = $("#ten_khach_hang").val();
    phieuxuat.ngay_xuat = $("#ngay_xuat").val();
    phieuxuat.ghi_chu = $("#ghi_chu").val();
    var phieuxuatObj = JSON.stringify(phieuxuat);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: phieuxuatObj,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            toastr.success("Tạo phiếu thành công");
            var url = getip() + "/ttpx/";
            console.log(data);
            document.getElementById("id_phieu_xuat").value = data.id_phieu_xuat;
        },
        error: function (error) {
            bootbox.alert({
                message: "Tạo phiếu không thành công",
                size: "small"
            });
        }
    });
}
function nhap() {
    console.log("them: 123 ");
    var url = getip() + "/ctpx/";
    var ctphieuxuat = {};
    ctphieuxuat.id_phieu_xuat = $("#id_phieu_xuat").val();
    ctphieuxuat.id_san_pham = $("#loadsp").val();
    ctphieuxuat.ten_san_pham = $("#loadsp").val();
    ctphieuxuat.so_luong = $("#so_luong").val();
    ctphieuxuat.don_gia = $("#don_gia").val();
    ctphieuxuat.ghi_chu = $("#ghi_chu").val();
    ctphieuxuat.id_kho_sanpham = $("#id_kho_sanpham").val();
    var ctphieuxuatObj = JSON.stringify(ctphieuxuat);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: ctphieuxuatObj,
        contentType: "application/json; charset=utf-8",
        success: function () {
            toastr.success("xuất hàng thành công");
            var id = document.getElementById("id_phieu_xuat").value;
            var url = getip() + "/ctpx/" + "/" + id
            tableload(url);
        },
        error: function (error) {
            bootbox.alert({
                message: "xuất hàng không thành công",
                size: "small"
            });
        }
    });
}
function loadtennguoidung() {
    var tennguoidung = localStorage.getItem("ten")
    document.getElementById('id_nguoi_xuat').value = tennguoidung;
    var idnguoidung = localStorage.getItem("id")
    var url = getip() + "/nguoidungkho/" + "/" + idnguoidung
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json',
        },
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            document.getElementById("id_kho_nguoi_dung").value = response[0].ten_kho
            localStorage.setItem("id_kho_nguoi_dung", response[0].id_kho);
        },
        error: function (error) {
            bootbox.alert({
                message: "Đã có lỗi xảy ra vui lòng thử lại",
                size: "small"
            });
        }
    });
}



//nut button
function ThaotacFormatter(value, row, index) {
    return (
        '  <button type="button" onclick="del(' +
        value +
        ')" class="btn"><i class="fa fa-times" style="color:red"></i></button>  '
    );
}
$(document).ready(function () {
    loadtennguoidung()
    load_data();
    loadselectncc();
    loadselectsp();
    loadselectkho();
    loadselectkhocon();
});


