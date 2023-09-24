
import { useState } from "react";


function Card({id,name,image,info,price,removeTour})//map krne ke yha card me sare dat aaa gya hai
{

    const[readmore,setReadmore] = useState(false);


    //yha hme discription niklna pdega data se  
    const description = readmore ? info :`${info.substring(0,200)}...`

    function readmoreHandler()
    {//yha aap true or false me switch kr rhe ho is handelr ke undr
        setReadmore(!readmore);
    }






    return(
        <div className='card'>

        <img src={image} alt=""  className="image"/>
        <div className="tour-info">
        <div className="tour-details">
            <h4 className="tour-price">${price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Show Less`:`Read More`}
            </span>
        </div>
        </div>
        <button className="btn-red" onClick={()=>removeTour(id)}>Not interseted</button>
        </div>

    );

}
export default Card;