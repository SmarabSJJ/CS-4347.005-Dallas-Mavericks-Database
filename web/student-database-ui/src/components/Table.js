import axios from "axios";
import { useEffect } from "react";
const Table = () => {
  return (
    <div>  
    <h2 className="tableh1"> Table </h2>
    <div className="table">
        <table>
          <tr>
            <th> Id </th>
            <th> Name </th>
            <th> JerseyNum </th>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Tyson </td>
            <td> 10 </td>
          </tr>
          <tr>
            <td> 52454 </td>
            <td> Paul </td>
            <td> 20 </td>
          </tr>
            <td> 32554 </td>
            <td> Kyrie </td>
            <td> 30 </td>
        </table>
    </div>
    
    </div>
   );
}
 
export default Table;