import React, {useState, useCallback, useEffect} from 'react'; 

export function scrollTo(ref) {
    window.scroll({
        top: ref.current.offsetTop,
        behavior: "smooth",
    });
    }

export function useOnScreen(ref, rootMargin = "0px") {
        // State and setter for storing whether element is visible
        const [isIntersecting, setIntersecting] = useState(false);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              // Update our state when observer callback fires
              setIntersecting(entry.isIntersecting);
            },
            {
              rootMargin,
            }
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
            observer.unobserve(ref.current);
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
      
        return isIntersecting;
      }