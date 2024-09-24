let count = 0;
document.querySelector('#task-btn').addEventListener('click', function () {

    const inputValue = document.querySelector('#input-value').value;
    // console.log(inputValue);
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count += 1}</th>
    <td>${inputValue}</td>
    <td>
    <button id='done-btn' class='btn btn-xs btn-accent'>Done</button>
    <button id='delete-btn' class='btn btn-xs btn-error'>Delete</button>
    </td>
    `
    const tBodyContainer = document.querySelector('#tbody-container');
    tBodyContainer.appendChild(tr)
    document.querySelector('#input-value').value = '';

    // delete button
    const buttons = document.querySelectorAll('#delete-btn');
    for (const btn of buttons) {
        btn.addEventListener('click', function (e) {
            console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.style.display = 'none'
            // e.target.parentNode.parentNode.parentNode.children[0].style.display = 'none'
        })
    }
    // done button
    const doneBtn = document.querySelectorAll('#done-btn');
    for (const done of doneBtn) {
        done.addEventListener('click', function (e) {
            // console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.style.textDecoration = 'line-through'
        })
    }

})

document.querySelector("#clear-btn").addEventListener("click", function (e) {
    // console.log(e.target.parentElement.parentElement.children[0].children[1]);
    e.target.parentElement.parentElement.children[0].children[1].style.display = 'none'
   });