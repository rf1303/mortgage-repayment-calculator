import { useState } from 'react'
import { MortageProvider } from './mortageContext'
import { MortageForm } from './form/MortageFormMain.jsx'
import { YourResults } from './YourResult'

function App() {

    return (
        <MortageProvider>
            <div className="wrapper__body"> 
                <main className='bg-white w-full text capitalize font-plusJakarta py-8 px-6 grid gap-6 md:rounded-t-3xl'>
                    <MortageForm />
                </main>
                <aside className="bg-slate-900 py-8 px-6 grid gap-6 md:p-10 md:rounded-b-3xl">
                    <YourResults />
                </aside>
            </div> 
        </MortageProvider>
    )
}

export default App
