/** @format */
"use client";

import Image, { StaticImageData } from "next/image";

import Audrey from "../../../public/img/Audrey.png";
import Jake from "../../../public/img/Jake.png";
import Keri from "../../../public/img/Keri.png";
import William from "../../../public/img/William.png";
import Zach from "../../../public/img/Zach.png";
import clsx from "clsx";

// colors
// ### Primary

const color_ModerateViolet = "hsl(263, 55%, 52%)";
const color_VeryDarkGrayishBlue = "hsl(217, 19%, 35%)";
const color_VeryDarkBlackishBlue = "hsl(219, 29%, 14%)";
const color_White = "hsl(0, 0%, 100%)";

// ### Neutral
const color_LightGray = "hsl(0, 0%, 81%)";
const color_LightGrayishBlue = "hsl(210, 46%, 95%)";

interface DataType {
  className?: string;
  bgColor?: string;
  textColor?: string;
  avatarImg: StaticImageData;
  name: string;
  heading: string;
  description: string;
}

const data: DataType[] = [
  {
    // 1
    className: "md:col-span-2",
    bgColor: color_ModerateViolet,
    textColor: color_LightGray,
    avatarImg: Audrey,
    name: "Daniel Clifford",
    heading:
    "Dynamic Language Learning: Tailoring Conversations with Flint, the AI Assistant — Enhancing French Proficiency Through Personalized Interactions and Supportive Guidance in Varied Skill Levels.",
    description:
      "In my teaching approach, I engage students in both written and spoken French conversations with the AI. This dynamic interaction allows advanced students to delve deeper into the language, while simultaneously offering additional support to those who may be facing challenges, aligning with the specific learning objectives I set. Flint, our AI assistant, plays a pivotal role by tailoring its responses to cater to each student's needs. It feels akin to having a dedicated teaching assistant, amplifying the personalized learning experience in my classroom."
  },
  {
    // 2
    avatarImg: Jake,
    bgColor: color_VeryDarkGrayishBlue,
    textColor: color_LightGray,
    name: "Jonathan Walters",
    heading: "High Engagement: Adaptive Coding with Flint for Personalized Learning.",
    description:
    "The engagement with students is exceptionally high, in large part due to the pacing. I've been using Flint for coding assignments, and it automatically scales the difficulty according to each student's skill level."
  },
  {
    // 3
    className: "md:row-span-2",
    bgColor: color_LightGrayishBlue,
    textColor: color_VeryDarkGrayishBlue,
    avatarImg: Zach,
    name: "Kira Whittle",
    heading: "Flint: Adaptive Support for Student Success.",
    description:
    "Employing Flint's AI for review sessions has proven immensely popular among students, creating a positive learning environment. The adaptive nature of Flint allows it to provide gentle guidance to students facing difficulties, redirecting them effectively. While I could offer such support personally, the convenience of Flint's assistance becomes evident during late-night study sessions. At 9 pm, when students are fervently preparing for quizzes, Flint steps in seamlessly to offer timely help. This not only ensures that students receive the assistance they need, even during off-hours, but it also contributes to a smoother review process. The students' enthusiasm for Flint reflects its effectiveness as a supportive tool, enhancing the overall educational experience in a flexible and student-centric manner."
  },
  {
    // 4
    bgColor: color_LightGrayishBlue,
    textColor: color_VeryDarkGrayishBlue,
    avatarImg: Keri,
    name: "Jeanette Harmon",
    heading: "AI Sparks Student Enthusiasm in Writing.",
    description:
    "Students enthusiastically shared their narrative writing with the AI, displaying unprecedented engagement. Despite a planned 30-minute limit, their fervent request led to an extended session for continuous revision."
  },
  {
    // 5
    className: "md:col-span-2",
    avatarImg: William,
    bgColor: color_VeryDarkBlackishBlue,
    textColor: color_LightGray,
    name: "Patrick Abrams",
    heading:
    "Flint's Impact: Fostering Enthusiasm Beyond Classrooms. Parents Praise 'Cool Assignments' as Students Share Excitement About Interactive Learning Experiences.",
    description:
    "Flint not only provides insights into students' thoughts through their interactions but also generates genuine enthusiasm. Parents have reached out, expressing how their children excitedly discussed the cool assignment at home. The positive impact of Flint extends beyond the classroom, fostering a connection between students, learning, and technology that resonates with both educators and parents alike.",
  }
];

export default function Testimonial() {
  return (
    <main className="flex justify-center items-center min-h-screen p-8  font-BarlowSemiCondensed  ">
      <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2 max-w-[960px] ">
        {data.map((data, index) => (
          <Card
            bgColor={data.bgColor}
            textColor={data.textColor}
            avatarImg={data.avatarImg}
            description={data.description}
            heading={data.heading}
            key={index}
            name={data.name}
            className={data.className}
          />
        ))}
      </div>
    </main>
  );
}

function Card(props: DataType) {
  return (
    <div
      style={{ color: props.textColor, background: props.bgColor }}
      className={clsx(
        "p-6 shadow-2xl rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none ",
        props.className
      )}
    >
      {/* avatar and name */}
      <section className="flex gap-2 ">
        <Image
          src={props.avatarImg}
          alt="profile-img"
          className="rounded-full h-9 w-9 border-2"
        />
        <div>
          <div className="text-xs font-semibold">{props.name}</div>
          <p className="text-[10px] opacity-50">Verified Graduate</p>
        </div>
      </section>

      <h3 className="font-semibold text-lg ">{props.heading}</h3>
      <p className="text-xs opacity-70 leading-relaxed ">
        “ {props.description} ”
      </p>
    </div>
  );
}
