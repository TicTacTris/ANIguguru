function AnimeCard({ anime }) {
    return (
        <div className=" col-6 mb-2 px-1">
            <a href={anime.url}>
                <figure>
                    <img src={anime.image_url} className="video-item-poster rounded" alt="animeCover" />
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </div>
    )
}

export default AnimeCard

