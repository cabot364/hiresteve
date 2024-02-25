import React, { useState } from 'react';
import { portfolioItems } from "../data";
import Modal from './Modal';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = portfolioItems.filter(item => filter === 'all' || item.category === filter);

    const activeButton = "bg-gray-500 text-gray-800 border-white border-2";
    const inactiveButton = "bg-gray-800";

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <div className="flex flex-row justify-center gap-5">
                <button onClick={() => setFilter('all')} className={`p-5 text-center rounded-full ${filter==='all' ? activeButton : inactiveButton}`}>ALL</button>
                <button onClick={() => setFilter('design')} className={`p-5 text-center rounded-full ${filter === 'design' ? activeButton : inactiveButton}`}>DESIGN PORTFOLIO</button>
                <button onClick={() => setFilter('development')} className={`p-5 text-center rounded-full ${filter === 'development' ? activeButton : inactiveButton}`}>DEVELOPMENT PORTFOLIO</button>
            </div>
            <div className="flex flex-row gap-5 mt-10 justify-center">
                {filteredItems.map((item) => (
                    <img key={item.id} src={item.thumbnail} alt="Portfolio Item" className="rounded w-48 h-48 object-cover cursor-pointer" onClick={() => handleItemClick(item)} />
                ))}
                {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            </div>
        </>

    );
}

export default Portfolio;