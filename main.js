const inputFile = document.getElementById("inputFile");
const dropZone = document.getElementById("dropZone");
const selectMenu = document.querySelector("select");

// submit btn
const convertBtn = document.getElementById("convertBtn");

// TODO:
//  add event listener to submit btn
//  when submit btn is clicked, run convert function
//  convert function should take the file from the input field and from the input
// make file selection work
// make drag and drop work
// make convert button work
// make download button work

// drop function----------------------------
dropZone.addEventListener("click", (e) => {
  inputFile.click();
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  console.log(file);
  inputFile.files = e.dataTransfer.files;
});

inputFile.addEventListener("change", (e) => {
  console.log(inputFile.files);
});
// --------------------------------------------

selectMenu.addEventListener("change", (e) => {
  const selectedOption = e.target.value;
  console.log(selectedOption);
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
    console.log("convert btn clicked");
});
