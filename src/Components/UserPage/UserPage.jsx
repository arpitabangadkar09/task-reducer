import React from "react";
import './UserPage.css';
const UserPage = () => {
    return(
      <table>
      <tr>
        <th>Sr No </th>
        <th> Name </th>
        <th>Subject</th>
        <th>Total Mark</th>
        <th>Mark</th>
        <th>Edit Data </th>
        <th>Show Data </th>
      </tr>
      <tr>
        <td> 0 </td>
        <td> </td>
        <td>Physics</td>
        <td>100</td>
        <td>60</td>
        <th><td> <button> Edit </button></td> </th>
        <th><td> <button> Show </button></td></th>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td>Math</td>
        <td>100</td>
        <td>80</td>
        <th><td> <button> Edit </button></td> </th>
        <th><td> <button> Show </button></td></th>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td>Computer</td>
        <td>100</td>
        <td>70</td>
        <th><td> <button> Edit </button></td> </th>
        <th><td> <button> Show </button></td></th>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td>chemistry</td>
        <td>100</td>
        <td>90</td>
        <th><td> <button> Edit </button></td> </th>
        <th><td> <button> Show </button></td></th>
      </tr>
      
      
    </table>
    );
};

export default UserPage;