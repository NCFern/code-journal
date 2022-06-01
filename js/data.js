/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var lastEntries = localStorage.getItem('previousEntries');

if (lastEntries !== null) {
  data = JSON.parse(lastEntries);
}

function saveFullEntries(event) {
  window.localStorage.setItem('previousEntries', JSON.stringify(data));
}

window.addEventListener('beforeunload', saveFullEntries);
