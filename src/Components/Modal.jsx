import React, { useState } from 'react';

const Modal = ({ item, onClose }) => {

    const [imageWidth, setImageWidth] = useState(0);

    const handleImageLoad = (event) => {
        setImageWidth(event.target.offsetWidth);
    }

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={handleBackgroundClick}>
            <div className="rounded bg-white p-4 max-w-[90%] max-h-[90%] overflow-auto">
                <div className="flex flex-col items-center">
                    <img src={item.fullImage} alt="Portfolio Image" onLoad={handleImageLoad} className="max-w-full max-h-[70vh] object-contain"/>
                    <p className="py-5 text-gray-600" style={{ maxWidth: `${imageWidth}px` }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
