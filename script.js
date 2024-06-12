document.addEventListener('DOMContentLoaded', function() {
    const mediumUsername = 'danlarson_74954';
    const mediumRSSFeed = `https://medium.com/feed/@${mediumUsername}`;

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumRSSFeed}`)
        .then(response => response.json())
        .then(data => {
            const posts = data.items;
            const postsContainer = document.getElementById('medium-posts');

            posts.forEach(post => {
                const postLink = document.createElement('div');
                postLink.classList.add('card');
                postLink.innerHTML = `<a href="${post.link}" target="_blank">${post.title}</a>`;
                postsContainer.appendChild(postLink);
            });
        })
        .catch(error => console.error('Error fetching Medium posts:', error));
});