import { useState } from 'react'
import { MortageProvider } from './mortageContext'
import { MortageForm } from './form/MortageFormMain.jsx'
import { YourResults } from './YourResult'

function App() {

    return (
        <MortageProvider>
            <main className='bg-white text capitalize font-plusJakarta py-8 px-6 grid gap-6'>
                <MortageForm />
            </main>
            <aside className="bg-slate-900 py-8 px-6 grid gap-6 ">
                <YourResults />
            </aside>
        </MortageProvider>
    )
}

export default App
