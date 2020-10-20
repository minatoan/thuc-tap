function load_data() {
  console.log("load_data");
  // var url = getip() + "/nhacungcap"; 
  // var url = "https://apisvtt.mobifone9.vn/api/restful/khohangsanpham";   
  var idnguoidung = localStorage.getItem("id")
  var url = getip() + "/khohangsanpham/" + "/" + idnguoidung; 

  $.ajax({
    url: url,
    method: "GET",
    dataType: 'json',
    success: function (data) {
      console.log(data)
      var tr;
      var s = data.length;
      for (let i = 0; i < s; i++) {
        stt = i + 1;
        tr = $('<tr/>');
        tr.append("<td>" + stt + "</td>")
        tr.append("<td>" + data[i].idsanpham + "</td>")
        tr.append("<td>" + data[i].tensanpham + "</td>")
        tr.append("<td>" + data[i].soluong + "</td>")
        tr.append("<td><class='btn' onclick='xemthongtinchitiet()'><i class='fa fa-info-circle' style='color:blue'></td>")
        // tr.append("<td>" + obj2[i].ghi_chu + "</td>")
        $('#table').append(tr);
      }
    }
  })
}
function xemthongtinchitiet() {
  var table = document.getElementById("table");
  if (table) {
    for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        tableText(this);
      };
    }
  }
}
function tableText(tableRow) {
  var idsanpham = tableRow.childNodes[1].innerHTML;
  var obj = { 'idsanpham': idsanpham };
  var toSearch = obj.idsanpham
  var idnguoidung = localStorage.getItem("id")
  var url = getip() + "/khohangsanpham/" + "/" + idnguoidung
  $.ajax({
    url: url,
    method: "GET",
    dataType: 'json',
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        // look for the entry with a matching `code` value
        if (data[i].idsanpham == toSearch) {
          console.log(data[i].idkhosanpham + "id kho san pham ")
          var urltest = getip() + "/sanphamkho/" + `${data[i].idkhosanpham}` + `/${obj.idsanpham}`
        }
      }

      //  console.log(urltest)
      localStorage.setItem("urltest", urltest)
      console.log(localStorage.getItem("urltest"))
      window.location.href = "/modules/danhmuc/chitietkhosp.html";
    }
  })

}







$(document).ready(function () {
  load_data();
});



