import React from 'react';
const ThemeContext = React.createContext('light');
export default class example extends React.Component {
  render() {
    return <ThemeContext.Provider value="light">
               <Toolbar />
            </ThemeContext.Provider>
  }
}
function Toolbar(props: any) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function SelfButton(props: any) {
  if(props.theme === 'light') return <button>浅色按钮</button>
  return <button>深色按钮<span>{props.theme}</span></button>
}
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <SelfButton theme={this.context}>{this.context}</SelfButton>
  }
}

