import { useState } from "react";
import useAuth from "./../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleUpdatingProfile = () => {
    updateUserProfile(name, photoURL)
      .then(() => {
        setError("");
        alert("successfully updated your profile");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="bg-base-300 border-2 rounded-2xl mt-16">
      <Helmet>
        <title>HomeSell | Update-Profile</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-lg font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Photo URL:</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button
            className="btn btn-primary w-full font-bold"
            onClick={handleUpdatingProfile}
          >
            Save Changes
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
