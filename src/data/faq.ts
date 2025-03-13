import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Are the treatments at ${siteDetails.siteName} suitable for all skin types?`,
        answer: "Yes! Our treatments are designed to be safe and effective for all skin types. During your consultation, our specialists will assess your skin and recommend the best options for you.",
    },
    {
        question: "Do I need to prepare before a treatment session?",
        answer: "It depends on the treatment. Some procedures may require avoiding sun exposure, certain skincare products, or specific medications. Our team will provide detailed pre-treatment guidelines.",
    },
    {
        question: "How many sessions are needed to see results?",
        answer: "The number of sessions varies based on the treatment and individual skin response. Some treatments show results after just one session, while others may require multiple visits for optimal effects.",
    },
    {
        question: "Is there any downtime after treatments?",
        answer: "Most treatments have minimal to no downtime, allowing you to resume daily activities immediately. However, some procedures may cause temporary redness or sensitivity. Our experts will guide you on post-treatment care.",
    },
    {
        question: "What are the benefits of aesthetic treatments beyond appearance?",
        answer: "In addition to enhancing your appearance, our treatments promote skin health, boost self-confidence, and contribute to overall well-being by addressing concerns like acne, aging signs, and skin hydration.",
    }
];
