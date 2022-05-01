import React from 'react'
import './SidebarOption.css'

function SidebarOption({ option, Icon }) {
    return (
        <div className={'sidebar_option ' + (Icon && 'sidebar_icons_title')}>
            {Icon && <Icon className='sidebar_iconp' />}
            {Icon ? <h4> {option} </h4> : <p> {option} </p>}
        </div>
    )
}

export default SidebarOption