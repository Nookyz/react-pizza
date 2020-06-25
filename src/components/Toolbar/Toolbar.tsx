import React from 'react'
import {MyToolBar} from './Toolbar.styled'
import { SortDropDown } from '../SortDropDown/SortDropDown'

interface IToolbarProps {
  
}

export const Toolbar: React.FC<IToolbarProps> = () => {
  return (
    <MyToolBar>
      <SortDropDown/>
    </MyToolBar>
  )
}
