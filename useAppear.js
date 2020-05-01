import { useState, useEffect } from 'react';

const useAppear = (target, threshold = 0.3) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!target.current) return false;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { threshold });

    io.observe(target.current);

    return () => {
      io.unobserve(target.current);
    };
  }, [target]);

  return visible;
};

export default useAppear;
