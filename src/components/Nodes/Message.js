import React, { useCallback } from 'react';
import {Handle, NodeToolbar, Position, useReactFlow} from 'reactflow';
import {Button, CloseButton, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar";
const handleStyle = { left: 10 };

function Message(data) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const { getNode, setNodes, addNodes, setEdges } = useReactFlow();

    const deleteNode = useCallback(() => {
        setNodes((nodes) => nodes.filter((node) => node.id !== data.id));
        setEdges((edges) => edges.filter((edge) => edge.source !== data.id));
    }, [data.id, setNodes, setEdges]);
    return (

        <Container className="message-node">
            <NodeToolbar
                position={Position.Right}
            >
                <CloseButton className="closeButton p-1" onClick={deleteNode}/>
            </NodeToolbar>
            <Handle type="target" position={Position.Top}/>
            <Row className="flex-row">
                <Col className="m-auto">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                        <path fill="#000000"
                              d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
                    </svg>
                    </Col>
                    <Col className="mt-1 mb-1">
                        <label htmlFor="text">Сообщение</label>
                    </Col>
                </Row>
            <Handle type="source" position={Position.Bottom} id="b"/>
        </Container>
    );
}

export default Message;