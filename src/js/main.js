const url = document.querySelector("#url");
const btnQR = document.querySelector(".btnqr");
const container = document.querySelector("label");

btnQR.addEventListener("click", function () {
  const notUrl = document.querySelector(".notUrl");
  if (url.value === "") {
    if (!notUrl) {
      container.insertAdjacentHTML(
        "afterend",
        '<p class="notUrl text-xs mt-2 text-F2F5F9">*This URL is required</p>'
      );
    }
  } else {
    if (notUrl) {
      notUrl.remove();
    }
    sessionStorage.setItem("url", url.value);
    window.location.href = "./qr.html";
  }
});
