function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
$("#btnPrint").printPreview({
    obj2print: '#main',
    width: '800',
    height: screen.height,
    float: 'right'
    
});

$(document).ready(function ($) {
    var id = getParameterByName('id');

    //lay chi tiet sp
    var url = getip() + "/taophieunhap/" + id;
    log('url=' + url);
    $.ajax({
        url: url,
        method: "GET",
        dataType: 'json',
        success: function (data) {
            // log('data=' + JSON.stringify(data));
            obj = data[0];
            document.getElementById('ma_phieu_nhap').innerHTML = 'Mã phiếu nhập: ' + obj.ma_phieu_nhap;
            document.getElementById('ten_nguoi_nhap').innerHTML = 'Thủ kho: ' + obj.ten_nguoi_nhap;
            document.getElementById('ngay_nhap').innerHTML = 'Ngày nhập: ' + obj.ngay_nhap;
            document.getElementById('ten_ncc').innerHTML = 'Nhà cung cấp: ' + obj.ten_ncc;
            document.getElementById('sdt').innerHTML = 'Số điện thoại: ' + obj.sdt;
            document.getElementById('dia_chi').innerHTML = 'Địa chỉ: ' + obj.dia_chi;
            document.getElementById('ten_kho').innerHTML = 'Kho: ' + obj.ten_kho;
              let  obj2 = data[0].listchitietnhap
              let s = 0 ;
              s = obj2.length; 
              console.log(s)
            //   console.log(s)
            //   var container = document.getElementById('container2');
              var tr;
            for (let i = 0; i < s; i++) {
                stt=i+1;
                tr = $('<tr/>');
                tr.append("<td>"+stt+"</td>")
                tr.append("<td>"+obj2[i].ten_san_pham+"</td>")
                tr.append("<td>"+obj2[i].ma_vach+"</td>")
                tr.append("<td>"+obj2[i].so_luong+"</td>")
                tr.append("<td>"+obj2[i].dvt+"</td>")
                tr.append("<td>"+obj2[i].don_gia+"</td>")
                tr.append("<td>"+obj2[i].ngay_san_xuat+"</td>")
                tr.append("<td>"+obj2[i].han_su_dung+"</td>")
                tr.append("<td>"+obj2[i].ghi_chus+"</td>")
               
                $('#test2').append(tr);
            }
            // document.getElementById('44444').innerHTML="123";
        },
    });
});
