import React from 'react'
import ManitLogo from '../assets/ManitLogo.png'
//import Mypic from '../assets/Mypic.png'
import Mp from '../assets/Mp.jpg'
import Raj from '../assets/Raj.jpg'
import Swati from '../assets/Swati.jpg'
import My from '../assets/My.jpg'
import Harshita from '../assets/Harshita.jpg'

const AboutUs = () => {
  return (
    <div className="bg-[url('https://images4.alphacoders.com/758/thumb-1920-75886.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-8">

    <div class="w-96 rounded-2xl bg-slate-900 self-center opacity-90">
        <div class="flex flex-col gap-2 p-8">
          <img src={ManitLogo} />
        <p class="text-center text-3xl text-gray-300 mb-4">AboutUs</p>
        <hr/>
        <p class="  text-gray-300 "><strong className='text-xl'>Project:-
            </strong>A GIS Based WebApp For MANIT</p>

<div className="text-xl text-gray-300 mb-1">
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<strong>Developer:</strong>
  <div className="flex items-start gap-4 mt-1">
    <img src={My} className="h-32 rounded-md" alt="Developer" />
    <p className="mt-0.5">Bobydayal Saket (B Tech 3rd year)</p>
  </div>
</div>

<div className="text-xl text-gray-300 mb-1">
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<strong>Team Members:</strong>
  <div className="flex items-start gap-4 mt-1">
    <img src={Swati} className="h-32 rounded-md" alt="Developer" />
    <p className="mt-0.5">Swati Jalandhara (B Tech 3rd year)</p>
  </div>
  <br/>
  <div className="flex items-start gap-4 mt-1">
    <img src={Raj} className="h-28 rounded-md" alt="Developer" />
    <p className="mt-0.5">Raj Srivastava (B Tech 3rd year)</p>
  </div>
</div>

<div className="text-xl text-gray-300 mb-1">
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <strong>Guide:</strong>
  <div className="flex items-start gap-4 mt-1">
    <img src={Mp} className="h-28 rounded-md" alt="Developer" />
    <p className="mt-0.5">Dr. Priyamitra Munoth (Asst. Professor)</p>
  </div>
</div>

<div className="text-xl text-gray-300 mb-1">
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <strong>Thanks To:</strong>
  <div className="flex items-start gap-4 mt-1">
    <img src={Harshita} className="h-32 rounded-md" alt="Developer" />
    <p className="mt-0.5">Ms. Harshita &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; (M Tech Scholar)</p>
  </div>
</div>
        </div>
    </div>
</div>
  )
}

export default AboutUs
