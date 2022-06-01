/* global data */

// create an entry //
var $form = document.querySelector('#new-entry-form');
var $showImage = document.querySelector('.photoPreview');
var $photoURL = document.querySelector('#input-photo');

// $photoURL.addEventListener('input', addImage);
// function addImage(event) {
//   $showImage.setAttribute('src', event.target.value);
// }

function inputImage(event) {
  if ($photoURL.value !== '') {
    $showImage.setAttribute('src', $photoURL.value);
  } else {
    $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

$photoURL.addEventListener('input', inputImage);

function saveForm(event) {
  event.preventDefault();
  var entryFull = {
    entryId: data.nextEntryId,
    title: $form.elements.title.value,
    photoURL: $form.elements.url.value,
    notes: $form.elements.notes.value
  };
  data.entries.unshift(entryFull);
  data.nextEntryId++;
  $form.reset();
}

$form.addEventListener('submit', saveForm);
