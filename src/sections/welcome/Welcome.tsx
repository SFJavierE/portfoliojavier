import Name from "../../components/name/Name";
import ButtonsPresentation from "../../components/buttons/presentation/ButtonsPresentation";
import ShortDescription from "../../components/description/presentation/ShortDescription";
import Photo from "../../components/photo/Photo";

export default function Welcome() {
    return(
      <div className="flex flex-col-reverse md:flex-row w-full items-center gap-6">
        <div className="w-full md:w-1/2">
            <Name/>
            
            <div className="mt-4 mb-3">
                <span className="text-start text-2xl md:text-3xl lg:text-4xl text-indigo-500 font-semibold">
                    Frontend Developer
                </span>
            </div>
            
            <ButtonsPresentation/>
            <ShortDescription/>
        </div>
        <div className="w-full max-w-[200px] md:max-w-none md:w-1/2 flex justify-end">
            <div className="relative aspect-square">
                <Photo/>
            </div>
        </div>
      </div>
    )
}