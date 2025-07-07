import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gray-50">
      {/* النصوص */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          طوّر مهاراتك مع <span className="text-blue-600">SmartLearn</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          احصل على أفضل الكورسات أونلاين في البرمجة، التصميم، والتسويق من مدربين محترفين.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition">
          ابدأ الآن
        </button>
      </div>

      {/* صورة توضيحية */}
      <div className="mt-10 md:mt-0">
        <Image
  src="/hero/image.png"
  alt="رسم توضيحي للتعلم أونلاين"
  width={500}
  height={400}
  className="w-full max-w-md"
/>
      </div>
    </section>
  );
}
