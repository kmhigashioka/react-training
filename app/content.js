import React from 'react';
import Todo from './todo';

class Content extends React.Component {
  
  render() {

    const todos = [
      { task: 'Write code.', done: true },
      { task: 'Merge pull request', done: false },
      { task: 'Raise an issue', done: false }
    ];

    return (
      <div>
        { 
          todos
            //.filter(t => {
            //  return t.done == true;
            //})
            .map((t, index) => {
              return <Todo key={index} todo={t} />;
            })
        }
      </div>
    );
  }

}

export default Content;
