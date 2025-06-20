'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowDownToLine, ChevronDown, FileText, Menu, MessageCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactPage from "@/components/ContactPage"
import Gallery from "@/components/Gallery"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-green-800/40 backdrop-blur-md bg-green-950/80">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-bold tracking-tighter text-gold-400">
            Dr. Raji-Mustapha
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="text-white/70 hover:text-gold-400 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-white/70 hover:text-gold-400 transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-white/70 hover:text-gold-400 transition-colors">
              Education
            </Link>
            <Link href="#awards" className="text-white/70 hover:text-gold-400 transition-colors">
              Awards
            </Link>
            <Link href="#community" className="text-white/70 hover:text-gold-400 transition-colors">
              Community
            </Link>
            <Link href="#contact" className="text-white/70 hover:text-gold-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 border-gold-400/50 text-gold-300 hover:text-gold-100 hover:border-gold-300 bg-transparent hover:bg-transparent px-6 py-3 transition-all duration-300 group relative overflow-hidden"
            onClick={() => window.open('/CURRICULUM VITAE 2024.pdf', '_blank')}
          >
            {/* Animated border effect */}
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-gold-300/30 rounded-md transition-all duration-500 pointer-events-none"></span>
            
            {/* Text with slide effect */}
            <span className="relative overflow-hidden">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                Download CV
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Download CV
              </span>
            </span>
            
            {/* Animated icon */}
            <ArrowDownToLine className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </Button>

          {/* Mobile View Button */}
           <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-gold-400 hover:bg-gold-400/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
        </div>

          {mobileMenuOpen && (
        <div className="md:hidden bg-green-950/95 backdrop-blur-lg border-t border-green-800/40">
          <nav className="flex flex-col items-center py-4 space-y-4 text-sm">
            <Link 
              href="#about" 
              className="text-white/70 hover:text-gold-400 transition-colors px-4 py-2 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="text-white/70 hover:text-gold-400 transition-colors px-4 py-2 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="#education" 
              className="text-white/70 hover:text-gold-400 transition-colors px-4 py-2 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </Link>
            <Link 
              href="#awards" 
              className="text-white/70 hover:text-gold-400 transition-colors px-4 py-2 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Awards
            </Link>
            <Link 
              href="#community" 
              className="text-white/70 hover:text-gold-400 transition-colors px-4 py-2 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="#contact" 
              className="text-white/70 hover:text-gold-400 transition-colors px-4 py-2 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gold-400/50 text-gold-300 hover:text-gold-100 hover:border-gold-300 bg-transparent hover:bg-transparent px-6 py-3 transition-all duration-300 group relative overflow-hidden mt-2"
              onClick={() => {
                window.open('/CURRICULUM VITAE 2024.pdf', '_blank');
                setMobileMenuOpen(false);
              }}
            >
              Download CV
              <ArrowDownToLine className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </Button>
          </nav>
        </div>
      )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#4a63a0_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#c8a951_0%,transparent_60%)]"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto md:px-6 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col space-y-6 md:max-w-[50%]">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  Dr. Nasir Olaitan Raji-Mustapha
                </h1>
                <p className="text-xl text-gold-400 font-medium">Chairman & CEO, Crown Group of Companies</p>
                <p className="text-white/70 md:text-lg">
                  Visionary leader with extensive experience in business, academia, and public service.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                {/* Contact Me Button (Gold Solid)*/}
                <Link href="#contact" passHref className="w-full">
                  <Button
                    asChild
                    className="w-full bg-gold-500 text-navy-950 hover:bg-gold-400 px-6 py-3 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="w-full">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span className="relative overflow-hidden">
                          <span className="block group-hover:-translate-y-full transition-transform duration-300">
                            Contact Me
                          </span>
                          <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            Contact Me
                          </span>
                        </span>
                        <MessageCircle className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </span>
                      {/* Gold pulse effect on hover */}
                      <span className="absolute inset-0 bg-gold-400/30 rounded-md opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none"></span>
                    </div>
                  </Button>
                </Link>

                {/* View Resume Button */}
                <Button
                  variant="outline"
                  className="w-full border-gold-400/50 text-gold-300 hover:text-gold-300 hover:border-gold-300 bg-transparent hover:bg-transparent px-6 py-3 transition-all duration-300 group relative overflow-hidden"
                  onClick={() => window.open('/CURRICULUM VITAE 2024.pdf', '_blank')}
                >
                  {/* Animated border effect */}
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-md transition-all duration-500 pointer-events-none"></span>
                  
                  {/* Text with slide effect */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="relative overflow-hidden">
                      <span className="block group-hover:-translate-y-full transition-transform duration-300">
                        View Resume
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        View Resume
                      </span>
                    </span>
                    <FileText className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                <span className="text-white/50 text-sm">Scroll to explore</span>
                <ChevronDown className="h-4 w-4 text-white/50 animate-bounce" />
              </div>
            </div>
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-950 via-green-900 to-green-950 blur-2xl"></div>
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] overflow-hidden rounded-2xl border-2 border-gold-400/30 to-green-950 p-2 mx-auto">
                <Image
                  src="/images/PHOTO-2024-12-12-14-29-49.jpg"
                  alt="Dr. Nasir Olaitan Raji-Mustapha"
                  className="rounded-2xl object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-green-900/50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">About</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Professional Profile</h2>
            <div className="mt-4 max-w-[700px] text-white/70">
              A distinguished professional with over 25 years of experience spanning business leadership, public
              service, and academia.
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <Card className="bg-green-800/90 border-green-700">
              <CardContent className="p-6 md:p-8">
                <p className="mb-4 leading-relaxed text-white/80">
                  Dr. Nasir Olaitan Raji-Mustapha is the chairman and chief executive officer of Crown Group of
                  Companies, a conglomerate comprising Crown Agrovet and Crown Properties and Constructions Limited. He
                  is the Immediate Past Director-General of the National Productivity Centre (NPC) in Nigeria.
                </p>
                <p className="mb-4 leading-relaxed text-white/80">
                  Throughout his career, Dr. Raji-Mustapha has demonstrated exceptional leadership and expertise across
                  multiple sectors. His professional journey began in 1994 when he joined the NPC as a Senior
                  Productivity Research Officer. Prior to this, he served as a Research Fellow with the European
                  Economic Commission from 1991 to 1993.
                </p>
                <p className="leading-relaxed text-white/80">
                  He is an astute community builder, a consummate public affairs analyst, an experienced business
                  person, and a leader dedicated to serving all. His multifaceted career spans business management,
                  public service, academic research, and community leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">
              Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Professional Journey</h2>
            <div className="mt-4 max-w-[700px] text-white/70">
              A career marked by leadership, innovation, and excellence across multiple sectors.
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6">
              <Card className="bg-green-800/90 border-green-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gold-400/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-xl font-bold text-gold-400">Crown Group of Companies</h3>
                      <p className="text-white/70">Chairman & CEO</p>
                      <p className="text-sm text-white/50">Present</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-white/80 leading-relaxed">
                        Leads Crown Group of Companies, a conglomerate comprising Crown Agrovet and Crown Properties and
                        Constructions Limited. Oversees strategic direction, business development, and operational
                        excellence across all business units.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/90 border-green-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gold-400/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-xl font-bold text-gold-400">Oil & Gas Free Zone Authority</h3>
                      <p className="text-white/70">Special Assistant (Procurement) </p>
                      <p className="text-sm text-white/50">Present</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-white/80 leading-relaxed">
                        Serving as Special Assistant (Procurement) to the Managing Director/Chief Executive Officer of the Oil & Gas Free Zone Authority, 
                        where responsibilities include overseeing procurement processes, ensuring compliance with public procurement regulations, 
                        and advising on strategic sourcing initiatives for the organization&apos;s operations within Nigeria&apos;s oil and gas free zones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

               <Card className="bg-green-800/90 border-green-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gold-400/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-xl font-bold text-gold-400">Shamzbridge Consult Limited</h3>
                      <p className="text-white/70">Chairman, Board of Trustee</p>
                      <p className="text-sm text-white/50">Present</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-white/80 leading-relaxed">
                        As Chairman of the Board of Trustees for Shamzbridge Consult Limited, provides strategic leadership and governance oversight 
                        for this Abuja-based consulting firm. Responsible for guiding the company&apos;s vision, ensuring compliance with corporate governance 
                        standards, and advising on high-level business decisions that shape the organization&apos;s future direction and growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/90 border-green-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gold-400/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-xl font-bold text-gold-400">National Productivity Centre</h3>
                      <p className="text-white/70">Director-General</p>
                      <p className="text-sm text-white/50">Past Position</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-white/80 leading-relaxed">
                        Served as the Director-General of the National Productivity Centre (NPC) in Nigeria, where he
                        led initiatives to enhance productivity across various sectors of the Nigerian economy. Joined
                        the NPC in 1994 as a Senior Productivity Research Officer and rose through the ranks.
                      </p>
                      
                      {/* Add this new section for media coverage */}
                      <div className="mt-4 pt-4 border-t border-green-700">
                        <h4 className="text-gold-400 font-medium mb-2">Media Coverage of NPC Initiatives:</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                          <li>
                            • <a href="https://nairametrics.com/2024/05/14/fg-develops-new-wage-system-based-on-employee-productivity/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:text-gold-400 transition-colors">
                              FG develops new wage system based on employee productivity (Nairametrics)
                            </a>
                          </li>
                          <li>
                            • <a href="https://www.premiumtimesng.com/news/top-news/694217-nigerian-govt-considers-introducing-wage-system-for-workers.html" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:text-gold-400 transition-colors">
                              Nigerian govt considers introducing productivity-linked wage system (Premium Times)
                            </a>
                          </li>
                          <li>
                            • <a href="https://leadership.ng/federal-govt-to-adopt-productivity-link-wage-system/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:text-gold-400 transition-colors">
                              Federal Govt to adopt productivity-linked wage system (Leadership)
                            </a>
                          </li>
                          <li>
                            • <a href="https://x.com/TheNationNews/status/1790221663432302851" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:text-gold-400 transition-colors">
                              NPC&apos;s productivity wage system announcement (The Nation)
                            </a>
                          </li>
                          {/* <li>
                            • <a href="https://thenationonlineng.net/fubara-to-raise-probe-panel-on-wikes-govt/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:text-gold-400 transition-colors">
                              NPC&apos;s productivity wage system announcement (The Nation)
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/90 border-green-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gold-400/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-xl font-bold text-gold-400">Haramaya University, Ethiopia</h3>
                      <p className="text-white/70">Lecturer</p>
                      <p className="text-sm text-white/50">2002 - 2004</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-white/80 leading-relaxed">
                        Lectured at Haramaya University in Ethiopia between 2002 and 2004 under the Nigeria Technical
                        Aid Corps program. Contributed to academic development and knowledge transfer in veterinary
                        medicine and related fields.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-800/90 border-green-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gold-400/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-xl font-bold text-gold-400">European Economic Commission</h3>
                      <p className="text-white/70">Research Fellow</p>
                      <p className="text-sm text-white/50">1991 - 1993</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-white/80 leading-relaxed">
                        Served as a Research Fellow with the European Economic Commission, contributing to research
                        initiatives and policy development in areas related to economic development and productivity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section id="education" className="py-16 md:py-24 bg-green-900/50">
        <div className="container px-4 mx-auto md:px-6">
          <Tabs defaultValue="education" className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center text-center mb-8">
              <TabsList className="bg-green-800/90 border-green-700 border ">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-gold-400 data-[state=active]:text-navy-950"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="awards"
                  id="awards"
                  className="data-[state=active]:bg-gold-400 data-[state=active]:text-navy-950"
                >
                  Awards
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education" className="mt-0">
              <div className="flex flex-col items-center justify-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Academic Background</h2>
                <div className="mt-4 max-w-[700px] text-white/70">
                  A solid foundation of academic excellence and continuous learning.
                </div>
              </div>

              <div className="grid gap-6">
                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Doctor of Philosophy (PhD)</h3>
                      <p className="text-white/70">Management, University of America, Curacao</p>
                      <p className="text-sm text-gold-300">PhD Graduate, 2022</p>
                      <p className="mt-2 text-white/80">
                        Advanced research in management theories and practices, with a focus on strategic leadership, 
                        organizational behavior, and business administration in global contexts.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Doctor of Veterinary Medicine (DVM)</h3>
                      <p className="text-white/70">Ahmadu Bello University</p>
                      <p className="mt-2 text-white/80">
                        Completed comprehensive training in veterinary medicine, developing expertise in animal health,
                        disease prevention, and treatment methodologies.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Master of Science (M.Sc.)</h3>
                      <p className="text-white/70">Applied Entomology and Parasitology, University of Jos</p>
                      <p className="text-sm text-gold-300"> M.Sc. Student, 1995</p>
                      <p className="mt-2 text-white/80">
                        Specialized research in entomology and parasitology, focusing on vector-borne diseases and their
                        impact on public health and agriculture.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Master of Business Administration (MBA)</h3>
                      <p className="text-white/70">Nasarawa State University</p>
                      <p className="text-sm text-gold-300"> MBA Student, 2019</p>
                      <p className="mt-2 text-white/80">
                        Advanced studies in business administration, developing expertise in strategic management,
                        organizational leadership, and business development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="awards" className="mt-0">
              <div className="flex flex-col items-center justify-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Honors & Recognition</h2>
                <div className="mt-4 max-w-[700px] text-white/70">
                  Celebrating excellence and achievement throughout a distinguished career.
                </div>
              </div>

              <div className="grid gap-6">
                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">National Productivity Merit Award</h3>
                      <p className="text-white/70">National Productivity Centre</p>
                      <p className="mt-2 text-white/80">
                        Recognized for outstanding contributions to productivity improvement and organizational
                        excellence in Nigeria&apos;s public and private sectors.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Best M.Sc. Student</h3>
                      <p className="text-white/70">Applied Entomology and Parasitology, University of Jos, 1995</p>
                      <p className="mt-2 text-white/80">
                        Awarded for academic excellence and outstanding research contributions in the field of applied
                        entomology and parasitology.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-800/90 border-green-700">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Best MBA Student</h3>
                      <p className="text-white/70">Nasarawa State University, 2019</p>
                      <p className="mt-2 text-white/80">
                        Recognized for exceptional academic performance and leadership in business administration
                        studies, demonstrating mastery of strategic management principles and business acumen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Involvement */}
      <section id="community" className="py-16 md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">Community</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Community Leadership</h2>
            <div className="mt-4 max-w-[700px] text-white/70">
              Dedicated to service and making a positive impact beyond professional endeavors.
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="bg-green-800/90 border-green-700">
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">NASFAT Chairman, FCT Zone</h3>
                      <p className="text-white/70">Inaugurated in 2020</p>
                      <p className="mt-2 text-white/80">
                        Serves as the Chairman of the Federal Capital Territory (FCT) Zone of the Nasrul-lahi-l-Fatih
                        Society (NASFAT), an Islamic organization. In this role, he provides leadership for community
                        development initiatives, spiritual guidance, and social welfare programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Public Affairs Analyst</h3>
                      <p className="mt-2 text-white/80">
                        Contributes to public discourse as a consummate public affairs analyst, offering insights on
                        economic development, productivity enhancement, and policy formulation. His analyses are
                        informed by his extensive experience in both public and private sectors.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold-400"
                        >
                          <path d="M12 2v20" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gold-400">Community Development Initiatives</h3>
                      <p className="mt-2 text-white/80">
                        Actively engages in various community development initiatives, leveraging his business acumen
                        and leadership skills to create positive social impact. His efforts focus on economic
                        empowerment, education, and capacity building within communities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery/>

      {/* Contact Section */}
      <ContactPage/>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-green-800/40">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60">
                &copy; {new Date().getFullYear()} Dr. Nasir Olaitan Raji-Mustapha. All rights reserved.
              </p>
            </div>
            <div className="">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/dr-nasir-olaitan-raji-mustapha-4b3167318/" target="blank"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400/20 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold-400 group-hover:text-gold-300 transition-colors"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
