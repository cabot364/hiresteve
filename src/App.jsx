import './App.css'
import HeroSection from './Sections/HeroSection'
import IntroSection from "./Sections/IntroSection.jsx";
import StatsSection from "./Sections/StatsSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import { useData } from './Utility/DataContext';


function App() {
    const { isLoading, data } = useData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HeroSection skillsList={data.skillsList} />
            <div className="main w-11/12 md:w-3/4 m-auto">
                <IntroSection introData={data.introData} portfolioItems={data.portfolioItems} />
                <StatsSection className="bg-gray-800" educationData={data.educationData} skillsDetails={data.skillsDetails} />
                <h1 className="text-4xl font-thin text-gray-600 my-10">Work History</h1>
                <WorkSection className="mb-10 rounded" workData={data.workData}/>
            </div>
        </>
    )
}

export default App
