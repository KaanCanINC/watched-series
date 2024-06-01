import { defaults } from "autoprefixer";
import { useEffect, useState } from "react";

const useMedia = (width = 1024) => {
  const [status, setStatus] = useState(
    window.matchMedia(`(max-width: ${width}px)`).matches,
  );

  useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width: ${width}px)`);

    const onChangeHandle = (e) => {
      setStatus(e.matches);
    };

    matchMedia.addEventListener("change", onChangeHandle);
  });

  return status;
};

export default useMedia;
