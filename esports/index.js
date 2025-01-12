// JavaScript to dynamically update esports news and sections

document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.querySelector('.news-section');

    // Example data (replace this with API data or a database call)
    const newsData = [
        {
            title: 'Breaking: New Esports Tournament Announced!',
            description: 'A major new esports tournament has been announced. Stay tuned for details.',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            title: 'Patch Notes Released for Popular Game',
            description: 'The latest patch introduces exciting new features and balances gameplay.',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            title: 'Top Players to Watch This Season',
            description: 'Discover the rising stars and veteran players dominating the scene.',
            image: 'https://via.placeholder.com/300x200',
        },
    ];

    // Function to create a news card
    const createNewsCard = ({ title, description, image }) => {
        const article = document.createElement('article');
        article.classList.add('news-card');

        article.innerHTML = `
            <img src="${image}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
        `;

        return article;
    };

    // Render new news items dynamically
    newsData.forEach(news => {
        const newsCard = createNewsCard(news);
        newsSection.appendChild(newsCard);
    });

    console.log('Esports news section updated dynamically.');
});
