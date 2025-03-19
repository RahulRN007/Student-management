import React, { useState } from 'react'

function useUserData() {
    const [value, setValue] = useState(0)
    const increment = ()=>{
        setValue(value+1)
    }
  return {
    increment,value
}
}

export default useUserData