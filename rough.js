// {menuItems?.map((item, index) => (
//   <div
//     className='flex justify-between mb-6 p-4 rounded-md border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s]'
//     key={index}
//   >
//     <div className='w-[calc(100%_-_140px)]'>
//       <div
//         className={
//           item?.card?.info?.isVeg
//             ? 'flex justify-center items-center w-4 h-4 border-2 border-green-600'
//             : 'flex justify-center items-center w-4 h-4 border-2 border-red-600'
//         }
//       >
//         <span
//           className={
//             item?.card?.info?.isVeg
//               ? 'w-2 h-2 rounded-full bg-green-600'
//               : 'w-2 h-2 rounded-full bg-red-600'
//           }
//         ></span>
//       </div>
//       <div className='mt-2 font-bold text-base'>
//         {item?.card?.info?.name}
//       </div>
//       <div className='mt-2 font-mono'>
//         ₹
//         {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
//           100}
//       </div>
//       <div className='mt-4 text-sm'>
//         {item?.card?.info?.description}
//       </div>
//     </div>
//     <div className='ml-2 w-[118px] h-[120px] relative'>
//       <div className='w-[118px] h-24'>
//         {item?.card?.info?.imageId === '' ? (
//           <img
//             loading='lazy'
//             className='w-[118px] h-24 rounded-lg object-cover'
//             src='https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg'
//           />
//         ) : (
//           <img
//             loading='lazy'
//             className='w-[118px] h-24 rounded-lg object-cover'
//             src={MENU_IMG_CDN_URL + item?.card?.info?.imageId}
//           />
//         )}
//         </div>
