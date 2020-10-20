function load_data() {
  console.log("load_data");
  var url = getip() + "/nhanhang";
  log(url);
  tableload(url);

}
function themnhanhang() {
  console.log("them: 123 ");
  var url = getip() + "/nhanhang/";
  var nhanhang = {};
  nhanhang.tennhanhang = $("#txttennhanhang").val();
  var nhanhangObj = JSON.stringify(nhanhang);
  log(url);
  $.ajax({
    url: url,
    method: "POST",
    data: nhanhangObj,
    contentType: "application/json; charset=utf-8",
    success: function() {
      toastr.success("Thêm thành công");
      var url = getip() + "/nhanhang";
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
        var url = getip() + "/nhanhang/";
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
  var url = getip() + "/nhanhang/" + id;
  console.log("url: " + url);
  $.getJSON(url, function(data) {
    console.log("data:" + JSON.stringify(data));
    var obj = JSON.parse(JSON.stringify(data));
    console.log(obj.idnhanhang);
    $(".card-body #idnhanhang").val(obj.idnhanhang);
    $(".card-body #tennhanhang").val(obj.tennhanhang);
  });
}
function luu(idnhanhang) {
  var nhanhang = {};
  nhanhang.tennhanhang = $("#tennhanhang").val();
  var idnhanhang = $("#idnhanhang").val();
  var nhanhangObj = JSON.stringify(nhanhang);
  var url = getip() + "/nhanhang/";
  $.ajax({
    url: url + idnhanhang,
    method: "PUT",
    data: nhanhangObj,
    contentType: "application/json; charset=utf-8",
    success: function() {
      // bootbox.alert('Sửa thành công');
      toastr.success("Sửa thành công");
      load_data();
    },
    error: function(error) {
      bootbox.alert("Sửa không thành công");
    }
  });
}

$(document).ready(function() {
  load_data();
});

// var $table = $('#kwdata');
// $(function() {

//     $table.bootstrapTable({
//         data: exportData
//     });
//     $table.bootstrapTable('togglePagination');
// });

//Amend Data Array
function removeCsvEntry(object, key, value) {
  $.each(object, function(index) {
    $.each(this, function(k, v) {
      if (k == key && v == value) {
        object.splice(index, 1);
      }
    });
  });
  return object;
}
//Initialise Bootstrap Table

//Delete Keywords from Table & Array

$("#kwdata").on("click", ".remove", function() {
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
