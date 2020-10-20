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
    var url = getip() + "/taophieuphanbo/" + id;
    log('url=' + url);
    $.ajax({
        url: url,
        method: "GET",
        dataType: 'json',
        success: function (data) {
            // log('data=' + JSON.stringify(data));
            obj = data[0];
            document.getElementById('ma_phieu').innerHTML = 'Mã phiếu: ' + obj.ma_phieu;
            document.getElementById('ten_nguoi_giao').innerHTML = 'Thủ kho: ' + obj.ten_nguoi_giao;
            document.getElementById('ngay_thu_hoi').innerHTML = 'Ngày thu hồi: ' + obj.ngay_thu_hoi;
            document.getElementById('ten_kho_con').innerHTML = 'Kho: ' + obj.ten_kho_con;
            document.getElementById('ghi_chu').innerHTML = 'Ghi Chú: ' + obj.ghi_chu;
            let obj2 = data[0].listanhsanpham
            let s = 0;
            s = obj2.length;
            console.log(s)
            //   console.log(s)
            //   var container = document.getElementById('container2');
            var tr;
            for (let i = 0; i < s; i++) {
                stt = i + 1;
                tr = $('<tr/>');
                tr.append("<td>" + stt + "</td>")
                tr.append("<td>" + obj2[i].ten_san_pham + "</td>")
                tr.append("<td>" + obj2[i].so_luong + "</td>")
                tr.append("<td>" + obj2[i].dvt + "</td>")
                tr.append("<td>" + obj2[i].don_gia + "</td>")
                tr.append("<td>" + obj2[i].ghi_chu + "</td>")
                $('#test2').append(tr);
            }
            // document.getElementById('44444').innerHTML="123";
        },
    });
});
