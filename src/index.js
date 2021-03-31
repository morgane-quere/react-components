import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Bob" />
      <CommentDetail author="Bobette" />
      <CommentDetail author="Toto" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))