import { useEffect } from "react";

export const useClose = (ref, close) => {
  useEffect(() => {
    
    const listener = (event) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target) 
      ) {
        return 
      }
      close()
    };

    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, close])
}