import {makeAutoObservable} from "mobx";
import Dialog from "./DataModels/Dialog";

const initialNodes1 = [
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
const initialNodes2 = [
    {
        id: '1',
        type: 'start',
        position: { x: 0, y: 0 },
        sourcePosition: 'right',
    },
];
export default class DialogStore {
    constructor() {
        this._dialogs = [
            new Dialog('Приветствие', initialNodes1),
            new Dialog('Письмо об устройстве на работу', initialNodes2),
            new Dialog('Письмо с деловым предложением', null
            )
        ]
        makeAutoObservable(this)
    }

    setDialogs(dialogs) {
        this._dialogs = dialogs
    }
    get dialogs() {
        return this._dialogs
    }
}