function STTFormatter(value, row, index) {
  return (index = index + 1);
}

function saveip() {
  localStorage.setItem("ip", "https://apisvtt.mobifone9.vn/api/restful");
}

function getip() {
  return localStorage.getItem("ip");
}

function log(log) {
  console.log(log);
}

function tableload(url) {
  var $table = $("#table");
  $table.bootstrapTable("refresh", { url: url });
}
//load nganh hang, san pham
function loadselectnganhhang() {
  $("#selectnganhhang").append(
    $("<option>")
      .text("Chọn ngành hàng")
      .attr("value", 0)
  );
  var url = getip() + "/nganhhang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#selectnganhhang").append(
          $("<option>")
            .text(value.tennganhhang)
            .attr("value", value.idnganhhang)
        );
      });
    }
  });
  $("#selectnganhhang").on("change", function (e) {
    console.log("selectnganhhang vua change gtri:" + this.value);
    load_data(this.value);
  });
}
// load nhan hang. san pham
function loadselectnhanhang() {
  $("#selectnhanhang").append(
    $("<option>")
      .text("Chọn nhãn hàng")
      .attr("value", 0)
  );
  var url = getip() + "/nhanhang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#selectnhanhang").append(
          $("<option>")
            .text(value.tennhanhang)
            .attr("value", value.idnhanhang)
        );
      });
    }
  });
  $("#selectnhanhang").on("change", function (e) {
    console.log("selectnhanhang vua change gtri:" + this.value);
    load_data(this.value);
  });
}
//load nganh hang, modal them san pham
function loadselect() {
  $("#id_nganh_hang").append(
    $("<option>")
      .text("Chọn ngành hàng")
      .attr("value", 0)
  );
  var url = getip() + "/nganhhang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#id_nganh_hang").append(
          $("<option>")
            .text(value.tennganhhang)
            .attr("value", value.idnganhhang)
        );
      });
    }
  });
  // $("#selectngh").on("change", function(e) {
  //   console.log("selectngh vua change gtri:" + this.value);
  //   load_data(this.value);
  // });
}

//load nganh hang, modal sua sp
function loadselectsuangh() {
  $("#txt_id_nganh_hang").append(
    $("<option>")
      .text("Chọn ngành hàng")
      .attr("value", 0)
  );
  var url = getip() + "/nganhhang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_id_nganh_hang").append(
          $("<option>")
            .text(value.tennganhhang)
            .attr("value", value.idnganhhang)
        );
      });
    }
  });
}
// load nhan hang modal sua san pham
function loadselectsuanh() {
  $("#txt_id_nhan_hang").append(
    $("<option>")
      .text("Chọn nhãn hàng")
      .attr("value", 0)
  );
  var url = getip() + "/nhanhang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_id_nhan_hang").append(
          $("<option>")
            .text(value.tennhanhang)
            .attr("value", value.idnhanhang)
        );
      });
    }
  });
}

// load nhan hang modal them san pham
function loadselectnh() {
  $("#id_nhan_hang").append(
    $("<option>")
      .text("Chọn nhãn hàng")
      .attr("value", 0)
  );
  var url = getip() + "/nhanhang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#id_nhan_hang").append(
          $("<option>")
            .text(value.tennhanhang)
            .attr("value", value.idnhanhang)
        );
      });
    }
  });
}

//them load cty, don vi
function loadselectcty() {
  $("#id_cong_ty").append(
    $("<option>")
      .text("Chọn công ty")
      .attr("value", 0)
  );
  var url = getip() + "/congty";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#id_cong_ty").append(
          $("<option>")
            .text(value.tenCongTy)
            .attr("value", value.idcongty)
        );
      });
    }
  });
}
// load con ty , sua don vi
function loadselectsuacty() {
  $("#txt_id_cong_ty").append(
    $("<option>")
      .text("Chọn công ty")
      .attr("value", 0)
  );
  var url = getip() + "/congty";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_id_cong_ty").append(
          $("<option>")
            .text(value.tenCongTy)
            .attr("value", value.idcongty)
        );
      });
    }
  });
}
// load donvi, kho hang
function loadselectdvi() {
  $("#iddonvi").append(
    $("<option>")
      .text("Chọn đơn vị")
      .attr("value", 0)
  );
  var url = getip() + "/donvi";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#iddonvi").append(
          $("<option>")
            .text(value.ten)
            .attr("value", value.id_don_vi)
        );
      });
    }
  });
}

// load donvi,modal sua kho hang
function loadselectsuadvi() {
  $("#txt_iddonvi").append(
    $("<option>")
      .text("Chọn đơn vị")
      .attr("value", 0)
  );
  var url = getip() + "/donvi";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_iddonvi").append(
          $("<option>")
            .text(value.ten)
            .attr("value", value.id_don_vi)
        );
      });
    }
  });
}
// load nhacc,modal them nhap hang
function loadselectncc() {
  $("#txt_idnhacc").append(
    $("<option>")
      .text("Chọn nhà cung cấp")
      .attr("value", 0)
  );
  var url = getip() + "/nhacungcap";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_idnhacc").append(
          $("<option>")
            .text(value.tenNCC)
            .attr("value", value.idNCC)
        );
      });
    }
  });
}

// load san pham,modal them nhap hang
function loadselectsanpham() {
  $("#txt_idsanpham").append(
    $("<option>")
      .text("Chọn sản phẩm")
      .attr("value", 0)
  );
  var url = getip() + "/sanpham";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_idsanpham").append(
          $("<option>")
            .text(value.ten_san_pham)
            .attr("value", value.id_san_pham)

        );
      });
    }
  });
}
//load san pham, modal dieu chuyen ngang cap
function loadselectsp() {
  $("#loadsp").append(
    $("<option>")
      .text("Tìm kiếm sản phẩm")
      .attr("value", 0)
  );
  var url = getip() + "/sanpham";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#loadsp").append(

          $("<option>")
            .text(value.ten_san_pham)
            .attr({ "value2": value.ma_vach, "value": value.id_san_pham, "value3": value.gia }),

        );
        $("#loadsp").on('change', function () {
          //load ma vach
          document.getElementById('so_luong').value = 1
          var optionSelected = $("option:selected", this).attr('value2');;
          $('#ma_vach').val(optionSelected);
          var optionSelected2 = $("option:selected", this).attr('value3');;

          //load don gia
          $('#don_gia').val(optionSelected2);
          console.log(optionSelected2)
          $('#so_luong').on('change', function () {
            var so_luong = document.getElementById('so_luong').value;
            var tongtien = optionSelected2 * so_luong;
            $('#don_gia').val(tongtien)
          });

        });

      });
    }
  });

}

// load kho hang, trang nhap hang
function loadselectkho() {
  $("#txt_khohang").append(
    $("<option>")
      .text("Chọn kho")
      .attr("value", 0)
  );
  var url = getip() + "/khohang";
  log(url);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      //log('json'+ JSON.stringify(json));
      $.each(json, function (i, value) {
        $("#txt_khohang").append(
          $("<option>")
            .text("", value.tenkho)
            .attr("value", value.idkho)
        );
      });
    }
  });
}

// load kho con
function loadselectkhocon() {
  // $("#txt_khocon").append(
  //   $("<option>")
  //     .text("Chọn kho")
  //     .attr("value", 0)
  // );

}
//load kho dieu chuyen ngang cap tu kho > kho
function loadselectkhodieuchuyenngangcap() {
  $("#txt_khohang").append(
    $("<option>")
      .text("Chọn kho")
      .attr("value", 0)
  );
  var id_nguoi_dung = localStorage.getItem("id")
  var url = getip() + `/nguoidungkho/${id_nguoi_dung}`

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      var levels = json[0]
      // console.log(idkhocha.id_kho_cha)
      var url2 =  getip() + `/cbbkhongangcap/${levels.levels}`
      $.ajax({
        type: "GET",
        url: url2,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json2) {
          console.log(json2)
          $.each(json2, function (i, value) {
            console.log(value)
            $("#txt_khohang").append(
              $("<option>")
                .text(value.ten_kho)
                .attr("value", value.id_kho)
            );
          });
        }
      })
    }
  });
}
function loadselectkhocon() {
  $("#txt_khocon").append(
    $("<option>")
      .text("Chọn kho")
      .attr("value", 0)
  );
  var id_nguoi_dung = localStorage.getItem("id")
  url =  getip() + `/nguoidungkho/${id_nguoi_dung}`
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      var iddv = json[0]
      // // console.log(idkhocha.id_kho_cha)
      var url2 =  getip() + `/cbbkhocon/${iddv.id_dv}`
      $.ajax({
        type: "GET",
        url: url2,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json2) {
          console.log(json2)
          $.each(json2, function (i, value) {
            console.log(value)
            $("#txt_khocon").append(
              $("<option>")
                .text(value.ten_kho)
                .attr("value", value.id_kho)
            );
          });
        }
      })
    }
  });
}
// load san pham thu hoi
function loadselectspthuhoi() {
  $("#txt_spth").append(
    $("<option>")
      .text("Chọn sản phẩm điều chuyển")
      .attr("value", 0)
  );
  // var id_nguoi_dung = localStorage.getItem("id")
  url = `http://10.151.125.155:8081/api/restful/fnphieuthu`
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      var tuidkho = json[0]
      var url2 = `http://10.151.125.155:8081/api/restful/cbbspkhothuhoi/${tuidkho.tu_id_kho}`
      $.ajax({
        type: "GET",
        url: url2,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json2) {
          console.log(json2)
          $.each(json2, function (i, value) {
            console.log(value)
            $("#txt_spth").append(
              $("<option>")
                .text(value.ten_san_pham)
                .attr("value", value.id_san_pham)
            );
          });
        }
      })
    }
  });
}
// load san pham dieu chuyen
function loadselectspdc() {
  $("#txt_spdc").append(
    $("<option>")
      .text("Chọn sản phẩm điều chuyển")
      .attr("value", 0)
  );
  var id_nguoi_dung = localStorage.getItem("id")
  url = `http://10.151.125.151:8081/api/restful/nguoidungkho/${id_nguoi_dung}`
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (json) {
      var idkho = json[0]
      var url2 = `http://10.151.125.155:8081/api/restful/cbbspkho/${idkho.id_kho}`
      $.ajax({
        type: "GET",
        url: url2,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (json2) {
          console.log(json2)
          $.each(json2, function (i, value) {
            console.log(value)
            $("#txt_spdc").append(
              $("<option>")
                .text(value.ten_san_pham)
                .attr("value", value.id_san_pham)
            );
          });
        }
      })
    }
  });
}
