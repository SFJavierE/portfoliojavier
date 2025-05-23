import CV from "../../../assets/pdf/CVSosaFuch.pdf";
import { ReactElement } from 'react';
import {LinkedIn, GitHub, Email, Cv, Phone, Copy} from '../../../utils/icons/Icons';
import { ButtonActions, ClassContainer } from '../../../utils/interfaces/Interfaces';

const CommunicationButtons = ({ classContainer } : ClassContainer) =>{
    const actions : ButtonActions[] = [
        {action: 'LinkedIn'},
        {action: 'GitHub'},
        {action: 'Whatsapp'},
        {action: 'Email'},
        {action: 'CopyEmail'},
        {action: 'CV'},
    ];
    const linkedIn : string = "https://www.linkedin.com/in/sosafuch";
    const github : string = "https://github.com/Zoaxx1";
    const email : string = "sosafuch@gmail.com";
    const whatsapp : string = "https://w.app/sosafuchjaviere";
    
    const SocialMediaButton = ({action} : ButtonActions) : ReactElement =>{
        const classNameSVG : string = "mr-3 w-10 h-10 hover:border-gray-200 hover:bg-gray-200 hover:text-indigo-800 transition ease in out text-indigo-200 delay-150 bg-indigo-900 rounded-md border-4 border-indigo-800 shadow-indigo-600 shadow-md hover:shadow-lg hover:shadow-indigo-400";
        
        return(
            <button key={action} className="" onClick={()=>DoSomething(action)}>
                {
                    action == 'LinkedIn' ?
                    <LinkedIn className={classNameSVG}/> :
                    action == 'GitHub' ?
                    <GitHub className={classNameSVG}/>:
                    action == 'Email' ?
                    <Email className={classNameSVG}/>:
                    action == 'CopyEmail' ?
                    <Copy className={classNameSVG}/> :
                    action == 'Whatsapp' ?
                    <Phone className={classNameSVG}/>:
                    <Cv className={classNameSVG}/>
                }
            </button>
        )
    }

    const Redirect = (link : string) => {
        window.open(link, "_blank");
    }

    const RedirectEmail = (email : string) =>{
        window.location.href = `mailto:${email}`;
    }

    const DownloadCV = async () =>{
        const cvName = "CVJavierESosaFuch";
        const response = await fetch(CV);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = cvName;
        link.click();
    }

    const DoSomething = (action : string) =>{
        switch(action){
            case 'LinkedIn':
                Redirect(linkedIn)
               break;
            case 'GitHub':
                Redirect(github)
                break;
            case 'Email':
                RedirectEmail(email)
                break;
            case 'Whatsapp':
                Redirect(whatsapp)
                break;
            default:
                DownloadCV();
                break;
        }
    }

    return(
        <div className={classContainer}>
            {actions.map(({action} : ButtonActions) => 
                <div key={action}>
                    <SocialMediaButton action={action}/>
                </div>
            )}
        </div>
    )
}

export default CommunicationButtons;