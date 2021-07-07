
// Create a Browser Data Store
const db = indexedDB.open("budget_tracker", 1);

request.onupgradeneeded = ({ target }) => {
const db = target.result;
const objectStore = db.createObjectStore("toDoList");
};

// On success console the result.
request.onsuccess = event => {
console.log(request.result);
};