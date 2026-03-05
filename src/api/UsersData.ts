import api from "./api";

export interface User {
  id?: string;
  full_name: string;
  email: string;
  country: string;
  isActive: boolean;
  phone_number: string;
}



export async function getUsers(): Promise<User[]> {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (err) {
    console.log("GET Error:", err);
    return [];
  }
}


export async function postUsers(newUser: User): Promise<User | undefined> {
  try {
    const res = await api.post("/users", newUser);
    return res.data;
  } catch (err) {
    console.log("POST Error:", err);
  }
}



export async function deleteUsers(id: string): Promise<void> {
  try {
    await api.delete(`/users/${id}`);
  } catch (err) {
    console.log("DELETE Error:", err);
  }
}



export async function putUsers(
  id: string,
  updatedUsers: User
): Promise<User | undefined> {
  try {
    const res = await api.put(`/users/${id}`, updatedUsers);
    return res.data;
  } catch (err) {
    console.log("PUT Error:", err);
  }
}