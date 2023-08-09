// import React from 'react'

// const ProfileImage = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getList();
//       getAllList(data);
//     };
//     fetchData();
//   }, [imgs]);
//   const fileInputHandler = () => {
//     const file = document.getElementById('file');
//     file?.click();
//   }
//   const onpeBigImage = () => {
//     setOpenImg(!openImg);
//   }
//   const onFileChange = async (e:ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files)  {
//       console.log('error');
//       return null
//     }
//     const file = e.target.files[0];
//     await supabase.storage.from('productImg')
//       .upload(`productImg_${Date.now()}`, file)
//       .then(({data}) => {
//         // console.log(data);
//         setImgs([...imgs, `https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/productImg/${data?.path}`]);
//         setBigImg(`https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/productImg/${data?.path}`);
//         // img
//       }).catch(({error}) => {
//         console.log(error);
//         return
//       })
//   }
//   const toggleImgae = (link : string) => {
//     if (imgs.includes(link)) {
//       const data = imgs.filter((item2) => item2 !== link)
//       setImgs(data);
//       setBigImg(data[0]);
//     } else {
//       setImgs([...imgs, link]);
//       setBigImg(link);
//     }
//   }
//   return (
//     <div className='flex flex-col' >
//       <div className=' flex justify-end w-full relative z-50'>
//         <Button type='button' onClick={() => setOpenAllList(!openallList)} className=' bg-neutral-50 border border-neutral-400 text-neutral-400 font-normal'>圖庫 </Button>
//         <div className={`absolute top-10 w-full h-[400px] bg-neutral-400 flex flex-row overflow-y-auto flex-wrap content-start gap-2 p-3 ${openallList ? '' : 'hidden'}`}>
//           {
//             alllist.map((item: any) => {
//               const hasBorder = imgs.some((imgItem: string) => imgItem.includes(item.name));
//               const link = `https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/productImg/${item.name}`
//               return (
//                 <div className={`w-[160px] h-[90px] cursor-pointer ${hasBorder ? 'border-4 box-border border-green-600' : ''}`}
//                   onClick={() => toggleImgae(link)}>
//                   <Image src={link} alt=''
//                     width={1000} height={1000}  className='h-[100%]'/>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//       <div className={`${imgs.length <= 0 ? 'flex' : 'hidden'}`}>
//         <AiOutlinePlus size={36} className='cursor-pointer' onClick={fileInputHandler}/>
//       </div>
//       <div className={` ${imgs.length >= 1 ? 'flex' : 'hidden'}
//         flex-col sm:flex-row w-full h-[500px] sm:h-[400px] md:h-auto max-h-[600px]`}>
//         <div className='relative flex-[2] bg-white'>
//           <Image src={bigimg || '/testImg'} alt='' width={1000} height={1000} onClick={onpeBigImage}
//           className='w-[100%] h-[100%] object-cover cursor-pointer'/>
//           <button type='button' className='absolute bottom-2 right-2 w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center'>
//             <AiOutlinePlus size={36} onClick={fileInputHandler}/>
//             <input type="file" className='hidden' id='file' onChange={onFileChange}/>
//           </button>
//         </div>
//         <div className='grid grid-cols-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
//           flex-1 gap-2 content-start bg-neutral-300 p-4 overflow-y-auto'>
//           {
//             imgs.map((item,key) => <ProfiloImgs key={key} img={item} onClick={() => setBigImg(item)} dleonClick={() => {
//               if (imgs.includes(item)) {
//                 const data = imgs.filter((item2) => item2 !== item)
//                 setImgs(data);
//                 setBigImg(data[0]);
//               }
//             }}/>)
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileImage