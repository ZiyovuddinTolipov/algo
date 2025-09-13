import TeacherResume from "@/components/teacher-resume"

interface PageProps {
  params: {
    id: string
  }
}

export default function TeacherPage({ params }: PageProps) {
  return <TeacherResume teacherId={params.id} />
}
