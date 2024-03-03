'use client'
import Image from 'next/image';
import icon from "../../public/assets/images/illustration-sign-up-desktop.svg";
import iconList from "../../public/assets/images/icon-list.svg"
import successIcon from "../../public/assets/images/icon-success.svg"
import { FormEvent, useState } from 'react';
export default function SignUp() {


    const [state, setState] = useState<{ validation: boolean, completed: boolean, email: string }>({ validation: true, completed: false, email: '' })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        let emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
        let email = String(formData.get("emailInput"))
        if (!emailRegex.test(email)) {
            setState({ validation: false, completed: false, email: '' })
        } else {
            setState({ validation: true, completed: true, email })
        }
    }

    return state.completed ? <div className='h-full md:h-auto w-full md:w-96 p-10 bg-white md:rounded-3xl relative' >
        <div className='absolute md:relative top-1/4'>
            <Image
                priority
                height={70}
                src={successIcon}
                alt="icon"
            />
            <h1 className='text-5xl text-[#202441] font-[Roboto-Bold] my-3'>Thanks for subscribing!</h1>
            <p className='font-[Roboto-Regular] w-5/6 md:w-full'>A confirmation email has been sent to <span className='font-semibold'>{state.email}</span>. Please open it and click the button inside to confirm your subscribtion.</p>
        </div>
        <button onClick={() => setState({ validation: true, completed: false, email: '' })} className='absolute md:relative bottom-1/3 md:left-0 w-4/5 md:w-full h-14 mt-4 bg-[#232742] rounded-md text-center text-white font-semibold'>Dismiss message</button>
    </div> : (
        <div className="w-full md:w-auto h-full md:h-auto md:p-4 bg-white md:rounded-3xl md:flex md:justify-around md:flex-row-reverse">
            <Image
                priority
                className='w-full md:w-auto h-1/2'
                src={icon}
                alt="icon"
            />
            <div className='md:w-3/5 p-6 md:p-12'>
                <h1 className='my-5 text-5xl text-[#202441] font-[Roboto-Bold] font-bold'>Stay Updated! </h1>
                <p className='my-3 font-[Roboto-Regular]'>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className='font-[Roboto-Regular]'>
                    <li className='flex items-center my-2 '><Image
                        className='mr-3'
                        priority
                        height={20}
                        src={iconList}
                        alt="iconList"
                    /> Product discovery and building what matters</li>
                    <li className='flex items-center my-2'><Image
                        className='mr-3'
                        priority
                        height={20}
                        src={iconList}
                        alt="iconList"
                    /> Measuring the ensure updates are a success</li>
                    <li className='flex items-center my-2'><Image
                        className='mr-3'
                        priority
                        height={20}
                        src={iconList}
                        alt="iconList"
                    /> And much more!</li>
                </ul>
                <form onSubmit={handleSubmit} className='mt-10'>
                    <div className='flex justify-between items-center mb-3 text-sm'><p className='font-bold'>Email Adress:</p> {!state.validation && <span className='text-red-500 my-0 py-0'>Valid Mail Required</span>}</div>
                    <input style={{ backgroundColor: state.validation ? '#FFFFFF' : '#FFE8E6', color: state.validation ? 'black' : '#DA8B8D' }} className='w-full rounded-md border border-gray-500 p-3 focus:border-gray-500' placeholder='email@company.com' type="input" id="emailInput" name="emailInput" />
                    <button className='w-full h-14 mt-4 bg-[#232742] rounded-md text-center text-white font-semibold'>Subscribe to monthly newsletter</button>
                </form>
            </div>
        </div>
    )
}

