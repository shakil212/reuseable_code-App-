import React, { Component } from 'react';
import TableComponent from './components/common/table.component';


class StudentList extends Component {
  state = { 
    data: [
      { name: "Shakil", 
        roll: 212 ,
        imgPath: "https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj"
      },

      { name: "Nabil",
        roll: 25 ,
        imgPath:"https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj"
      }
    ],
  }; 
  columns= [
    { label: "Name", path: "name",content: (item, path)=> <td>{item[path]}</td> },
    { label: "Roll", path: "roll", content: (item, path)=> <td>{item[path]}</td> },
    { label: "imgPath", path: "imgPath", content: (item, path)=> <td> <img src={item[path]} alt='name'/></td> }
  ]
  render() { 
    return (
      <TableComponent 
        items={this.state.data}
        columns={this.columns}
      />
    );
  }
}
 
export default StudentList;



// import React, { Component } from 'react';
// import Table from './components/common/table.component';

// class StudentList extends Component {
//     state = { 
//         data: [
//             {
//                 name:"Shakil",
//                 roll:212
//             },
//             {
//                 name: "Nabil",
//                 roll: 25
//             }
//         ]
//      } 
//     render() { 
//         return (
//             <Table items={this.state.data}
//             columns={[ { label:"Name",path:"name" },{ label:"Roll",path:"roll" } ]}
//             />
//         );
//     }
// }
 
// export default StudentList;