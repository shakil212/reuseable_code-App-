import React from 'react';

function TableBody({ items, columns }) {
  return (
        <tbody>
            {
                items.map((item) => (
                    <tr key={item.path}>
                    {
                        columns.map(column => (
                            <td>{ column.content(item,column.path) }</td>
                        ))
                    }
                   </tr>
                ))
            }
       </tbody>
  );
}
 
export default TableBody;



// import React from 'react';

// function TableBody ({ items, columns }) {
//     return (
//         <tbody>
//             { 
//             items.map((item) => (
//                         <tr key = { item.path } >
//                             {
//                             columns.map(column=>(
//                                 <td>{ item[column.path] }</td>
//                         ))}            
//                     </tr>
//                 ))}
//     </tbody>
//     );
// }
 
// export default TableBody;

