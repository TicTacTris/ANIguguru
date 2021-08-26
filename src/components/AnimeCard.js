function AnimeCard({ anime }) {
    return (
        <div className="anime-item col-6 mb-2 px-1">
            <a href={anime.url} className="anime-item-poster rounded"
                style={
                    { 
                        backgroundImage: `url(${anime.image_url})`, 
                        backgroundPosition: "center", 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat' 
                    }
                }
            />
            <a href={anime.url} className="anime-item-title">{anime.title}</a>
        </div>
    )
}

export default AnimeCard