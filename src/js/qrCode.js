const btnDownload = document.querySelector(".download");
const btnShare = document.querySelector(".share");
const QR = document.querySelector("#qrcode");
const url = sessionStorage.getItem("url");

var qrcode = new QRCode(QR);

if (url && !url.length == 0) {
  qrcode.makeCode(url);
} else {
  qrcode.clear();
}

const downloadQR = () => {
  const imageURL = document.querySelector("#qrcode img").src;
  const filename = `QR${Date.now()}.jpg`;

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = filename;

  link.click();

  link.remove();
};

const copyQR = () => {
  const imageURL = document.querySelector("#qrcode img").src;
  const share = btnShare.innerHTML;
  navigator.clipboard
    .writeText(imageURL)
    .then(() => {
      btnShare.textContent = "Copied!";
      setTimeout(() => {
        btnShare.innerHTML = share;
      }, 600);
    })
    .catch((error) => {
      alert("Failed to copy");
      console.log(error);
    });
};

btnDownload.addEventListener("click", downloadQR);
btnShare.addEventListener("click", copyQR);
