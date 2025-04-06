import { CardInfo } from "../interfaces/Interfaces";
import { Description } from "./Description";
import { PlaceJob } from "./PlaceJob";

export default function CardList ({info} : {info : CardInfo}) {
    return (
        <div className="">
            <span className=
            "text-2xl font-bold h-auto border-indigo-100 border-b-4 rounded-sm border-s-8 border-e border-t p-2 shadow-lg shadow-indigo-950 bg-indigo-950/25"
            >{info.title}</span>
            <div className="mt-8">
                {
                    info.data.map((data)=>{
                        return(
                            <div className="mb-4 w-full text-start text-zinc-100 divide-x py-3 rounded-lg grid grid-cols-6 gap-x-4">
                                <PlaceJob job={data} />
                                <div className="rows-start-2 col-span-5">
                                    {
                                    data.description.map((description) => {
                                        return(
                                            <div className="mb-3">
                                                <Description description={description}/>     
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}