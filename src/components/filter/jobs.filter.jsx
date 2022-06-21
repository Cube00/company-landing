const JobsFilter = ({jobs, filterFunc, setJobContent, jobContent}) => {
  return <>
    <div className={`jobs${jobContent.drop ? '-active' : ''}`}>
      <button onClick={()=> {filterFunc(); setJobContent({id:null, name:'All', drop:false})}}>All</button>
      {jobs?.map((btn)=>{
        return <>
          <button onClick={()=>{filterFunc(); setJobContent({id:btn.id, name:btn.name, drop:false})}} key={btn.id}>
            {btn?.name}
          </button>
        </>
      })}
    </div>
  </>
}

export default JobsFilter
