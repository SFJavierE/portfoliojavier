import './styles.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavbarLink } from './Interface';

const NavbarLinkComponent: React.FC<NavbarLink>= ({text, sectionId}) : React.ReactElement => {
    const navLinkScroll = (): void => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="nav-item">
            <span onClick={() => navLinkScroll()} className="nav-link active">{text}</span>
        </div>
    )
}

const NavbarComponent = () : React.ReactElement => {
    const itemsList : NavbarLink[] = [
        {
            text: 'Proyectos',
            sectionId: 'projects'
        },
        {
            text: 'Educación',
            sectionId: 'education'
        },
        {
            text: 'Experiencia',
            sectionId: 'experiencie'
        },
        {
            text: 'Logros',
            sectionId: 'achievements'
        }
    ];
    const isMobile : boolean = useMediaQuery({maxWidth: 1000});

    const ViewMobile = () => (
        <nav className="navbar navbar-expand-lg bg-cold-3 rounded-top-3 text-cold-2 fw-bold" style={{height: 'auto'}}>
            <div className="row">
                { itemsList.map((link: NavbarLink) => 
                        <div key={link.text} className='col-5 text-center mb-1' style={{width: '50%'}}>
                            <NavbarLinkComponent {...link}/>
                        </div>
                    )
                }
            </div>
        </nav>
    )

    return !isMobile ? (
        <nav className="navbar navbar-expand-lg bg-cold-3 rounded-top-3 text-cold-2 fw-bold" style={{height: 'auto'}}>
            <div className='bg-penguin position-absolute rounded-5 bg-cold-4' style={{width: '60px', height: '60px', top: '25%', left: '48%'}}>
            </div>
            <div className="container-fluid d-flex justify-content-around">
                { itemsList.map((link: NavbarLink) => 
                        <div key={link.text}>
                            <NavbarLinkComponent {...link}/>
                        </div>
                    )
                }
            </div>
        </nav>
    ) : <ViewMobile/>;
}

export default NavbarComponent;