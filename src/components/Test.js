import React, { Component } from 'react'
class Test extends Component {

constructor(props){
    super(props);
    console.log(this.props);

    this.state = {
        a: 10
    }
    console.log("constructor");
}

componentDidMount = () => {
    // ilk render edilir. sonra didmount calisir devaminda tekrar render calisir.
  console.log("componentDidMount");
  // api istekleri burada yapilir

  this.setState({
    a : 20
  })
}

// shouldComponentUpdate = (nextProps, nextState) => {
//     // didmount'tan sonraki 2. render i kapatmak icin false donebiliriz. defeult true calisir.
//     console.log("nextState: "+ nextState.a);
//   return false
// }


componentDidUpdate = (prevProps, prevState) => {
  console.log("prevState: "+prevState.a);

  console.log("current: "+this.state.a);

}



  render() {
    console.log("render");


    return (
      <div>
        
      </div>
    )
  }
}


export default Test;
