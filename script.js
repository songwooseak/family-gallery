
document.addEventListener("DOMContentLoaded", () => {
  fetch("images.json")
    .then((response) => response.json())
    .then((images) => {
      const gallery = document.getElementById("gallery");
      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "가족사진";
        gallery.appendChild(img);
      });
    })
    .catch((error) => {
      console.error("이미지 로딩 실패:", error);
    });
});
