/* global data */

var $photo = document.querySelector('#user-photo');
var $showImage = document.querySelector('.placeholder');
var $form = document.querySelector('#new-form');

$photo.addEventListener('input', showPicture);

function showPicture(event) {
  if ($photo.value !== '') {
    $showImage.setAttribute('src', $photo.value);
  } else {
    $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

$form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  var submitEntry = {
    entryId: data.nextEntryId,
    title: $form.elements.title.value,
    imgURL: $form.elements.photo.value,
    notes: $form.elements.notes.value
  };
  data.entries.unshift(submitEntry);
  data.nextEntryId++;
  $form.reset();
  $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');
}
