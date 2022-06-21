export const sortedItems = (employees, state) => {
  if(state) {
    console.log('rame2')
    return employees.sort((a, b) => a.liked - b.liked)
  }else {
    console.log('rame')
    return employees
  }
}
