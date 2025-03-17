
'use client'

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userInfo: FieldValues) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
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