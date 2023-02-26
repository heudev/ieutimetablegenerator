import React, { useState, useEffect, memo } from "react";
import Tooltip from '@mui/material/Tooltip';

function Courses({ setCourses, setMessage }) {
    const [allCourses, setAllCourses] = useState(false)
    const [selectedCoursesValues, setselectedCoursesValues] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0)
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://ieutimetable.apphub.repl.co/allcourses")
            .then(response => {
                if (response.ok && response.status === 200) {
                    return response.json()
                }
            })
            .then(receivedData => setAllCourses(receivedData))
            .catch(err => console.log(err))
    }, []);


    const handleSearchCourses = (event) => {
        setSearchTerm(event.target.value.toUpperCase());
    };

    const filteredList = allCourses && allCourses.filter((item) => item.uni_code.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleClickCourses = (value) => {
        if (selectedCoursesValues.includes(value)) {
            setselectedCoursesValues(selectedCoursesValues.filter((v) => v !== value));
            setTotalCredit(totalCredit - +value.credit)
        } else {
            setselectedCoursesValues([...selectedCoursesValues, value]);
            setTotalCredit(totalCredit + +value.credit)
        }
    };

    useEffect(() => {
        allCourses && setMessage("Almak istediğiniz dersleri seçiniz")
    }, [allCourses, setMessage])


    useEffect(() => {
        setCourses(selectedCoursesValues.map(({ uni_code }) => uni_code))
    }, [selectedCoursesValues, setCourses])


    return (
        <div className='container alert shadow-lg rounded' style={{ "backgroundColor": "rgb(255,255,255)", "borderBottom": "5px solid rgb(9,33,67)" }}>
            <div className="d-flex justify-content-between">
                <strong className='m-1' style={{ "color": "rgb(9,33,67)" }}>Almak istediğim dersler</strong>
                <div className="d-flex align-items-center rounded badge rounded-pill shadow-lg bg-gradient" style={{ "backgroundColor": "rgb(29,73,135)", height: "28px" }}>
                    <strong className="me-1 text-white">AKTS</strong>
                    <span className='badge rounded-pill' style={{ backgroundColor: "rgb(237,116,46)", fontSize: "12px" }}>{totalCredit}</span>
                </div>
            </div>
            <div className="d-sm-flex align-items-start">
                <div className="dropdown">
                    <button type="button" className="btn btn-sm bg-gradient text-white dropdown-toggle m-1 d-flex align-items-center shadow-lg" style={{ width: "200px", "backgroundColor": "rgb(29,73,135)" }} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <span className='badge rounded-pill me-1' style={{ backgroundColor: "rgb(237,116,46)" }}>{selectedCoursesValues.length}</span>
                        <span className="mx-auto">Ders seç</span>
                    </button>
                    <ul className="dropdown-menu bg-white text-center" style={{ width: "200px", maxHeight: "600px", overflowY: "auto" }}>
                        <li className="shadow-lg">
                            <input className="form-control mb-1 text-center" type="search" placeholder="Dersi ara" aria-label="Search" value={searchTerm}
                                onChange={handleSearchCourses} />
                        </li>
                        {
                            allCourses && filteredList.map((course, index) => (
                                <Tooltip title={course.dersAdi} placement="right-start" key={index}>
                                    {selectedCoursesValues.indexOf(course) > -1 ?
                                        <li key={index} className="dropdown-item border border-white rounded d-flex align-items-center" style={{ backgroundColor: "rgb(237,116,46)", color: "rgb(9,33,67)", cursor: "pointer" }} onClick={() => handleClickCourses(course)}>
                                            <span className="mx-auto">{course.uni_code}</span>
                                            <span className='badge rounded-pill position-relative' style={{ backgroundColor: "rgb(9,33,67)", width: "33px" }}>{course.credit}</span>
                                        </li>
                                        :
                                        <li key={index} className="dropdown-item rounded border d-flex align-items-center" style={{ backgroundColor: "rgb(255,255,255)", color: "rgb(9,33,67)", cursor: "pointer" }} onClick={() => handleClickCourses(course)}>
                                            <span className="mx-auto">{course.uni_code}</span>
                                            <span className='badge rounded-pill' style={{ backgroundColor: "rgb(237,116,46)", width: "33px" }}>{course.credit}</span>
                                        </li>}
                                </Tooltip>

                            ))
                        }
                    </ul>
                </div>
                <div className="mt-1 d-flex flex-wrap">
                    {selectedCoursesValues.map((course, index) => (
                        <Tooltip title={course.dersAdi} key={index}>
                            <span className="badge rounded-pill m-1 d-flex align-items-center" key={index} style={{ width: "110px", backgroundColor: "rgb(237,116,46)" }}>
                                <span className="mx-auto">{course.uni_code}</span>
                                <button className="btn badge rounded-pill" style={{ "backgroundColor": "rgb(29,73,135)" }} onClick={() => handleClickCourses(course)}>x</button>
                            </span>
                        </Tooltip>

                    ))
                    }
                </div>
            </div>
        </div>
    )
};

export default memo(Courses);