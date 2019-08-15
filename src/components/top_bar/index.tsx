import React from 'react'
import { Header } from 'ink-rui'

import './style.less'

interface TopBarProps {
  children?: React.ReactNode;
  title?: string;
  history: any;
}

const TopBar = ({ title, history } : TopBarProps) => {
  return (
    <Header
      className='topbar-wrapper'
      left={
        <i className='icon iconfont' onClick={() => history.go(-1)}>&#xe645;</i>
      }
      center={
        <span className='title'>{title}</span>
      }
    />
  )
}

export default TopBar
