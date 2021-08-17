function Sidebar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                
                {/* populates the page with anchor links from topAnime */}
                {topAnime.map(anime => (
                    <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">{anime.title}</a>
                ))}
                
            </nav>
        </aside>
    )
}

export default Sidebar