if(state === 'location'){
  setFilter((prev)=> ({
    ...prev,
    location: e.target.textContent
  }))
}else {
  if(e.target.textContent !== 'All'){
    setFilter((prev)=> ({
      ...prev,
      job: e.target.textContent,
      employee: prev.employee.filter((item)=> item.job_id !== 3)
    }))
  }else {
    setFilter((prev)=> ({
      ...prev,
      job: e.target.textContent,
      employee: employee.filter((item)=> {
        if(prev.location !== 'All') {
          return item.location_id !== 3
        }else {
          return item
        }})
    }))
  }
}
