import { User, Mail, ShieldCheck, Trash2, Ban } from "lucide-react";

export default function AllUsers() {
  // Dummy data – replace with API
  const users = [
    {
      id: 1,
      name: "Anu Thomas",
      email: "anu.thomas@gmail.com",
      role: "User",
    },
    {
      id: 2,
      name: "Rahul S",
      email: "rahul.s@gmail.com",
      role: "User",
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@spotscape.com",
      role: "Admin",
    },
  ];

  return (
    <section
      className="relative min-h-screen px-6 py-14 overflow-hidden
      bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem]
        bg-orange-400/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-[28rem] h-[28rem]
        bg-orange-500/30 rounded-full blur-3xl"></div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff40_1px,transparent_1px)]
        [background-size:22px_22px] pointer-events-none"
      ></div>

      {/* HEADER */}
      <div className="relative max-w-6xl mx-auto mb-10 border-l-4 border-orange-600 pl-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          All Users
        </h1>
        <p className="text-gray-700 mt-2">
          View  all registered users
        </p>
      </div>

      {/* ORANGE BORDER WRAPPER */}
      <div
        className="relative max-w-6xl mx-auto p-[2px] rounded-2xl
        bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400 shadow-xl"
      >
        <div className="bg-white rounded-2xl p-8">

          {/* USERS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user) => (
              <div
                key={user.id}
                className="rounded-xl border shadow-sm hover:shadow-md transition p-5 space-y-4"
              >
                {/* USER ICON */}
                <div className="w-14 h-14 flex items-center justify-center
                  rounded-full bg-orange-100 text-orange-600">
                  <User />
                </div>

                {/* NAME */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h3>

                {/* EMAIL */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={16} className="text-orange-500" />
                  {user.email}
                </div>

                
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {users.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
