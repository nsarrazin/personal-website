import React, { useState, useEffect, RefObject } from "react";

export function scrollTo(ref: RefObject<any>) {
  window.scroll({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
}

export function useOnScreen(ref: RefObject<any>, rootMargin = "0px") {
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
  }, []);

  return isIntersecting;
}
