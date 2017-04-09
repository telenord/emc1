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
      insurance: 0
    }

  }


  onFormChange(){
    console.log(this);

  }

  render(){
    return(
      <form>
       <SelectTown url='' />

      </form>
    )

  }
}

export default Form;
