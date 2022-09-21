import React from "react";
import { UsersN } from "../@types";
import { useFetchUsers } from "../data/useFetch";
import UserCard from "../components/UserCard";

type Props = {};

const UsersProfile = (props: Props) => {
  const { users } = useFetchUsers();

  return (
    <>
      <h3>Users</h3>
      {users &&
        users.map((user: UsersN.User, index: number) => {
          return (
            <React.Fragment key={index}>
              <UserCard
                date={user.date}
                userId={user.userId}
                products={user.products}
              />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default UsersProfile;
