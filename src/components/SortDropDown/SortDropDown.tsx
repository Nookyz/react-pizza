import React, { useState, useRef } from 'react'
import {MyDropDown, MySortDropDown, MyPopup} from './SortDropDown.styled'
import { useClose } from '../../hooks/close.hook'

interface ISortDropDownProps {
  
}

export const SortDropDown: React.FC<ISortDropDownProps> = () => {

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const popupRef = useRef<HTMLDivElement | null>(null)

  useClose(popupRef, () => setOpenPopup(false))

  return (
    <MyDropDown>
      <MySortDropDown 
        onClick={() => setOpenPopup(!openPopup)} 
        disabled={openPopup}  
      >
        <span className='text'>
          Сортировка
        </span>
        <span className="material-icons sort">
          sort
        </span>
      </MySortDropDown>

      {openPopup &&
        <MyPopup ref={popupRef}>
          <div className='popup-item' onClick={() => console.log('низкая-высокая')}>
            <span>Цена низкая-высокая</span>
          </div>
          <div className='popup-item' onClick={() => console.log('высокая-низкая')}>
            <span>Цена высокая-низкая</span>
          </div>
        </MyPopup>
      }

    </MyDropDown>
  )
}
