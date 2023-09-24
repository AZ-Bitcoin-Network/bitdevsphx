import './Header.css'
import MeetupName from '../MeetupName'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { meetup } from '@/meetup'


const Header = () => {
  return (
    <header className="header w-full p-6 flex flex-row justify-between font-sans sticky top-0 left-0 bg-white z-50 drop-shadow-header dark:drop-shadow-header-dark dark:bg-black">
      <h1 className="font-black text-2xl">
        <a href="/" className="no-underline">
          <MeetupName />
        </a>
      </h1>
      <nav>
        <ul className="flex flex-row gap-4 font-semibold justify-center items-center">
          {meetup.mainNav.map((item) => (
            <li key={item.text} className="">
              <a href={item.link} className="no-underline">
                {item.text}
              </a>
            </li>
          ))}
          {/* Uncomment for theme switcher. I don't want it. */}
          {/* <ThemeSwitcher /> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
