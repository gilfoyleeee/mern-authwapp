import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const fileRef = useRef(null);
  const [imageUploadPercent, setImageUploadPercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  console.log(imageError);

  const [formData, setFormData] = useState({});
  console.log(formData);

  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, [image]);
  const handleImageUpload = async (image) => {
    const storage = getStorage(app);
    const imageName = new Date().getTime() + image.name;
    const storageRef = ref(storage, imageName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadPercent(Math.round(progress));
      },
      (error) => {
        console.log(error);

        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 uppercase">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">
              Error occured while uploading image !
            </span>
          ) : imageUploadPercent > 0 && imageUploadPercent < 100 ? (
            <span className="text-slate-700">{`Uploading Image... ${imageUploadPercent} %`}</span>
          ) : imageUploadPercent === 100 ? (
            <span className="text-green-700">
              Image uploaded successfully !
            </span>
          ) : (
            ""
          )}
        </p>
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity:80">
          Update
        </button>
      </form>
      <div className="flex mt-5 w-full">
        <span className="flex-1 text-center text-white cursor-pointer bg-red-700 p-2 rounded-lg mr-2">
          Delete Account
        </span>
        <span className="flex-1 text-center text-white bg-red-700 p-2 rounded-lg cursor-pointer ml-2">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
