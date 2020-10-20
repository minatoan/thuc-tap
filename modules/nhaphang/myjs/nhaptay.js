function load_data() {
    var url = getip() + "/taophieunhap/";
    console.log("load_data");
    log(url);

}


//tao phieu
function taophieu() {
    console.log("them: 123 ");
    var url = "http://10.151.125.151:8081/api/restful/phieunhap";
    var phieunhap = {};
    phieunhap.ma_phieu_nhap = $("#ma_phieu_nhap").val();
    phieunhap.id_nguoi_nhap = localStorage.getItem('id');
    phieunhap.ten_dang_nhap = $("#ten_dang_nhap").val();
    phieunhap.ngay_nhap = $("#ngay_nhap").val();
    phieunhap.ten_ncc = $("#txt_idnhacc").val();
    phieunhap.id_ncc = $("#txt_idnhacc").val();
    phieunhap.ten_kho = $("#id_kho_nguoi_dung").val();
    phieunhap.id_kho = localStorage.getItem("id_kho_nguoi_dung");
    console.log("id kho : " + phieunhap.id_kho)
    var phieunhapObj = JSON.stringify(phieunhap);
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: phieunhapObj,
        contentType: "application/json; charset=utf-8",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        success: function (data) {
            console.log(data)
            toastr.success("Tạo phiếu thành công");
            var url = "http://10.151.125.151:8081/api/restful/phieunhap";
            console.log(data);
            document.getElementById("id_phieu_nhap").value = data;
            // tableload(url+"/"+ data)

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
    var url = "http://10.151.125.151:8081/api/restful/ctpn";
    var ctphieunhap = {};
    ctphieunhap.id_phieu_nhap = $("#id_phieu_nhap").val();
    ctphieunhap.id_san_pham = $("#loadsp").val();
    ctphieunhap.ten_san_pham = $("#loadsp").val();
    ctphieunhap.ngay_san_xuat = $("#ngay_san_xuat").val();
    ctphieunhap.han_su_dung = $("#han_su_dung").val();
    ctphieunhap.so_luong = $("#so_luong").val();
    ctphieunhap.don_gia = $("#don_gia").val();
    ctphieunhap.ma_vach = $("#ma_vach").val();
    // ctphieunhap.id_kho_sanpham = $("#id_kho_sanpham").val();
    var ctphieunhapObj = JSON.stringify(ctphieunhap);
    console.log(ctphieunhapObj)
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data: ctphieunhapObj,
        contentType: "application/json; charset=utf-8",

        success: function () {
            toastr.success("Nhập hàng thành công");
            var id = document.getElementById("id_phieu_nhap").value;
            var url = getip() + "/taophieunhap/" + id;
            $.ajax({
                url: url,
                method: "GET",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var dataobj = data[0].listchitietnhap
                    var id = document.getElementById("id_phieu_nhap").value;
                    let s = 0;
                    s = dataobj.length;
                    console.log(dataobj)
                    for (let i = 0; i < s; i++) {
                        stt = i + 1;
                        tr = $('<tr/>');
                        tr.append("<td>" + stt + "</td>")
                        tr.append("<td>" + id + "</td>")
                        tr.append("<td>" + dataobj[i].ten_san_pham + "</td>")
                        tr.append("<td>" + dataobj[i].ngay_san_xuat + "</td>")
                        tr.append("<td>" + dataobj[i].han_su_dung + "</td>")
                        tr.append("<td>" + dataobj[i].so_luong + "</td>")
                        tr.append("<td>" + dataobj[i].don_gia + "</td>")
                        $('#table_nhap_hang').append(tr);
                    }
                }
            })
        },
        error: function (error) {
            console.log(error),
                bootbox.alert({

                    message: "Nhập hàng không thành công",
                    size: "small"
                });
        }
    });
}
function loadtennguoidung() {
    var tennguoidung = localStorage.getItem("ten")
    document.getElementById('id_nguoi_nhap').value = tennguoidung;
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
});


