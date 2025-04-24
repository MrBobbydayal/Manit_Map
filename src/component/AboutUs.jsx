import React from 'react'

const AboutUs = () => {
  return (
    <div className='justify-items-center mt-28 ' >
    <div class="w-96 rounded-2xl bg-slate-900 self-center">
        <div class="flex flex-col gap-2 p-8">
        <p class="text-center text-3xl text-gray-300 mb-4">AboutUs</p>
        <hr/>
        <p class="  text-gray-300 "><strong className='text-xl'>Project:-
            </strong>A GIS Based WebApp For Manit</p>
            <br/>

      <p class=" text-xl text-gray-300 mb-1"><strong>Contributers:-
            </strong><br/>
            Bobydayal Saket (2211101132)<br/>
            Swati Jalandhara (2211101130)<br/>
            Raj Srivastava (2211101133)</p>

            <br/>
      <p class=" text-xl text-gray-300 "><strong >Guide:-
            </strong>Dr. Priyamitra Munoth</p>
            <br/>
       <p class=" text-xl text-gray-300 "><strong >Thanks To:-
       </strong>Ms.Harshita(M Tech Scholsr)</p> <br/>
            <p class="  text-gray-300 "><strong className='text-xl'>Refrences:-
            </strong>GIS Tools,Google Earth Pro,Mapbox,Remote Sensing Data,React js,Node js,MongoDB</p>
        </div>
    </div>
</div>
  )
}

export default AboutUs
