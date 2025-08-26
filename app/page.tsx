import Image from 'next/image'

const Home = () => {
  const images = {
    bg1: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/14grjftfF2UjyelbV6BE-.jpg',
    bg2: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/hdiu3rngwxn4oss/generated-images/w1jodtU8Zukk7u5RACdCV.jpg",
  }
  return (
    <div className='pt-8 flex flex-col gap-8'>
      <div className='flex gap-8 bg-[#fc8337bf] h-[520px] rounded-3xl border-2 border-[#4e4e4e]'>
        <div className='w-2/3 p-8'>
          <h1 className='text-[90px] font-medium text-black font-["Saira"] text-center pt-8 leading-[90px]'>
            IT как сервис: <br />
            рост набора и удержания
          </h1>
          <p className='text-3xl text-black font-saira text-center pt-6'>Без найма дорогих программистов</p>
        </div>
        <div className='w-1/3 h-full' >
          <Image src={images.bg1} alt='header image' width={100} height={520} className='w-full h-full object-cover rounded-r-3xl' />
        </div>
      </div>
      <div className='flex flex-col gap-8 bg-transparent h-[520px] rounded-3xl border-2 border-[#4e4e4e]'>
        <div className='h-1/3'>
          <Image src={images.bg2} alt='bg2' width={100} height={520} className='w-full h-full object-cover rounded-3xl' />
        </div>
        <div className='h-2/3'>
          <h2 className='text-4xl font-medium text-white font-["Saira"] text-center pt-8 leading-[90px]'>Проблема рынка: найм IT-специалистов</h2>
          <div className='flex gap-8'>
            <div className='w-1/3 h-full bg-transparent rounded-3xl border-2 border-[#FC8337] text-white text-xl p-2'>
              <h3>
                Высокая стоимость
              </h3>
              <h3>
                Рыночная зарплата
              </h3>
              <h3>
                программиста: $1000–2000+
              </h3>
              <h3 >
                Бюджет школы: $500~1000+
              </h3>
            </div>
            <div className='w-1/3 h-full bg-transparent rounded-3xl border-2 border-[#FC8337] text-white text-xl p-2'>
              <h3>
                Высокая стоимость
              </h3>
              <h3>
                Рыночная зарплата
              </h3>
              <h3>
                программиста: $1000–2000+
              </h3>
              <h3 >
                Бюджет школы: $500~1000+
              </h3>
            </div>
            <div className='w-1/3 h-full bg-transparent rounded-3xl border-2 border-[#FC8337] text-white text-xl p-2'>
              <h3>
                Высокая стоимость
              </h3>
              <h3>
                Рыночная зарплата
              </h3>
              <h3>
                программиста: $1000–2000+
              </h3>
              <h3 >
                Бюджет школы: $500~1000+
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home