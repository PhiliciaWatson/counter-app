import React from 'react';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

 handleSubmit = (e) =>{
  console.log(e.target)
 }

  render() {
    let { count } = this.state;
    return (
      <div className="container m-5 text-center">
          <div className="count">
            <h1 className="text-light">{count}</h1>
          </div>
          <div class="buttons">
            <button className="btn btn-warning m-3" onClick={this.decrementCount}>Substract One</button>
            <button className="btn btn-success m-3" onClick={this.incrementCount}>Add One</button>
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>Add a new todo</label>
                    <input type="text" onSubmit={this.handleSubmit} value={this.state.value}></input>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form> */}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
