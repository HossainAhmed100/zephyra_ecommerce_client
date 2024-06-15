import { useForm } from "react-hook-form";
import { Avatar, Button, Divider, Input } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase/firebase.config";
import { BdFlags } from "../../../assets/icons/BdFlags";
import { FaCamera, FaTrash  } from "react-icons/fa";

export default function MyProfile() {
  // const [user] = useAuthState(auth);
  // Hook to manage form state, validation, and submission handling
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div className="w-full">
      <Helmet title='My Profile | Zephyra Online Shop'/>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}
