import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4 first-letter:">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Beach House"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="House"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1652259994212-b48c2c5e6200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Palms"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1554254464-7046778097bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Cruise Ship"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1613152184920-bc1c4ab7fd1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="Internal pool"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
