import { Container } from "@mui/system";
import React from "react";
import { User } from "../@types";
import UserCard from "../components/UserCard";
import { useFetchUsers } from "../data/useFetch";

type Props = {};

const UserList = (props: Props) => {
  const { users } = useFetchUsers();

  return (
    <>
      <h3>User List</h3>
      {users &&
        users.map((user: User, index: number) => {
          return (
            <Container>
              <UserCard
                address={{
                  city: user.address.city,
                  geolocation: {
                    lat: user.address.geolocation.lat,
                    long: user.address.geolocation.long,
                  },
                  number: user.address.number,
                  street: user.address.street,
                  zipcode: user.address.zipcode,
                }}
                email={user.email}
                id={user.id}
                name={{
                  firstname: user.name.firstname,
                  lastname: user.name.lastname,
                }}
                password={user.password}
                phone={user.phone}
                username={user.username}
              />
            </Container>
          );
        })}
    </>
  );
};

export default UserList;
