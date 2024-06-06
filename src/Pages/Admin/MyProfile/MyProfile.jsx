import { Avatar, Button, Input } from "@nextui-org/react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";

export default function MyProfile() {
  const [user] = useAuthState(auth);
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-500 py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
          <Avatar isBordered as="button" className="transition-transform" color="default" 
                  name={user?.displayName} size="sm"
                  src={user?.photoURL}
                />
            <div className="text-white">
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>
          <Button className="text-white hover:bg-[#4f46e5]" variant="ghost">
            <PencilIcon className="h-5 w-5" />
            <span className="sr-only">Edit Profile</span>
          </Button>
        </div>
        <form className="p-6 flex flex-col items-start justify-center gap-4">
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Enter your name"
              variant="bordered"
            />
          <div className="space-y-2">
            <span htmlFor="photo">Photo</span>
            <div className="flex items-center gap-4">
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md" />
              <Button startContent={<UploadIcon className="mr-2 h-4 w-4" />} variant="bordered">
                Upload
              </Button>
            </div>
          </div>
          <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              variant="bordered"
            />
          <Input
              type="password"
              label="Password"
              labelPlacement="outside"
              placeholder="Enter new password"
              variant="bordered"
            />
          <Button className="w-full" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  )
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
