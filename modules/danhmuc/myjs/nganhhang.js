function load_data() {
    console.log("load_data");
    var url = getip() + "/nganhhang";
    log(url);
    tableload(url) ;
    // $.ajax({
    //   type: "GET",
    //   url: url,
    //   success: function(response) {
    //     //alert(response);
    //     console.log("json:" + JSON.stringify(response));
    //     //var mydata = JSON.stringify(response);
    //     var $table = $("#table");
    //     $table.bootstrapTable({
    //       data: response
    //     });
    //   }
    // });

}
function them() {
    console.log("them: 123 ");
    var url = getip() + "/nganhhang/";
    var nganhhang = {};
    nganhhang.tennganhhang = $("#txttennganhhang").val();
    var nganhhangObj = JSON.stringify(nganhhang);
    log(url);
    $.ajax({
      url: url,
      method: "POST",
      data: nganhhangObj,
      contentType: "application/json; charset=utf-8",
      success: function() {
        toastr.success("Thêm thành công");
        var url = getip() + "/nganhhang";
        tableload(url) ;
      },
      error: function(error) {
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
      callback: function(result) {
        console.log("This was logged in the callback: " + result);
        if (result) {
          var url = getip() + "/nganhhang/";
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
  
  
  
  function edit(id) {
    var url = getip() + "/nganhhang/" + id;
    console.log("url: " + url);
    $.getJSON(url, function(data) {
      console.log("data:" + JSON.stringify(data));
      var obj = JSON.parse(JSON.stringify(data));
      console.log(obj.idnganhhang);
      $(".card-body #idnganhhang").val(obj.idnganhhang);
      $(".card-body #tennganhhang").val(obj.tennganhhang);
    });
  }
  function luu(idnganhhang) {
    var nganhhang = {};
    nganhhang.tennganhhang = $("#tennganhhang").val();
    var idnganhhang = $("#idnganhhang").val();
    var nganhhangObj = JSON.stringify(nganhhang);
    var url = getip() + "/nganhhang/";
    $.ajax({
      url: url + idnganhhang,
      method: "PUT",
      data: nganhhangObj,
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

$(document).ready(function() {
    load_data() ;
});


