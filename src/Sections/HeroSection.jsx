import SkillsList from "../Components/SkillsList.jsx";
import backgroundImage from "../assets/images/steve_bg.png";
import { skillsList} from "../data.js";

const HeroSection = () => {
    return (
        <div className="flex flex-row border-b-8 border-b-gray-500">
            <div className="hidden md:block w-1/3 bg-cover bg-left-top min-h-[300px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            <div className="flex flex-col justify-center">
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-[#5886C4] mb-2 text-8xl font-bold tracking-tight"><span
                        className="font-light text-gray-700 dark:text-gray-300">Hire Steve</span> TODAY</h1>
                    <p className="font-light text-gray-400 text-3xl mb-1">You got 99 problems but Steve ain't one</p>
                </div>
                <div className="mb-5">
                    <SkillsList skills={skillsList} className="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection