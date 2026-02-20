// Fetch seasons and episode
const API_KEY = '6b2dec73b6697866a50cdaef60ccffcb'; // Replace with your actual TMDB API key
const TV_SHOW_ID = '${id}'; // Replace with the actual TV show ID

async function fetchSeasons(tvShowId) {
    const url = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY}&language=en-US`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.seasons; // Return the list of seasons
    } catch (error) {
        console.error('Error fetching seasons:', error);
    }
}

async function fetchEpisodes(tvShowId, seasonNumber) {
    const url = `https://api.themoviedb.org/3/tv/${tvShowId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.episodes; // Return the list of episodes for the season
    } catch (error) {
        console.error('Error fetching episodes:', error);
    }
}

async function displayAllEpisodes(tvShowId) {
    const seasons = await fetchSeasons(tvShowId);
    const episodeList = document.getElementById('episode-list');
    episodeList.innerHTML = ''; // Clear previous content

    for (const season of seasons) {
        const episodes = await fetchEpisodes(tvShowId, season.season_number);
        
        if (episodes) {
            const seasonHeader = document.createElement('h2');
            seasonHeader.textContent = `Season ${season.season_number}: ${season.name}`;
            episodeList.appendChild(seasonHeader);

            const episodeUl = document.createElement('ul');

            episodes.forEach(episode => {
                const listItem = document.createElement('li');
                listItem.textContent = `<aside name="san@dbox" id="video-player">
<iframe name="fra@mez" id="YouTube-Iframe" class="youtubePlayer lazyload" src="https://freembed.site/embed/tv/?id=${id}&season=1&episode=1" width="100%" height="100%" loading="lazy" frameborder="0" allowfullscreen></iframe>
<div id="video-caption">${episode.name} • S${season.season_number}, Ep${episode.episode_number}</div>
<div id="playlist">
<button class="lazyload active button" data-bg="" data-iframe="https://freembed/embed/tv/?id=${id}&season=${season.season_number}&episode=${episode.episode_number}" data-caption="${episode.name} • S${season.season_number}, Ep${episode.episode_number}">${episode.name} • S${season.season_number}, Ep${episode.episode_number}</button>
</div></aside>`;
                episodeUl.appendChild(listItem);
            });

            episodeList.appendChild(episodeUl);
        }
    }
}

// Usage
displayAllEpisodes(TV_SHOW_ID);