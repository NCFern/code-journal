/* global data */

// create an entry: show image and submit form //

var $form = document.querySelector('#new-entry-form');
var $showImage = document.querySelector('.photoPreview');
var $photoURL = document.querySelector('#input-photo');

$photoURL.addEventListener('input', inputImage);
function inputImage(event) {
  if ($photoURL.value !== '') {
    $showImage.setAttribute('src', $photoURL.value);
  } else {
    $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

$form.addEventListener('submit', saveForm);
function saveForm(event) {
  event.preventDefault();
  var entryFull = {
    entryId: data.nextEntryId,
    title: $form.elements.title.value,
    imgURL: $form.elements.url.value,
    notes: $form.elements.notes.value
  };
  data.entries.unshift(entryFull);
  data.nextEntryId++;
  $form.reset();
  $showImage.setAttribute('src', 'images/placeholder-image-square.jpg');

  // new content- can view new entries//

  var $selectContainer = document.querySelector('ul');
  $selectContainer.prepend(renderEntry(data.entries[0]));

  if (data.entries.length !== 0) {
    var $showNoRecord = document.querySelector('.set-entries');
    $showNoRecord.classList.add('hidden');
  }
  switchViews();
}

// view an entry: entry to templete //

function renderEntry(entry) {

  var $entryList = document.createElement('li');

  var $entryRow = document.createElement('div');
  $entryRow.setAttribute('class', 'row');

  var $entryColumn = document.createElement('div');
  $entryColumn.setAttribute('class', 'column-half');

  var $entryImage = document.createElement('img');
  $entryImage.setAttribute('src', entry.imgURL);

  var $entry2Column = document.createElement('div');
  $entry2Column.setAttribute('class', 'column-half');

  var $entryTitle = document.createElement('h2');
  $entryTitle.textContent = entry.title;

  var $entryNotes = document.createElement('p');
  $entryNotes.textContent = entry.notes;

  $entryList.appendChild($entryRow);
  $entryRow.appendChild($entryColumn);
  $entryColumn.appendChild($entryImage);
  $entryRow.appendChild($entry2Column);
  $entry2Column.appendChild($entryTitle);
  $entry2Column.appendChild($entryNotes);

  return $entryList;
}

window.addEventListener('loadDomContent', loadDomTree);
function loadDomTree(event) {
  var $chooseContainer = document.querySelector('.ul');
  for (var i = 0; data.entries.length; i++) {
    var $appendEntireEntry = renderEntry(data.entries[i]);
    $chooseContainer.appendChild($appendEntireEntry);
  }
}

// View Switch- click new to go to new entry //

var $view = document.querySelectorAll('.view');
var $entriesNavigator = document.querySelector('.header-entries');
var $newButton = document.querySelector('#anchor');

$entriesNavigator.addEventListener('click', switchViews);
$newButton.addEventListener('click', makeNewEntry);

function switchViews(event) {
  for (var j = 0; j < $view.length; j++) {
    if ($view[j].getAttribute('data-view') === 'entry-form') {
      $view[j].className = 'view hidden';
    } else if ($view[j].getAttribute('data-view') !== 'entry-form') {
      $view[j].className = 'view';
    }
  }
}

function makeNewEntry(event) {
  for (var j = 0; j < $view.length; j++) {
    if ($view[j].getAttribute('data-view') === 'entry-form') {
      $view[j].className = 'view';
    } else if ($view[j].getAttribute('data-view') !== 'entry-form') {
      $view[j].className = 'view hidden';
    }
  }
}
