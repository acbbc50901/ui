'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { supabase } from '@/supabase/supabase'
import HitMeIcon from "@/components/HitMeIcon";
import AnimateText from "@/components/AnimateText";
import Hero from "@/components/Index/Hero";
import EffectText from "@/components/Index/EffectText";
import Contact from "@/components/Index/Contact";
import About from "@/components/Index/About";
import Project from "@/components/Index/Project";
import Footer from "@/components/Footer";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";


export default function Home() {
  const router = useRouter();
  const [list, setList] = useState<any[] | null>();
  const data = useRef<any>();
  
  const feachdata = async () => {
    let { data: orders, error } = await supabase
      .from('orders')
      .select(`*, client(*)`)
      if (data) {
        data.current = orders;
        setList(data.current);
        console.log(data.current);
        await incrementViews();
      }
  }
  const channel = () => {
    supabase.channel('my_new_channel_for_oreder')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'orders',
      },
      (event) => {
        const {new: newOrder} = event as any
        const z = [ ...data.current ];
        const newList = z?.filter((item) => item.id !== newOrder.id) || []
        newList.push(newOrder);
        data.current = newList;
        setList(data.current);
      }).subscribe()
  }
  const incrementViews = async () => {
    let { data, error } = await supabase
    .rpc('increment', {
      row_id: 'e2d8580e-2c13-418f-a33d-a8071fa744dc'
    })

    if (error) console.error(error)
    else console.log(data)

    console.log('data', data)
  }

  const handleFileInputChange = async (event : any) => {
    const file = event.target.files[0];

    if (!file) return;

    const { data, error } = await supabase.storage.from('avatars')
      .upload(`avatart_${Date.now()}`, file)
      if (error) {
        console.log(error);
        return
      }
      console.log(`https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/avatars/${data.path}`);
      // console.log(URL.createObjectURL(file));
  }

  useEffect(() => {
    feachdata();
  }, [])

  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  return (
    <>
      <div ref={text} className=" container mx-auto">
        <Hero/>
      </div>
        <EffectText baseVelocity={-400}/>
        <EffectText baseVelocity={400}/>
        <About/>
        <div className=" container mx-auto">
          <Project/>
          <Contact/>
        </div>
        <Footer/>
      {/* <HitMeIcon className='z-[20] !absolute bottom-10 right-0'/> */}
    </>
      
  )
}
