import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Smart Learn</h1>
        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
          <Link href="/" className="hover:text-blue-600">كورسات</Link>
          <Link href="/about" className="hover:text-blue-600">من نحن</Link>
          <Link href="/contact" className="hover:text-blue-600">اتصل بنا</Link>
          
        </div>
      </div>
    </nav>
  );
}
