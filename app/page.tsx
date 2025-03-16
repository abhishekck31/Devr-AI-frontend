"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Github,
  Slack,
  MessageSquare,
  BarChart3,
  Code2,
  Bot,
  Workflow,
  Database,
  Layers,
  ArrowRight,
} from "lucide-react"

// Animation component for scroll reveal
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Glow animation component
const GlowElement = ({ children, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className={`relative ${className}`}>
      {isInView && <div className="absolute inset-0 bg-cyan-500 opacity-0 blur-xl rounded-lg animate-glow"></div>}
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-full blur-md"></div>
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <h1 className="text-xl font-bold">
                <span className="text-cyan-400">D</span>evr<span className="text-cyan-400">.</span>AI
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                Features
              </a>
              <a href="#integrations" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                Integrations
              </a>
              <a href="#architecture" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                Architecture
              </a>
              <a href="#cta" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                Get Started
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-950/30">
                Login
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050510] z-10"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#050510] to-transparent z-20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-30 text-center"
        >
          <GlowElement className="inline-block mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30"></div>
              <div className="absolute inset-2 rounded-full border-2 border-cyan-300/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  <span className="text-cyan-400">D</span>evr<span className="text-cyan-400">.</span>AI
                </h1>
              </div>
            </div>
          </GlowElement>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">AI-Powered Developer Relations Assistant</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize open-source community management with intelligent automation and engagement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-6">Get Started</Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30">
              View Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        >
          <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-[#050510] to-[#080818]">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Devr.AI streamlines community management and enhances contributor experience
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <RevealOnScroll key={index} delay={index + 1}>
                <GlowElement className="h-full">
                  <div className="h-full bg-[#0a0a1a]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </GlowElement>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-24 bg-[#080818]">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Connect with the tools your team already uses</p>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <RevealOnScroll key={index} delay={index + 1}>
                <GlowElement className="h-full">
                  <div className="h-full bg-[#0a0a1a]/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 flex flex-col items-center hover:border-cyan-500/50 transition-all duration-300">
                    {integration.icon}
                    <h3 className="text-lg font-medium mt-4">{integration.name}</h3>
                  </div>
                </GlowElement>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 bg-gradient-to-b from-[#080818] to-[#050510]">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Built with scalability and performance in mind</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {architectureComponents.map((component, index) => (
              <RevealOnScroll key={index} delay={index + 1}>
                <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    {component.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                  <p className="text-gray-400">{component.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#050510]">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <GlowElement key={index} className="h-full">
                  <div className="h-full bg-[#0a0a1a]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </GlowElement>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-r from-cyan-900/20 to-[#050510]">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <GlowElement>
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0a0a1a] to-[#050510] border border-gray-800 rounded-xl p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Story Starts Here</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Join the open-source revolution with Devr.AI and take your community engagement to the next level.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Get Started</Button>
                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30">
                    Schedule Demo
                  </Button>
                  <Button variant="ghost" className="text-white hover:text-cyan-400">
                    View Documentation
                  </Button>
                </div>
              </div>
            </GlowElement>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#030308] border-t border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-cyan-400">D</span>evr<span className="text-cyan-400">.</span>AI
              </h2>
              <p className="text-gray-400 mt-2">AI-Powered Developer Relations Assistant</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Slack size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Devr.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    title: "Reduce Maintainer Workload",
    description:
      "Automate routine interactions and queries, freeing up maintainers to focus on core development tasks.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
    title: "Improve Contributor Experience",
    description: "Provide personalized onboarding and support to make contributing easier and more rewarding.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-400" />,
    title: "Enhance Project Visibility",
    description: "Boost project visibility through consistent engagement and community nurturing strategies.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    title: "Generate Actionable Insights",
    description: "Extract valuable insights from community interactions and contribution patterns.",
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    title: "Knowledge Preservation",
    description: "Capture and organize project information to ensure knowledge is preserved and accessible.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    title: "Code Understanding",
    description: "Leverage AI to understand code context and provide relevant assistance to contributors.",
  },
]

const integrations = [
  {
    icon: <Github className="w-10 h-10 text-cyan-400" />,
    name: "GitHub",
  },
  {
    icon: <Slack className="w-10 h-10 text-cyan-400" />,
    name: "Slack",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-cyan-400" />,
    name: "Discord",
  },
  {
    icon: <Layers className="w-10 h-10 text-cyan-400" />,
    name: "Discourse",
  },
]

const architectureComponents = [
  {
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    title: "API Gateway Layer",
    description: "Handles all incoming requests from integrated platforms with authentication and request routing.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-400" />,
    title: "Core Processing Engine",
    description: "Orchestrates workflows between different services and manages the processing queue.",
  },
  {
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    title: "AI Service Layer",
    description: "LLM integration for natural language understanding and knowledge retrieval.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    title: "Integration Services",
    description: "Platform-specific adapters for Discord, Slack, GitHub, and Discourse.",
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    title: "Data Storage Layer",
    description: "Vector database for semantic search and relational database for structured data.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    title: "Analytics Engine",
    description: "Real-time metrics calculation, report generation, and trend analysis.",
  },
]

const stats = [
  {
    value: "45%",
    label: "Reduced Response Time",
  },
  {
    value: "3.2x",
    label: "Increased Engagement",
  },
  {
    value: "87%",
    label: "Contributor Satisfaction",
  },
  {
    value: "24/7",
    label: "Community Support",
  },
]

