import { useEffect, useState, Dispatch, SetStateAction } from "react";

const WelcomeComponent = () : React.ReactElement => {
    const [age, setAge] = useState<number>(0);
    const [animationCoinOne, setAnimationCoinOne] = useState<boolean>(false);
    const [animationCoinTwo, setAnimationCoinTwo] = useState<boolean>(true);
    const [seeMe, setSeeMe] = useState<boolean>(false);
    const message : string = "Soy un desarrollador Fullstack con más de 3 años de experiencia profesional, y me enfoco en Técnologías como React, Angular, NodeJS, entre otros. Pero lo que siempre me caracterizó fue mi CREATIVIDAD que aplico en la creación de código, la resolución de problemas complejos y principalmente a la hora de aportar al equipo."

    const onTransition = (isAnimationOne: boolean) :void => {
        const timeTransition: number = 1500;
        let setAnimation : Dispatch<SetStateAction<boolean>>;
        let setOtherAnimation : Dispatch<SetStateAction<boolean>>;
        if(isAnimationOne){
            setAnimation = setAnimationCoinOne;
            setOtherAnimation = setAnimationCoinTwo;
        } else {
            setAnimation = setAnimationCoinTwo;
            setOtherAnimation = setAnimationCoinOne;
        }

        const transition = new Promise((resolv, reject) => {
            resolv(setAnimation(true));
        });

        transition.then(() => {
            setTimeout(() => {
                setSeeMe(!seeMe);
                setOtherAnimation(true);
            }, timeTransition);
        }).then(() => {
            setTimeout(() => {
                setOtherAnimation(false);
            }, timeTransition + 1000);
        })
    }

    useEffect(() => {
        const today = new Date();
        setAge(today.getFullYear() - 1997);
    }, []);

    useEffect(() => {
        const transitionInterval: () => void = () : void => {
            onTransition(!seeMe);
        }
        const intervalId = setInterval(transitionInterval, 15000);
        return () => {
            clearInterval(intervalId);
        }
    }, [seeMe]);


    return (
        <div className="row">
            <div className="col pt-4 text-start">
                <span className="text-cold-3" style={{fontSize: '35px'}}>Javier Eduardo Sosa Fuch</span>
                <hr className='border-cold-3' style={{marginTop: '-10px'}}/>
                <span className="fs-4">Argentina, Bs. As., Mar del Plata</span>
                <br />
                <span className="fs-4">Nivel de Inglés Conversacional</span>
                <br />
                <span className="fs-4">Edad: {age}</span>
            </div>
            <div className="col">
                {!seeMe && <button className={animationCoinOne ? "bg-cold-4 bg-penguin coin" : "bg-cold-4 bg-penguin"} style={{width: '100%', height: '60vh', borderRadius: '100%'}} onClick={()=>onTransition(true)}/>}
                {seeMe && <button className={animationCoinTwo ? "bg-me coin" : "bg-me"} style={{width: '100%', height: '60vh', borderRadius: '100%'}} onClick={()=>onTransition(false)}/>}
            </div>
            <div className='col pt-4 text-end'>
                <span className='ps-5' style={{fontSize: '20px'}}>
                    {message}     
                </span>
            </div>
        </div>
    )
}

export default WelcomeComponent;