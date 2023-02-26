import { memo, useState } from "react";

function Submit({ setCreatedCourses, setMessage, unwantedDays, unwantedTimes, selectedCourses }) {

    const [check, setCheck] = useState(false)

    const handleClickCheck = () => {
        setCheck(!check)
    }

    const [process, setProcess] = useState(false)

    const handleSubmit = (value) => {
        setProcess(true)
        setCreatedCourses(false)
        setMessage(false)
        value.preventDefault();
        fetch('https://ieutimetable.apphub.repl.co/course', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "unwantedDays": unwantedDays,
                "unwantedTimes": unwantedTimes,
                "courses": selectedCourses,
                "sameTimes": check
            })
        })
            .then(response => response.json())

            .then(response => {
                setCreatedCourses(response)
                setProcess(false)
            })

            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <div className="badge alert text-dark shadow-lg p-2 pt-3" style={{ backgroundColor: "rgb(255,255,255)", "borderBottom": "5px solid rgb(9,33,67)" }}>
                <label className="form-check-label" htmlFor="Switch">Aynı ders programlarına ait farklı section'ları ekle</label>
                <div className="form-check form-switch d-flex justify-content-center mt-2">
                    <input className="form-check-input" id="Switch" type="checkbox" value="yes" onClick={handleClickCheck} style={{ height: "20px", width: "40px" }}></input>
                </div>
            </div>
            <div>
                {
                    process ?
                        <button type="submit" className="btn btn-sm btn-danger bg-gradient shadow-lg">Ders programı oluşturuluyor <span className="spinner-border spinner-border-sm text-light ms-1"></span></button>
                        : <button type="submit" className="btn btn-sm btn-danger bg-gradient shadow-lg" >Ders programını oluştur</button>
                }
            </div>
        </form>
    )
}

export default memo(Submit);