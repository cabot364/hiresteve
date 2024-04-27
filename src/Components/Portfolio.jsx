import React, { useState } from 'react';
import Modal from './Modal';

const Portfolio = ({portfolioItems}) => {

    const [filter, setFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = portfolioItems.filter(item => filter === 'all' || item.category.includes(filter));

    const activeButton = "bg-[#5886C4] text-gray-100 border-blue-900 border-2";
    const inactiveButton = "bg-gray-400";

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
                <button onClick={() => setFilter('all')}
                        className={`p-5 text-center rounded ${filter === 'all' ? activeButton : inactiveButton}`}>ALL
                </button>
                <button onClick={() => setFilter('design')}
                        className={`p-5 text-center rounded ${filter === 'design' ? activeButton : inactiveButton}`}>DESIGN
                    PORTFOLIO
                </button>
                <button onClick={() => setFilter('development')}
                        className={`p-5 text-center rounded ${filter === 'development' ? activeButton : inactiveButton}`}>DEVELOPMENT
                    PORTFOLIO
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 justify-center">
                {filteredItems.map((item) => (
                    <div key={item.id} className="relative cursor-pointer" onClick={() => handleItemClick(item)}>
                        <img src={item.thumbnail} alt="Portfolio Item"
                             className="rounded w-full h-64 md:w-full md:h-72 object-cover object-top"/>
                        {item.type === 'video' && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="play-icon"></div>
                            </div>
                        )}
                    </div>
                ))}
                {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            </div>
        </>

    );
}

export default Portfolio;