import Card from './Card'


function Tours({tours,removeTour})//let say yha mujhe tours nam ka data mil rha hai
{
    return(
        <div className='container'>
        <div>
             <h1 className='title'>Plan with Love</h1>
        </div>
        <div className='cards'>
        {
            tours.map((tour) => {
                return<Card {...tour} removeTour={removeTour}></Card>//yha hm tour ko map kr dy card se yha 7 value ke ly seven card return honge
           //kya mai yha bo skti hu ... ka mtlb ki tour object ki copy pass kr di
           
           
            })
        }
        </div>
            
        </div>
    )
}
export default Tours;