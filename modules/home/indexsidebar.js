function load_data_canhbao_thongbao() {
    console.log("load_data");
    var url = "http://10.151.125.162:3000/canhbao";
    log(url);
    $.ajax({
        url: url,
        method: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data + "1231212313")
            var s = data.length;

            var tr = "";
            $.each(data, function (index, value) {
                console.log("qưeqưeqưeqeqưe")
                tr = $('<a class="dropdown-item" href="#"/>');
                tr.append(value.thongtincanhbao)
                console.log(value)
                $('#dropdownitemcanhbao').append(tr);
            })
            $("#Counter_canhbao").text(s);
        },
        error: function (error) {
            bootbox.alert({
                message: "Không thể lấy được dữ liệu cảnh báo",
                size: "small"
            });
        }
    });
}
$(document).ready(function () {
    load_data_canhbao_thongbao();
});