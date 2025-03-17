/* eslint-disable @typescript-eslint/no-explicit-any */

'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userInfo: FieldValues) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      });
      const result = await res.json()
      const storeCookies = await cookies()
      if (result.success) {
        storeCookies.set("accessToken", result.data.accessToken)
      }
      return result
    }
    catch (err: any) {
      return Error(err)
    }
  }


  export const loginUser = async (userInfo: FieldValues) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      });
  
      const result = await res.json()
      const storeCookies = await cookies()
      if (result.success) {
        storeCookies.set("accessToken", result.data.accessToken)
      }
      return result
    }
    catch (err: any) {
      return Error(err)
    }
  }


  export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")!
    let decodeData = null
  
    if (accessToken) {
      decodeData = await jwtDecode(accessToken)
      return decodeData
    }
    else {
      return null
    }
  }