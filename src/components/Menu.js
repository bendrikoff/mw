import React, {useState} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import Sidebar from "./Sidebar";
import DialogList from "./DialogList";

const Menu = (props) => {
    const [mode, setMode] = useState('dialogList');
    return (
        <Row>
            <Col md={2} className="menu">
                <Nav className="flex-column vh-100">
                    <Nav.Link className="justify-content-center sidebar-item mt-2 w-75 m-auto"
                              onClick={() => setMode('dialogList')}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path fill="#ffffff"
                                  d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
                        </svg>
                    </Nav.Link>
                </Nav>
            </Col>
            <Col md={10} className="p-0">
                {mode == 'sidebar' ?
                    <Sidebar/> :
                    <DialogList handler={(nodes) => {
                        setMode('sidebar');
                        props.setData({
                            nodes:nodes,
                        });
                    }}/>}
            </Col>
        </Row>);
};

export default Menu;