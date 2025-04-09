

import { Name } from "./Name";
import { Job } from "./Job";
import { SocialMedias } from "./SocialMedias";
import { ShortDescription } from "./ShortDescription";
import { Photo } from "./Photo";
import { MateIcon, JoystickIcon, PCIcon } from "../icons/Icons";


export default function Presentation(){
    const classNameIcons : string = "p-1 bg-indigo-300/50 rounded-full h-10 w-10"

    return(
        <div className="flex justify-between">
            <div className="">
                <Name/>
                <div className="mt-4 mb-3">
                    <Job/>
                </div>
                <SocialMedias/>
                <ShortDescription/>
            </div>
            <div className="h-2/6 w-2/6 mr-8">
                <Photo/>
            </div>
        </div>
        )
}
