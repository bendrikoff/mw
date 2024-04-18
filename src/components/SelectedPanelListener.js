import React, {useState} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import Sidebar from "./Sidebar";
import DialogList from "./DialogList";
import {useOnSelectionChange} from "reactflow";

const SelectedPanelListener = (props) => {

    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            props.showSelectedPanel(nodes, edges);
        },
    });
    return (<></>);
};

export default SelectedPanelListener;