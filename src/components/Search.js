

const Search = ({setSearch,search}) => {
    return (
        <div className="mt-4">
         <input  value={search}  onChange={(e)=>setSearch(e.target.value)} class="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>
      
     
        </div>
    )
}

export default Search
