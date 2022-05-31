/* global data */

// take image from input-photo (url) and show it on photo-preview //

// make querySelector to target the input-photo image //
// addEventListener to listen for inputs //

// make 2 query selectors to take photo and show it//

var imageInput = document.querySelector('.url');
var imageOutput = document.querySelector('.photoPreview');

imageInput.addEventListener('input', inputImage);
imageOutput.addEventListener('input', outputImage);

function inputImage(event) {
  if (imageInput.value !== '') {
    data.push(imageInput.value);
  }
  imageInput.value = '';
  outputImage();
}

function outputImage(event) {

}

var entryForm = document.querySelector('#new-entry-form');

function handleEntryForm(event) {
  event.preventDefault();
  // var entryFull = {
  //   title: entryForm.elements.title.value,
  //   photoURL: entryForm.elements.url.value,
  //   notes: entryForm.elements.notes.value
  // };
  // console.log('entryFull', entryFull);
  entryForm.reset();
}

entryForm.addEventListener('submit', handleEntryForm);
