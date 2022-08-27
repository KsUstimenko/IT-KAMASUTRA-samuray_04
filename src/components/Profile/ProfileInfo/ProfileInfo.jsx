import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://scontent.fadb6-5.fna.fbcdn.net/v/t39.30808-6/285720172_584898592994196_4013854892312259331_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=CSEab0G7Lb8AX_j2X3x&_nc_ht=scontent.fadb6-5.fna&oh=00_AT9ENOxiJa_-TOMBI85PPWMuxo040Uz-64tIy3R1148qOw&oe=630E8ADF"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;