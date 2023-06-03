


export const setStorage = ( key , data ) => {
  
  const setItem = localStorage.setItem('laptops', JSON.stringify(data))
  
  
  return setItem
}







