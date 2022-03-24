import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, searchUser, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please something!", "error");
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => {
              clearUsers();
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
