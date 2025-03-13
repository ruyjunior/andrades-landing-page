import { FiActivity, FiHeart, FiStar, FiCheckCircle, FiZap, FiPlusCircle,
    FiTarget, FiFeather, FiShield, FiDroplet, FiRefreshCcw, FiWind, FiSmile
 } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Skin Cleansing",
        description: "A deep cleansing process that removes dirt, oil, and impurities, leaving the skin refreshed and glowing.",
        bullets: [
            {
                title: "Deep Hydration",
                description: "Helps to keep the skin moisturized and prevent dryness.",
                icon: <FiActivity size={26} />
            },
            {
                title: "Removes Impurities",
                description: "Effectively cleanses pores and removes dirt and toxins.",
                icon: <FiHeart size={26} />
            },
            {
                title: "Boosts Radiance",
                description: "Enhances skin brightness and evens out complexion.",
                icon: <FiStar size={26} />
            },
            {
                title: "Gentle on Skin",
                description: "Suitable for all skin types, even sensitive skin.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/services/service1.png"
    },
    {
        title: "Laser Hair Removal",
        description: "An effective and long-lasting solution to reduce unwanted hair growth, leaving your skin smooth and hair-free for longer.",
        bullets: [
            {
                title: "Long-Lasting Results",
                description: "Significantly reduces hair growth with prolonged effects.",
                icon: <FiZap size={26} /> // Represents laser energy/light
            },
            {
                title: "Precision Treatment",
                description: "Targets hair follicles without damaging the surrounding skin.",
                icon: <FiTarget size={26} /> // Represents laser precision
            },
            {
                title: "Smoother Skin",
                description: "Eliminates the need for frequent shaving and reduces ingrown hairs.",
                icon: <FiFeather size={26} /> // Represents softness and smooth skin
            },
            {
                title: "Safe & Comfortable",
                description: "Minimally invasive procedure with little to no discomfort.",
                icon: <FiShield size={26} /> // Represents safety and protection
            }
        ],
        imageSrc: "/images/services/service2.png"
    },
    {
        title: "Lymphatic Drainage",
        description: "A therapeutic massage technique that stimulates the lymphatic system, reducing swelling, improving circulation, and promoting detoxification.",
        bullets: [
            {
                title: "Reduces Swelling",
                description: "Helps drain excess fluids, reducing puffiness and water retention.",
                icon: <FiDroplet size={26} /> // Represents fluid movement
            },
            {
                title: "Boosts Circulation",
                description: "Stimulates blood and lymph flow for better overall health.",
                icon: <FiRefreshCcw size={26} /> // Represents continuous circulation
            },
            {
                title: "Enhances Detoxification",
                description: "Aids in eliminating toxins, supporting the body's natural cleansing process.",
                icon: <FiWind size={26} /> // Represents detox and lightness
            },
            {
                title: "Promotes Relaxation",
                description: "Relieves tension and stress while improving overall well-being.",
                icon: <FiHeart size={26} /> // Represents wellness and self-care
            }
        ],
        imageSrc: "/images/services/service3.png"
    },
    {
        title: "Massage Therapy",
        description: "A therapeutic technique that relieves muscle tension, improves circulation, and promotes relaxation for overall well-being.",
        bullets: [
            {
                title: "Relieves Muscle Tension",
                description: "Eases tight muscles, reduces pain, and improves flexibility.",
                icon: <FiZap size={26} /> // Represents energy and muscle relief
            },
            {
                title: "Enhances Relaxation",
                description: "Reduces stress and promotes mental and physical relaxation.",
                icon: <FiSmile size={26} /> // Represents well-being and happiness
            },
            {
                title: "Improves Circulation",
                description: "Stimulates blood flow, helping oxygen and nutrients reach tissues.",
                icon: <FiHeart size={26} /> // Represents heart health and circulation
            },
            {
                title: "Gentle & Soothing",
                description: "Provides a calming experience, relieving anxiety and tension.",
                icon: <FiFeather size={26} /> // Represents softness and care
            }
        ],
        imageSrc: "/images/services/service4.png"
    },
    {
        title: "Physiotherapy (Post-Plastic Surgery)",
        description: "A specialized treatment that aids in post-surgical recovery, reducing swelling, improving circulation, and enhancing healing for optimal results.",
        bullets: [
            {
                title: "Reduces Swelling & Bruising",
                description: "Helps drain excess fluids and minimizes post-surgical inflammation.",
                icon: <FiRefreshCcw size={26} /> // Represents circulation and fluid drainage
            },
            {
                title: "Accelerates Recovery",
                description: "Promotes tissue healing and helps regain mobility safely.",
                icon: <FiPlusCircle size={26} /> // Represents healing and recovery progress
            },
            {
                title: "Enhances Circulation",
                description: "Stimulates blood flow to prevent complications and improve healing.",
                icon: <FiHeart size={26} /> // Represents cardiovascular health and well-being
            },
            {
                title: "Safe & Personalized Treatment",
                description: "Tailored physiotherapy techniques for a comfortable and effective recovery.",
                icon: <FiShield size={26} /> // Represents protection and safety
            }
        ],
        imageSrc: "/images/services/service5.png"
    },
    {
        title: "Enzyme Application",
        description: "A treatment that uses natural enzymes to promote skin rejuvenation, reduce localized fat, and enhance overall skin appearance.",
        bullets: [
            {
                title: "Reduces Localized Fat",
                description: "Helps break down fat cells in targeted areas, promoting a more sculpted body shape.",
                icon: <FiZap size={26} /> // Represents energy and fat breakdown
            },
            {
                title: "Promotes Skin Rejuvenation",
                description: "Stimulates collagen production, reducing the appearance of wrinkles and improving skin texture.",
                icon: <FiSmile size={26} /> // Represents youthful and healthy skin
            },
            {
                title: "Improves Circulation",
                description: "Enhances blood flow to promote detoxification and skin health.",
                icon: <FiHeart size={26} /> // Represents improved circulation and health
            },
            {
                title: "Soothing & Non-Invasive",
                description: "A gentle, non-invasive procedure that provides a relaxing experience without discomfort.",
                icon: <FiFeather size={26} /> // Represents the gentle, soothing nature of the treatment
            }
        ],
        imageSrc: "/images/services/service6.png"
    },

    
];

/*
Limpeza de pele 
Depilação a laser
Drenagem linfática
Massoterapia
Fisioterapia (pós operatória cirurgia plástica)
Aplicação de enzimas 
Rejuvenescimento facial
*/