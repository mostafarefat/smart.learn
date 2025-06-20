import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    "محتوى محدث باستمرار",
    "شهادات معتمدة",
    "دعم فني مباشر",
    "تجربة مستخدم سهلة وبسيطة",
  ];

  return (
    <section className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        ليه تختارنا؟
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <CheckCircle className="text-green-500" size={28} />
            <p className="text-gray-700 text-lg">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
