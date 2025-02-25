const quotes = [];
quotes.push("I propose to fight it out on this line if it takes all summer. - Ulysses S. Grant");
quotes.push("Let us have peace. - Ulysses S. Grant");
quotes.push("The most important thing I have to say is that I do not believe in making war against a people without cause. - Ulysses S. Grant");
quotes.push("In every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins. - Ulysses S. Grant");
quotes.push("I have never advocated war except as a means of peace. - Ulysses S. Grant");
quotes.push("The art of war is simple enough, Find out where your enemy is, Get at him as soon as you can, Strike him as hard as you can, and keep moving on, - Ulysses S. Grant");
quotes.push("Labor disgraces no man; unfortunately, you occasionally find men who disgrace labor. - Ulysses S. Grant");
quotes.push("I know only two tunes: one of them is 'Yankee Doodle,' and the other is not. - Ulysses S. Grant");
quotes.push("Wars produce many stories of fiction, some of which are told until they are believed to be true. - Ulysses S. Grant");
quotes.push("The friend in my adversity I shall always cherish most. I can better trust those who helped to relieve the gloom of my dark hours than those who are so ready to enjoy with me the sunshine of my prosperity. - Ulysses S. Grant");
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function updateQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = getRandomQuote();
        quoteElement.style.opacity = 1;
    }, 500); 
}
setInterval(updateQuote, 5000);
updateQuote();
function showImage(imageUrl) {
    const mediaDisplay = document.getElementById("mediaDisplay");
    const mediaContent = document.getElementById("mediaContent");
    mediaContent.innerHTML = `<img src="${imageUrl}" alt="Larger View">`;
    mediaDisplay.classList.remove("hidden");
}
function showVideo(videoUrl) {
    const mediaDisplay = document.getElementById("mediaDisplay");
    const mediaContent = document.getElementById("mediaContent");
    mediaContent.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    mediaDisplay.classList.remove("hidden");
}
function closeMedia() {
    const mediaDisplay = document.getElementById("mediaDisplay");
    mediaDisplay.classList.add("hidden");
}

