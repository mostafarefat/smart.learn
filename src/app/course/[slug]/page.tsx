import Image from "next/image";
import { notFound } from "next/navigation";

const courses = [
  {
    slug: "react",
    title: "React JS",
    description: "تعلم بناء واجهات تفاعلية باستخدام React",
    image: "/courses/react.png",
    instructor: "محمد أحمد",
    price: "599 جنيه",
  },
  {
    slug: "uiux",
    title: "UI/UX Design",
    description: "أساسيات تصميم تجربة المستخدم والواجهة",
    image: "/courses/uiux.png",
    instructor: "سارة حسن",
    price: "499 جنيه",
  },
  {
    slug: "marketing",
    title: "Digital Marketing",
    description: "استراتيجيات التسويق الرقمي الحديثة",
    image: "/courses/marketing.png",
    instructor: "أحمد علي",
    price: "399 جنيه",
  },
];

// ✅ لتوليد المسارات
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// ✅ تعديل نوع البراميتر props ليتوافق مع Next.js 15
type CoursePageProps = {
  params: {
    slug: string;
  };
};

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return notFound();
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Image
        src={course.image}
        alt={course.title}
        width={600}
        height={300}
        className="rounded-xl mx-auto"
      />
      <h1 className="text-3xl font-bold text-blue-700 mt-6">{course.title}</h1>
      <p className="mt-4 text-gray-700">{course.description}</p>
      <p className="mt-2 font-semibold">المدرب: {course.instructor}</p>
      <p className="mt-2 text-green-600 font-bold">السعر: {course.price}</p>
      <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
        اشترك الآن
      </button>
    </div>
  );
}
