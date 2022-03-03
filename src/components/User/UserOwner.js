import React from 'react'
import css from './UserOwner.module.css'
import { Lock } from 'react-feather';

function UserOwner() {
  return (
    <div className={css["profile_wrapper"]}>
    <div className={css["profile-name-title"]}>
      <div className={css["profile-container"]}>
        <div className={css["profile-image"]}><img className={css['img-styling']} height={70} width={70} alt="no preview available" src="https://randomuser.me/api/portraits/med/women/65.jpg" /></div>
        <div className={css["profile-name"]}>Leon Hunt</div>
        <div className={css["profile-email"]}>leonhunt@xyz.com</div>
      </div>
    </div>
    <div className={css["profile-name-status"]}>Active</div>
    <div className={css["profile-name-access"]}>Owner</div>
    <div className={css["profile-name-remove"]}><Lock style={{cursor:"pointer"}} color="#c3c3c3" /></div>
  </div>
  )
}

export default UserOwner