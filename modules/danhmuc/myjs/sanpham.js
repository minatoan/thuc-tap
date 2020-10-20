function load_data(idnhanhang) { 
  if (idnhanhang)
  {
    var url = getip() + "/sanpham/nhanhang/"+idnhanhang;
  }
  else
  {
    var url = getip() + "/sanpham/";
  }
// function load_data(idnganhhang, idnhanhang) { 
//   if (idnganhhang)
//   {
//     var url = getip() + "/sanpham/nganhhang"+idnganhhang;
//   }
//   else if(idnhanhang){
//     var url = getip() + "/sanpham/nhanhang/"+idnhanhang;
//   }
//   else
//   {
//     var url = getip() + "/sanpham/";
//   }
  log(url);
  tableload(url);
}
function them() {
  var url = getip() + "/sanpham/";
  var sanpham = {};
  sanpham.ten_san_pham = $("#txt_ten_san_pham").val();
  sanpham.ma_vach = $("#txt_ma_vach").val();
  sanpham.model = $("#txt_model").val();
  sanpham.gia = $("#txt_gia").val();
  sanpham.dvt = $("#txt_dvt").val();
  sanpham.ghi_chu = $("#txt_ghi_chu").val();
  sanpham.id_nhan_hang = $("#id_nhan_hang").val();
  sanpham.id_nganh_hang = $("#id_nganh_hang").val();
  var sanphamObj = JSON.stringify(sanpham);
  log(url);
  $.ajax({
    url: url,
    method: "POST",
    data: sanphamObj,
    contentType: "application/json; charset=utf-8",
    success: function() {     
      toastr.success("Thêm thành công");
      var url = getip() + "/sanpham";
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

function del(id_san_pham) {
  bootbox.confirm({
    message: "Bạn muốn xóa không?",
    buttons: {
      confirm: {
        label: "Đồng Ý",
        className: "btn-success"
      },
      cancel: {
        label: "Thoát",
        className: "btn-danger"
      }
    },
    callback: function (result) {
      console.log("This was logged in the callback: " + result);
      if (result) {
        var url = getip() + "/sanpham/";
        log(url);
        $.ajax({
          url: url + id_san_pham,
          method: "DELETE",
          success: function () {
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
function XemchitietFormatter(value, row, index) {
  return (
    '<button type="button" onclick="Redirect(' +
    value +
    ')" class="btn"><i class="fa fa-info-circle" style="color:blue"></i></button> '
    
  );
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
function QRcodeFormatter(value, row, index) {
  return (
    '<button type="button" data-toggle="modal" data-target="#myModalsua" onclick="edit(' +
    value +
    ')" class="btn"><i class="fa fa-qrcode" style="color:green"></i></button>  '
  );
}
function edit(id) {
  var url = getip() + "/sanpham/" + id;
  console.log("url: " + url);
  $.getJSON(url, function (data) {
    //alert (data.id_san_pham)
    //console.log("data:" + JSON.stringify(data));
    //console.log(data[0].dvt)  
    $(".card-body #id_san_pham").val(data[0].id_san_pham);
    $(".card-body #ten_san_pham").val(data[0].ten_san_pham);
    $(".card-body #ma_vach").val(data[0].ma_vach);
    $(".card-body #gia").val(data[0].gia);
    $(".card-body #donvitinh").val(data[0].dvt);
    $(".card-body #txt_id_nganh_hang").val(data[0].id_nganh_hang);
    $(".card-body #txt_id_nhan_hang").val(data[0].id_nhan_hang);
    $(".card-body #model").val(data[0].model);
    $(".card-body #ghi_chu").val(data[0].ghi_chu);
  });

}
function luu(id_san_pham) {
  var sanpham = {};
  sanpham.ten_san_pham = $("#ten_san_pham").val();
  sanpham.gia = $("#gia").val();
  sanpham.dvt = $("#donvitinh").val();
  sanpham.ma_vach = $("#ma_vach").val();
  sanpham.id_nganh_hang = $("#txt_id_nganh_hang").val();
  sanpham.id_nhan_hang = $("#txt_id_nhan_hang").val();
  sanpham.model = $("#model").val();
  sanpham.ghi_chu = $("#ghi_chu").val();
  sanpham.id_san_pham = $("#id_san_pham").val();
  var id_san_pham = $("#id_san_pham").val();
  var sanphamObj = JSON.stringify(sanpham);
  var url = getip() + "/sanpham/";
  $.ajax({
    url: url + id_san_pham,
    method: "PUT",
    data: sanphamObj,
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
function Redirect(id) {
  window.location="chitietsanpham.html?id="+id;
}
$(document).ready(function () {
  load_data();
  loadselectnganhhang();
  loadselectnhanhang();
  loadselect();
  loadselectnh();
  loadselectsuangh();
  loadselectsuanh();
});
