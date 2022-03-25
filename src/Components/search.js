import React, {useState} from 'react'
import{Form} from 'react-bootstrap'
import MovieList from './movieList'


function Search() {
    const [search, setSearch] = useState("")
  return (
    <div>
            <Form.Control type="email" placeholder="Search by name or rate" 
            onChange={(e)=>setSearch(e.target.value)}/>
            <br/>
            <MovieList imput={search}/>
    </div>
  )
}

export default Search