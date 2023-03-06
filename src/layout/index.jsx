import Head from 'next/head'
import React from 'react'
import Sidebar from "./sidebar"


const Layout = ({ children , title }) => {

    const [darkMode , setDarkMode] = React.useState(true)

    

  return (
    <React.Fragment>
        <Head>
            <title>Abhilaksh</title>
            <meta name="description" content="Created by Abhilaksh Bansal" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={`${darkMode && 'dark'}`}>
            <div className='h-screen w-screen flex dark:bg-dark-secondary'>

                <aside className='w-full h-full fixed inset-0 md:w-[250px] md:static'>
                    <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
                </aside>
                <main className='w-full'>
                    {children}
                </main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout