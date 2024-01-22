// InterfaceStats.jsx
import React, { useState } from 'react';


const Modal = ({ title, onClose, children }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <button onClick={onClose} className="text-black">
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};


export const InterfaceStats = () => {
    const [isWanModalOpen, setWanModalOpen] = useState(false);
    const [isLanModalOpen, setLanModalOpen] = useState(false);

    return (
        <div className="bg-white shadow   m-4 rounded border-2 border-[#CCCCCC]">
            <div className="">
                <div className="text-md  bg-primary-blue text-custom-white font-bold pl-2 h-[1.9375rem] align-middle">Interfaces</div>
               <div className='p-4'>
               <button
                    onClick={() => setWanModalOpen(true)}
                    className="flex-1 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                    WAN
                </button>
                <button
                    onClick={() => setLanModalOpen(true)}
                    className="flex-1 text-center bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                >
                    LAN
                </button>
               </div>
            </div>

            {isWanModalOpen && (
                <Modal title="WAN Interface" onClose={() => setWanModalOpen(false)}>
                    {/* Content of WAN modal */}
                </Modal>
            )}

            {isLanModalOpen && (
                <Modal title="LAN Interface" onClose={() => setLanModalOpen(false)}>
                    {/* Content of LAN modal */}
                </Modal>
            )}
        </div>
    );
};

export default InterfaceStats;
