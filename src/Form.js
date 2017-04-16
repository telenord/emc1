import  React, { Component } from 'react';



let proxyUrl = 'https://cors-anywhere.herokuapp.com/http://emspost.ru/api/rest/?method=ems.';

class Form  extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectFrom:  'One',
      selectTo:   'Two',
      weight: 0,
      insurance: 0,
      options : [
        { value: 'one', name: 'One', type: 'one' },
        { value: 'two', name: 'Two', type: 'two' }
      ],
      price: 0
    }
  }
   componentDidMount(){
    let targetUrl = 'get.locations&type=cities&plain=true';
    fetch(proxyUrl+ targetUrl)
      .then((response) => response.json())
      .then((json) => {
         this.setState ({
           options: json.rsp.locations,
           selectFrom: json.rsp.locations[0].value,
           selectTo: json.rsp.locations[0].value,
          });
      });
      console.log(this.state );
  }

  onFormChange(){
    let targetUrl = (`calculate&from=${this.state.selectFrom}&to=${this.state.selectFrom}&weight=${this.state.weight}
    `);
    fetch(proxyUrl + targetUrl)
      .then((response) => response.json())
      .then((json) => {
         this.setState ({ price: json.rsp.price });
      });
  }

  onSelectToChange(val){
    this.setState({selectTo: val.target.value} ) ;
  }

  onSelectFromChange(val){
    this.setState({selectFrom:  val.target.value} ) ;
  }

  onWeightChange(weight){
    this.setState({weight: weight.target.value}) ;
  }

  onInsuranceChange(insurance){
    this.setState({insurance:insurance.target.value}) ;
  }

  render(){
    return(
      <form  onChange={this.onFormChange.bind(this)}>
        <div>
          <label>Откуда
             <select
               name="sendTownFrom"
               value={this.state.selectFrom.name}
               onChange={this.onSelectFromChange.bind(this)}
               >
               {this.state.options.map((option, key)=>
                <option value={option.value} key={key.toString()}> {option.name} </option>
               )}
             </select>
           </label>
      </div>
      <div>
        <label>Куда
           <select
             name="sendTownTo"
             value={this.state.selectTo.name}
             onChange={this.onSelectToChange.bind(this)}
             >
             {this.state.options.map((option, key)=>
               <option value={option.value} key={key.toString()}> {option.name} </option>
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
        <div>{this.state.price}</div>
      </form>
    )
  }
}

export default Form;
