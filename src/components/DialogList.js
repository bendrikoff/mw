import React, {useContext} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Context} from "../index";
const DialogList = (props) => {

    const dialogList = useContext(Context).dialogStore.dialogs;
    const handleClick = (nodes) => {
        props.handler(nodes);
    };

    return (
        <Container fluid className="sidebar p-0">
            <Col xs={12}>
                <Nav className="flex-column vh-100">
                    {dialogList.map(dialog =>
                        <Nav.Link className="justify-content-center dialog-list-item" onClick={() => handleClick(dialog.nodes)}>
                            <Row className="align-items-center">
                                <Col xs={8} className="mt-2 mb-2 m-3 pt-3">
                                    <p style={{color: "black"}}>{dialog.name}</p>
                                </Col>
                            </Row>
                        </Nav.Link>
                    )}
                </Nav>
            </Col>
        </Container>
    );
};

export default DialogList;