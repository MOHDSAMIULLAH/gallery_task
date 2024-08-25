import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import logo from "../assets/text-in-horizontal-lines-9352ld.png"

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(7);
    console.log("images",images );
    
  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const fetchImages = async (page) => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    setImages(prevImages => [...prevImages, ...response.data]);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1
  };

  return (
    <div className="container mx-auto px-4">
      <header className="text-center my-8">
        <div className="flex ">
        <img src={logo} alt="Site Logo" className=" h-16" />
        <h1 className="text-4xl font-bold mx-auto">Site Title</h1>

        </div>
        <img src="" alt="Header Image" className="w-full h-64 object-cover mt-4 rounded-lg" />
      </header>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <div key={image.id} className="rounded overflow-hidden shadow-lg mb-4">
            <img className="w-full h-auto object-cover" src={image.download_url} alt={image.author} />
            {/* <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{image.author}</div>
            </div> */}
          </div>
        ))}
      </Masonry>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
