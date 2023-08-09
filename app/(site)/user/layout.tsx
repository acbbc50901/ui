import Menu from "@/components/Dashboard/Menu"
import { AiOutlineSetting, AiFillHeart} from 'react-icons/ai'
const NavbarData = [
  {
    titel: 'MAIN',
    Link: [
      {
        icon: AiFillHeart,
        link: '/user',
        text: 'loveraa',
      },
      {
        icon: AiOutlineSetting,
        link: '/user/option',
        text: '個人設定',
      },
    ],
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full h-full justify-center mt-[80px]">
      <div className="w-[10%] sm:w-[25%] md:w-[20%] lg:w-[15%] xl:w-[10%]">
        <Menu NavbarData={NavbarData}/>
      </div>
      <div className="w-[90%] sm:w-[75%] md:w-[80%] lg:w-[85%] xl:w-[70%]">
        {children}
      </div>
    </div>
  )
}
