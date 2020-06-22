import { useEffect } from "react";

export const useClose = (ref: any, close: () => void) => {
  useEffect(() => {
    
    const listener = (event: any) => {
      if (!event.path.includes(ref.current)) {
        close()
      }
      return null
    }

    document.body.addEventListener('click', listener)

    return () => {
      document.body.addEventListener('click', listener)
    }
  }, [ref, close])
}