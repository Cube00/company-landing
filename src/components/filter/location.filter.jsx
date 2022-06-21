const LocationFilter = ({locations, filterFunc, setLocationContent,locationContent}) =>{
  return <>
    <div className={`locations${locationContent.drop ? '-active' : ''}`}>
      <button onClick={()=> {filterFunc(); setLocationContent({id:null, name:'All', drop:false})}}>All</button>
      {locations?.map((btn)=>{
        return <>
          <button onClick={()=> {filterFunc(); setLocationContent({id:btn.id, name:btn.name, drop:false})}} key={btn.id}>
            {btn?.name}
          </button>
        </>
      })}
    </div>
  </>
}

export default LocationFilter;
