import express  from express;
 import{z} from('zod');
 const validation ("middleware\validation");
 const rout =express.rout();

    import { z } from "zod"
export const signupSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  fullName: z
    .string()
    .trim()
    .min(6 "Full name must contain at least 6 caracters")
    .max(100, "Full name cannot exceed 100 characters"),

  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Username must contain at least 3 characters")
    .max(30, "Username cannot exceed 30 characters")

    ),

    password confirmation: z.string(). min(1, "password confirmstion is required"),
    

  password: z
    .string()
    .min(8, "password must contain at least 8 characters")
    .max(50, "Password cannot exceed 50 bytes"),

  gender: z.enum(["Male", "Female", "Other"], {
    message: "Gender must be Male, Female, or Other",
  }),

  address: z
    .string()
    .trim()
    .min(5, "Please enter a valid address"),

  buildingNumber: z
    .string()
    .trim()
    .min(1, "Building or flat number is required"),

  landmark1: z
    .string()
    .trim()
    .min(1, "Landmark 1 is required"),

  landmark2: z
    .string()
    .trim()
    .optional()
    .default(""),

  pincode: z
    .string()
    .trim ()
});


export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Username is required"),

  password: z
    .string()
    .min(1, "Password is required"),
});
rout.post("\login",validation (loginSchema),(req,res)=>{
    res.status(200).json({
     message:"login successfull",
     data:req.body});
     
     rout.post("\singup",validation(signupSchema),(req,res)=>{
        res.status(200).json({
            message:"singup successfull",
            date : req.body});
             module .express = rout;
             


            
        

            })


        })



    })
}