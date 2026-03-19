import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#cbc9c0] dark:border-white/5 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#a72334] dark:font-mono dark:text-cyan-400 transition-colors">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg transition-colors">
              Get In Touch. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300 group transition-colors">
              <div className="w-12 h-12 bg-[#f0f0ea] dark:bg-[#111827] rounded-full flex items-center justify-center border border-[#cbc9c0] dark:border-white/10 group-hover:bg-[#a72334]/10 dark:group-hover:bg-blue-900/40 group-hover:border-[#a72334]/50 dark:group-hover:border-blue-500/50 transition-all">
                <Mail className="w-5 h-5 text-[#a72334] dark:text-blue-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-500 transition-colors">Email</div>
                <div className="font-medium text-[#1a1a1a] dark:text-gray-300 transition-colors">bundibrian36@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300 group transition-colors">
              <div className="w-12 h-12 bg-[#f0f0ea] dark:bg-[#111827] rounded-full flex items-center justify-center border border-[#cbc9c0] dark:border-white/10 group-hover:bg-[#a72334]/10 dark:group-hover:bg-blue-900/40 group-hover:border-[#a72334]/50 dark:group-hover:border-blue-500/50 transition-all">
                <Phone className="w-5 h-5 text-[#a72334] dark:text-blue-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-500 transition-colors">Phone</div>
                <div className="font-medium text-[#1a1a1a] dark:text-gray-300 transition-colors">+254 793 754 270</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full border border-[#cbc9c0] dark:border-white/10 bg-[#f0f0ea] dark:bg-[#111827] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#a72334] dark:hover:text-white hover:border-[#a72334] dark:hover:border-cyan-400 hover:bg-[#a72334]/10 dark:hover:bg-cyan-900/20 transition-all shadow-md hover:shadow-[0_0_15px_rgba(167,35,52,0.2)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Linkedin className="w-5 h-5 transition-colors" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-[#cbc9c0] dark:border-white/10 bg-[#f0f0ea] dark:bg-[#111827] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#a72334] dark:hover:text-white hover:border-[#a72334] dark:hover:border-cyan-400 hover:bg-[#a72334]/10 dark:hover:bg-cyan-900/20 transition-all shadow-md hover:shadow-[0_0_15px_rgba(167,35,52,0.2)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Github className="w-5 h-5 transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full bg-[#f0f0ea] dark:bg-[#111827] p-8 rounded-xl border border-[#cbc9c0] dark:border-white/5 shadow-xl transition-colors duration-300">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/10 rounded-md px-4 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a72334] dark:focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/10 rounded-md px-4 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a72334] dark:focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/10 rounded-md px-4 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a72334] dark:focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/10 rounded-md px-4 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a72334] dark:focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-md bg-[#a72334] hover:bg-[#851c2a] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(167,35,52,0.4)] dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
