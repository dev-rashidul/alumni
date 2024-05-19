import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  // Get Logged In user info
  const { auth } = useContext(AuthContext);

  return (
    <section id="Profile">
     <div className="container mx-auto py-12">
        <div className="max-w-xl mx-auto bg-gray-100 p-5 text-center">
            <h2 className="text-3xl lg:text-4xl text-blue-700 font-semibold">Name : {auth?.user?.first_name} {auth?.user?.last_name}</h2>
            <p className="text-lg text-gray-900">Email : {auth?.user?.email}</p>
            <p className="text-lg text-gray-900">Batch : {auth?.user?.batch}</p>
            <p className="text-lg text-gray-900">Status : {auth?.user?.status}</p>
        </div>
     </div>
    </section>
  );
};

export default Profile;
