export interface Contact {
    contactMedium: 'Github' | 'N° Celular' | 'Email' | 'Linkedin'
    data: string;
    isLink?: boolean;
}