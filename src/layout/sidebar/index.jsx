import SearchComponent from '@/components/SearchComponent'
import { POPULAR_SUBJECTS } from '@/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillMoonFill , BsFillSunFill } from 'react-icons/bs'

const Sidebar = ({ darkMode, setDarkMode }) => {

    const [search , setSearch] = React.useState("")
    const router = useRouter()

    const {subject} = router.query

    const onKeyDownHandler = (e) => {
        if(e.key === 'Enter' && search){
            const url = `/${search}`
            router.push(url)
        }
    }


  return (
    <div className="w-full h-full overflow-y-auto flex flex-col justify-between border-r dark:border-r-dark-border dark:text-dark-primary">
        <div className='flex flex-col gap-5'>
            <div className="h-14 w-full dark:bg-dark-border font-black text-3xl dark:text-dark-logo flex justify-center items-center">
                Abhilaksh
            </div>
            <div className='flex flex-col gap-5 px-2'>

                {/* Subject Search */}

                <SearchComponent placeholder={'search subject'} search={search} setSearch={setSearch} onKeyDownHandler={onKeyDownHandler} />

                {/* Popular subjects */}
                <div>
                    <h2 className='font-semibold text-xs mb-2 text-primary'>Popular Subjects</h2>
                    <div className='flex flex-col gap-2'>
                        {POPULAR_SUBJECTS.map(el => {
                            const isActive = subject === el;
                            return (
                                <Link href={`/${el}`} className="">
                                    <div className={`capitalize font-semibold px-2 py-2 ${isActive ? 'bg-dark-border' : 'bg-transparent'} dark:hover:bg-dark-border rounded text-primary`}>
                                        {el}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>


            </div>
        </div>
        <div className="h-14 w-full dark:border-t dark:border-t-dark-border font-black dark:text-dark-primary flex px-2 items-center justify-between">
            <div className='flex items-center gap-3 ml-2'>
                { darkMode ?  <BsFillSunFill /> : <BsFillMoonFill /> }
                <span>{ darkMode ?  "Light" : 'Dark' } Mode</span>
            </div>
            {/* Toggle */}
            <div onClick={() => setDarkMode(prev => !prev)} className=' h-[24px] w-[44px] bg-slate-400 rounded-2xl relative box-content cursor-pointer'>
                <div className={`bg-dark-logo h-[70%] m-1 aspect-square rounded-full absolute top-0 ${darkMode ? 'right-0' : 'left-0'}`} />
            </div>
        </div>

    </div>
  )
}

export default Sidebar