import { useRouter } from 'next/router'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

const SearchComponent = ({ search , setSearch , placeholder , className ,onKeyDownHandler }) => {

  const router = useRouter()
  const { subject } = router.query

  
  React.useEffect(() => {
    setSearch(subject)
} , [subject])


  const inputChangeHandler = (e) => {

    setSearch(e.target.value)
    if(!e.target.value){
      router.push("/")
    }
  }
  const cancelHandler = () => {

    setSearch("")
    router.push("/")
  }



  return (
    <div className={`rounded flex items-center relative gap-2 p-2 dark:text-dark-primary border border-dark-border ${className}`}>
        <BiSearch className='text-2xl' />
        <input onKeyDown={onKeyDownHandler} className=' w-28 outline-none bg-transparent text-md placeholder:capitalize' placeholder={placeholder}
            value={search} 
            onChange={inputChangeHandler} 
            type={"text"}
            
        />
        {search && <MdCancel onClick={cancelHandler} className='text-xl cursor-pointer' />}
    </div>
  )
}

export default SearchComponent