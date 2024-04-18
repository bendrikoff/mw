import React, {useState, useRef, useCallback, useEffect} from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls, Background, NodeToolbar, useOnSelectionChange, ControlButton,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from '../components/Sidebar';

import '../index.css';
import '../overview.css';
import {Col, Container, Row} from 'react-bootstrap';
import TextUpdater from "../components/Nodes/TextUpdater";
import Start from "../components/Nodes/Start";
import Stop from "../components/Nodes/Stop";
import Message from "../components/Nodes/Message";
import DialogList from "../components/DialogList";
import Menu from "../components/Menu";
import SelectedPanel from "../components/SelectedPanelListener";
import SelectedPanelListener from "../components/SelectedPanelListener";

const initialNodes = [
    {
        id: '1',
        type: 'start',
        position: { x: 0, y: 0 },
        sourcePosition: 'right',
    },
    {
        id: '2',
        type: 'stop',
        position: { x: 0, y: 100 },
        sourcePosition: 'right',
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
    'start': Start,
    'stop': Stop,
    'message': Message,
};

const WorkPlace = (props) => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(props.data.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);


    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    useEffect(() => {
        setNodes(props.data.nodes);
    }, [props]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });


            let newNode = {
                id: getId(),
                type,
                position,
                data: {
                    label: `${type} node`,
                },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance],
    );

    return (
        <ReactFlowProvider>
            <SelectedPanelListener showSelectedPanel = {props.showSelectedPanel}/>
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onInit={setReactFlowInstance}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Controls/>
                    <Background color="#aaa" gap={16}/>
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    );
};

export default WorkPlace;