/* global data */

// create an entry //
var $form = document.querySelector('#new-entry-form');
var $showImage = document.querySelector('.photoPreview');
var $photoURL = document.querySelector('#input-photo');

function inputImage(event) {
  if ($photoURL.value !== '') {
    $showImage.setAttribute('src', $photoURL.value);
  } else {
    $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

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

$photoURL.addEventListener('input', inputImage);
$form.addEventListener('submit', saveForm);

/// ///////////////////

// var $previousEntries = localStorage.getItem('javascript-local-storage');

// if (previousEntries !== null) {
//   data = JSON.parse(previousEntries);
// }
