/* global data */

// create an entry: show image and submit form //
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

// view an entry: entry to templete //
// create a DOM tree (look at DOM Creation exercise) //

// function renderEntry(entry) {

//   var $entryList = document.createElement('li');
//   $entryList.setAttribute('class', 'list');

//   var $entryRow = document.createElement('div');
//   $entryRow.setAttribute('class', 'row');

//   var $entryColumn = document.createElement('div');
//   $entryColumn.setAttribute('class', 'column-half');

//   var $entryImage = document.createElement('img');
//   $entryImage.setAttribute('src', OHW.imageURL);

//   var $entryTitle = document.createElement('h2');
//   $entryTitle.textContent = OHW.title;

//   var $entryNotes = document.createElement('p');
//   $entryNotes.textContent = OHW.Notes;

// appendChild material goes here //
