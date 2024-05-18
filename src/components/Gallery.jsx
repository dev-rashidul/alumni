import { useState } from "react";
import galleryImg from "../assets/gallery-img.jpg";

const Gallery = () => {
  // State For Modal

  const [selectedImage, setSelectedImage] = useState(null);

  // Sample images for the gallery
  const images = [
    galleryImg,
    galleryImg,
    galleryImg,
    galleryImg,
    galleryImg,
    galleryImg,
    galleryImg,
    galleryImg,
    // Add more images as needed
  ];

  //   Modal Opening Function

  const openModal = (image) => {
    setSelectedImage(image);
  };

  //   Modal Closing Function

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="Gallery">
      <div className="container mx-auto py-12 px-5 md:px-0 2xl:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto cursor-pointer hover:opacity-75"
              onClick={() => openModal(image)}
            />
          ))}
        </div>
        {/* Modal for displaying the selected image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="max-w-3xl w-full p-4">
              <img
                src={selectedImage}
                alt="Selected Image"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-lg bg-gray-800 rounded-full p-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
