import React from 'react'

const Table = ({ data }) => {
  return (
    <table className='w-full border dark:text-dark-primary dark:border-dark-border'>
        <thead className='py-2 border-b dark:border-b-dark-border '>
            <tr className='child:capitalize child:py-3'>
                <th>title and sub title</th>
                <th>author</th>
                <th>first publish year</th>
                <th>language</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map(el => (
                    <tr className='child:text-center'>
                        <td>{el.title}</td>
                        <td>{el.author_name?.join(", ")}</td>
                        <td>{el.first_publish_year}</td>
                        <td>{el.language?.join(", ")}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
  )
}

export default Table