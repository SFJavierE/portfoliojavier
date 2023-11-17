import './styles.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavbarLink } from './Interface';

const NavbarLinkComponent: React.FC<NavbarLink>= ({text}) : React.ReactElement => (
    <div className="nav-item">
        <span className="nav-link active">{text}</span>
    </div>
)

const NavbarComponent = () : React.ReactElement => {
    const itemsList : string[] = ['Proyectos', 'Educación', 'Experiencia', 'Logros'];
    const isMobile : boolean = useMediaQuery({maxWidth: 1000});

    const ViewMobile = () => (
        <nav className="navbar navbar-expand-lg bg-cold-3 rounded-top-3 text-cold-2 fw-bold" style={{height: 'auto'}}>
            <div className="row">
                { itemsList.map((item: string) => 
                        <div key={item} className='col-5 text-center mb-1' style={{width: '50%'}}>
                            <NavbarLinkComponent text={item}/>
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
                { itemsList.map((item: string) => 
                        <div key={item}>
                            <NavbarLinkComponent text={item}/>
                        </div>
                    )
                }
            </div>
        </nav>
    ) : <ViewMobile/>;
}

export default NavbarComponent;