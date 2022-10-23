import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const handleOnClick = (id) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <table className="table-auto w-3/4 mb-12">
        <thead className="bg-gray-200">
          <tr className="text-left">
            <th className="py-3 px-6 ">id</th>
            <th className="py-3 px-6">username</th>
            <th className="py-3 px-6">User</th>
            <th className="py-3 px-6">Website</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              className="hover:bg-slate-200 hover:cursor-pointer"
              onClick={() => handleOnClick(user.id)}
              key={user.id}
            >
              <td className="">{user.id}</td>
              <td className="">{user.username}</td>
              <td className="">{user.name}</td>
              <td className="">{user.website}</td>
              <td className="">{user.email}</td>
              <td className="">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length > 0 && (
        <table className="table-auto w-11/12 mt-2">
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="py-3 px-6 ">id</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr className="hover:bg-slate-200" key={post.id}>
                <td className="">{post.id}</td>
                <td className="">{post.title}</td>
                <td className="">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
