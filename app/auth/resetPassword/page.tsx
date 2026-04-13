export function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <input type="password" placeholder="New Password" className="w-full p-2 border rounded mb-3" />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded mb-3" />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">Reset Password</button>
      </div>
    </div>
  );
}