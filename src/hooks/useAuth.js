import { useEffect } from "react"

// argument UserId => Returned bollean
export function useAuth(id){
    useEffect(() => {
        if(id){
          localStorage.setItem('userId', id)
        }
      }, [id])

      if(localStorage.getItem('userId')){
        return true 
      }else {
        return false
      }


}