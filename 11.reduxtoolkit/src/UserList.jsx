import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gelAllUsers } from "./redux/userSlice";
import User from "./User";
function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gelAllUsers());
  }, []);

  const { users } = useSelector((store) => store.users);

  return <div>{users && users.map((user) => <User user={user} />)}</div>;
}

export default UserList;
