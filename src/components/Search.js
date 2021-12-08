

const Search = ({setSearch,search}) => {
    return (
        <div className="mt-5">
         <input  value={search}  onChange={(e)=>setSearch(e.target.value)} class="form-control" type="text" placeholder="جستجو محصول..." aria-label="default input example"></input>
      
     
        </div>
    )
}

export default Search
