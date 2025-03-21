import { IMenuItem, ISocials } from "@/types";
import { menuItems } from "./menuItems";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    cnpj: string;
    telephone: string;
    telephone2: string;
    address: string;
    socials: ISocials;
} = {
    subheading: "Add a touch of confidence to your look. Discover our treatments.",
    quickLinks: menuItems,
    cnpj: '44.615.561/0001-70',
    email: 'andradesclinic@gmail.com',
    telephone: '+5571993116987',
    telephone2: '+5571992666597',
    address: 'Rua Nossa Senhora do Carmo, 69, Sete de Abril, Salvador, Bahia, Brasil',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        //youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/andradesclinica',
    }
}