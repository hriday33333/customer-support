import imgVector1 from '../../assets/vector1.png';
const Banner = () => {
  return (
    <div className=' grid grid-cols-2   md:w-[1300px] mx-auto gap-8 my-[50px]'>


      <div className=' relative rounded-md p-7 text-white h-[200px] bg-gradient-to-r from-[#6C35E5] to-[#9156EF] flex items-center flex-col justify-center'>
        <h2 className=' font-bold text-[30px]'>In-Progress</h2>
        <p className='  font-semibold text-[25px]'>0</p>
     
      <div className=' absolute top-0 left-0 h-auto  flex justify-between items-center '>
         <img  className=' h-[200px]' src={imgVector1} alt="" />
         <div className=' absolute top-0 left-0 h-auto'>
          <img className=' h-[200px]' src={imgVector1} alt="" />
         </div>
      </div>
    </div>





     <div className=' relative rounded-md p-7 text-white h-[200px] bg-gradient-to-r from-[#47C36B] to-[#01827A] flex items-center flex-col justify-center'>
        <h2 className=' font-bold text-[30px]'>Resolved</h2>
        <p className='  font-semibold text-[25px]'>0</p>
     
      <div className=' absolute top-0 left-0 h-auto  flex justify-between items-center '>
         <img  className=' h-[200px]' src={imgVector1} alt="" />
         <div className=' absolute top-0 left-0 h-auto'>
          <img className=' h-[200px]' src={imgVector1} alt="" />
         </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
