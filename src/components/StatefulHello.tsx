import * as React from 'react';
import './Hello.css';
export interface Props {
  name: string;
  enthusiasmLevel: number;
}

interface State {
  currentEnthusiasmLevel: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasmLevel: props.enthusiasmLevel || 2 };
  }
  onIncrement = ()=> this.updateEnthusiasm(this.state.currentEnthusiasmLevel + 1);
  onDecrement = ()=> this.updateEnthusiasm(this.state.currentEnthusiasmLevel- 1);
  updateEnthusiasm(currentEnthusiasmLevel: number) {
    this.setState({
      currentEnthusiasmLevel: currentEnthusiasmLevel
    })
  }
  render() {
    const { name } = this.props;
    if(this.state.currentEnthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(this.state.currentEnthusiasmLevel)}
          </div>
          <button onClick={this.onDecrement}>-</button>
          <button onClick={this.onIncrement}>+</button>
        </div>
    )
  }
}
export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
