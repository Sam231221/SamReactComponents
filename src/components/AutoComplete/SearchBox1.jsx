import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export const SearchBox1 = ({searchCountries}) => {
  return (
    <div id='search-box1'>
       
        <input onChange={(e) => searchCountries(e.target.value)} type="text" placeholder='Search...' name="" id="" />
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
    </div>
  )
}
