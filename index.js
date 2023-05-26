const input = document.getElementById("input");

var btn_1 = document.getElementById("content")
var x = document.getElementById("pop_up");
x.style.display= "none";

function btn1() {
    var nama = prompt("siapa nama lengkapmu?")
    var noPst = prompt("isikan no peserta (terserah kamu)")
    var tgl = prompt("isikan tanggal lahir kamu (contoh 05-05-2005)")
    var ptn = prompt("isikan PTN tujuanmu (bisa pil 1 / 2)")
    var prodi = prompt("isikan program studi tujuanmu (bisa pil 1 / 2)")
    document.getElementById("value_nama").innerHTML = ": " + nama;
    document.getElementById("value_no_pst").innerHTML = ": " + noPst;
    document.getElementById("value_tgl").innerHTML = ": " + tgl;
    document.getElementById("value_ptn").innerHTML = ": " + ptn;
    document.getElementById("value_prodi").innerHTML = ": " + prodi;

    
    if(x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

    btn_1.style.display= "none";
}

function btn2() {
    x.style.display = "none";
    btn_1.style.display = "flex";
}


$(document).ready(function() {
    $("#clock").countdown('2023/06/20 15:00', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<span class="label label-primary">%w</span> <span class="unit">minggu</span> '
          + '<span class="label label-primary">%d</span> <span class="unit">hari</span> '
          + '<span class="label label-primary">%H</span> <span class="unit">jam</span> '
          + '<span class="label label-primary">%M</span> <span class="unit">menit</span> '
          + '<span class="label label-primary">%S</span> <span class="unit">detik</span>'));
    });
});