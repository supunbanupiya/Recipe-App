import React from 'react';
import imgg from '../assets/imgg.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Navbar() {
  return (
    <div>
<nav class="bg-white p-4 shadow-sm">
  <div class="flex items-center justify-between">
  
    <div class="flex-shrink-0 lg:ml-[260px] ">
      <img class="h-8" src={imgg} alt="Logo"/>
    </div>
  
    <div class="flex items-center justify-center flex-grow"> 
  <ul class="flex space-x-4">
  <li><a href="dashboard" class="text-primary hover:text-black font-bold text-sm">HOME</a></li>
  <li><a href="/favourites" class="text-gray hover:text-black active:text-gray-600 text-sm">FAVOURITE</a></li>
  </ul>
</div>

<div className='mr-6'>
<ExitToAppIcon/>
</div>

  </div>
</nav>


    </div>
  )
}

export default Navbar