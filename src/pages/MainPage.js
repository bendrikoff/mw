import React, {createContext, useContext, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Menu from "../components/Menu";
import ReactFlow, {Background, Controls, ReactFlowProvider} from "reactflow";
import WorkPlace from "./WorkPlace";
import SelectedPanel from "../components/SelectedPanel";

const MainPage = () => {
    const [workplaceData, setWorkplaceData] = useState();
    const [selectedPanelData, setSelectedPanelData] = useState();

    return (
        <div className="dndflow" style={{height: '100vh'}}>
            <Container>
                <Row>
                    <Col md={3} className="p-0">
                        <Menu setData={setWorkplaceData}/>
                    </Col>
                    <Col md={9} className="vh-100 p-0">
                        {workplaceData ? <WorkPlace data = {workplaceData} showSelectedPanel = {setSelectedPanelData}/> : <div></div>}
                    </Col>
                    <Col md={9} className="vh-100 p-0">
                        {selectedPanelData ? <SelectedPanel data = {selectedPanelData}/> : <div></div>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainPage;