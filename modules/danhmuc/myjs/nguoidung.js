function load_data() {
  console.log("load_data");
  var url = getip() + "/nguoidung";
  log(url);
  tableload(url);
  loadselectcty();
  loadselectsuacty();
}
function them() {
  console.log("them: 123 ");
  var url = getip() + "/nguoidung/";
  var nguoidung = {};
  nguoidung.ten_nguoi_dung = $("#txt_ten_nguoi_dung").val();
  nguoidung.ten_dang_nhap = $("#txt_ten_dang_nhap").val();
  nguoidung.mat_khau = $("#txt_mat_khau").val();
  nguoidung.id_cong_ty = $("#id_cong_ty").val();
  nguoidung.tencongty = $("#id_cong_ty").val();
  nguoidung.id_nhom = $("#id_nhom").val();
  var nguoidungObj = JSON.stringify(nguoidung);
  log(url);
  $.ajax({
    url: url,
    method: "POST",
    data: nguoidungObj,
    contentType: "application/json; charset=utf-8",
    success: function () {
      toastr.success("Thêm thành công");
      var url = getip() + "/nguoidung";
      tableload(url);
    },
    error: function (error) {
      toastr.success("Thêm không thành công");
    }
  });
}
function del(id) {
  bootbox.confirm({
    message: "Bạn muốn xóa không?",
    buttons: {
      confirm: {
        label: "Yes",
        className: "btn-success"
      },
      cancel: {
        label: "No",
        className: "btn-danger"
      }
    },
    callback: function (result) {
      console.log("This was logged in the callback: " + result);
      if (result) {
        var url = getip() + "/nguoidung/";
        log(url);
        $.ajax({
          url: url + id,
          method: "DELETE",
          success: function () {
            toastr.success("Xóa thành công");
            load_data();
          },
          error: function (error) {
            toastr.success("Xóa không thành công");
          }
        });
      }
    }
  });
}

function ThaotacFormatter(value, row, index) {
  return (
    '<button type="button" data-toggle="modal" data-target="#myModalsua" onclick="edit(' +
    value +
    ')" class="btn"><i class="fa fa-edit" style="color:orange"></i></button>  <button type="button" onclick="del(' +
    value +
    ')" class="btn"><i class="fa fa-trash" style="color:red"></i></button> '
  );
}
function edit(id) {
  var url = getip() + "/nguoidung/" + id;
  console.log("url: " + url);
  $.getJSON(url, function (data) {
    console.log("data:" + JSON.stringify(data));
    var obj = JSON.parse(JSON.stringify(data));
    console.log(obj.id);
    $(".card-body #id").val(obj.id);
    $(".card-body #ten_dang_nhap").val(obj.ten_dang_nhap);
    $(".card-body #mat_khau").val(obj.mat_khau);
    $(".card-body #ten_nguoi_dung").val(obj.ten_nguoi_dung);
    $(".card-body #txt_id_cong_ty").val(obj.id_cong_ty);
    $(".card-body #chuc_vu").val(obj.chuc_vu);
    $(".card-body #id_nhom").val(obj.id_nhom);
  });
}
function luu(id) {
  var nguoidung = {};
  var id = $("#id").val(); 
  nguoidung.id = id;
  nguoidung.ten_nguoi_dung = $("#ten_nguoi_dung").val();
  nguoidung.ten_dang_nhap = $("#ten_dang_nhap").val();
  nguoidung.mat_khau = $("#mat_khau").val();
  nguoidung.chuc_vu = $("#chuc_vu").val();
  nguoidung.id_cong_ty = $("#txt_id_cong_ty").val();
  nguoidung.tencongty = $("#txt_id_cong_ty").val();
  nguoidung.id_nhom = $("#id_nhom").val();
  

  var nguoidungObj = JSON.stringify(nguoidung);
  var url = getip() + "/nguoidung/";
  $.ajax({
    url: url + id,
    method: "PUT",
    data: nguoidungObj,
    contentType: "application/json; charset=utf-8",
    success: function () {
      toastr.success("Sửa thành công");
      load_data();
    },
    error: function (error) {
      bootbox.alert("Sửa không thành công");
    }
  });
}
$(document).ready(function () {
  load_data();
  function removeCsvEntry(object, key, value) {
    $.each(object, function (index) {
      $.each(this, function (k, v) {
        if (k == key && v == value) {
          object.splice(index, 1);
        }
      });
    });
    return object;
  }
  //Initialise Bootstrap Table
  //Delete Keywords from Table & Array
  $("#kwdata").on("click", ".remove", function () {
    $(this)
      .closest("tr")
      .remove();
    kwRemove = $(this)
      .parents("tr")
      .attr("data-uniqueid");
    exportData = removeCsvEntry(exportData, "Keyword", kwRemove);
    console.log(exportData);
    console.log(kwRemove);
  });
});
