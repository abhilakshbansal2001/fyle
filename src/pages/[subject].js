import { fetchSubjectResult } from '@/api/query';
import Loader from '@/components/loader';
import SubjectResultComponent from '@/components/subjectResultComponent';
import { useRouter } from 'next/router'
import React from 'react'

const SubjectPage = () => {

    const [data , setData] = React.useState([])

	const [loading, setLoading] = React.useState(false);
	const [pageNumber, setPageNumber] = React.useState(1);

    const router = useRouter()
    const {subject} = router.query

    React.useEffect(() => {
        setPageNumber(1)
    } , [subject])


    
	React.useEffect(() => {
		const controller = new AbortController();
		
        setLoading(true)
        fetchSubjectResult(pageNumber,controller)
        .then(response => {
            if(response)
                setData(response.data)
            return response;
        })
        .then(data => {
            console.log(data,'dada')
            if(data)
                setLoading(false)
        }).catch(err => console.log("dmka" , err))
        .finally(() => console.log(data))


		return () => {
			controller.abort();
		}



	},[pageNumber , subject])


  return (
    <div className='h-full'>
        <div className='h-28    border-b py-0 border-b-dark-border flex items-center px-5'>
            <h1 className='text-5xl font-bold capitalize dark:text-dark-primary'>{ subject }</h1>
        </div>
		<div className='h-[calc(100vh-7rem)] flex flex-col  overflow-auto p-10'>
			{
                loading ? <Loader />  : <SubjectResultComponent data={data} pageNumber={pageNumber} setPageNumber = {setPageNumber} />
			}
		</div>


    </div>
  )
}

export default SubjectPage