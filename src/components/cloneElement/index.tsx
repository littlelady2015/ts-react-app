import React from 'react';
export function Tab(props: {
  id: string;
  title: string;
  active: string;
  toggleActive?: (e: React.MouseEvent) => void;
}) {
  const { id, title, active, toggleActive } = props;
  return (
    <a onClick={(e) => toggleActive && toggleActive(e)}>
    { title }
    { active === id ? <span>id</span> : null }
    </a>
  )
}
export interface TabGroupProps {
  active: string;


}
interface TabGroupContainerProps {
  
}
const TabGroup: React.FC<TabGroupProps> = ()=> {
  let toggleActive = (e: any, id: string) => {
    e.preventDefault();
    // setActive(id);
  };
  return React.Children.map(props.children, child => {
    let enhancedChild = React.cloneElement(child, {
      active: child.id,
      toggleActive: toggleActive,
      newFn: 'hahahah'
    });
    return enhancedChild;
  });
}
const TabGroupContainer: React.FC<TabGroupContainerProps> = (props) => {
  return <TabGroup active="a">
      <Tab id="a" title="a">content:{Math.random()} AAAA</Tab>
      <Tab id="b" title="b">content:{Math.random()} BBBB</Tab>
      <Tab id="c" title="c">content:{Math.random()} CCCC</Tab>
    </TabGroup>
}
export default TabGroupContainer;
