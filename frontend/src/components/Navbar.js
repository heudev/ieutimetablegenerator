import { memo } from "react"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg mb-3 rounded-bottom shadow-lg" style={{ "backgroundColor": "rgb(29,73,135)", "borderBottom": "5px solid rgb(9,33,67)" }}>
            <div className="container-fluid" >
                <div className="navbar-brand d-flex flex-wrap align-items-center">
                    <img src={"https://www.ieu.edu.tr/images/logoyeni_tr.png"} alt="IEU" style={{ "width": "70px" }} />
                    <span className="text-light ms-3" style={{ fontFamily: "sans-serif" }}><b>Ders Programı Oluşturucu</b></span>
                </div>
                <div className="me-auto">
                    <strong><mark className="rounded" style={{ backgroundColor: "rgb(237,116,46)", color: "rgb(9,33,67)" }}>(2022-2023 Bahar)</mark></strong>
                </div>
                <div>
                    <a href="https://www.github.com/heudev" className="text-white" target="_blank" rel="noreferrer"><i className="bi bi-github" style={{ "fontSize": "25px" }}></i></a>
                </div>
            </div>
        </nav>
    )
}

export default memo(Navbar);