'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push('/Login'); // لو مفيش مستخدم نرجعه على صفحة تسجيل الدخول
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/Login');
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">مرحبًا، {user.name} 👋</h1>
      <p className="mb-6 text-gray-600">أهلاً بيك في حسابك الشخصي.</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
      >
        تسجيل الخروج
      </button>
    </div>
  );
}
