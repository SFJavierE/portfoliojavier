export interface Contact {
    contactMedium: 'Github' | 'N° Celular' | 'Email' | 'Linkedin'
    data: string;
    isLink?: boolean;
}

export interface NavbarLink {
    text: string;
}

export interface NavbarController {
    setCloseNavbar: (openCollapseNavbar: boolean) => void;
}