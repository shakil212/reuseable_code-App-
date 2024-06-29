import React from 'react';
import TableHeader from './table.header.component';
import TableBody from './table.body.component';

function TableComponent({ items, columns }) {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody items={items} columns={columns} />
    </table>
  );
}

export default TableComponent;





// import React from 'react';
// import TableHeader from './table.header.component';
// import TableBody from './table.body.component';

// //stateless--> when no state is needed

// function Table(props) { //stateless functional component
//     const { items, columns } = props;

//         return (
//             <table className="table">
//                 <TableHeader columns={ columns } />
//                 <TableBody items={items} columns={columns}/>
//             </table>
//         );
// }

// export default Table;