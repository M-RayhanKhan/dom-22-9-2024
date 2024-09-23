const reviewBtn = document.getElementById('review-btn');
reviewBtn.addEventListener('click', function(){
    const container = document.getElementById('review')
    const textArea = document.getElementById('text-area').value;
    const p = document.createElement('p');
    p.className = 'text-red-500'
    p.innerText = textArea
    container.appendChild(p)
})