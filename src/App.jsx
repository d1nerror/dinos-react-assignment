import React from 'react';
import './index.css';

const App = () => {
    return (
        <>
            <div className="max-w-lg mx-auto mt-40 bg-white shadow-md rounded-md p-6 ">
                <h1 className="text-3xl font-bold text-center mb-4">Expandable Form</h1>

                <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-md ">
                    <span className=" m-1">Section 1</span>
                </div>
                <div className="p-1"></div>
                <div className="mb-2 min-w-1 mx-auto bg-gray-100 rounded-md p-4">
                <label className="block text-sm font-medium p-2 ">Name:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                />
                <label className="block text-sm font-medium p-2 ">Email:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                />
                </div>

                <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-md ">
                    <span className=" m-1">Section 2</span>
                </div>
                <div className="p-1"></div>
                <div className="mb-2 min-w-1 mx-auto bg-gray-100 rounded-md p-4">
                <label className="block text-sm font-medium p-2 ">Adress:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                />
                <label className="block text-sm font-medium p-2 ">City:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                />
                </div>

                <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-md ">
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
                </div>
            </div>
            
        </>
    )
}
export default App;