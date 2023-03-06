import React from 'react'

const PaginationBtn = ({ text, onClick , disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className='rounded capitalize disabled:opacity-50 dark:text-dark-primary w-20 py-2 border border-dark-border'> {text}</button>
  )
}

export default PaginationBtn