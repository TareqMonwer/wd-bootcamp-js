let todos = document.querySelectorAll('ul li');

for (var i = 0; i < todos.length; i++) {
    // console.log(todos[i]);
    todos[i].addEventListener('mouseover', function() {
        this.style.color = 'green';
    })
    todos[i].addEventListener('mouseout', function() {
        this.style.color = 'black';
    })
    todos[i].addEventListener('click', function() {
        this.classList.toggle('done');
    })
}
