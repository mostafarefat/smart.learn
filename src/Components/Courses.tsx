import React from "react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    slug :"react",
    title: "كورس React للمبتدئين",
    description: "تعلم أساسيات React لبناء واجهات تفاعلية بسهولة.",
    image: "/courses/react.png",
  },
  {
    id: 2,
    slug :"uiux",
    title: "كورس UI/UX",
    description: "إزاي تصمم تجربة مستخدم احترافية وجذابة.",
    image: "/courses/uiux.png",
  },
  {
    id: 3,
    slug :"marketing",
    title: "كورس التسويق الإلكتروني",
    description: "اتعلم إزاي تسوّق على السوشيال ميديا وتزود مبيعاتك.",
    image: "/courses/marketing.png",
  },
];

export default function Courses() {
  return (
    <section className="px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        كورساتنا
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-50 rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-4 h-12">{course.description}</p>
     <Link
            href={`/course/${course.slug}`}
            className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            عرض التفاصيل
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

