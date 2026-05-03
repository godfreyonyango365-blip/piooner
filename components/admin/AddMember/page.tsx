"use client";

import AddMember from "@/components/admin/AddMember";

export default function AddMemberPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 px-4 py-10 transition-colors">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            Add New Member
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Create a new ministry team member profile
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-6 md:p-8">
          <AddMember />
        </div>

      </div>
    </main>
  );
}
