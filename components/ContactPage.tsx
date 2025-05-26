'use client'

import React, { FormEvent, useRef, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { MdArrowDropDown } from "react-icons/md";

interface ContactFormData {
    name: string;
    email: string;
    phoneNumber: string;
    subject: string;
    context: string;
};

function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        context: ""
    });
    const [showFallback, setShowFallback] = useState(false);
    const mailtoRef = useRef<HTMLAnchorElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, phoneNumber, subject, context } = formData;
        const emailSubject = encodeURIComponent(subject || "Contact Request from Website");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nHow did you find us?: ${context}\n\nMessage: ${subject}`
        )

        const mailto = `mailto:mustapha@gmail.com?subject=${emailSubject}&body=${body}`;
        if (mailtoRef.current) {
            mailtoRef.current.href = mailto;
            mailtoRef.current.click();
        }
        setShowFallback(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setShowFallback(false);
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-green-900/50">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">Contact</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get In Touch</h2>
                    <div className="mt-4 max-w-[700px] text-white/70">
                        Connect with Dr. Raji-Mustapha for speaking engagements, consultations, or collaborations.
                    </div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <Card className="bg-green-800/90 border-green-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gold-400">Contact Information</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-gold-400" />
                                            <span className="text-white/80">contact@drraji-mustapha.com</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-gold-400" />
                                            <span className="text-white/80">+234 (0) 123 456 7890</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-5 w-5 text-gold-400" />
                                            <span className="text-white/80">Abuja, Federal Capital Territory, Nigeria</span>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <h4 className="font-medium text-gold-400 mb-2">Connect on Social Media</h4>
                                        <div className="flex gap-4">
                                            <a
                                                href="https://www.linkedin.com/in/dr-nasir-olaitan-raji-mustapha-4b3167318/" target='blank'
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

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gold-400">Send a Message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-white/70">
                                                    Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    type='text'
                                                    name='name'
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    className="bg-green-800/90 border-green-700"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-white/70">
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    name='email'
                                                    placeholder="Your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    className="bg-green-800/90 border-green-700"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phoneNumber" className="text-sm font-medium text-white/70">
                                                Phone Number
                                            </label>
                                            <Input
                                                id="phoneNumber"
                                                name='phoneNumber'
                                                type='tel'
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="bg-green-800/90 border-green-700"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-white/70">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name='subject'
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Your Message"
                                                className="min-h-[120px] w-full rounded-md border bg-green-800/90 border-green-700 p-3 text-white/90 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-950"
                                            ></textarea>
                                        </div>

                                        <div className='relative'>
                                            <select
                                                id='context'
                                                name='context'
                                                value={formData.context}
                                                onChange={handleChange}
                                                className='w-full rounded-md border bg-green-800/90 border-green-700 p-3 text-white/90 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-950 appearance-none cursor-pointer'
                                            >
                                                <option value='' disabled className='text-white'>
                                                    How did you find us?
                                                </option>
                                                <option value='social' className='text-white/90'>Social</option>
                                                <option value='others' className='text-white/90'>Others</option>
                                            </select>
                                            <div className='absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/90'>
                                                <MdArrowDropDown size={24} />
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full bg-gold-500 text-navy-950 hover:bg-gold-400">Send Message</Button>
                                        <a ref={mailtoRef} href="#" className="hidden"></a>
                                    </form>
                                </div>
                            </div>
                             {/* Hidden mailto anchor */}
            <a ref={mailtoRef} style={{ display: "none" }}>
              Mail
            </a>

            {/* Fallback message and Gmail link */}
            {showFallback && (
              <div className='mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded text-yellow-900 text-sm'>
                <p>
                  <strong>If your email client did not open:</strong>
                </p>
                <ul className='list-disc ml-5'>
                  <li>
                    You can{" "}
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=neca@neca.org.ng&su=Contact%20Request%20from%20Website&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nHow did you find us?: ${formData.context}\n\nPlease provide more context here:`
                      )}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='underline text-blue-700'
                    >
                      send us an email via Gmail Webmail
                    </a>
                    .
                  </li>
                  <li>
                    Or, email us directly at{" "}
                    <a
                      href='mailto:neca@neca.org.ng'
                      className='underline text-blue-700'
                    >
                      neca@neca.org.ng
                    </a>
                  </li>
                </ul>
              </div>
            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ContactPage