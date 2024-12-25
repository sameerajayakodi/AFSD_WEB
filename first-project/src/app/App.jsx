/* eslint-disable react/jsx-no-undef */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import './App.css';

function App() {
// eslint-disable-next-line no-unused-vars, no-undef
const[filterData , setFilterData] = useState([]) ; 
//   const [data, setData] = useState('');
//   const [count, setCount] = useState(10);
//   const { theme, toggle } = useContext(ThemeContext);
//   const[filterData, setFilterData] = useState([])

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => setFilterData(json));
// },[])

useEffect(() => {
  fetch('https://student-api.acpt.lk/api/companies')
  .then((response) => response.json())
  .then((json) => setFilterData(json));
})

//   useEffect(() => {
//     console.log(theme)
//   }, [theme])

//   // eslint-disable-next-line no-unused-vars
//   function click1() {
//     console.log('click event 1')
//   }

//   function click2() {
//     console.log('click event 2')
//   }

//   function click3() {
//     console.log('click event 3')
//   }

  return (
    <>
    
    <div className='userContent'>
  {
    // eslint-disable-next-line no-unused-vars
    filterData.map((val, index) => (
      // eslint-disable-next-line react/jsx-no-undef
      <CompanyCard key={index} title={val.title} body={val.body}/>
    ))
  }
  <CompanyCard/>
</div>
    </>

//     <div className={`${theme}`}>
//       <Button onClick={toggle} name={'Change Theme'} style={{ backgroundColor: 'green' }} />
//       <h2>ACPT</h2>
//       <Button onClick={() => setCount(10)} name={'Add Button'} style={{ backgroundColor: 'red' }} />
//       <Button onClick={click2} name={'Delete Button'} style={{ backgroundColor: '#000' }} bgColor={''} />
//       <Button onClick={click3} name={'Update Button'} style={{ backgroundColor: 'orange' }} bgColor={'orange'} />
//       <RoundedButton name={'Rounded'} bgColor={'green'} />
//       <OutlineButton name={'Outline'} color={'blue'} />
//       {/* <Button /> */}
//       <input type="text" onChange={(val) => setData(val.target.value)} />
//       <br /><br />
//       <h2>{data}</h2>
//       <h2>{count}</h2>

//       <Card>
//         <Button onClick={() => setCount(10)} name={'Add Button'} style={{ backgroundColor: 'red' }} />
//         <Button onClick={click2} name={'Delete Button'} style={{ backgroundColor: '#000' }} bgColor={''} />
//         <Button onClick={click3} name={'Update Button'} style={{ backgroundColor: 'orange' }} bgColor={'orange'} />
//       </Card>


//       {/* ------------------------------------------------------- */}

// <div className='userContent'>
//   {
//     // eslint-disable-next-line no-unused-vars
//     filterData.map((val, index) => (
//       <UserCard key={index} title={val.title} body={val.body}/>
//     ))
//   }
//   <UserCard/>
// </div>
//     </div>
  )
}

export default App
