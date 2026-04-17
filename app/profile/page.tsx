"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProtectedLayout from "@/components/protectesRoute";
import { getUserProfile, updateProfile } from "../services/profile";
import EditProfileModal from "@/components/editUserProfile";
import { toast } from "react-toastify";

function ProfileContent() {
  const user = useSelector((state: any) => state.auth.user);

  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    bio: "",
    number: "",
    gender: "",
    dob: "",
    image: "",
    role: "",
  });

  const formatDate = (date: string) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile();

        if (response?.success) {
          setForm({
            name: response.data.name || "",
            email: response.data.email || "",
            bio: response.data.bio || "",
            number: response.data.number || "",
            gender: response.data.gender || "",
            dob: formatDate(response.data.dob),
            image: response.data.image || "",
            role: response.data.role || "",
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleUpdate = async () => {
    const res = await updateProfile(form);

    if (res?.success) {
      toast.success("Profile updated successfully ✨");
      setIsOpen(false);
      setForm(res.data);
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-sm border border-gray-100 rounded-3xl overflow-hidden w-full max-w-lg">

        {/* TOP BANNER */}
        <div className="h-32 bg-gradient-to-r from-primary to-blue-600"></div>

        <div className="relative px-6 pb-8">

          {/* AVATAR */}
          <div className="flex justify-center -mt-16">
            {form?.image ? (
              <img
                src={form.image}
                alt="profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-indigo-500 border-4 border-white shadow-lg flex items-center justify-center text-white text-4xl font-bold">
                {form?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
          </div>

          {/* USER INFO */}
          <div className="mt-5 md:mt-11 text-center">
            <h2 className="text-2xl font-extrabold text-gray-800">
              {form?.name || "No Name"}
            </h2>

            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {form?.role || "User"}
            </span>

            <p className="mt-4 text-gray-600 text-sm italic mx-auto max-w-xs">
              "{form?.bio || "No bio added yet. Tell the world who you are!"}"
            </p>
          </div>

          {/* INFO GRID */}
          <div className="mt-3 md:mt-8 grid grid-cols-1 gap-4 border-t border-gray-50 ">

            {/* EMAIL */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                📧
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  Email
                </span>
                <span className="text-gray-700 font-medium">
                  {form?.email || ""}
                </span>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                📞
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  Phone
                </span>
                <span className="text-gray-700 font-medium">
                  {form?.number || ""}
                </span>
              </div>
            </div>

            {/* GENDER */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                ⚧
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  Gender
                </span>
                <span className="text-gray-700 font-medium">
                  {form?.gender || ""}
                </span>
              </div>
            </div>

            {/* DOB */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                🎂
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  DOB
                </span>
                <span className="text-gray-700 font-medium">
                  {form?.dob
                    ? new Date(form?.dob).toDateString()
                    : ""}
                </span>
              </div>
            </div>

          </div>

          {/* EDIT BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 md:mt-8 w-full bg-gray-900 text-white py-3 rounded-2xl font-bold hover:bg-black transition-all shadow-lg active:scale-95"
          >
            Edit Profile Settings
          </button>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <EditProfileModal
          form={form}
          onChange={handleChange}
          onSave={handleUpdate}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedLayout>
      <ProfileContent />
    </ProtectedLayout>
  );
}