function load_data_canhbao() {
    console.log("load_data");
    var url = "http://localhost:3000/canhbao";
    log(url);
    $.ajax({
        url: url,
        method: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data+"1231212313")
            var s = data.length;
              var tr = "";
              $.each(data,function(index,value){
                    tr = $('<tr/>');
                    tr.append("<td>" + value.id_log + "</td>")
                    tr.append("<td>" + value.thongtincanhbao + "</td>")
                    console.log(value)
                    $('#table_canh_bao').append(tr);
              })
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
    load_data_canhbao();
  });

  