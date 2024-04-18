import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";


const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    const nodeTypes = [
        /*{
            label: 'Начало диалога',
            type: 'start',
            icon: <div className="circle-icon">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path fill="#ffffff"
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </div>
        },
        {
            label: 'Конец диалога',
            type: 'stop',
            icon: <div className="circle-icon">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path fill="#ffffff"
                          d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                </svg>
            </div>
        },*/
        {
            label: 'Сообщение',
            type: 'message',
            icon: <div className="circle-icon-white">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path fill="#000000"
                          d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
                </svg>
            </div>
        },
        {
            label: 'Действие',
            type: 'message',
            icon: <div className="circle-icon-white">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path
                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                </svg>
            </div>
        },
        {
            label: 'Подтверждение',
            type: 'message',
            icon: <div className="circle-icon-white">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
            </div>
        },

    ]

    return (
        <Container fluid className="sidebar pt-0">
            <Row>
                <Col xs={12}>
                    <Nav className="flex-column vh-100">
                        {nodeTypes.map(nodeType =>
                            <Nav.Link className="justify-content-center sidebar-item" draggable
                                      onDragStart={(event) => onDragStart(event, nodeType.type)}>
                                <Row className="align-items-center">
                                    <Col xs={2}>
                                    {nodeType.icon}
                                    </Col>
                                    <Col xs={8} className="m-3 mt-2 mb-0 pt-3">
                                        <p style={{color: "black"}}>{nodeType.label}</p>
                                    </Col>
                                </Row>
                            </Nav.Link>
                        )}
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Sidebar;