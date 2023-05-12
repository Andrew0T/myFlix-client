import React from "react";
import { Row } from "react-bootstrap";

// import { UserInfo } from "./user-info";
import { UpdateUser } from "./update-user";
import { DeleteUser } from "./delete-user";

export const ProfileView = () => {

  return (
    <Row>
      {/* <UserInfo username={UserInfo}/> */}
      <UpdateUser handleUpdate={UpdateUser}/>
      <DeleteUser deleteUser={DeleteUser}/>
    </Row>

  );
};