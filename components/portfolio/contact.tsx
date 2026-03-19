import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-cyan-400">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-400 text-lg">
              Get In Touch. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center border border-white/10 group-hover:bg-blue-900/40 group-hover:border-blue-500/50 transition-all">
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-cyan-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">bundibrian36@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center border border-white/10 group-hover:bg-blue-900/40 group-hover:border-blue-500/50 transition-all">
                <Phone className="w-5 h-5 text-blue-400 group-hover:text-cyan-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium">+254 793 754 270</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-900/20 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-900/20 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="bg-[#111827] p-8 rounded-xl border border-white/5 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0B1120] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#0B1120] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Subject</label>
              <input 
                type="text" 
                className="w-full bg-[#0B1120] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-[#0B1120] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
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
