import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="features" className="py-10 bg-gray-100 intems-center">
            <h2 className="sr-only">Benefícios</h2>
            <h3 className="text-2xl font-bold text-gray-900">
                Benefícios
            </h3>

            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits