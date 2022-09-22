import React, { useEffect, useState } from "react";
import { ErrorMessage, ProductsN, Users } from "../@types";

export const useFetchProducts = () => {
  const [data, setData] = useState<ProductsN.Products>();
  const [error, setError] = useState<ErrorMessage>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError({ message: "Fetch error!", error: error });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};

export const useFetchUsers = () => {
  const [users, setUsers] = useState<Users | null>(null);
  const [error, setError] = useState<ErrorMessage>();
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      setError({ message: "Fetch error!", error: error });
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
};
