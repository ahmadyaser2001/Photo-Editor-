import React from 'react'

export default function SidebarItem({name,active,handelClick}) {
  return (
    <button 
    className={`sidebar-item ${ active ? 'active':''}`}
    onClick={handelClick}
    >{name}</button>
  )
}
