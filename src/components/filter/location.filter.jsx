const LocationFilter = ({locations, filterFunc, setLocationContent}) =>{
  return <>
    <div className="locations">
      <button onClick={()=> {filterFunc(); setLocationContent({id:null, name:'All'})}}>All</button>
      {locations?.map((btn)=>{
        return <>
          <button onClick={()=> {filterFunc(); setLocationContent({id:btn.id, name:btn.name})}} key={btn.id}>
            {btn?.name}
          </button>
        </>
      })}
    </div>
  </>
}

export default LocationFilter;
