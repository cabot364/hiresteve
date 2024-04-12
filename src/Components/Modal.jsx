import React, { useState } from 'react';

const Modal = ({ item, onClose }) => {
    const [contentWidth, setContentWidth] = useState(0);

    const handleContentLoad = (event) => {
        setContentWidth(event.target.offsetWidth);
    };

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-0" onClick={handleBackgroundClick}>
            <div className="rounded bg-white p-4 max-w-[90%] max-h-[90%] overflow-auto">
                <div className="flex flex-col items-center">
                    {item.type === 'image' && (
                        <img src={item.fullImage} alt="Portfolio Image" onLoad={handleContentLoad} className="max-w-full max-h-[70vh] object-contain" />
                    )}
                    {item.type === 'video' && (
                        <div className="aspect-w-16 aspect-h-9 w-full" style={{ maxWidth: '90vw' }}>
                            {item.videoType === 'local' ? (
                                <video controls src={item.videoUrl} onLoad={handleContentLoad} className="w-full h-full"></video>
                            ) : (
                                <iframe src={item.videoUrl} frameBorder="0" allowFullScreen onLoad={handleContentLoad} className="w-full h-full"></iframe>
                            )}
                        </div>
                    )}
                    <p className="py-5 text-gray-600" style={{ maxWidth: `${contentWidth}px` }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
