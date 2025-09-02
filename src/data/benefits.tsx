import { FiActivity, FiHeart, FiStar, FiCheckCircle, FiZap, FiPlusCircle,
    FiTarget, FiFeather, FiShield, FiDroplet, FiRefreshCcw, FiWind, FiSmile
 } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Limpeza de Pele",
        description: "Um processo de limpeza profunda que remove sujeira, óleo e impurezas, deixando a pele renovada e radiante.",
        bullets: [
            {
                title: "Hidratação Profunda",
                description: "Ajuda a manter a pele hidratada e prevenir o ressecamento.",
                icon: <FiActivity size={26} />
            },
            {
                title: "Remove Impurezas",
                description: "Limpa os poros de forma eficaz, removendo sujeira e toxinas.",
                icon: <FiHeart size={26} />
            },
            {
                title: "Realça a Luminosidade",
                description: "Melhora o brilho da pele e uniformiza o tom.",
                icon: <FiStar size={26} />
            },
            {
                title: "Suave para a Pele",
                description: "Indicado para todos os tipos de pele, inclusive as sensíveis.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/services/service1.png"
    },
    {
        title: "Depilação a Laser",
        description: "Solução eficaz e duradoura para reduzir o crescimento de pelos indesejados, deixando a pele lisa por mais tempo.",
        bullets: [
            {
                title: "Resultados Duradouros",
                description: "Reduz significativamente o crescimento dos pelos com efeitos prolongados.",
                icon: <FiZap size={26} />
            },
            {
                title: "Tratamento Preciso",
                description: "Atua nos folículos sem danificar a pele ao redor.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Pele Mais Lisa",
                description: "Elimina a necessidade de depilar com frequência e reduz pelos encravados.",
                icon: <FiFeather size={26} />
            },
            {
                title: "Seguro e Confortável",
                description: "Procedimento minimamente invasivo e com pouco ou nenhum desconforto.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/services/service2.png"
    },
    {
        title: "Drenagem Linfática",
        description: "Técnica de massagem terapêutica que estimula o sistema linfático, reduzindo inchaço, melhorando a circulação e promovendo a desintoxicação.",
        bullets: [
            {
                title: "Reduz Inchaço",
                description: "Ajuda a drenar líquidos em excesso, diminuindo o inchaço e retenção de líquidos.",
                icon: <FiDroplet size={26} />
            },
            {
                title: "Melhora a Circulação",
                description: "Estimula o fluxo sanguíneo e linfático para mais saúde.",
                icon: <FiRefreshCcw size={26} />
            },
            {
                title: "Aumenta a Desintoxicação",
                description: "Auxilia na eliminação de toxinas, apoiando o processo natural de limpeza do corpo.",
                icon: <FiWind size={26} />
            },
            {
                title: "Promove Relaxamento",
                description: "Alivia tensão e estresse, melhorando o bem-estar geral.",
                icon: <FiHeart size={26} />
            }
        ],
        imageSrc: "/images/services/service3.png"
    },
    {
        title: "Massoterapia",
        description: "Técnica terapêutica que alivia tensões musculares, melhora a circulação e promove relaxamento para o bem-estar.",
        bullets: [
            {
                title: "Alivia Tensões Musculares",
                description: "Relaxa músculos, reduz dores e melhora a flexibilidade.",
                icon: <FiZap size={26} />
            },
            {
                title: "Aumenta o Relaxamento",
                description: "Reduz o estresse e promove relaxamento físico e mental.",
                icon: <FiSmile size={26} />
            },
            {
                title: "Melhora a Circulação",
                description: "Estimula o fluxo sanguíneo, levando oxigênio e nutrientes aos tecidos.",
                icon: <FiHeart size={26} />
            },
            {
                title: "Suave e Aconchegante",
                description: "Proporciona uma experiência calma, aliviando ansiedade e tensão.",
                icon: <FiFeather size={26} />
            }
        ],
        imageSrc: "/images/services/service4.png"
    },
    {
        title: "Fisioterapia (Pós-Cirurgia Plástica)",
        description: "Tratamento especializado que auxilia na recuperação pós-cirúrgica, reduzindo inchaço, melhorando a circulação e acelerando a cicatrização.",
        bullets: [
            {
                title: "Reduz Inchaço e Hematomas",
                description: "Ajuda a drenar líquidos e minimizar inflamações após a cirurgia.",
                icon: <FiRefreshCcw size={26} />
            },
            {
                title: "Acelera a Recuperação",
                description: "Promove a cicatrização dos tecidos e ajuda a recuperar a mobilidade com segurança.",
                icon: <FiPlusCircle size={26} />
            },
            {
                title: "Melhora a Circulação",
                description: "Estimula o fluxo sanguíneo para evitar complicações e melhorar a recuperação.",
                icon: <FiHeart size={26} />
            },
            {
                title: "Tratamento Seguro e Personalizado",
                description: "Técnicas de fisioterapia adaptadas para uma recuperação confortável e eficaz.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/services/service5.png"
    },
    {
        title: "Aplicação de Enzimas",
        description: "Tratamento que utiliza enzimas naturais para promover rejuvenescimento da pele, reduzir gordura localizada e melhorar a aparência.",
        bullets: [
            {
                title: "Reduz Gordura Localizada",
                description: "Auxilia na quebra de células de gordura em áreas específicas, promovendo contorno corporal.",
                icon: <FiZap size={26} />
            },
            {
                title: "Promove Rejuvenescimento",
                description: "Estimula a produção de colágeno, reduz rugas e melhora a textura da pele.",
                icon: <FiSmile size={26} />
            },
            {
                title: "Melhora a Circulação",
                description: "Aumenta o fluxo sanguíneo, promovendo desintoxicação e saúde da pele.",
                icon: <FiHeart size={26} />
            },
            {
                title: "Suave e Não Invasivo",
                description: "Procedimento gentil e relaxante, sem desconforto.",
                icon: <FiFeather size={26} />
            }
        ],
        imageSrc: "/images/services/service6.png"
    },
];