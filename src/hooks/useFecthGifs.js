import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFecthGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((newImages) => {
      setImages(newImages);
      setIsLoading(false);
    });
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFecthGifs;
