import { store } from "../../data/store";

export default function Users() {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {store.users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-4">{user.name}</td>
              <td>{user.email}</td>
              <td className="capitalize">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}