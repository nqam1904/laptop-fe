import { useEffect, useState } from 'react';

export default function useWindowSize() {
   const [size, setSize] = useState({
      width: 0,
      height: 0,
   });

   function updateSize() {
      const sizeScreen = {
         width: window.innerWidth,
         height: window.innerHeight,
      };
      setSize(sizeScreen);
   }

   useEffect(() => {
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
   }, []);

   return size;
}
