import AnimeCard from "./AnimeCard";

function MainContent(props) {
    return (
        <div id="content" className="main-head col-md-7 col-lg-6 mb-2 px-lg-0 pl-md-0">
            <div className="container">
                <div id="search-box" className="mb-3 rounded">
                    <div>
                        <small>
                            Search for anime! Powered by Jikan (時間)
                        </small>
                        <form className="d-flex" onSubmit={props.handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search..."
                                required
                                value={props.search} //binds input to search value 
                                onChange={e => props.setSearch(e.target.value)} //onChange listens for inputs value change
                            />
                        </form>
                    </div>
                </div>
                <div id="main-anime-list">
                    <div className="anime-list-bar row mx-0 mb-2">
                        <div className="col-sm-3 px-0 align-center video-list nav-title"></div>
                    </div>
                    <div className="anime-list row mx-0">
                        {props.animeList.map(anime => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainContent