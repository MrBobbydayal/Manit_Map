import React from 'react'

export const Card = () => {
  return (
    <div>
<div
  class="relative flex justify-center h-[300px] w-[160px] border border-4 border-black rounded-2xl bg-gray-50"
  style="box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218)"
>
  <span
    class="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"
  ></span>

  <span
    class="absolute -right-2 top-14 border border-4 border-black h-7 rounded-md"
  ></span>
  <span
    class="absolute -right-2 bottom-36 border border-4 border-black h-10 rounded-md"
  ></span>
</div>
    </div>
  )
}
