"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "Java", "JavaScript", "C++", "SQL"],
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "hover:border-purple-500/30",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "hover:border-blue-500/30",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Postman"],
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "hover:border-orange-500/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Toolkit
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`group relative p-6 rounded-2xl glass-card border border-white/5 ${category.borderColor} transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
