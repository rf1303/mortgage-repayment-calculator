import { useState } from 'react'
import { MortageProvider } from './mortageContext'
import { MortageForm } from './form/MortageFormMain.jsx'

function App() {

    return (
        <MortageProvider>
            <main className='bg-white text capitalize font-plusJakarta py-8 px-6 grid gap-6'>
                <MortageForm />
            </main>
        </MortageProvider>
    )
}

export default App
