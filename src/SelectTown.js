import React, {Component} from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://emspost.ru/api/rest/?method=ems.get.locations&type=cities&plain=true';

const getOptions = (input) => {
return fetch(proxyUrl + targetUrl)
  .then((response) => {
    console.log(response)
    return response.json();
  }).then((json) => {
    return { options: json };
  });
}


class SelectTown extends Component{
  constructor(props){
    super(props);
    this.props = {}
  }

  // componentDidMount(){
  //   fetch(`http://emspost.ru/api/rest/?method=ems.get.locations&type=cities&plain=true`)
  //     .then((response) => {
  //       console.log(response)
  //       return response.json();
  //     }).then((json) => {
  //       return { options: json };
  //     });
  // }



  render(){
    return(
          <Select.Async
            name={this.props.name}
            value="one1"
            options={this.props.options}
            loadOptions={getOptions}
           />
    )
  }
}
export default SelectTown;
