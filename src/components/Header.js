function Header(props) {
    return (
        <header class="header">
            <div class="menu-container">
                <div><h1>ANI<strong>ググる</strong></h1></div>
                <div class="menu">
                    <a href="/" class="menu-link" aria-current="page">Home</a>
                    <a href="/about" class="menu-link">About</a>
                </div>
            </div>
            <form className="search-box" onSubmit={props.handleSearch}> {/* onSubmit calls a search */}
                <input
                    type="search"
                    placeholder="Search..."
                    required
                    value={props.search} //binds input to search value 
                    onChange={e => props.setSearch(e.target.value)} /> {/* onChange listens for inputs value change */}
            </form>
        </header>
    )
}

export default Header