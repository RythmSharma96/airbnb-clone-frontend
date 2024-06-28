'use client';

import { log } from "console";
import useLoginModal from "../hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {

  const router = useRouter()
  const loginModal = useLoginModal()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
        email: email,
        password: password
    }

    const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData))

    if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh);

        loginModal.close();
        console.log("logged in..")
        router.push('/')
    } else {
        setErrors(response.non_field_errors);
    }
}

    const content = (
        <>
        {/* <h2 className="mb-6 text-2xl">Welcome to Django AirBnb, please log in.</h2> */}
        <form action={submitLogin} className="space-y-4">
            <input onChange={(e) => setEmail(e.target.value)} placeholder="your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="your password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"/>
            
            
            {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}

            <CustomButton label="Submit" onClick={submitLogin}/>
        </form>
        </>
    )

  return (
    <Modal isOpen={loginModal.isOpen}
    close={loginModal.close}
    label="Log in"
    content={content}
    />
  )
}

export default LoginModal;