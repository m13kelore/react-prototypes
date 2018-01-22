import React from "react";

const Table = () => {
  return (
    <table className="table">
      <thead className="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Takashi Shirogane</td>
          <td>Leadership</td>
          <td>91</td>
        </tr>
        <tr>
          <td>Keith Kogane</td>
          <td>Being Cute</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Pidge Gunderson</td>
          <td>Care for Robots</td>
          <td>98</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
