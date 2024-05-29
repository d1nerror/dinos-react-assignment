import React, { useState } from 'react';
import './index.css';

const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openSection = () => setIsOpen(!isOpen);
  
    return (
      <div className="border rounded-md mb-4">
        <div
          onClick={openSection}
          className="bg-blue-600 text-white p-2 flex justify-between items-center cursor-pointer rounded-md"
        >
          <span className="m-1">{title}</span>
          <span className="m-1">{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && <div className="p-4 bg-gray-100 rounded-md">{children}</div>}
      </div>
    );
  };



const App = () => {
    return (
        <>
            <div className="max-w-lg mx-auto mt-40 bg-white shadow-md rounded-md p-6 ">
                <h1 className="text-3xl font-bold text-center mb-4">Expandable Form</h1>

                <Section title="Section 1">
                    <label className="block text-sm font-medium p-2">Name:</label>
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Name" />
                    <label className="block text-sm font-medium p-2">Email:</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Email" />
                </Section>

                <Section title="Section 2">
                    <label className="block text-sm font-medium p-2">Address:</label>
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Address" />
                    <label className="block text-sm font-medium p-2">City:</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="City" />
                </Section>

                <Section title="Section 3">
                    <label className="block text-sm font-medium p-2">Phone:</label>
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Phone" />
                    <label className="block text-sm font-medium p-2">Website:</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Website" />
                </Section>
                {/* <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-md ">
                    <span className=" m-1">Section 3</span>
                    
                </div>
                <div className="p-1"></div>
                <div className="mb-2 min-w-1 mx-auto bg-gray-100 rounded-md p-4">
                <label className="block text-sm font-medium p-2 ">Phone:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                />
                <label className="block text-sm font-medium p-2 ">Website:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                />
                </div> */}
            </div>

        </>
    )
}
export default App;