import React from 'react';
import { themes } from '../constants/theme-context';
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});
function ToggleThemeButton() {
  return (
    <ThemeContext.Consumer>
    {
      ({theme, toggleTheme}) => {
        return <button onClick={toggleTheme} style={{backgroundColor:theme.background}}>toggle Theme</button>
      }
    }
    </ThemeContext.Consumer>
  )
}
function Content() {
  return <div><ToggleThemeButton /></div>
}
export interface nestedContextProps{
}
export interface nestedContextState {
  toggleTheme(): void,
  theme: any,
  [propName: string]: any,
}
export default class nestedContextComp extends React.Component<nestedContextProps, nestedContextState> {
  constructor(props: any) {
    super(props);
    let toggleTheme = () => {
      this.setState(state=> ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}
