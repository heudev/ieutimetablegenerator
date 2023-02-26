import { useState, memo, useEffect } from "react";

function Day({ setUnwantedDays }) {
    const [selectedDaysValues, setselectedDaysValues] = useState([]);

    const handleClickDays = (value) => {
        if (selectedDaysValues.includes(value)) {
            setselectedDaysValues(selectedDaysValues.filter((v) => v !== value));
        } else {
            setselectedDaysValues([...selectedDaysValues, value]);
        }
    };

    let daylist = {
        "1": "Pazartesi",
        "2": "Salı",
        "3": "Çarşamba",
        "4": "Perşembe",
        "5": "Cuma",
        "6": "Cumartesi",
        "7": "Pazar"
    }

    useEffect(() => {
        setUnwantedDays(selectedDaysValues)
    }, [selectedDaysValues, setUnwantedDays])

    return (
        <div className='container alert shadow-lg rounded' style={{ "backgroundColor": "rgb(255,255,255)", "borderBottom": "5px solid rgb(9,33,67)" }}>
            <strong className='m-1' style={{ "color": "rgb(9,33,67)" }}>Okula gitmek <span className="text-decoration-underline">istemediğim</span> günler</strong>
            <div className="d-sm-flex align-items-start">
                <div className="dropdown">
                    <button type="button" className="btn btn-sm bg-gradient text-white dropdown-toggle m-1 d-flex align-items-center shadow-lg" style={{ width: "200px", "backgroundColor": "rgb(29,73,135)" }} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <span className='badge rounded-pill me-1' style={{ backgroundColor: "rgb(237,116,46)" }}>{selectedDaysValues.length}</span>
                        <span className="mx-auto">Gün seç</span>
                    </button>
                    <ul className="dropdown-menu bg-white text-center" style={{ width: "200px" }}>
                        {Object.entries(daylist).map((day, index) => (
                            selectedDaysValues.indexOf(day[0]) > -1 ?
                                <li key={index} className="dropdown-item border rounded" style={{ backgroundColor: "rgb(237,116,46)", color: "rgb(9,33,67)", cursor: "pointer" }} onClick={() => handleClickDays(day[0])}>{day[1]}</li>
                                : <li key={index} className="dropdown-item rounded border" style={{ backgroundColor: "rgb(255,255,255)", color: "rgb(9,33,67)", cursor: "pointer" }} onClick={() => handleClickDays(day[0])}>{day[1]}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-1 d-flex flex-wrap">
                    {Object.entries(selectedDaysValues).map(day => (
                        <span className="badge rounded-pill m-1 d-flex align-items-center" key={day[0]} style={{ width: "110px", backgroundColor: "rgb(237,116,46)" }}>
                            <span className="mx-auto">{daylist[day[1]]}</span>
                            <button className="btn badge rounded-pill" style={{ "backgroundColor": "rgb(29,73,135)" }} onClick={() => handleClickDays(day[1])}>x</button>
                        </span>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Day)