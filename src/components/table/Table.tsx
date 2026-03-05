import { useEffect, useState } from "react";
import "./Table.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";

import {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} from "../../api/UsersData";

interface User {
  id?: string;
  full_name: string;
  email: string;
  country: string;
  isActive: boolean;
  phone_number: string;
}

const countryOptions = [
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "USA", label: "USA" },
  { value: "UK", label: "UK" },
  { value: "Russia", label: "Russia" },
  { value: "India", label: "India" },
  { value: "Turkey", label: "Turkey" }
];

function Table() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState<User>({
    full_name: "",
    email: "",
    country: "",
    isActive: true,
    phone_number: "",
  });

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (option: any) => {
    setForm({ ...form, country: option.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editId) {
      await putUsers(editId, form);
      setEditId(null);
    } else {
      await postUsers(form);
    }

    setForm({
      full_name: "",
      email: "",
      country: "",
      isActive: true,
      phone_number: "",
    });

    loadUsers();
  };

  const handleDelete = async (id: string) => {
    await deleteUsers(id);
    loadUsers();
  };

  const handleEdit = (user: User) => {
    setForm(user);
    setEditId(user.id!);
  };

  const filteredUsers = users.filter((user) =>
    user.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>Users</h2>
    
      <input
        className="search-input"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form className="user-form" onSubmit={handleSubmit}>
        <input
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
        />

        
        <PhoneInput
          country={"uz"}
          value={form.phone_number}
          onChange={(phone) =>
            setForm({ ...form, phone_number: phone })
          }
        />

        <input className="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        
        <Select className="select"
          options={countryOptions}
          value={countryOptions.find((c) => c.value === form.country)}
          onChange={handleCountryChange}
          placeholder="Select Country"
        />

        <button type="submit">
          {editId ? "Update User" : "Add User"}
        </button>
      </form>

      <table className="users-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.full_name}</td>
              <td>{user.phone_number}</td>
              <td>{user.email}</td>
              <td>{user.country}</td>
              <td>
                <span
                  className={
                    user.isActive ? "status active" : "status inactive"
                  }
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;