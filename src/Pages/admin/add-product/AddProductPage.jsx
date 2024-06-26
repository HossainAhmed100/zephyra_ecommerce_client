import { Helmet } from "react-helmet-async";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";

function AddProductPage() {
    const {register,handleSubmit,formState: { errors }, reset} = useForm();
    const onSubmit = async (data) => {
      console.log(data)
    };
    const brandNameList = [
      {label: "Nike", value: "Nike"},
      {label: "Puma", value: "Puma"},
      {label: "Adidas", value: "Adidas"},
      {label: "Reebok", value: "Reebok"},
      {label: "Converse", value: "Converse"},
    ]
  return (
    <section>
      <Helmet title='Add New Product | Admin - Dashbaord | Zephyra Online Shop'/>
      <div className="space-y-4">
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Product Image Upload</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="grid  xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-4">
            <ProductImageSelectInput />
            <ProductImageSelectInput />
            <ProductImageSelectInput />
            <ProductImageSelectInput />
            <ProductImageSelectInput />
          </div>
        </div>
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>General Information</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="p-4">
          <h1>General Information</h1>
          </div>
        </div>
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Pricing</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="p-4">
          <h1>Pricing</h1>
          </div>
        </div>
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Inventory</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="p-4">
          <h1>Inventory</h1>
          </div>
        </div>
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Variation</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="p-4">
          <h1>Variation</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductImageSelectInput = () => {
  return(
    <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <div className="mb-2 text-tiny text-gray-500">
            <p className="font-semibold">Click to upload</p>
            <p>or drag and drop</p>
          </div>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  )
}

export default AddProductPage