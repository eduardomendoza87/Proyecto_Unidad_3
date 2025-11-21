import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Obtenemos la ruta actual
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que cambia la ruta (pathname), subimos el scroll a 0,0
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
};

export default ScrollToTop;