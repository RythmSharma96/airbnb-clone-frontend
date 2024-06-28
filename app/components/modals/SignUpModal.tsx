'use client';

import { log } from "console";
import useSignUpModal from "../hooks/useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignUpModal = () => {
    const router = useRouter()
    const signUpModal = useSignUpModal()
    const [errors, setErrors] =  useState<string[]>([])
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const submitSignup =async () => {
      const formData = {
        email: email,
        password1: password1,
        password2: password2
      } 

      const response = await apiService.postWithoutToken('api/auth/register/', JSON.stringify(formData))

      if(response.access){
        handleLogin(response.user.pk, response.access, response.refresh);

        signUpModal.close();

        router.push('/')
      } else {
          const tmpErrors: string[] = Object.values(response).map((error : any) => {
          return error;
        })

        setErrors(tmpErrors)
      }
    }

    const content = (
        <>
        {/* <h2 className="mb-6 text-2xl">Welcome to Django AirBnb, please log in.</h2> */}
        <form className="space-y-4">
            <input onChange={(e) => setEmail(e.target.value)} placeholder="your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
            <input onChange={(e) => setPassword1(e.target.value)} placeholder="your password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
            <input onChange={(e) => setPassword2(e.target.value)} placeholder="repeat password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
            
            {errors.map((error, index) => { return (
                <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                  {error}
                </div>
            )
            })}
           
            <CustomButton label="Submit" onClick={submitSignup}/>
        </form>
        </>
    )

  return (
    <Modal isOpen={signUpModal.isOpen}
    close={signUpModal.close}
    label="Log in"
    content={content}
    />
  )
}

export default SignUpModal;