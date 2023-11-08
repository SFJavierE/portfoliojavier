import contactInfo from "./Information"
import { Contact } from './Inteface';

const ContactInfoComponent: React.FC<Contact> = ({contactMedium, data, isLink}) : React.ReactElement => (
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

const ContactComponent = () : React.ReactElement => (
    <div className='rounded-bottom-4 bg-cold-2'>
        <div className='row'>
            {
                contactInfo.map((c) => (
                        <div key={c.data} className='col'>
                            <ContactInfoComponent {...c}/>
                        </div>
                    )
                )
            }
        </div>
    </div>
)

export default ContactComponent;