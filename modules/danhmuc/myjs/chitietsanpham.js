// delegate calls to data-toggle="lightbox"
$(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"]):not([data-gallery="example-gallery-11"])', function (event) {
    event.preventDefault();
    return $(this).ekkoLightbox({
        onShown: function () {
            if (window.console) {
                return console.log('Checking our the events huh?');
            }
        },
        onNavigate: function (direction, itemIndex) {
            if (window.console) {
                return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
            }
        }
    });
});

// disable wrapping
$(document).on('click', '[data-toggle="lightbox"][data-gallery="example-gallery-11"]', function (event) {
    event.preventDefault();
    return $(this).ekkoLightbox({
        wrapping: false
    });
});

//Programmatically call
$('#open-image').click(function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});
$('#open-youtube').click(function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});

// navigateTo
$(document).on('click', '[data-toggle="lightbox"][data-gallery="navigateTo"]', function (event) {
    event.preventDefault();

    return $(this).ekkoLightbox({
        onShown: function () {

            this.modal().on('click', '.modal-footer a', function (e) {

                e.preventDefault();
                this.navigateTo(2);

            }.bind(this));

        }
    });
});

/**
 * Documentation specific - ignore this
 */
// anchors.options.placement = 'right';
// anchors.add('h3');
// $('code[data-code]').each(function () {

//     var $code = $(this),
//         $pair = $('div[data-code="' + $code.data('code') + '"]');

//     $code.hide();
//     var text = $code.text($pair.html()).html().trim().split("\n");
//     var indentLength = text[text.length - 1].match(/^\s+/)
//     indentLength = indentLength ? indentLength[0].length : 24;
//     var indent = '';
//     for (var i = 0; i < indentLength; i++)
//         indent += ' ';
//     if ($code.data('trim') == 'all') {
//         for (var i = 0; i < text.length; i++)
//             text[i] = text[i].trim();
//     } else {
//         for (var i = 0; i < text.length; i++)
//             text[i] = text[i].replace(indent, '    ').replace('    ', '');
//     }
//     text = text.join("\n");
//     $code.html(text).show();

// });


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// function upload(img){
// $("#input-b9").fileinput({
//     showPreview: false,
//     showUpload: false,
//     elErrorContainer: '#kartik-file-errors',
//     allowedFileExtensions: ["jpg", "png", "gif"]
//     //uploadUrl: '/site/file-upload-single'
// });

// };
//Choose image from disk and preview before upload
// //Created by tungnt.net - 6/2015
function uploadimg() {
    var fileInput = $("#image");
    fileInput.change(function () {
        //When choose image complete using FileReader to convert image to Base64 string
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image').attr('src', e.target.result);
            reader.readAsDataURL(this.files[0])
        }
    });
}
function encodeImagetoBase64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        //   console.log('RESULT', reader.result)
        $(".link").attr("href", reader.result);
        $(".link").text(reader.result);
    }
    reader.readAsDataURL(file);
}
function upload() {
    var id = getParameterByName('id');
    var url = `http://10.151.125.159:8081/api/restful/uploadanh?id_san_pham=${id}&mac_dinh=0&filename=test`;
    // var element = document.getElementById('id_san_pham');
    // console.log(element);
    // var url = 'http://192.168.0.105:8081//api/restful/uploadanh?id_san_pham=1&mac_dinh=1&filename=test';
    var imgbase64 = $(".link").text()
    var id_san_pham = $(".id_san_pham").text()
    console.log(imgbase64)
    log(url);
    $.ajax({
        url: url,
        method: "POST",
        data:imgbase64,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        success: function (reponsive) {
            console.log(reponsive+"thành công")
            location.reload();
        },
        error: function (error) {
            bootbox.alert({
                message: "Có lỗi khi upload",
                size: "small"
            });
        }
    });
}
$(document).ready(function ($) {
    loadchitietsanpham()
    
});
function loadchitietsanpham(){
    var id = getParameterByName('id');
    //lay chi tiet sp
    var url = getip() + "/sanpham/" + id;
    log('url=' + url);
    $.ajax({
        url: url,
        method: "GET",
        success: function (data) {
            log('data=' + JSON.stringify(data));
            obj = data[0];
            document.getElementById('ten_san_pham').innerHTML = 'Tên sản phẩm: ' + obj.ten_san_pham;
            document.getElementById('ma_vach').innerHTML = 'Mã vạch: ' + obj.ma_vach;
            document.getElementById('model').innerHTML = 'Model: ' + obj.model;
            document.getElementById('dvt').innerHTML = 'Đơn vị tính: ' + obj.dvt;
            document.getElementById('ten_nhan_hang').innerHTML = 'Tên nhãn hàng: ' + obj.ten_nhan_hang;
            document.getElementById('gia').innerHTML = 'Giá: ' + obj.gia;
            document.getElementById('ghi_chu').innerHTML = 'Ghi chú: ' + obj.ghi_chu;
            update_qrcode(obj.ma_vach);

            //lightbox
            //log('images=' + JSON.stringify(obj.listanhsanpham));
            let s = obj.listanhsanpham.length;
            //log('s=' + s);
            var str = '';
            for (var i = 0; i < s; i++) {
                let src = obj.listanhsanpham[i].link_anh;
                log('src=' + src);
                str = str + '<a href="' + src + '" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4"> <img src="' + src + '" class="img-fluid"></a>';
            }
            document.getElementById('lightbox1').innerHTML = str;
        },
    });
}
function update_qrcode(code) {
    // qrcode
    let macodesp = code;
    var qrcode = new QRCode("id_qrcode", {
        text: macodesp,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
