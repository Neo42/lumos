import Image from "next/image";

import { cn, formatPrice } from "@/lib/utils";

const SearchCourseCard = ({
  course,
  isSelected,
  onClick,
}: SearchCourseCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border-2 bg-customgreys-secondarybg transition duration-200 hover:bg-white-100/10",
        isSelected ? "border-primary-600" : "border-transparent",
      )}
    >
      <div className="relative w-auto pt-[56.25%]">
        <Image
          src={course.image || "placeholder.png"}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-auto object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <h2 className="line-clamp-1 font-semibold">{course.title}</h2>
          <p className="mt-1 line-clamp-2 text-sm">{course.description}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-customgreys-dirtyGrey">
            By {course.teacherName}
          </p>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-semibold text-primary-500">
              {formatPrice(course.price)}
            </span>
            <span className="text-sm text-customgreys-dirtyGrey">
              {course.enrollments?.length} Enrolled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SearchCourseCard };
