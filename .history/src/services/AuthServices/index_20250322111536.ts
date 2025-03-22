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
      storeCookies.set("token", result?.data?.token)
    }
    return result
  }
  catch (err: any) {
    return Error(err)
  }
}


export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    console.log(result);

    if (result?.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
      console.log("AccessToken", result?.data?.accessToken);
      (await cookies()).set("refreshToken", result?.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
  // export const loginUser = async (userInfo: FieldValues) => {
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(userInfo)
  //     });
  
  //     const result = await res.json()
  //     const storeCookies = await cookies()
  //     if (result.success) {
  //       storeCookies.set("accessToken", result.data.accessToken)
  //     }
  //     return result
  //   }
  //   catch (err: any) {
  //     return Error(err)
  //   }
  // }


  // export const getCurrentUser = async () => {
  //   const accessToken = (await cookies()).get("accessToken")?.value
  //   let decodeData = null
  
  //   if (accessToken) {
  //     decodeData = await jwtDecode(accessToken)
  //     return decodeData
  //   }
  //   else {
  //     return null
  //   }
  // }


  export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")!.value;
    console.log("AccessToken", accessToken);
    let decodedData = null;
  
    if (accessToken) {
      decodedData = await jwtDecode(accessToken);
      return decodedData;
    } else {
      return null;
    }
   
  };
 
  
  
  export const logout = async () => {
    (await cookies()).delete("accessToken");}


    export const getNewToken = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: (await cookies()).get("refreshToken")!.value,
            },
          }
        );
    
        return res.json();
      } catch (error: any) {
        return Error(error);
      }
    };