# React js

https://www.educative.io/edpresso/react-form-validation

### Add Boottrap
npm install --save bootstrap


```
function Fruit(props) {
  return (
    <div className="fruit">
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

ReactDOM.render(<Fruit name="Banana" price="4"/>, document.getElementById('f1'));

ReactDOM.render(<Fruit name="Apple" price="12"/>, document.getElementById('f2'));

function Vegetable(props) {
  return (
    <div className="vegetable">
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
    </div>  
  );
}
var vegetablelist = (
  <div>
    <Vegetable name="Potato" price="25"/>
    <Vegetable name="Lady finger" price="40"/>
  </div>
);
ReactDOM.render(vegetablelist, document.getElementById('vegetablelist'));
```

### Props
props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

```
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}
```

### State
Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

```
class NewPost extends Component { // state can only be accessed in class-based components!
    state = {
        counter: 1
    };  
 
    render () { // Needs to be implemented in class-based components! Needs to return some JSX!
        return (
            <div>{this.state.counter}</div>
        );
    }
}
```