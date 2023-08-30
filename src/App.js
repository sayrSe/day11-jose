import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { Col, Row } from "antd";

function App() {
    return (
        <div className="App">
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/done"}>DONE LIST</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/help"}>HELP</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Row>
                <Col span={7}></Col>
                <Col span={10}>
                    <Outlet></Outlet>
                </Col>
                <Col span={7}></Col>
            </Row>
        </div>
    );
}

export default App;
