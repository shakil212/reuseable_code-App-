import React, { Component } from 'react';
import StudentList from "../studentList.component";

class App extends Component {
  state = {
    data: {},
  };
 
  render() { 
    const items = this.state.data.items || [];
    return (
      <div>
          <div className="container">
            <br />
            <StudentList />
          </div>
      </div>
    );
  }
}
 
export default App;





// import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Table from './common/table.component';
// import StudentList from '../studentList.component';

// class App extends Component {
//   state ={
//     data: {},
//   }
 
//   render() { 
//     const items = this.state.data.items || [];
//     return (
//       <div>
//           <div className="container">
//                 <br/>
//                 <StudentList />
//                 <Table/>
//           </div>
//       </div>
//     );
//   }
// }
 
// export default App;
