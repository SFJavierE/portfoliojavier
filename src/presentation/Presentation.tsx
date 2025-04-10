

import { Name } from "./Name";
import { Job } from "./Job";
import { SocialMedias } from "./SocialMedias";
import { ShortDescription } from "./ShortDescription";
import { Photo } from "./Photo";

export default function Presentation(){

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
