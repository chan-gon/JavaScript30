const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // check if there is an item on the storage
const clearAll = document.querySelector("[data-js='clearAll']");
const deleteAll = document.querySelector("[data-js='deleteAll']");
const checkAll = document.querySelector("[data-js='checkAll']");

function addItem(e) {
    e.preventDefault(); // makes the page not to reload
    const text = (this.querySelector('[name=item]')).value; // 'this' = 'form' element
    const item = {
        text,
        done: false 
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // 'this' = 'form' element
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join(''); // join() makes an array obj into a whole string
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // get input tag only
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function toggleAllUndone() {
    items.forEach((item) => {
      item.done = false;
    })
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

function deleteAllCheckBoxes() {

    items.splice(0, items.length);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }
  
  function toggleAllDone() {
    items.forEach((item) => {
      item.done = true;
    })
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);

clearAll.addEventListener('click', toggleAllUndone);
deleteAll.addEventListener('click', deleteAllCheckBoxes);
checkAll.addEventListener('click', toggleAllDone);