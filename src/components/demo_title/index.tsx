import React from 'react'

import './style.less'

interface TitleProps {
  children?: React.ReactNode;
}

const DemoTitle = ({ children } : TitleProps) => {
  return <div className="demo-title">
    {children}
  </div>
}

export default DemoTitle
