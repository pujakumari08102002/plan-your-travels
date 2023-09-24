import React from "react";
import  data from './data'
import Tours from "./Components/Tours";
import { useState } from "react";
import Card from './Components/Card'

const App = () => {




  //yha maine phle data nikla 
  const [tours,setTours] = useState(data);
  //yha maine tours vale variable ke undr sara data dal diya hai

  function removeTour(id)//sb kch same ho skti hai bt id same nhi ho skti hai hm tour ko remove krenge id se
  {
    const newTours = tours.filter(tour=>tour.id !==id)//yha aap y kehna chate ho ki agr aap koi id input vejoge agr wo id ka tour milta hai to usko filter kr dena
    //suppose mai agra ka id send krunga or agra id mil gya lekin or sb ka nhi mila to mai jiska nhi mila usko mai new tour me dal dunga or bad me set kr dunga
    setTours(newTours);
  }

  if(tours.length ===0)
  {
    return (
      
      <div className="refresh">
        <h2>No Tours left</h2>
        <button  className="btn-white"    onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>

    );
  }




  return (
    <div>
      
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {/* yha ab tours va;e componets ke upr chlte hai */}
    </div>
  )
};

export default App;
