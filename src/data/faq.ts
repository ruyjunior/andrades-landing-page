import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Os tratamentos na ${siteDetails.siteName} são indicados para todos os tipos de pele?`,
        answer: "Sim! Nossos tratamentos são desenvolvidos para serem seguros e eficazes em todos os tipos de pele. Durante a consulta, nossos especialistas avaliam sua pele e recomendam as melhores opções para você.",
    },
    {
        question: "Preciso me preparar antes de uma sessão de tratamento?",
        answer: "Depende do procedimento. Alguns tratamentos podem exigir evitar exposição ao sol, certos produtos de cuidados com a pele ou medicamentos específicos. Nossa equipe fornecerá orientações detalhadas antes do tratamento.",
    },
    {
        question: "Quantas sessões são necessárias para ver resultados?",
        answer: "O número de sessões varia conforme o tratamento e a resposta individual da pele. Alguns procedimentos apresentam resultados já na primeira sessão, enquanto outros podem exigir várias visitas para efeitos ideais.",
    },
    {
        question: "Existe algum tempo de recuperação após os tratamentos?",
        answer: "A maioria dos tratamentos possui pouco ou nenhum tempo de recuperação, permitindo que você retome suas atividades diárias imediatamente. No entanto, alguns procedimentos podem causar vermelhidão ou sensibilidade temporária. Nossos especialistas irão orientar sobre os cuidados pós-tratamento.",
    },
    {
        question: "Quais são os benefícios dos tratamentos estéticos além da aparência?",
        answer: "Além de melhorar a aparência, nossos tratamentos promovem a saúde da pele, aumentam a autoestima e contribuem para o bem-estar geral, tratando questões como acne, sinais de envelhecimento e hidratação da pele.",
    }
];  