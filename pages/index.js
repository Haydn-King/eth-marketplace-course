import { Fragment } from "react";
import { Hero } from "../components/ui/common";
import { CourseCard, CourseList } from "../components/ui/course";
import { BaseLayout } from "../components/ui/layout";
import { getAllCourses } from "../content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <Fragment>
      <Hero />
      <CourseList courses={courses}>
        {(course) => <CourseCard key={course.id} course={course} />}
      </CourseList>
    </Fragment>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Home.Layout = BaseLayout;
