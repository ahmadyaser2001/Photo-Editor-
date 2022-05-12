import React, { useState } from "react";
import './App.css';
import Slider from "./Slider.js";
import SidebarItem from './SidebarItem'

const DEFAULT_OPTION = [
  {
    name:'Brightness',
    property:'brightness',
    value:100,
    range:{
      min:0,
      max:200,
    },
    unit:'%'
  },
  {
    name:'Contrast',
    property:'contrast',
    value:100,
    range:{
      min:0,
      max:200,
    },
    unit:'%'
  },
  {
    name:'Saturation',
    property:'saturate',
    value:100,
    range:{
      min:0,
      max:200,
    },
    unit:'%'
  },

  {
    name:'Grayscale',
    property:'Grayscale',
    value:0,
    range:{
      min:0,
      max:100,
    },
    unit:'%'
  },
  {
    name:'Sepia',
    property:'sepia',
    value:0,
    range:{
      min:0,
      max:100,
    },
    unit:'%'
  },
  {
    name:'Hue Rotate',
    property:'hue-rotate',
    value:0,
    range:{
      min:0,
      max:360,
    },
    unit:'deg'
  },
  {
    name:'Blur',
    property:'blur',
    value:0,
    range:{
      min:0,
      max:20,
    },
    unit:'px'
  },]
function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] =useState(DEFAULT_OPTION)
  const setlectedOptions = options[selectedOptionIndex]

  function handSliderChange({target}){
    setOptions(prevOptions =>{
      return prevOptions.map((option,index)=>{
        if(index !== selectedOptionIndex) return option
        return{...option,value :target.value}
      })
    })
  }

  function getImageStyle() {
     const filters = options.map(option=>{
       return `${option.property}(${option.value}${option.unit})`
     })
     return{filter:filters.join(' ')}
  }
  return (
    <div className="App">
       <div className="contaner">
         <div className="main-image" style={getImageStyle()}/>
         <div className="sildebar">
          {options.map((option, index)=>{
            return (
              <SidebarItem key={index} name={option.name}
              active={index === selectedOptionIndex}
              handelClick={()=>setSelectedOptionIndex(index)} />
            )
          })}

         </div>
         <Slider
         min={setlectedOptions.range.min}
         max={setlectedOptions.range.max}
         value={setlectedOptions.value}
         handChange={handSliderChange}
         />
       </div>
       
    </div>
  );
}

export default App;
