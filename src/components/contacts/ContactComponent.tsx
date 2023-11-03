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
        <div className='text-center container-fluid p-2 text-info'>
            {
                isLink &&
                <a
                    className='text-decoration-none text-info'
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
        <div className='border-end border-start border-3 border-bottom rounded-bottom-4'>
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