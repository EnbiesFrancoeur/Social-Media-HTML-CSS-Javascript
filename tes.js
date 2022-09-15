var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length = 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.lenth; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namapenumpang) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
            }
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}