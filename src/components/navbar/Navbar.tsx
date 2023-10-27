import './style.css';

export default function Navbar () {
    const itemsList : string[] = ['Tecnologías', 'Proyectos', 'Logros', 'Contacto'];

    const navbarLink = (text : string) => (
    <div className='px-2'>
        <a className='nav-link text-info' href="#">{text}</a>
        <hr className='text-light'/>
    </div>
    )

    return (
        <nav className="navbar bg-primary px-2">
            <div className="container-navbar">
                <div className='px-2'>
                    <span className='navar-brand text-info'>Menu</span>
                    <hr className='text-light'/>
                </div>
                {itemsList.map((item) => navbarLink(item))}
            </div>
        </nav>
    )
}