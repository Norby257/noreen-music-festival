import React from 'react'; 

class Search extends React.Component {
    state = {
        query: ''
    }

    render() {
        return (
            <form>
            <label>
              Search artists:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit"   />
            <a href="#" rel="noopener noreferrer" target="_blank"> <i className="fa fa-search"></i></a>

          </form>
        )
    }
}

export default Search 