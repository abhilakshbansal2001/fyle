import { fetchSearchResult } from '@/api/query'
import Image from 'next/image'
import React from 'react'

import { BiSearch } from 'react-icons/bi'
import Loader from '@/components/loader'
import Table from '@/components/table'
import ResultComponent from '@/components/resultComponent'


export default function Home() {

	const [search , setSearch] = React.useState("")
	const [loading, setLoading] = React.useState(false);
	const [pageNumber, setPageNumber] = React.useState(1);
	const inputRef = React.useRef(null)

	const [data,setData] = React.useState([])

	
    React.useEffect(() => {
        setPageNumber(1)
    } , [search])


	React.useEffect(() => {
		const controller = new AbortController();
		
		if(search){
			setLoading(true)
			fetchSearchResult(pageNumber,search,controller)
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

		}

		return () => {
			controller.abort();
		}



	},[search , pageNumber])


	const btnClickHandler = () => {
		inputRef.current?.focus();
	}




  return (
    <>
      
      <section className='h-full flex flex-col'>

        {/* Search option */}
        <div className='h-14 w-full dark:border-b py-0 dark:border-b-dark-border flex items-center px-2'>
			<div className={`rounded flex items-center gap-2 p-2 dark:text-dark-primary dark:border dark:border-dark-border w-[300px]`}>
				<BiSearch className='text-2xl' />
				<input ref={inputRef} className='flex-1 outline-none bg-transparent text-md placeholder:capitalize' placeholder={"search title or author"}
					value={search} 
					onChange={e => setSearch(e.target.value)} 
					type={"search"} 
				/>
			</div>
        </div>
		<div className='h-[calc(100vh-3.5rem)] flex flex-col  overflow-auto p-10'>
			{
				search ? 
					loading ? <Loader />  : <ResultComponent data={data} pageNumber={pageNumber} setPageNumber = {setPageNumber} />
				:

					<div className='h-full flex justify-center items-center flex-col'>
						<Image src={'/assets/images/search_something.png'} height={150} width={150} className="rounded" />
						<h2 className='dark:text-dark-primary text-lg mt-3 font-semibold'>Search Something</h2>
						<button onClick={btnClickHandler} className='dark:bg-dark-border rounded px-3 dark:text-dark-primary py-1 mt-2'>Search</button>
					</div>
			
			

			}
		</div>
      </section>
      
    </>
  )
}

