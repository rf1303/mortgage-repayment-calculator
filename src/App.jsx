import { MortageProvider } from './mortageContext'
import { MortageForm } from './form/MortageFormMain.jsx'
import { YourResults } from './YourResult'

function App() {

    return (
        <MortageProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:outline-2 focus:outline-lime focus:rounded">
                Skip to main content
            </a>
            <div className="wrapper__body">
                <main id="main-content" className='bg-white w-full text capitalize font-plusJakarta py-8 px-6 grid gap-6 md:rounded-t-3xl lg:h-full lg:rounded-l-3xl lg:rounded-tr-none'>
                    <MortageForm />
                </main>
                <YourResults />
            </div>
        </MortageProvider>
    )
}

export default App
