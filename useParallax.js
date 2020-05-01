import { useEffect, useState } from 'react';

const useVerticalParallax = (target, factor = 0.1) => {
  const [offset, setOffset] = useState(0);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    if (!target) return false;

    let raf;

    const scrollHandler = () => {
      const { pageYOffset } = window;

      setParallax((pageYOffset - offset) * factor);
    };

    const onScroll = () => {
      raf = window.requestAnimationFrame(scrollHandler);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [target, offset]);

  useEffect(() => {
    if (!target) return false;

    const onResize = () => {
      const { pageYOffset } = window;
      const { top } = target.current.getBoundingClientRect();

      setOffset(top + pageYOffset);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    };
  }, [target]);

  return parallax;
};

export default useVerticalParallax;
