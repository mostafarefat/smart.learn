import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© 2025 Smart Learn. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:underline">من نحن</Link>
          <Link href="/contact" className="hover:underline">اتصل بنا</Link>
          <Link href="/privacy" className="hover:underline">سياسة الخصوصية</Link>
        </div>
      </div>
    </footer>
  );
}
