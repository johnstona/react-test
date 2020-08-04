import React, {useState} from 'react'

const Search = ({setFilter}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const updateSearch = e => {
    setSearchTerm(e.target.value)
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Title Search: {searchTerm}</h2>
      <form id="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={updateSearch}
          placeholder="Please enter a title"
        />
      </form>
    </div>
  )
}

export default Search