const JobsFilter = ({jobs, filterFunc, setJobContent}) => {
  return <>
    <div className="jobs">
      <button onClick={()=> {filterFunc(); setJobContent({id:null, name:'All'})}}>All</button>
      {jobs?.map((btn)=>{
        return <>
          <button onClick={()=>{filterFunc(); setJobContent({id:btn.id, name:btn.name})}} key={btn.id}>
            {btn?.name}
          </button>
        </>
      })}
    </div>
  </>
}

export default JobsFilter
