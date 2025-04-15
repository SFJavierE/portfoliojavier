import CV from "../../../assets/pdf/CVSosaFuch.pdf";
import { ReactElement, useState } from 'react';
import {LinkedIn, GitHub, Email, Cv, Phone, Copy} from '../../../utils/icons/Icons';
import { ButtonActions } from '../../../utils/interfaces/Interfaces';

const ButtonsPresentation = () =>{
    const [showBubleDialog, setShowBubleDialog] = useState<boolean>(false);
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

    const DelayShowBubleDialog = ( isShowing : boolean) =>{
        setTimeout(() =>{
            setShowBubleDialog(isShowing);
        }, 150)
    }
    
    const SocialMediaButton = ({action} : ButtonActions) : ReactElement =>{
        const classNameSVG : string = "w-10 h-10 hover:border-zinc-100 hover:bg-zinc-100 hover:text-indigo-500 transition ease in out delay-150 bg-indigo-950 rounded-md border-4 border-indigo-950";
        
        return(
            <button key={action} className="mr-4" onClick={()=>DoSomething(action)}>
                {
                    action == 'LinkedIn' ?
                    <LinkedIn className={classNameSVG}/> :
                    action == 'GitHub' ?
                    <GitHub className={classNameSVG}/>:
                    action == 'Email' ?
                    <Email className={classNameSVG}/>:
                    action == 'CopyEmail' ?
                    <div className="relative" onMouseEnter={()=> DelayShowBubleDialog(true)} onMouseLeave={()=> DelayShowBubleDialog(false)}>
                        <span className={`absolute bg-gray-600 text-zinc-100 w-auto rounded-sm p-1 -top-10 left-0 text-sm font-bold ${showBubleDialog ? "opacity-100" : "opacity-0"}`}>CopiarEmail</span>
                        <span className={`absolute font-bold text-medium -top-5 text-gray-700 left-4 ${showBubleDialog ? "opacity-100" : "opacity-0"}`}>▼</span>
                        <Copy className={classNameSVG}/>
                    </div> :
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
        <div className="flex justify-between md:justify-start lg:justify-start mt-2 mb-4">
            {actions.map(({action} : ButtonActions) => 
                <div key={action}>
                    <SocialMediaButton action={action}/>
                </div>
            )}
        </div>
    )
}

export default ButtonsPresentation;