function LeftSidebar({ topAnime }) {
    return (
        <aside className="col-md-5 col-lg-3 mb-2">
            <div className="border rounded p-3 mb-3">
                <h3>Top Anime</h3>

                {/* populates the page with anchor links from topAnime */}
                {topAnime.map(anime => (
                    <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">{anime.title}</a>
                ))}

            </div>
        </aside>
    )
}

export default LeftSidebar