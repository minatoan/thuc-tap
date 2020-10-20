function load_data() {
  console.log("load_data");
  var url = getip() + "/khohang/";
  // var url ="http://10.151.125.148:8081/api/restful/khohang";
  log(url);
  tableload(url);

}
function them() {

  var url = getip() + "/khohang/";
  var khohang = {};
  khohang.tenkho = $("#txttenkho").val();
  khohang.thukho = $("#txtthukho").val();
  khohang.ngaylap = $("#txtngaylap").val();
  // khohang.cap = $("#cap").val();
  // khohang.capcha = $("#capcha").val();    
  khohang.ngaycapnhat = $("#txtngaycapnhat").val();
  // khohang.diachi = $("#diachi").val();
  // khohang.sdt = $("#sdt").val();
  khohang.id_cong_ty = $("#id_cong_ty").val();
  khohang.tencty = $("#id_cong_ty").val();
  khohang.iddonvi = $("#iddonvi").val();
  khohang.tendonvi = $("#tendonvi").val();
  var khohangObj = JSON.stringify(khohang);

  log(url);
  $.ajax({
    url: url,
    method: "POST",
    data: khohangObj,
    contentType: "application/json; charset=utf-8",
    success: function () {
      toastr.success("Thêm thành công");
      var url = getip() + "/khohang";
      tableload(url);
    },
    error: function (error) {
      bootbox.alert({
        message: "Thêm không thành công",
        size: "small"
      });
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
        var url = getip() + "/khohang/";
        log(url);
        $.ajax({
          url: url + id,
          method: "DELETE",
          success: function () {
            // bootbox.alert('Xóa thành công');
            toastr.success("Xóa thành công");
            load_data();
          },
          error: function (error) {
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


function edit(idkho) {
  var url = getip() + "/khohang/" + idkho;
  console.log("url: " + url);
  $.getJSON(url, function(data) {
    // console.log("data:" + JSON.stringify(data));
    // var obj = JSON.parse(JSON.stringify(data));
    // console.log(obj.idkho);
    console.log(data[0].dvt)  ;
    $(".card-body #idkho").val(data[0].idkho);
    $(".card-body #tenkho").val(data[0].tenkho);
    $(".card-body #thukho").val(data[0].thukho);
    $(".card-body #ngaylap").val(data[0].ngaylap);
    $(".card-body #ngaycapnhat").val(data[0].ngaycapnhat);
    $(".card-body #txt_iddonvi").val(data[0].iddonvi);
    $(".card-body #id_cong_ty").val(data[0].idcongty);
    
    
  });
}
function luu(idkho) {
  var khohang = {};
  khohang.tenkho = $("#tenkho").val();
  khohang.thukho = $("#thukho").val();
  khohang.ngaylap = $("#ngaylap").val();
  khohang.ngaycapnhat = $("#ngaycapnhat").val();
  khohang.iddonvi = $("#txt_iddonvi").val();
  khohang.idcongty = $("#id_cong_ty").val();
  khohang.sdt = $("#sdt").val();
  khohang.diachi = $("#diachi").val();
  khohang.cap = $("#cap").val();
  khohang.capcha = $("#capcha").val();
  khohang.tencty = $("#tencty").val();
  khohang.tendonvi = $("#tendonvi").val();
  khohang.idkho = $("#idkho").val();

  var idkho = $("#idkho").val();
  var khohangObj = JSON.stringify(khohang);
  var url = getip() + "/khohang/";
  $.ajax({
    url: url + idkho,
    method: "PUT",
    data: khohangObj,
    contentType: "application/json; charset=utf-8",
    success: function () {
      // bootbox.alert('Sửa thành công');
      toastr.success("Sửa thành công");
      load_data();
    },
    error: function (error) {
      bootbox.alert("Sửa không thành công");
    }
  });
}

$(document).ready(function() {
  load_data() ;
  loadselectcty();
  loadselectdvi();
  loadselectsuadvi();
});


