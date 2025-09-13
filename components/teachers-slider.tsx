"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Teacher {
  id: string
  name: string
  title: string
  image: string
  specialization: string
}

const teachers: Teacher[] = [
  {
    id: "1",
    name: "Sardor Salimov",
    title: "Full-Stack Developer",
    image: "/professional-teacher-portrait.png",
    specialization: "Frontend & Backend Development",
  },
  {
    id: "2",
    name: "Aziza Karimova",
    title: "UI/UX Designer",
    image: "/female-teacher-portrait.png",
    specialization: "Design & User Experience",
  },
  {
    id: "3",
    name: "Bobur Rahimov",
    title: "Mobile Developer",
    image: "/male-teacher-portrait.png",
    specialization: "iOS & Android Development",
  },
  {
    id: "4",
    name: "Malika Tosheva",
    title: "Data Scientist",
    image: "/female-data-scientist.png",
    specialization: "Machine Learning & Analytics",
  },
  {
    id: "5",
    name: "Jasur Abdullayev",
    title: "DevOps Engineer",
    image: "/male-devops-engineer-portrait.jpg",
    specialization: "Cloud & Infrastructure",
  },
]

export default function TeachersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === teachers.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? teachers.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === teachers.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="flex flex-col gap-8 p-6 md:p-12 pt-16 rounded-3xl border-2 border-[#4e4e4e]">
      <h2 className="text-4xl md:text-6xl font-medium text-white text-center">Наши преподаватели</h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {teachers.map((teacher) => (
            <div key={teacher.id} className="w-full flex-shrink-0">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FC8337]">
                  <Image
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">{teacher.name}</h3>
                  <p className="text-xl md:text-2xl text-[#FC8337] mb-4">{teacher.title}</p>
                  <p className="text-lg md:text-xl text-gray-300">{teacher.specialization}</p>
                  <button
                    className="mt-6 px-6 py-3 bg-[#FC8337] text-black font-semibold rounded-lg hover:bg-[#e6742f] transition-colors"
                    onClick={() => window.open(`/teacher/${teacher.id}`, "_blank")}
                  >
                    Посмотреть резюме
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FC8337] text-black p-3 rounded-full hover:bg-[#e6742f] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FC8337] text-black p-3 rounded-full hover:bg-[#e6742f] transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {teachers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#FC8337]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
