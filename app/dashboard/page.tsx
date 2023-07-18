'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react"

const DashBoard = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard/home')
  }, [])

  return (
    <div className=''></div>
  )
}

export default DashBoard