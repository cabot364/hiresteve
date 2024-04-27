import React, { useState, useRef } from 'react';

const Modal = ({ item, onClose }) => {
    const [contentWidth, setContentWidth] = useState(0);
    const containerRef = useRef(null);

    const handleContentLoad = (event) => {
        const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
        const contentWidth = event.target.offsetWidth;
        setContentWidth(Math.max(containerWidth, contentWidth));
    };

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-0" onClick={handleBackgroundClick}>
            <div className="rounded bg-white p-4 max-w-[90%] max-h-[90%] overflow-auto" ref={containerRef}>
                <div className="flex flex-col items-center">
                    {item.type === 'image' && (
                        <img src={item.fullImage} alt="Portfolio Image" onLoad={handleContentLoad} className="max-w-full max-h-[70vh] object-contain" />
                    )}
                    {item.type === 'video' && (
                        <div className="aspect-w-16 aspect-h-9 w-full" style={{ minWidth: '600px', minHeight: '300px' }}>
                            {item.videoType === 'local' ? (
                                <video controls src={item.videoUrl} onLoadedMetadata={handleContentLoad} className="w-full local-video"></video>
                            ) : (
                                <iframe src={item.videoUrl} width="640" height="360" frameBorder="0" allowFullScreen onLoad={handleContentLoad} className="w-full"></iframe>
                            )}
                        </div>
                    )}
                    <p className="mt-5 border-0 text-gray-800 bg-gray-100 rounded p-5" style={{ maxWidth: `${contentWidth}px` }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
            </div>
        </div>
    );
};

export default Modal;