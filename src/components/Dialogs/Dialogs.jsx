import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="RM" id="1"/>
                <DialogItem name="Jin" id="2"/>
                <DialogItem name="Suga" id="3"/>
                <DialogItem name="J-Hope" id="4"/>
                <DialogItem name="Jimin" id="5"/>
                <DialogItem name="V" id="6"/>
                <DialogItem name="Jungkook" id="7"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="yo"/>
            </div>
        </div>
    )
}

export default Dialogs;