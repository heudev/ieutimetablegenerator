import { useEffect, memo, useState } from "react";

function Timetable({ courses, index, style }) {

    const [timeTable, setTimeTable] = useState(false)

    useEffect(() => {
        let timetable = {
            "1": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
            "2": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
            "3": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
            "4": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
            "5": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
            "6": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
            "7": {
                "8:30": "",
                "9:25": "",
                "10:20": "",
                "11:15": "",
                "12:10": "",
                "13:05": "",
                "14:00": "",
                "14:55": "",
                "15:50": "",
                "16:45": "",
                "17:40": "",
                "18:35": "",
                "19:30": "",
                "20:25": "",
                "21:20": "",
                "22:15": "",
            },
        }
        courses && courses.map(course => (
            Object.entries(course.gunler_ayrintili).map(day => (
                day.map(times => (
                    Object.values(times).map(time => (
                        time.baslangicSaat && (timetable[day[0]][time.baslangicSaat] = `${course.uni_code} - ${course.section}`)
                    ))
                ))
            ))
        ))
        setTimeTable(timetable)
    }, [courses]);

    return (
        timeTable && <div style={style}>
            <div className="container-md rounded mt-3 table-responsive shadow-lg" style={{ backgroundColor: "rgb(9,33,67)", }}>
                <table className="calendar table table-bordered table-condensed table-sm table-hovered d-print-table text-center table-hover rounded" style={{ "backgroundColor": "rgb(255,255,255)", "color": "rgb(9,33,67)", tableLayout: "fixed" }} >
                    <thead >
                        <tr>
                            <th style={{ color: "rgb(237,116,46)" }} width="50px"><b>{index + 1}</b></th>
                            <th className="text-center" width="120px">
                                <strong>Pazartesi</strong>
                            </th>
                            <th className="text-center" width="120px">
                                <strong>Salı</strong>
                            </th>
                            <th className="text-center" width="120px">
                                <strong>Çarşamba</strong>
                            </th>
                            <th className="text-center" width="120px">
                                <strong>Perşembe</strong>
                            </th>
                            <th className="text-center" width="120px">
                                <strong>Cuma</strong>
                            </th>
                            <th className="text-center" width="120px">
                                <strong>Cumartesi</strong>
                            </th>
                            <th className="text-center" width="120px">
                                <strong>Pazar</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8:30</td>
                            <td>{timeTable[1]["8:30"]}</td>
                            <td>{timeTable[2]["8:30"]}</td>
                            <td>{timeTable[3]["8:30"]}</td>
                            <td>{timeTable[4]["8:30"]}</td>
                            <td>{timeTable[5]["8:30"]}</td>
                            <td>{timeTable[6]["8:30"]}</td>
                            <td>{timeTable[7]["8:30"]}</td>
                        </tr>
                        <tr>
                            <td>9:25</td>
                            <td>{timeTable[1]["9:25"]}</td>
                            <td>{timeTable[2]["9:25"]}</td>
                            <td>{timeTable[3]["9:25"]}</td>
                            <td>{timeTable[4]["9:25"]}</td>
                            <td>{timeTable[5]["9:25"]}</td>
                            <td>{timeTable[6]["9:25"]}</td>
                            <td>{timeTable[7]["9:25"]}</td>
                        </tr>
                        <tr>
                            <td>10:20</td>
                            <td>{timeTable[1]["10:20"]}</td>
                            <td>{timeTable[2]["10:20"]}</td>
                            <td>{timeTable[3]["10:20"]}</td>
                            <td>{timeTable[4]["10:20"]}</td>
                            <td>{timeTable[5]["10:20"]}</td>
                            <td>{timeTable[6]["10:20"]}</td>
                            <td>{timeTable[7]["10:20"]}</td>
                        </tr>
                        <tr>
                            <td>11:15</td>
                            <td>{timeTable[1]["11:15"]}</td>
                            <td>{timeTable[2]["11:15"]}</td>
                            <td>{timeTable[3]["11:15"]}</td>
                            <td>{timeTable[4]["11:15"]}</td>
                            <td>{timeTable[5]["11:15"]}</td>
                            <td>{timeTable[6]["11:15"]}</td>
                            <td>{timeTable[7]["11:15"]}</td>
                        </tr>
                        <tr>
                            <td>12:10</td>
                            <td>{timeTable[1]["12:10"]}</td>
                            <td>{timeTable[2]["12:10"]}</td>
                            <td>{timeTable[3]["12:10"]}</td>
                            <td>{timeTable[4]["12:10"]}</td>
                            <td>{timeTable[5]["12:10"]}</td>
                            <td>{timeTable[6]["12:10"]}</td>
                            <td>{timeTable[7]["12:10"]}</td>
                        </tr>
                        <tr>
                            <td>13:05</td>
                            <td>{timeTable[1]["13:05"]}</td>
                            <td>{timeTable[2]["13:05"]}</td>
                            <td>{timeTable[3]["13:05"]}</td>
                            <td>{timeTable[4]["13:05"]}</td>
                            <td>{timeTable[5]["13:05"]}</td>
                            <td>{timeTable[6]["13:05"]}</td>
                            <td>{timeTable[7]["13:05"]}</td>
                        </tr>
                        <tr>
                            <td>14:00</td>
                            <td>{timeTable[1]["14:00"]}</td>
                            <td>{timeTable[2]["14:00"]}</td>
                            <td>{timeTable[3]["14:00"]}</td>
                            <td>{timeTable[4]["14:00"]}</td>
                            <td>{timeTable[5]["14:00"]}</td>
                            <td>{timeTable[6]["14:00"]}</td>
                            <td>{timeTable[7]["14:00"]}</td>
                        </tr>
                        <tr>
                            <td>14:55</td>
                            <td>{timeTable[1]["14:55"]}</td>
                            <td>{timeTable[2]["14:55"]}</td>
                            <td>{timeTable[3]["14:55"]}</td>
                            <td>{timeTable[4]["14:55"]}</td>
                            <td>{timeTable[5]["14:55"]}</td>
                            <td>{timeTable[6]["14:55"]}</td>
                            <td>{timeTable[7]["14:55"]}</td>
                        </tr>
                        <tr>
                            <td>15:50</td>
                            <td>{timeTable[1]["15:50"]}</td>
                            <td>{timeTable[2]["15:50"]}</td>
                            <td>{timeTable[3]["15:50"]}</td>
                            <td>{timeTable[4]["15:50"]}</td>
                            <td>{timeTable[5]["15:50"]}</td>
                            <td>{timeTable[6]["15:50"]}</td>
                            <td>{timeTable[7]["15:50"]}</td>
                        </tr>
                        <tr>
                            <td>16:45</td>
                            <td>{timeTable[1]["16:45"]}</td>
                            <td>{timeTable[2]["16:45"]}</td>
                            <td>{timeTable[3]["16:45"]}</td>
                            <td>{timeTable[4]["16:45"]}</td>
                            <td>{timeTable[5]["16:45"]}</td>
                            <td>{timeTable[6]["16:45"]}</td>
                            <td>{timeTable[7]["16:45"]}</td>
                        </tr>
                        <tr>
                            <td>17:40</td>
                            <td>{timeTable[1]["17:40"]}</td>
                            <td>{timeTable[2]["17:40"]}</td>
                            <td>{timeTable[3]["17:40"]}</td>
                            <td>{timeTable[4]["17:40"]}</td>
                            <td>{timeTable[5]["17:40"]}</td>
                            <td>{timeTable[6]["17:40"]}</td>
                            <td>{timeTable[7]["17:40"]}</td>
                        </tr>
                        <tr>
                            <td>18:35</td>
                            <td>{timeTable[1]["18:35"]}</td>
                            <td>{timeTable[2]["18:35"]}</td>
                            <td>{timeTable[3]["18:35"]}</td>
                            <td>{timeTable[4]["18:35"]}</td>
                            <td>{timeTable[5]["18:35"]}</td>
                            <td>{timeTable[6]["18:35"]}</td>
                            <td>{timeTable[7]["18:35"]}</td>
                        </tr>
                        <tr>
                            <td>19:30</td>
                            <td>{timeTable[1]["19:30"]}</td>
                            <td>{timeTable[2]["19:30"]}</td>
                            <td>{timeTable[3]["19:30"]}</td>
                            <td>{timeTable[4]["19:30"]}</td>
                            <td>{timeTable[5]["19:30"]}</td>
                            <td>{timeTable[6]["19:30"]}</td>
                            <td>{timeTable[7]["19:30"]}</td>
                        </tr>
                        <tr>
                            <td>20:25</td>
                            <td>{timeTable[1]["20:25"]}</td>
                            <td>{timeTable[2]["20:25"]}</td>
                            <td>{timeTable[3]["20:25"]}</td>
                            <td>{timeTable[4]["20:25"]}</td>
                            <td>{timeTable[5]["20:25"]}</td>
                            <td>{timeTable[6]["20:25"]}</td>
                            <td>{timeTable[7]["20:25"]}</td>
                        </tr>
                        <tr>
                            <td>21:20</td>
                            <td>{timeTable[1]["21:20"]}</td>
                            <td>{timeTable[2]["21:20"]}</td>
                            <td>{timeTable[3]["21:20"]}</td>
                            <td>{timeTable[4]["21:20"]}</td>
                            <td>{timeTable[5]["21:20"]}</td>
                            <td>{timeTable[6]["21:20"]}</td>
                            <td>{timeTable[7]["21:20"]}</td>
                        </tr>
                        <tr>
                            <td>22:15</td>
                            <td>{timeTable[1]["22:25"]}</td>
                            <td>{timeTable[2]["22:25"]}</td>
                            <td>{timeTable[3]["22:25"]}</td>
                            <td>{timeTable[4]["22:25"]}</td>
                            <td>{timeTable[5]["22:25"]}</td>
                            <td>{timeTable[6]["22:25"]}</td>
                            <td>{timeTable[7]["22:25"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default memo(Timetable);

