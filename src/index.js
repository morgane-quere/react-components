import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Bob" 
        timeAgo="Today at 4:45PM" 
        content="Awesome post!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Bobette" 
        timeAgo="Today at 6:14PM" 
        content="Amazing post!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Toto" 
        timeAgo="Today at 6:35PM" 
        content="I love this blog!" 
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))