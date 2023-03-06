import React from 'react'

const SubjectTable = ({ data }) => {
  return (
    <table className='w-full border dark:text-dark-primary dark:border-dark-border'>
        <thead className='py-2 border-b dark:border-b-dark-border '>
            <tr className='child:capitalize child:py-3'>
                <th>title and sub title</th>
                <th>author</th>
                <th>first publish year</th>
                <th>edition count</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map(el => (
                    <tr className='child:text-center'>
                        <td>{el.title}</td>
                        <td>{el.authors[0]?.name}</td>
                        <td>{el.first_publish_year}</td>
                        <td>{el.edition_count}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
  )
}

export default SubjectTable