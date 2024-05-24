import TimelineItem from "@/components/TimelineItem";

export default function Education() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="education">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Education
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title="Primary & Secondary School">
            Studied Grade 1-10 at Kendriya Vidyalaya (522005)
          </TimelineItem>
          <TimelineItem title="Higher Secondary School">
            Studied Grade 11-12 at Bhashyam IIT JEE Junior College (522005)
          </TimelineItem>
          <TimelineItem title="Under Graduation">
            Final Year Computer Science & Engineering Student at Parul University (391760)
          </TimelineItem>
        </div>
      </section>
    </>
  );
}
