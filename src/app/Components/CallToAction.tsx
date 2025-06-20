import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-16 px-8 text-center rounded-xl mx-4 my-10">
      <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك التعليمية الآن</h2>
      <p className="text-lg mb-6">
        انضم لأكتر من 10,000 طالب واستمتع بكورسات احترافية وشهادات موثوقة
      </p>
      <Link href="/signup">
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          سجل الآن مجانًا
        </button>
      </Link>
    </section>
  );
}
