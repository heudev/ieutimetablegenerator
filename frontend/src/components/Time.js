import React, { useState, memo, useEffect } from 'react';

const Time = ({ setUnwantedTimes }) => {
    const [selectedTimesValues, setselectedTimesValues] = useState([]);

    const handleClickTimes = (value) => {
        if (selectedTimesValues.includes(value)) {
            setselectedTimesValues(selectedTimesValues.filter((v) => v !== value));
        } else {
            setselectedTimesValues([...selectedTimesValues, value]);
        }
    };

    let timelist = ["8:30", "9:25", "10:20", "11:15", "12:10", "13:05", "14:00", "14:55", "15:50", "16:45", "17:40", "18:35", "19:30"]

    useEffect(() => {
        setUnwantedTimes(selectedTimesValues)
    }, [selectedTimesValues, setUnwantedTimes])

    return (
        <div className='container alert shadow-lg rounded' style={{ "backgroundColor": "rgb(255,255,255)", "borderBottom": "5px solid rgb(9,33,67)" }} >
            <strong className='m-1' style={{ "color": "rgb(9,33,67)" }}>Derse girmek <span className="text-decoration-underline">istemediğim</span> saatler</strong>
            <div className='d-sm-flex align-items-start'>
                <div className="dropdown">
                    <button type="button" className="btn btn-sm bg-gradient text-white dropdown-toggle m-1 d-flex align-items-center shadow-lg" style={{ width: "200px", "backgroundColor": "rgb(29,73,135)" }} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <span className='badge rounded-pill me-1' style={{ backgroundColor: "rgb(237,116,46)" }}>{selectedTimesValues.length}</span>
                        <span className="mx-auto">Saat seç</span>
                    </button>
                    <ul className="dropdown-menu bg-white text-center" style={{ width: "200px" }}>
                        {timelist.map((time, index) => (
                            selectedTimesValues.indexOf(time) > -1 ?
                                <li key={index} className="dropdown-item border rounded" style={{ backgroundColor: "rgb(237,116,46)", color: "rgb(9,33,67)", cursor: "pointer" }} onClick={() => handleClickTimes(time)}>{time}</li>
                                : <li key={index} className="dropdown-item rounded border" style={{ backgroundColor: "rgb(255,255,255)", color: "rgb(9,33,67)", cursor: "pointer" }} onClick={() => handleClickTimes(time)}>{time}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-1 d-flex flex-wrap">
                    {selectedTimesValues.map((value, index) => (
                        <span className="badge rounded-pill m-1 d-flex align-items-center" key={index} style={{ width: "80px", backgroundColor: "rgb(237,116,46)" }}>
                            <div className="mx-auto">{value}</div>
                            <button className="btn badge rounded-pill" style={{ "backgroundColor": "rgb(29,73,135)" }} onClick={() => handleClickTimes(value)}>x</button>
                        </span>
                    ))
                    }
                </div>
            </div>
        </div>
    )
};

export default memo(Time);