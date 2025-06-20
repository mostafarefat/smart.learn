
import Image from "next/image";

const courses = [
  {
    slug: "react",
    title: "React JS",
    description: "تعلم بناء واجهات تفاعلية باستخدام React",
    image: "/courses/react.png",
    price: "599 جنيه",
  },
  {
    slug: "uiux",
    title: "UI/UX Design",
    description: "أساسيات تصميم تجربة المستخدم والواجهة",
    image: "/courses/uiux.png",
    price: "499 جنيه",
  },
  {
    slug: "marketing",
    title: "Digital Marketing",
    description: "استراتيجيات التسويق الرقمي الحديثة",
    image: "/courses/marketing.png",
    price: "399 جنيه",
  },
];

export default function CoursesPage() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.slug} className="border rounded-xl shadow hover:shadow-lg transition p-4">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={250}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h2 className="text-xl font-bold text-blue-700">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <p className="text-green-600 font-semibold mt-2">{course.price}</p>
       
        </div>
      ))}
    </div>
  );
}
