import { useState } from 'react'
import { MortageProvider } from './mortageContext'
import { MortageForm } from './form/MortageFormMain.jsx'

function App() {

    return (
        <MortageProvider>
            <main>
                <MortageForm />
            </main>
        </MortageProvider>
    )
}

export default App
