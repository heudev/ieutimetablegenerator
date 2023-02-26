import { useState, memo } from "react";
import Navbar from "./components/Navbar"
import Day from "./components/Day"
import Time from "./components/Time"
import Course from "./components/Course"
import Submit from "./components/Submit"
import Timetablewindow from "./components/Timetablewindow";

function App() {

  const [createdCourses, setCreatedCourses] = useState(false)
  const [unwantedDays, setUnwantedDays] = useState([])
  const [unwantedTimes, setUnwantedTimes] = useState([])
  const [selectedCourses, setSelectedCourses] = useState([])
  const [message, setMessage] = useState("Sunucuya bağlanılıyor lütfen bekleyiniz...")

  return (
    <div className="pb-2">
      <Navbar></Navbar>

      <Course setCourses={setSelectedCourses} setMessage={setMessage}></Course>
      <Time setUnwantedTimes={setUnwantedTimes}></Time>
      <Day setUnwantedDays={setUnwantedDays}></Day>

      <Submit setCreatedCourses={setCreatedCourses} setMessage={setMessage} unwantedDays={unwantedDays} unwantedTimes={unwantedTimes} selectedCourses={selectedCourses} ></Submit>

      {
        createdCourses && createdCourses.length > 5000 ?
          <div className="container alert shadow-lg rounded" role="alert" style={{ backgroundColor: "rgb(237,116,46)", "color": "rgb(9,33,67)" }}>
            <h4 className="alert-heading">5000+ ders programı kombinasyonu oluşturuldu. </h4>
            <p>Eğer bunları sana göstermeye kalkışacak olursam sunucu patlar. </p>
            <hr></hr>
            <p className="mb-0">Kombinasyonu azaltmak için yukarıdan <mark className="rounded shadow-lg">okula gitmek istemediğin gün</mark> ve(ya) <mark className="rounded shadow-lg">derse girmek istemediğin saat</mark> sayısını artır.</p>
          </div>
          :
          <div>
            {createdCourses && <div className="container">

              <div className="badge rounded-pill mt-3 mb-3 shadow-lg" style={{ backgroundColor: "rgb(237,116,46)", "color": "rgb(9,33,67)" }}>
                <b>{createdCourses.length}</b> adet ders programı oluşturuldu
              </div>

              {createdCourses.length > 0 && <Timetablewindow createdCourses={createdCourses} />}

            </div>}

          </div>
      }

      {message && <h1 className="text-center mt-5">{message}</h1>}
    </div>
  );
}

export default memo(App);
