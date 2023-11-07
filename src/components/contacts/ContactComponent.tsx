import { Contact } from './Inteface';

export default function ContactComponent () {
    const contactInfo: Contact[] = [
        {
            data: '(+54) 223-6696559'
        },
        {
            data: 'sosafuch@gmail.com'
        },
        {
            contactMedium: 'Linkedin',
            data: 'https://www.linkedin.com/in/sosafuch/',
            isLink: true
        },
        {
            contactMedium: 'Github',
            data: 'https://github.com/Zoaxx1',
            isLink: true
        }
    ]

    const ContactInfo: React.FC<Contact> = ({contactMedium, data, isLink}) => (
        <div className='text-center container-fluid p-2 fs-7  text-cold-3'>
            {
                isLink &&
                <a
                    className='text-decoration-none  text-cold-3'
                    href={data}
                >
                    {contactMedium}
                </a>
            }
            {
                !isLink &&
                <span className=''>{data}</span>
            }
        </div>
    )


    return(
        <div className='rounded-bottom-4 bg-cold-2'>
            <div className='row'>
                {
                    contactInfo.map((c) => (
                            <div key={c.data} className='col'>
                                <ContactInfo {...c}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}