'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // نجيب المستخدم المسجل من localStorage
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      alert('⚠️ لا يوجد مستخدم مسجل');
      return;
    }

    const user = JSON.parse(savedUser);

    // نتحقق من البيانات
    if (user.email === email && user.password === password) {
      alert(`👋 أهلاً ${user.name}`);
      router.push('/Dashboard'); // رجوع للصفحة الرئيسية
    } else {
      alert('❌ البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">تسجيل الدخول</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          دخول
        </button>
      </form>
    </div>
  );
}
