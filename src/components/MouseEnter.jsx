import React, {useState} from 'react';

//<button onMouseEnter={() => setIsShown(true)}
//                onMouseLeave={() => setIsShown(false)}
//                onMouseOver={() => console.log("Hovered "+ props.pic.name + "!")} ></button>
function otherBoolean(props){
    //const bool = props.bool;
    if(props){
        return(false);
    }
    return(true);
}
function MouseEnter(props){
    const [isShown, setIsShown] = useState(false);

    return(
        <div className="MouseEnter">
            <button onClick={() => {setIsShown(otherBoolean(isShown));console.log("Clicked "+ props.pic.name + "!")}}
                 >
                {props.pic.name}
            </button>
            {isShown && (
            <div>
                <img onMouseOver={() => console.log("Hovered "+ props.pic.name + "!")} src={props.pic.src} alt={props.pic.alt} width="300" height="300" />
            </div>
        )}
        </div>
    );
}export default MouseEnter