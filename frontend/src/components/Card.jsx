import React from 'react'
import { BookmarkIcon} from '@heroicons/react/24/outline'

const Card = () => {
  return (
    <div class="flex w-72 flex-col rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-border text-white hover:shadow-md hover:shadow-white">
      <img src="https://source.unsplash.com/random/200x100" alt="" class=" mx-2 -mt-6 h-40 overflow-hidden rounded-xl" />
      <div class="py-6 px-4 flex items-center justify-between">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Heading
        </h5>
        <BookmarkIcon className='h-6' />
      </div>
    </div>
  )
}

export default Card

// "use client";

// // import Image from "next/image";
// import React from "react";
// import { BookmarkIcon} from '@heroicons/react/24/outline'
// import { CardBody, CardContainer, CardItem } from "./../components/ui/3d-card";

// export default function ThreeDCardDemo() {
//   return (
//     <CardContainer className="inter-var z-40">
//       <CardBody className="flex h-60 w-72 flex-col rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-border text-white hover:shadow-md hover:shadow-white">
//           <img
//             src="https://source.unsplash.com/random/200x100"
//             className=" mx-2 -mt-6 h-40 overflow-hidden rounded-xl"
//             alt="thumbnail"
//           />
//         <div className="py-6 px-4 flex items-center justify-between">
//           <CardItem
//             translateZ={20}
//             className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
//           >
//             Heading
//           </CardItem>
//           <CardItem
//             translateZ={20}
//           >
//             <BookmarkIcon className='h-6' />
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }
