'use client'

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { supabase }  from '@/supabase/supabase'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ProfiloImgs from '@/components/Dashboard/ProfiloImgs'
import { getList } from '@/app/hooks/useGetUser'


import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { BsXLg } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './page.sass'
import axios from 'axios'

const ProfiloView = () => {
  const params = useParams();
  const router = useRouter();
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imgs, setImgs] = useState<string[]>([]);
  const [bigimg, setBigImg] = useState('');
  const [openImg, setOpenImg] = useState(false);
  const [alllist, getAllList] = useState<any>([]);
  const [openallList, setOpenAllList] = useState(false);
  const tagInput = useRef(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState :EditorState) => {
    setEditorState(newEditorState);
    const content = editorState.getCurrentContent();
    setValue('description', draftToHtml(convertToRaw(content)));
  };

  const {
    register, handleSubmit, watch, formState: {errors},
    reset, setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      img: [],
      title: '',
      description: '',
      tag: [],
    }
  });
  const tag = watch('tag');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getList();
      getAllList(data);
    };
    fetchData();
    setValue('img', imgs);
  }, [imgs]);
  useEffect(() => {
    setId(params.id);
    if (params.id === 'create') {
      console.log('create');
    } else {
      axios.post('/api/dashboard/profileId', { id :params.id})
        .then((res) => {
          console.log(res);
          setValue('img', res.data[0].img)
          setImgs(res.data[0].img);
          setBigImg(res.data[0].img[0]);
          setValue('title', res.data[0].title)
          setValue('description', res.data[0].description)
          setValue('tag', res.data[0].tag)
          const contentBlocks = htmlToDraft(res.data[0].description);
          const contentStateFromHtml = ContentState.createFromBlockArray(contentBlocks.contentBlocks);
          const newEditorState = EditorState.createWithContent(contentStateFromHtml);
          setEditorState(newEditorState);
        })
    }
  }, [params.id])

  const delPr = () => {
    axios.delete(`/api/dashboard/profild/${id}`)
      .then((res) => {
        console.log(res);
        router.push('/dashboard/profile/');
      })
  }

  const fileInputHandler = () => {
    const file = document.getElementById('file');
    file?.click();
  }
  const onpeBigImage = () => {
    setOpenImg(!openImg);
  }
  const onFileChange = async (e:ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files)  {
      console.log('error');
      return null
    }
    const file = e.target.files[0];
    if (file.size === 0) {
      console.log('error');
      return null
    }
    await supabase.storage.from('productImg')
      .upload(`productImg_${Date.now()}`, file)
      .then(({data}) => {
        // console.log(data);
        setImgs([...imgs, `https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/productImg/${data?.path}`]);
        setBigImg(`https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/productImg/${data?.path}`);
        // img
      }).catch(({error}) => {
        console.log(error);
        return
      })
  } 
  const onSubmit: SubmitHandler<FieldValues> = async (list , event : any) => {
    event.preventDefault();
    if (id === 'create') {
      axios.post('/api/dashboard/profile', list)
        .then((res) => {
          reset();
          setImgs([]);
          setEditorState(EditorState.createEmpty());
          router.push('/dashboard/profile/');
        })
    } else {
      const data = {
        id,
        ...list,
      };
      axios.put('/api/dashboard/profile', data)
        .then((res) => {
          router.push('/dashboard/profile/');
        })
    }
  }
  const toggleImgae = (link : string) => {
    if (imgs.includes(link)) {
      const data = imgs.filter((item2) => item2 !== link)
      setImgs(data);
      setBigImg(data[0]);
    } else {
      setImgs([...imgs, link]);
      setBigImg(link);
    }
  }
  const tagPush = () => {
    const tagInput2 = tagInput.current as any;
    setValue('tag', [...tag, tagInput2?.value]);
    tagInput2.value = '';
  }
  const delTag = (item : any) => {
    const vlaue = tag.filter((item2: any) => item2 !== item);
    console.log(vlaue);
    setValue('tag', vlaue);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div className=' flex justify-end w-full relative gap-2 z-50'>
        {
          id !== 'create' ? (
          <>
            <Button type='button' onClick={() => setOpenAllList(!openallList)} className=' bg-neutral-50 border border-neutral-400 text-neutral-400 font-normal'>圖庫 </Button>  
            <Button type='button' onClick={delPr} className=' bg-rose-700 font-normal'> 刪除 </Button>
          </>
          )
          : (<Button type='button' onClick={() => setOpenAllList(!openallList)} className=' bg-neutral-50 border border-neutral-400 text-neutral-400 font-normal'>圖庫 </Button>)

        }
        <div className={`absolute top-10 w-full h-[400px] bg-neutral-400 flex flex-row overflow-y-auto flex-wrap content-start gap-2 p-3 ${openallList ? '' : 'hidden'}`}>
          {
            alllist.map((item: any, key: React.Key) => {
              const hasBorder = imgs.some((imgItem: string) => imgItem.includes(item.name));
              const link = `https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/productImg/${item.name}`
              return (
                <div key={key} className={`w-[160px] h-[90px] cursor-pointer ${hasBorder ? 'border-4 box-border border-green-600' : ''}`}
                  onClick={() => toggleImgae(link)}>
                  <Image src={link} alt=''
                    width={1000} height={1000}  className='h-[100%]'/>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={`${imgs.length <= 0 ? 'flex' : 'hidden'}`}>
        <AiOutlinePlus size={36} className='cursor-pointer' onClick={fileInputHandler}/>
      </div>
      <div className={` ${imgs.length >= 1 ? 'flex' : 'hidden'}
        flex-col sm:flex-row w-full h-[500px] sm:h-[400px] md:h-auto max-h-[600px]`}>
        <div className='relative flex-[2] bg-white'>
          <Image src={bigimg || '/testImg'} alt='' width={1000} height={1000} onClick={onpeBigImage}
          className='w-[100%] h-[100%] object-cover cursor-pointer'/>
          <button type='button' className='absolute bottom-2 right-2 w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center'>
            <AiOutlinePlus size={36} onClick={fileInputHandler}/>
            <input type="file" className='hidden' id='file' onChange={onFileChange}/>
          </button>
        </div>
        <div className='grid grid-cols-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          flex-1 gap-2 content-start bg-neutral-300 p-4 overflow-y-auto'>
          {
            imgs.map((item,key) => <ProfiloImgs key={key} img={item} onClick={() => setBigImg(item)} dleonClick={() => {
              if (imgs.includes(item)) {
                const data = imgs.filter((item2) => item2 !== item)
                setImgs(data);
                setBigImg(data[0]);
              }
            }}/>)
          }
        </div>
      </div>
      <Input id='title' label='標題' disabled={isLoading} register={register} errors={errors} required/>
      <Editor editorState={editorState} wrapperClassName="demo-wrapper" editorClassName="demo-editor" onEditorStateChange={onEditorStateChange}/>
      <div>
        <p>tag</p>
        <div>
          <input type="text" className='p-1' ref={tagInput}/>
          <Button type='button' className=' bg-neutral-50 border border-neutral-400 text-neutral-400 font-normal'
            onClick={tagPush}
          >新增</Button>
        </div>
        <div className='flex gap-2 flex-wrap m-3'>
        {
          tag.map((item : any, key:React.Key) => {
            return (
              <div key={key} className=' py-2 px-4 relative border border-neutral-400 rounded-lg'>
                <div className='absolute -top-2 -right-2 cursor-pointer flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full'>
                  <BsXLg size={24} className='  text-black ' onClick={() => delTag(item)}/>
                </div>
                <p>{item}</p>
              </div>
            )
          })
        }
        </div>
      </div>
      <Button type='submit'>送出</Button>
      <div className={`fixed top-0 left-0 w-full h-full bg-neutral-700/40 flex z-50 justify-center items-center ${openImg ? '' : 'hidden'}`}>
        <div className='absolute top-4 right-4 cursor-pointer flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full'>
          <BsXLg size={36} className='  text-black ' onClick={onpeBigImage}/>
        </div>
        <Image src={bigimg || '/'} alt='' width={1920} height={1080} className=' xl:w-[1280px] xl:h-[720px] md:w-[800px] md:h-[540px]'/>
      </div>
    </form>
  )
}

export default ProfiloView