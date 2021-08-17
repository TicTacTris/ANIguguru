function Header(props) {
    return (
        // <header>
        //     <div><h1><strong>ANI</strong>ググる</h1></div>
        //     <div><span>Test</span></div>
        // </header>
        <header class="header">
            <div class="menu-container">
                <div><h1><strong>ANI</strong>ググる</h1></div>
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
            <div class="actions">
                <div class="user-avatar">

                </div>
            </div>
        </header>
    )
}

export default Header