function load_data() {
    var id = document.getElementById("id_th").value;
    var url2 = getip() + "/chitietthuhoi/" + "/" + id
    // console.log("load_data");
    // log(url);

}
//tao phieu
function taophieu() {
    var url = getip() + "/fnphieuthu/";
    var phieuthu = {};
    phieuthu.ma_phieu = $("#ma_phieu").val();
    phieuthu.id_nguoi_nhan = localStorage.getItem('id');
    phieuthu.ten_dang_nhap = $("#ten_dang_nhap").val();
    phieuthu.ngay_thu_hoi = $("#ngay_dieu_chuyen").val();
    phieuthu.den_id_kho = $("#txt_khohang").val();
    phieuthu.ghi_chu = $("#ghi_chu").val();
    phieuthu.ten_kho = $("#txt_khohang").val();
    phieuthu.tu_id_kho = localStorage.getItem("id_kho_nguoi_dung");
    console.log(phieuthu.den_id_kho)
    var phieuthuObj = JSON.stringify(phieuthu);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: phieuthuObj,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            toastr.success("Tạo phiếu thành công");
            var url = getip() + "/fnphieuthu/";
            console.log(data);
            document.getElementById("id_th").value = data.id_th;
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
    var url = getip() + "/chitietthuhoi/";
    var ctphieuthu = {};
    ctphieuthu.id_th = $("#id_th").val();
    ctphieuthu.id_san_pham = $("#txt_spdc").val();
    ctphieuthu.ten_san_pham = $("#txt_spdc").val();
    ctphieuthu.so_luong = $("#so_luong").val();
    ctphieuthu.don_gia = $("#don_gia").val();
    var ctphieuthuObj = JSON.stringify(ctphieuthu);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: ctphieuthuObj,
        contentType: "application/json; charset=utf-8",
        success: function () {
            toastr.success("Điều chuyển thành công");
            var id = document.getElementById('id_th').value
            console.log(id + " kho của tú")
            var url = getip() + "/chitietthuhoi/" + "/" + id
            tableload(url);
        },
        error: function (error) {
            bootbox.alert({
                message: "Điều chuyển không thành công",
                size: "small"
            });
        }
    });
}
function loadbang() {
    var id = document.getElementById("id_th").value;
    var url2 = getip() + "/chitietthuhoi/" + "/" + id
    $.ajax({
        url: url2,
        method: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $.each(data, function (key, value) {
                tr = $('<tr/>');
                tr.append("<td>" + key + "</td>")
                tr.append("<td>" + value.id_th + "</td>")
                tr.append("<td>" + value.ten_san_pham + "</td>")
                tr.append("<td>" + value.so_luong + "</td>")
                $('#table_nhap_hang').append(tr);
            })
        }
    })
}
function loadtennguoidung() {
    var tennguoidung = localStorage.getItem("ten")
    document.getElementById('id_nguoi_nhan').value = tennguoidung;
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



$(document).ready(function () {
    loadtennguoidung()
    load_data();
    loadselectncc();
    loadselectsp();
    loadselectkhodieuchuyenngangcap();
    loadselectspdc();
});


