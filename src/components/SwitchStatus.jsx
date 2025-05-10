import React, { useState } from 'react'
import { create, get } from '../services/apis';

const SwitchStatus = ({ data, path }) => {
    const [toggle, setToggle] = useState(data.status);
    
    const toggleClass = (checked) =>
        checked ? "bg-green-500" : "bg-gray-700";
    const handleToggle = async (e) => {
        const getDataByID = await get(`${path}/${data.id}`)
        if(getDataByID.success){
            const changeStatus = !toggle
            await create(`${path}/${data.id}`, { ...getDataByID[path], status: changeStatus })
            setToggle(changeStatus)
        }
    }

    return (
        <button
            onClick={handleToggle}
            className={`w-12 h-6 rounded-full ${toggleClass(toggle)} flex items-center px-1 transition-colors`}
        >
            <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${toggle ? "translate-x-6" : "translate-x-0"
                    }`}
            />
        </button>
    )
}

export default SwitchStatus
