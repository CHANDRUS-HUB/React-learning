import { useState } from 'react'

const App = () => {
    //usestate
    //eg:1  
    const [color, setColor] = useState('red')
    function colorchange() {
        setColor('blue')
    }
    const[count,setcount]=useState(0)
    
    //eg:2
    const [car, setCar] = useState({ brand: 'bukati', cartype: 'gire', color: 'yellow' });
    
    function changecarproperties(){
        setCar(()=>{
            return{...car,brand: 'AAdi'}
        })
    }
 //eg:3
 const [names, setName] = useState(["ram","janani","romeo","juliate"]);
 function addName(){
    setName([...names,'raju','somu'])
 }
 function deleteName(){
    setName(names.slice(0,names.length-2))
 }
    return (
        <div>
            {/* use state */}

            {/* eg:1 */}
            <h1>i like {color} color</h1>
            <button onClick={colorchange}>changecolor</button>

            {/* eg:2 */}
             <div>
                <h1>I like this car: {car.brand}</h1>
                <h2>Type: {car.cartype}, Color: {car.color}</h2>
                <button onClick={changecarproperties} >car properties</button>
            </div> 
            {/* eg:3 */}
             <div>
            <h1>I like this car: {names}</h1>
                {
                    names.map((name,index)=>(
                        <h2 key={index}> {name} </h2>
                    ))
                }
              <button onClick={addName}>addname</button>
              <button onClick={deleteName}>deletename</button>
              <div>
      <p style={{ color: color }}>The current color is {color}</p>
      <button onClick={colorchange}>Change Color</button>
    </div>
                
            </div> 



        </div>
    )
}

export default App