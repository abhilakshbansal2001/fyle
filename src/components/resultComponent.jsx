import React from 'react'
import PaginationBtn from './PaginationBtn';
import Table from './table'

const ResultComponent = ({data , pageNumber , setPageNumber}) => {
    const numFound = data.numFound,
          start    = data.start;
    const nextDisabled = (start+10) >= numFound 
  return (
        <div className='w-[90%] mx-auto'>
            <Table data={data?.docs} />


            {/* pagination */}
            <div className='flex justify-between mt-10'>
                {/* previous */}
                <PaginationBtn onClick={() => setPageNumber(prev => prev-1)} text="previous" disabled={pageNumber === 1} />


                {/* next */}
                <PaginationBtn onClick={() => setPageNumber(prev => prev+1)} text="next" disabled={nextDisabled}/>


            </div>
        </div>

  )
}

export default ResultComponent