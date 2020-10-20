function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function () {
    var url = localStorage.getItem("urltest")
    console.log(url)
    $.ajax({
        url: url,
        method: "GET",
        dataType: 'json',
        success: function (data) {
            // log('data=' + JSON.stringify(data));
            obj = data[0];
            document.getElementById('tenSanPham').innerHTML = 'Tên sản phẩm: ' + obj.tenSanPham;
            document.getElementById('giaNhap').innerHTML = 'Giá nhập: ' + obj.giaNhap;
            document.getElementById('tonKho').innerHTML = 'Tồn kho: ' + obj.tonKho;
            document.getElementById('dvt').innerHTML = 'Đơn vị tính: ' + obj.dvt;
            document.getElementById('tongSoLuongDaNhap').innerHTML = 'Tổng số lượng đã nhập: ' + obj.tongSoLuongDaNhap;
            document.getElementById('tongSoLuongDaXuat').innerHTML = 'Tổng số lượng đã xuất: ' + obj.tongSoLuongDaXuat;
            let s = obj.linkAnh.length;
            var str = '';
            for (var i = 0; i < s; i++) {
                let src = obj.linkAnh[i].link_anh;
                log('src=' + src);
                str = str + '<a href="' + src + '" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4"> <img src="' + src + '" class="img-fluid"></a>';
            }
            document.getElementById('lightbox1').innerHTML = str;

            let obj2 = data[0].phanLoai
            var s1 = obj2.length;
            var container = document.getElementById('container');
            for (let i = 0; i < s1; i++) {
                stt = i + 1;
                var src1 = obj2[i].tenNganhHang;
                var element = document.createElement("div");
                element.appendChild(document.createTextNode("Tên ngành hàng: "  + src1 + '\r\n'));
                container.appendChild(element)
                var src2 = obj2[i].tenNhanHang;
                element.appendChild(document.createTextNode('\r\n' + "Tên nhãn hàng :  " + src2 + '\r\n'));
                container.appendChild(element)
                element.style.borderBottom = '1px dotted gray'
                container.appendChild(element)
            }
            let obj3 = data[0].nhapHang
            var s2 = obj3.length;
            var container1 = document.getElementById('container1');
            for (let i = 0; i < s2; i++) {
                stt = i + 1;
                var src1 = obj3[i].idPhieuNhap;
                var element = document.createElement("div");
                element.appendChild(document.createTextNode("Mã phiếu nhập: " + src1 + '\r\n'));
                container.appendChild(element)
                var src2 = obj3[i].lanNhapGanNhat;
                element.appendChild(document.createTextNode('\r\n' + "Lần nhập gần nhất :  " + src2 + '\r\n'));
                container.appendChild(element)
                var src3 = obj3[i].tenNCC;
                element.appendChild(document.createTextNode('\r\n' + "Tên nhà cung cấp :  " + src3 + '\r\n'));
                container.appendChild(element)
                var src4 = obj3[i].soLuongNhap;
                element.appendChild(document.createTextNode('\r\n' + "Số lượng nhập :  " + src4 + '\r\n'));
                container.appendChild(element)
                var src5 = obj3[i].tienHang;
                element.appendChild(document.createTextNode('\r\n' + "Tổng tiền: " + src5 + '\r\n'));
                container.appendChild(element)
                element.style.borderBottom = '1px dotted gray'
                container1.appendChild(element)
            }
        },
    });
});

