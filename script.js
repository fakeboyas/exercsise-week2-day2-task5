let arr = [
    "3 butir telur ayam",
    "100 ml air",
    "1 sendok makan tepung tapioka/sagu",
    "secukupnya Garam & penyedap",
    "Tusukan sate",
];

for (i = 0; i < arr.length; i++) {
    let li = document.createElement("LI");
    let isi = document.createTextNode(arr[i]);
    li.appendChild(isi);
    document.getElementById("list").appendChild(li);
}

//muculkan Gambar
let data = document.getElementById("tampil");
data.setAttribute("src", "./asset/img/telurgulung.jpg");
data.setAttribute("width", "200");
data.setAttribute("height", "200");
data.setAttribute("alt", "Telur Gulung");
