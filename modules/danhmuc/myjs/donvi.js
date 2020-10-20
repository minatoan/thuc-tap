function load_data() {
  console.log("load_data");
  var url = getip() + "/donvi";
  log(url);
  tableload(url);

}
//them
function them() {
  var url = getip() + "/donvi/";
  var donvi = {};
  donvi.ten = $("#txtten").val();
  donvi.cap = $("#txtcap").val();
  donvi.capcha = $("#txtcapcha").val();
  donvi.id_cong_ty = $("#id_cong_ty").val();
  donvi.tencty = $("#id_cong_ty").val();
  var donviObj = JSON.stringify(donvi);
  log(url);
  $.ajax({
    url: url,
    method: "POST",
    data: donviObj,
    contentType: "application/json; charset=utf-8",
    success: function() {     
      toastr.success("Thêm thành công");
      var url = getip() + "/donvi";
      tableload(url);
    },
    error: function(error) {
      bootbox.alert({
        message: "Thêm không thành công",
        size: "small"
      });
    }
  });
}
//sua
function edit(id) {
  var url = getip() + "/donvi/" + id;
  console.log("url: " + url);
  $.getJSON(url, function(data) {
    console.log("data:" + JSON.stringify(data));
    var obj = JSON.parse(JSON.stringify(data));
    console.log(obj.id_don_vi);
    $(".card-body #id_don_vi").val(obj.id_don_vi);
    $(".card-body #ten").val(obj.ten);
    $(".card-body #cap").val(obj.cap);
    $(".card-body #capcha").val(obj.capcha);
    $(".card-body #txt_id_cong_ty").val(obj.id_cong_ty);
    // $(".card-body #tencty").val(obj.tencty);
  });
}
function luu(id_don_vi) {
  var donvi = {};
  donvi.ten = $("#ten").val();
  donvi.cap = $("#cap").val();
  donvi.capcha = $("#capcha").val();
  donvi.ma_vach = $("#ma_vach").val();
  donvi.id_cong_ty = $("#txt_id_cong_ty").val();
  donvi.id_don_vi = $("#id_don_vi").val();
  var id_don_vi = $("#id_don_vi").val();
  var donviObj = JSON.stringify(donvi);
  var url = getip() + "/donvi/";
  $.ajax({
    url: url + id_don_vi,
    method: "PUT",
    data: donviObj,
    contentType: "application/json; charset=utf-8",
    success: function() {
      // bootbox.alert('Sửa thành công');
      toastr.success("Sửa thành công");
      load_data() ;
    },
    error: function(error) {
      bootbox.alert("Sửa không thành công");
    }
  });
}
//xoa
function del(id) {
  bootbox.confirm({
    message: "Bạn muốn xóa không?",
    buttons: {
      confirm: {
        label: "Có",
        className: "btn-success"
      },
      cancel: {
        label: "Không",
        className: "btn-danger"
      }
    },
    callback: function(result) {
      console.log("This was logged in the callback: " + result);
      if (result) {
        var url = getip() + "/donvi/";
        log(url);
        $.ajax({
          url: url + id,
          method: "DELETE",
          success: function() {
            // bootbox.alert('Xóa thành công');
            toastr.success("Xóa thành công");
            load_data();
          },
          error: function(error) {
            bootbox.alert("Xóa không thành công");
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

$(document).ready(function() {
  load_data();
  loadselectcty();
  loadselectsuacty();
});

