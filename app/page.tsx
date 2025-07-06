"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Scale, Feather, Award, Mail, Linkedin, Twitter, ChevronDown, Sparkles, Quote } from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })

    if (aboutRef.current) observer.observe(aboutRef.current)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-orange-600" />
              <span className="font-bold text-xl text-gray-900">Rehana Haq Portfolio</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                About
              </button>
              <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Work</button>
              <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)`,
            }}
          />
        </div>

        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-orange-700 border-orange-300 bg-white/50">
              <Sparkles className="w-4 h-4 mr-2" />
              Rehana Haq
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent mb-6 leading-tight">
              PORTFOLIO
            </h1>
          </div>

          <div className="space-y-6 animate-slide-up">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Creative Writer & Legal Professional</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Crafting compelling narratives in both literature and law. Where creativity meets precision, stories come
              alive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection(aboutRef)}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className={`py-32 px-6 mt-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate storyteller who navigates between the worlds of creative expression and legal expertise,
              bringing unique perspectives to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Feather className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Creative Writer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                [Your creative writing background and achievements will go here. This could include published works,
                writing awards, genres you specialize in, and your unique voice as a writer.]
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Fiction
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Poetry
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Essays
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Screenwriting
                </Badge>
              </div>
            </div>

            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-orange-50">
              <CardContent className="p-0">
                <Quote className="w-8 h-8 text-orange-600 mb-4" />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Every story has the power to change a perspective, every word the potential to touch a soul."
                </blockquote>
                <cite className="text-orange-600 font-medium">— Personal Writing Philosophy</cite>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-orange-50 order-2 md:order-1">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                  <h4 className="text-xl font-bold text-gray-900">Achievements</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• [Published works or legal achievements]</li>
                  <li>• [Awards or recognitions]</li>
                  <li>• [Notable cases or publications]</li>
                  <li>• [Professional memberships]</li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Legal Professional</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                [Your legal background and expertise will go here. This could include your areas of specialization,
                years of experience, notable cases, and how your legal work complements your creative writing.]
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Contract Law
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Intellectual Property
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Media Law
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Publishing Rights
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of creative writing and legal projects that showcase the intersection of artistry and
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-orange-800">
                      {item === 1 ? "Creative Writing" : item === 2 ? "Legal Work" : "Hybrid Project"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">[Project Title {item}]</h3>
                  <p className="text-gray-600 mb-4">
                    [Brief description of the work, its significance, and impact. This will be customized with actual
                    project details.]
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Beautiful</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you need compelling creative content or expert legal guidance, I'm here to help bring your vision to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-full bg-transparent"
            >
              Download Resume
            </Button>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
              <Twitter className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2024 Creative Writer & Legal Professional. All rights reserved.</p>
      </footer>
    </div>
  )
}
