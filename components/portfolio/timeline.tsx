"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users } from "lucide-react";

const timelineItems = [
  {
    type: "education",
    icon: GraduationCap,
    title: "B.S. Computer Science",
    organization: "KCA University",
    date: "Expected May 2027",
    description: [
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Computer Networks, Software Engineering",
      "Dean's List: Fall 2023, Spring 2024",
      "GPA: 3.8/4.0",
    ],
  },
  {
    type: "experience",
    icon: Users,
    title: "Webmaster & Technical Lead",
    organization: "Computer Science Club",
    date: "Sep 2024 - Present",
    description: [
      "Redesigned and developed the club's website using Next.js and Tailwind CSS, increasing member engagement by 40%",
      "Lead weekly technical workshops for 50+ members on web development, Git, and cloud technologies",
    ],
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Teaching Assistant - Intro to Programming",
    organization: "CS Department",
    date: "Jan 2024 - May 2024",
    description: [
      "Supported 200+ students in learning Python fundamentals through office hours and lab sessions",
      "Developed automated grading scripts that reduced grading time by 60% and provided instant feedback",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My academic journey and professional experiences that shaped my development skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              variants={itemVariants}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Icon */}
              <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              {/* Content card */}
              <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-purple-400">{item.organization}</p>
                  </div>
                  <span className="text-sm text-zinc-500 font-mono">
                    {item.date}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-600"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
