const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
      author: "William Butler Yeats"
    },
    {
      quote: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu"
    }
  ];
  

document.getElementById('id-quote').addEventListener('click', function () {
    const p = document.getElementById('quote-p');
    const h1 = document.getElementById('name');

    const randomIndex = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomIndex]);
    p.innerText = quotes[randomIndex].quote
    h1.innerText = quotes[randomIndex].author

})