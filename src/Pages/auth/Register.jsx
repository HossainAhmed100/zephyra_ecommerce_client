import { Button, Card, CardBody, Checkbox, Input, Link } from "@nextui-org/react";
import { Helmet } from 'react-helmet-async';    
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { BdFlags } from "../../assets/icons/BdFlags";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
// Hook to create a user with email and password using Firebase Authentication
const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth);

// State to manage the visibility of a UI component (e.g., password visibility toggle)
const [isVisible, setIsVisible] = useState(false);

// Function to toggle the (password visibility ) state
const toggleVisibility = () => setIsVisible(!isVisible);

// Custom hook to get an instance of Axios for making HTTP requests
const axiosPublic = useAxiosPublic();

// Hook to manage form state, validation, and submission handling
const { register, handleSubmit, formState: { errors } } = useForm();

// Hook to navigate programmatically to different routes
const navigate = useNavigate();

// Hook to get the current location object, which includes state and pathname
const location = useLocation();

// Get the 'from' pathname from the location state or default to "/"
const from = location.state?.from?.pathname || "/";


const onSubmit = async (data) => {
  // Log the form data for debugging purposes
  console.log("🚀 ~ onSubmit ~ data:", data);

  // Prepare the user data to be sent to the backend
  const userData = {
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    photoUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  };

  try {
    // Create a user with Firebase Authentication
    const result = await createUserWithEmailAndPassword(data.email, data.password);
    
    if (result) {
      // Log the result user information for debugging purposes
      console.log(result.user);

      // Try to save the user data to the backend
      try {
        await axiosPublic.post("/users", userData);
        
        // Show a success message upon successful registration and data saving
        Swal.fire({
          icon: "success",
          title: "Account Successfully Created!",
        });
        
        // Redirect the user to another page (specified by the 'from' variable)
        navigate(from, { replace: true });
      } catch (axiosError) {
        // Log any errors that occur during the Axios request
        console.error('Axios error:', axiosError);
        
        // Show an error message if there is an issue with the backend request
        Swal.fire({
          icon: "error",
          title: "Backend Error",
          text: axiosError.message,
        });
      }
    }
  } catch (error) {
    // Log any errors that occur during the Firebase Authentication process
    console.error('Firebase error:', error);
    
    // Show an error message if there is an issue with user registration
    Swal.fire({
      icon: "error",
      title: "Registration Error",
      text: error.message,
    });
  }
};
  
return (
  <section className="">
  <Helmet title='Register now | Mayer Doa Inventory'/>
  <div className="flex items-center justify-center min-h-screen">
  <div>
  <Card className="w-[350px] shadow p-4">
  <CardBody>
  <form onSubmit={handleSubmit(onSubmit)} className="flex min-w-full flex-col mb-6 md:mb-0 gap-4">
    <div>
      <h3 className="font-bold text-center text-2xl">SIGN UP</h3>
    </div>
    <Input 
      radius="sm" 
      size={"md"}
      type="text" 
      name="fullName"
      label="Full Name" 
      className="w-full"
      variant="bordered" 
      labelPlacement="outside" 
      placeholder="Type your Full Name" 
      {...register("fullName", { required: "Please enter your Name"})}
      color={errors.fullName ? "danger" : "default"}
    />
    {errors.fullName && <span className="text-blue-500 text-sm">{errors.email.message}</span>}
    <Input
      startContent={
        <div className="border-r-2 pr-2 flex items-center justify-start gap-1"><BdFlags width="20" height="20"/> <span className="text-[14px] font-medium text-gray-600">+880</span></div>
      }
      radius="sm" 
      size={"md"}
      type="tel" 
      name="phone"
      label="Phone" 
      className="w-full"
      variant="bordered" 
      labelPlacement="outside" 
      placeholder="018-0000-0000" 
      {...register("phone", { required: "Please enter your Phone", pattern: {
        value: /^[0-9]{11}$/,
        message: "Phone number must be at least 11 digits"
      }})}
      color={errors.phone ? "danger" : "default"}
    />
    {errors.phone && <span className="text-blue-500 text-sm">{errors.phone.message}</span>}
    <Input 
      radius="sm" 
      size={"md"}
      type="email" 
      name="email"
      label="Email" 
      className="w-full"
      variant="bordered" 
      labelPlacement="outside" 
      placeholder="Type Your Email" 
      {...register("email", { required: "Please enter your email", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" } })}
      color={errors.email ? "danger" : "default"}
    />
    {errors.email && <span className="text-blue-500 text-sm">{errors.email.message}</span>}
    <Input
      radius="sm" 
      size={"md"}
      label="Password"
      name="password"
      labelPlacement="outside"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (<HiEyeOff />) : (<HiEye />)}
        </button>
      }
      className="w-full"
      type={isVisible ? "text" : "password"}
      {...register("password", { required: "Please enter a password", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
      color={errors.password ? "danger" : "default"}
    />
    {errors.password && <span className="text-blue-500 text-sm">{errors.password.message}</span>}
    <div className="flex items-center justify-between pb-3">
      <Checkbox size="sm" defaultChecked>Accept terms and conditions</Checkbox>
    </div>
    <Button isLoading={loading} type="submit" color="primary">Register now</Button>
  </form> 
  <div className="flex flex-col items-center justify-center space-y-2 my-6">
    <div className="flex items-center justify-center gap-1">
      <p className="text-[12px]">Already have an account?</p> 
      <Link href="/login" color="primary">Login now!</Link>
    </div>
  </div>
  </CardBody>
  </Card>
  </div>
  </div>
  </section>
);
}

export default Register;
