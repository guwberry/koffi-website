document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching Discord stats (replace with actual API)
    fetch('https://api.example.com/discord-stats')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.stat-box:nth-child(1) p').textContent = `${data.members} Members!`;
        })
        .catch(error => console.error('Error fetching Discord stats:', error));

    // Simulate fetching Minecraft stats (replace with actual API)
    fetch('https://api.example.com/minecraft-stats')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.stat-box:nth-child(2) p').textContent = `${data.online} Online!`;
        })
        .catch(error => console.error('Error fetching Minecraft stats:', error));

    // Button click events
    document.querySelector('.play-now').addEventListener('click', () => {
        window.location.href = 'play.koffinetwork.xyz';
    });

    document.querySelector('.read-more').addEventListener('click', () => {
        window.location.href = '/about';
    });
});