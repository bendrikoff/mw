import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
const handleStyle = { left: 10 };

function Stop({ data, isConnectable }) {
    return (
        <div>
            <Handle type="target" position={Position.Top} id="b" isConnectable={isConnectable}/>
            <div className="circle-icon">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path fill="#ffffff"
                          d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                </svg>
            </div>
        </div>
    );
}

export default Stop;