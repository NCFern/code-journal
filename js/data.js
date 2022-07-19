/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('previousEntries');

if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}

window.addEventListener('beforeUnload', saveEntries);

function saveEntries(event) {
  window.localStorage.setItem('previousEntries', JSON.stringify(data));
}
