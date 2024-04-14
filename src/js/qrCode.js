const btnDownload = document.querySelector(".download");
const btnShare = document.querySelector(".share");
const QR = document.querySelector("#qrcode");

const url = sessionStorage.getItem("url");

var qrcode = new QRCode(QR);

qrcode.makeCode(url);
// qrcode.clear();
