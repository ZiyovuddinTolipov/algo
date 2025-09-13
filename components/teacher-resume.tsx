"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Mail, Globe, Calendar } from "lucide-react"
import teacherData from "@/data/teacher-data.json"

interface TeacherResumeProps {
  teacherId: string
}

export default function TeacherResume({ teacherId }: TeacherResumeProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  // For demo purposes, using the same data for all teachers
  // In a real app, you'd fetch different data based on teacherId
  const data = teacherData

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#FC8337] to-orange-600 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Image
                src={
                  data.profile.avatar.src || "/placeholder.svg?height=150&width=150&query=professional teacher portrait"
                }
                alt={data.profile.avatar.alt}
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.profile.name}</h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-4">{data.profile.title}</p>

              {/* Languages */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {data.profile.languages.map((lang) => (
                  <div key={lang.code} className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Image
                      src={lang.flagSrc || "/placeholder.svg?height=20&width=20&query=flag"}
                      alt={lang.label}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span className="text-sm">{lang.label}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg italic border-l-4 border-white/50 pl-4">
                "{data.profile.quote.text}"<footer className="text-sm mt-1">— {data.profile.quote.author}</footer>
              </blockquote>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-white/30">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{data.profile.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <a
                href={data.profile.contact.website}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram Profile
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{data.profile.contact.location}</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-8">
          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#FC8337] rounded"></div>
              {data.skills.intro}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.skills.grid.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-orange-50 border border-orange-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={skill.src || "/placeholder.svg?height=40&width=40&query=skill icon"}
                      alt={skill.title}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <h3 className="font-semibold text-orange-800">{skill.title}</h3>
                  </div>
                  <p className="text-sm text-orange-600">{skill.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#FC8337] rounded"></div>
              {data.education.intro}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.education.cards.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={edu.logoSrc || "/placeholder.svg?height=50&width=50&query=education logo"}
                      alt={edu.institution}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-orange-800 text-lg">{edu.institution}</h3>
                      <p className="text-orange-600 font-medium">{edu.course}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                        <Calendar className="w-4 h-4" />
                        {edu.date}
                      </div>
                      <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#FC8337] rounded"></div>
              {data.experience.intro}
            </h2>
            <div className="space-y-6">
              {data.experience.timeline.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <Image
                      src={exp.logoSrc || "/placeholder.svg?height=60&width=60&query=company logo"}
                      alt={exp.company}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="font-semibold text-orange-800 text-xl">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {exp.startDate} - {exp.endDate}
                        </div>
                      </div>
                      <p className="text-orange-600 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-3">{exp.location}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-orange-50 p-6 text-center text-sm text-gray-500">
          Generated on {new Date(data.meta.generatedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
