import React, {useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import Loading from "../layouts/Loading";
import UserItems from "../users/UserItems";
const UserResults = () => {
  const { users, loading} = useContext(GithubContext);
/*   useEffect(() => {
   fetchUser();
  }, []); */
  console.log(users);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return <Loading />; // Fixed!
};

export default UserResults;
