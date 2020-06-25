import React, { useState, useRef } from 'react'
import {MyDropDown, MySortDropDown, MyPopup} from './SortDropDown.styled'
import { useClose } from '../../hooks/close.hook'
import { useDispatch } from 'react-redux'
import {filterByLowPrice, filterByHighPrice} from '../../redux/actions/filters'

interface ISortDropDownProps {
  
}

export const SortDropDown: React.FC<ISortDropDownProps> = () => {

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const popupRef = useRef<HTMLDivElement | null>(null)

  useClose(popupRef, () => setOpenPopup(false))

  const dispatch = useDispatch()

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
          <div className='popup-item' onClick={() => dispatch(filterByLowPrice())}>
            <span>Цена низкая-высокая</span>
          </div>
          <div className='popup-item' onClick={() => dispatch(filterByHighPrice())}>
            <span>Цена высокая-низкая</span>
          </div>
        </MyPopup>
      }

    </MyDropDown>
  )
}
