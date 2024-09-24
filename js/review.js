const reviewBtn = document.getElementById('review-btn');
reviewBtn.addEventListener('click', function(){
    const container = document.getElementById('review')
    const textArea = document.getElementById('text-area').value;
    const p = document.createElement('p');
    p.className = 'text-red-500'
    p.innerText = textArea
    container.appendChild(p)
})


document.getElementById('text-area').addEventListener('keyup', function(even){

    if (even.key === 'Enter') {
        const textArea = document.getElementById('text-area').value;
        const container = document.getElementById('review')
        const p = document.createElement('p');
        p.innerText = textArea;
        container.appendChild(p)
        document.getElementById('text-area').value = ''
    }
})