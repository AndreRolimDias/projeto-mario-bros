const btnTrailer = document.querySelector(".btn-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");
function alternarModal() {
  modal.classList.toggle("aberto");
}

btnTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});
