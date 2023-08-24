import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateSeparate from './DateSeparate';
import { Value } from './type';



function App() {
  const [value, onChange] = useState<Value>(new Date());

  console.log(value);
  

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <span>{value ? value.toString() : null}</span>
      <DateSeparate />
    </>
  )
}

export default App
