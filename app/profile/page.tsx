export default function ProfilePage() {
  const user = {
    name: "Sandhya",
    email: "sandhya@example.com",
    role: "Frontend Developer",
    bio: "Passionate about building beautiful UI and web experiences.",
    image: "https://via.placeholder.com/150"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div>
            <h3 className="text-sm text-gray-400">Email</h3>
            <p className="text-gray-700">{user.email}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Bio</h3>
            <p className="text-gray-700">{user.bio}</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-primary text-white py-2 rounded-xl hover:bg-secondary transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
