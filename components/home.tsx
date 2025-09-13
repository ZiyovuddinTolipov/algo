import Image from "next/image"
import { Monitor } from "lucide-react"
import TeachersSlider from "./teachers-slider"

export default function Home() {
  const images = {
    bg1: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/14grjftfF2UjyelbV6BE-.jpg",
    bg2: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/w1jodtU8Zukk7u5RACdCV.jpg",
  }

  return (
    <div className='pt-8 flex flex-col gap-8 font-["Saira"] text-white bg-black min-h-screen px-4 md:px-8 max-w-[1200px] mx-auto'>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-8 bg-[#fc8337bf] min-h-[400px] lg:h-[520px] rounded-3xl border-2 border-[#4e4e4e]">
        <div className="w-full lg:w-2/3 p-6 lg:p-8">
          <h1 className='text-4xl md:text-6xl lg:text-[90px] font-medium text-black font-["Saira"] text-center pt-4 lg:pt-8 leading-tight lg:leading-[90px]'>
            IT как сервис: <br />
            рост набора и удержания
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-black font-saira text-center pt-4 lg:pt-6">
            Без найма дорогих программистов
          </p>
        </div>
        <div className="w-full lg:w-1/3 h-64 lg:h-full">
          <Image
            src={images.bg1 || "/placeholder.svg"}
            alt="header image"
            width={100}
            height={520}
            className="w-full h-full object-cover rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="flex flex-col bg-transparent min-h-[400px] lg:h-[520px] rounded-3xl border-2 border-[#4e4e4e]">
        <div className="h-48 lg:h-2/5">
          <Image
            src={images.bg2 || "/placeholder.svg"}
            alt="bg2"
            width={120}
            height={520}
            className="w-full h-full object-cover rounded-t-3xl"
          />
        </div>
        <div className="flex-1 p-6 lg:p-12">
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-medium text-white font-["Saira"] text-center pb-6 lg:pb-8'>
            Проблема рынка: найм IT-специалистов
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full lg:w-1/3 bg-transparent rounded-3xl border-2 border-[#FC8337] text-white text-lg lg:text-xl p-4"
              >
                <h3>Высокая стоимость</h3>
                <h3>Рыночная зарплата</h3>
                <h3>программиста: $1000–2000+</h3>
                <h3>Бюджет школы: $500~1000+</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="flex flex-col gap-6 lg:gap-8 p-6 lg:p-12 rounded-3xl border-2 border-[#4e4e4e]">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white">
          Наше решение: комплексная IT-система
        </h2>
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
            {[
              { title: "Методика", desc: "Проверенные сценарии уроков." },
              { title: "Сертифицированные преподаватели", desc: "Высококвалифицированные специалисты." },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 bg-black border-[#FC8337] border-2 rounded-3xl p-4 text-white w-full"
              >
                <div className="p-2 bg-[#FC8337] w-10 h-10 rounded-full">
                  <svg
                    className="colorable-icon w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M281.6 3.2c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4L288 48H112C50.1 48 0 98.1 0 160s50.1 112 112 112H400c44.2 0 80 35.8 80 80c0 39.5-28.7 72.3-66.3 78.8c-7.5-27-32.3-46.8-61.7-46.8c-35.3 0-64 28.7-64 64s28.7 64 64 64c30.1 0 55.4-20.8 62.2-48.9C469.4 456.1 512 409 512 352c0-61.9-50.1-112-112-112H112c-44.2 0-80-35.8-80-80s35.8-80 80-80H288L262.4 99.2c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l64-48c4-3 6.4-7.8 6.4-12.8s-2.4-9.8-6.4-12.8l-64-48z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl lg:text-2xl">{item.title}</h4>
                <p className="text-lg lg:text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
            <div className="flex flex-col gap-2 bg-black border-[#FC8337] border-2 rounded-3xl p-4 text-white w-full">
              <div className="p-2 bg-[#FC8337] w-10 h-10 rounded-full">
                <svg
                  className="colorable-icon w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M328.9 2.7c-5.4-3.6-12.4-3.6-17.8 0L171.2 96H64C28.7 96 0 124.7 0 160V448c0 35.3 28.7 64 64 64H256h32 64 32H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H468.8L328.9 2.7z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl">Сертифицированные преподаватели</h4>
              <p className="text-xl">Высококвалифицированные специалисты.</p>
            </div>
            <div className="flex flex-col gap-2 bg-black border-[#FC8337] border-2 rounded-3xl p-4 text-white w-full ">
              <div className="p-2 bg-[#FC8337] w-10 h-10 rounded-full">
                <Monitor className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-2xl ">Методика</h4>
              <p className="text-xl">Проверенные сценарии уроков.</p>
            </div>
          </div>
        </div>
        <p className="text-white text-xl">
          Мы поставляем <span className="text-[#FC8337]">систему</span>, а не отдельных людей, обеспечивая стабильность
          и качество.
        </p>
      </section>

      {/* Continuity Section */}
      <section className="flex flex-col gap-8 p-6 lg:p-12 pt-16 rounded-3xl border-2 border-[#4e4e4e]">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white">Непрерывность уроков и удержание</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <p className="text-xl">
              Мы гарантируем непрерывность учебного процесса <br /> благодаря SLA на замену преподавателей.
            </p>
            <ul className="list-disc text-xl mt-4 ml-6 text-white leading-8">
              <li>Меньше отмен уроков.</li>
              <li>Выше удержание учеников.</li>
              <li>Стабильный доход для школы.</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/vOH9UejRIMYtAW_Ix7CHa.jpg"
              height={500}
              width={300}
              className="h-[300px] lg:h-[450px] w-full lg:w-[500px] rounded-xl"
              alt="Continuous lessons and retention image"
            />
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="flex flex-col gap-8 p-6 lg:p-12 pt-16 rounded-3xl border-2 border-[#4e4e4e]">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white">Контроль качества</h2>
        <div className="border-2 border-[#FC8337] rounded-3xl p-8">
          <div className="w-14 h-14 p-2 text-black bg-[#FC8337] rounded-full mb-4">
            <Monitor className="h-10 w-10" />
          </div>
          <h3 className="text-2xl">Head Teacher</h3>
          <ul className="text-xl list-disc mt-4 ml-6 text-white leading-8">
            <li>Контролирует выполнение методики и ежедневный план уроков.</li>
            <li>Обеспечивает единый стандарт качества во всех классах.</li>
            <li>Проводит аудит занятий и проверку тестов учеников.</li>
            <li>Консультирует и наставляет учителей, помогает в замене.</li>
            <li>Является связующим звеном между школой и нашей командой.</li>
          </ul>
        </div>
        <p className="text-xl">Наш цикл контроля качества обеспечивает высокий стандарт преподавания и обучения.</p>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-8 p-6 lg:p-12 pt-16 rounded-3xl border-2 border-[#4e4e4e]">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white">Осязаемые результаты: проекты</h2>
        <p className="text-xl">
          Каждые <span className="text-[#FC8337]">n</span> уроков ученики создают реальные проекты, демонстрируя свои
          навыки.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/5cRLlCE6Egt8oikQAf4P9.jpg",
            "https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/Fzsoa6SN8derT0WIRSIAR.jpg",
            "https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/hLZ52c1IDyEXzO-P4kJ9D.jpg",
            "https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/yuV1vH8GjR-yy-jEmlIIj.jpg",
          ].map((src, index) => (
            <Image
              key={index}
              src={src || "/placeholder.svg"}
              height={247}
              width={247}
              className="h-[150px] lg:h-[247px] w-full rounded-xl object-cover"
              alt="Projects image"
            />
          ))}
        </div>
      </section>

      {/* Teachers Slider - Added teachers slider component */}
      <TeachersSlider />

      {/* Economics Section */}
      <section className="flex flex-col gap-8 p-6 lg:p-12 pt-16 rounded-3xl border-2 border-[#4e4e4e]">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white">Экономика: IT-сервис vs. свой найм</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl overflow-hidden border-2 border-gray-400 text-white min-w-[600px]">
            <thead>
              <tr className="bg-white/10">
                <th className="p-4 border border-[#4e4e4e] text-left">Параметр</th>
                <th className="p-4 border border-[#4e4e4e] text-left">Свой найм</th>
                <th className="p-4 border border-[#4e4e4e] text-left">IT-сервис</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-[#4e4e4e]">Зарплата</td>
                <td className="p-4 border border-[#4e4e4e]">$1000+</td>
                <td className="p-4 border border-[#4e4e4e]">Включено</td>
              </tr>
              <tr className="bg-white/10">
                <td className="p-4 border border-[#4e4e4e]">Налоги</td>
                <td className="p-4 border border-[#4e4e4e]">20-30%</td>
                <td className="p-4 border border-[#4e4e4e]">Включено</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#4e4e4e]">Поиск/Найм</td>
                <td className="p-4 border border-[#4e4e4e]">Высокие затраты</td>
                <td className="p-4 border border-[#4e4e4e]">0</td>
              </tr>
              <tr className="bg-white/10">
                <td className="p-4 border border-[#4e4e4e]">Обучение</td>
                <td className="p-4 border border-[#4e4e4e]">Постоянно</td>
                <td className="p-4 border border-[#4e4e4e]">Включено</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#4e4e4e]">Замены</td>
                <td className="p-4 border border-[#4e4e4e]">Сложно</td>
                <td className="p-4 border border-[#4e4e4e]">Гарантировано</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
