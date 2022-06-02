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

  // new content- can view new entries//

  // var $selectContainer = document.querySelector('ul');
  // $selectContainer.prepend(renderEntry(data.entries[0]));

  // if (data.entries.length === 1) {
  //   var $showNoRecord = document.querySelector('set-entries');
  //   $showNoRecord.className = 'hidden';
  // }
  // viewEntries();
}

$form.addEventListener('submit', saveForm);

// view an entry: entry to templete //

function renderEntry(entry) {

  var $entryList = document.createElement('li');

  var $entryRow = document.createElement('div');
  $entryRow.setAttribute('class', 'row');

  var $entryColumn = document.createElement('div');
  $entryColumn.setAttribute('class', 'column-half');

  var $entryImage = document.createElement('img');
  $entryImage.setAttribute('src', entry.imageURL);

  var $entry2Column = document.createElement('div');
  $entry2Column.setAttribute('class', 'column-2-half');

  var $entryTitle = document.createElement('h2');
  $entryTitle.textContent = entry.title;

  var $entryNotes = document.createElement('p');
  $entryNotes.textContent = entry.Notes;

  $entryList.appendChild($entryRow);
  $entryRow.appendChild($entryColumn);
  $entryColumn.appendChild($entryImage);
  $entryRow.appendChild($entry2Column);
  $entry2Column.appendChild($entryTitle);
  $entry2Column.appendChild($entryNotes);

  return $entryList;
}

function loadDomTree(event) {
  var $chooseContainer = document.querySelector('.ul');
  for (var i = 0; data.entries.length; i++) {
    var $appendEntireEntry = renderEntry(data.entries[i]);
    $chooseContainer.appendChild($appendEntireEntry);
  }
}

window.addEventListener('loadDomContent', loadDomTree);
