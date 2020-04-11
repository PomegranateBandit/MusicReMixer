const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.draggable');

//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through empties and call drag events
for(const draggable of boxes) {
  draggable.addEventListener('dragover', dragOver);
  draggable.addEventListener('dragenter', dragEnter);
  draggable.addEventListener('dragleave', dragLeave);
  draggable.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver (e) {
  e.preventDefault();
}
function dragEnter (e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave () {
  this.className = 'draggable';
}

function dragDrop () {
  this.className = 'draggable';
  this.append(fill);
}
