import React from 'react';

export const FormContext = React.createContext();

export default class FormProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}
