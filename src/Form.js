import  React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectTown from './SelectTown';
import Github from './Github';




class Form  extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectFrom: 'Выберите город',
      selectTo: 'Выберите город',
      weight: 0,
      insurance: 0,
      options : [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ],
      currentTownOption:   'One'
    }
  }


  onFormChange(val){

    console.log(val);
this.setState({currentTownOption: val.label }) ;
console.log(this.state.currentTownOption);
  }

  onWeightChange(weight){

 
    this.setState({weight: weight.target.value}) ;
  }
  onInsuranceChange(insurance){

    this.setState({insurance:insurance.target.value}) ;
  }


  render(){
    return(
      <form>
        <div>
          <label>Откуда
       <select
         name="sendTownFrom"
         value={this.state.currentTownOption}
         onChange={this.onFormChange.bind(this)}
         >
         {this.state.options.map((option, key)=>
           <option value={option.value}  key={key.toString()}> {option.label} </option>
         )}
       </select>
     </label>
</div>
  <div>
    <label>Куда
       <select
         name="sendTownTo"
         value={this.state.currentTownOption}
         onChange={this.onFormChange.bind(this)}
         >
         {this.state.options.map((option, key)=>
           <option value={option.value} key={key.toString()}> {option.label} </option>
         )}
       </select>
     </label>
       </div>
     <div>
       <label>Введите вес, кг
         <input type="text" placeholder="Введите вес, кг"
            value={this.state.weight}
            onChange={this.onWeightChange.bind(this)}
         />
        </label>
      </div>
          <div>
        <label> Ценность, руб
          <input type="text" placeholder="Ценность, руб"
            value={this.state.insurance}
            onChange={this.onInsuranceChange.bind(this)}
            />
        </label>
      </div>
      </form>
    )
  }
}

export default Form;
