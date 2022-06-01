/* global data */

// create an entry, show image, and submit form //
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
  $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');
}

$form.addEventListener('submit', saveForm);
