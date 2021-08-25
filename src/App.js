import { useState, useEffect } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";

function App() {
	const [animeList, setAnimeList] = useState([]); //holds main anime and set the var when searching
	const [topAnime, setTopAnime] = useState([]); //popular anime
	const [search, setSearch] = useState(""); //search from the search form

	const getTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`) //jikan req to grab anime by popularity
			.then(res => res.json()); //converts response to json

		setTopAnime(temp.top.slice(0, 10)); //slices the array and grabs only 5 out of the returned anime
	}

	const handleSearch = e => {
		e.preventDefault(); //stops page from refreshing
		fetchAnime(search);
	}

	const fetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`) //jikan req to grab search results
			.then(res => res.json()); //converts response to json

		setAnimeList(temp.results);
	}

	useEffect(() => {
		getTopAnime();
	}, []);

	return (
		<div className="App">
			<Header />

			<div className="container-fluid pt-3">
				<div className="row">
					{/* <LeftSidebar
						topAnime={topAnime}
					/> */}
					<RightSidebar />
					
					<MainContent
						handleSearch={handleSearch}
						search={search}
						setSearch={setSearch}
						animeList={animeList}
					/>

					
				</div>
			</div>
		</div>
	);
}

export default App;