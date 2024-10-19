import ManagePrivileges from "components/ManagePrivileges";
import React from "react";

const UpdatePrivilegesSubUser = () => {
  const UpdatePrivilegeBoxes = [
    {
      type: "input",
      content: "Visa",
    },
    {
      type: "input",
      content: "Yachts",
    },
    {
      type: "input",
      content: "Transfer",
    },
    {
      type: "none",
      content: "SubUser",
    },
    {
      type: "input",
      content: "Travel Insurance",
    },
    {
      type: "input",
      content: "Car",
    },
  ];
  return (
    <div>
      <ManagePrivileges PrivilegeBoxes={UpdatePrivilegeBoxes} />
    </div>
  );
};

export default UpdatePrivilegesSubUser;
