import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you wan to do this?</p>
        </div>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Bob" 
          timeAgo="Today at 4:45PM" 
          content="Awesome post!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Bobette" 
          timeAgo="Today at 6:14PM" 
          content="Amazing post!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Toto" 
          timeAgo="Today at 6:35PM" 
          content="I love this blog!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))