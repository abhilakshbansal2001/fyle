import React from 'react'
import PaginationBtn from './PaginationBtn';
import SubjectTable from './subjectTable';
import Table from './table'

const SubjectResultComponent = ({data , pageNumber , setPageNumber}) => {
    const numFound = data.work_count,
          start    = 3000;
    const nextDisabled = (start+10) >= numFound 

  return (
        <div className='w-[90%] mx-auto'>
            <SubjectTable data={data?.works} />


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

export default SubjectResultComponent