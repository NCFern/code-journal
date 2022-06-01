/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('javascript-local-storage');

if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}

function tasks(event) {
  window.localStorage.setItem('previousEntries', JSON.stringify(data));
}

window.addEventListener('beforeunload', tasks);
