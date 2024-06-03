import { Button, Card, CardBody, Checkbox, Input } from "@nextui-org/react";
import { Helmet } from 'react-helmet-async';    
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { BdFlags } from "../../assets/icons/BdFlags";

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    loading
  ] = useCreateUserWithEmailAndPassword(auth);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log("🚀 ~ Register ~ errors:", errors)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    try {
      const result = await createUserWithEmailAndPassword(data.email, data.password);
      if (result) {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Account Successfully Created!",
        });
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
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
        {errors.fullName && <span className="text-red-500 text-sm">{errors.email.message}</span>}
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
          {...register("phone", { required: "Please enter your Phone"})}
          color={errors.phone ? "danger" : "default"}
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.email.message}</span>}
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
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
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
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        <div className="flex items-center justify-between pb-3">
          <Checkbox size="sm" defaultChecked>Accept terms and conditions</Checkbox>
        </div>
        <Button isLoading={loading} type="submit" color="primary">Register now</Button>
      </form> 
      <div className="flex flex-col items-center justify-center space-y-2 my-6">
        <div className="flex items-center justify-center gap-1">
          <p className="text-[12px]">Already have an account?</p> 
          <Link to="/login" className="text-sm text-blue-500 font-medium">
            Login now!
          </Link>
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
