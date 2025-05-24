import style from '../../css/SearchFilter.module.css'

const SearchFilter = ({search,filter,setFilter,setSearch}) => {

    const handleSearch=(event)=>{
       setSearch(event.target.value);
    }

    const handleFilter=(event)=>{
        setFilter(event.target.value);
    }


  return (
    <div className={style.container}>
      <input type="text" placeholder="Search"
      value={search} onChange={handleSearch}
      />
  <div>
      <select className={style.selection} value={filter} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    </div>
  )
}

export default SearchFilter
