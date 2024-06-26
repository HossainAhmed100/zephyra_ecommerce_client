import { Helmet } from "react-helmet-async";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { FaPercent } from "react-icons/fa6";

function AddProductPage() {
  // Destructure useForm hook to handle form state and validation
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);
    // Add code here to handle the form data, such as sending it to the server
  };

  // List of brand names for the select input
  const brandNameList = [
    { label: "Nike", value: "Nike" },
    { label: "Puma", value: "Puma" },
    { label: "Adidas", value: "Adidas" },
    { label: "Reebok", value: "Reebok" },
    { label: "Converse", value: "Converse" },
  ];

  const discountTypes = [
    { id: 1, key: "cashDiscount", label: "Cash Discount" },
    { id: 3, key: "buyOneGetOneFree", label: "Buy One Get One Free"},
    { id: 5, key: "clearanceDiscount", label: "Clearance Discount" },
    { id: 6, key: "loyaltyDiscount", label: "Loyalty Discount" },
    { id: 7, key: "holidayDiscount", label: "Holiday Discount" },
    { id: 11, key: "studentDiscount", label: "Student Discount" },
    { id: 19, key: "limitedTimeDiscount", label: "Limited Time Discount" },
    { id: 20, key: "flashSaleDiscount", label: "Flash Sale Discount" }
  ];
  

  return (
    <section>
      {/* Set the page title using Helmet for better SEO */}
      <Helmet title='Add New Product | Admin - Dashboard | Zephyra Online Shop' />
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        
        {/* Product Image Upload Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Select Product Image</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-4">
            {/* Render multiple ProductImageSelectInput components */}
            <ProductImageSelectInput />
            <ProductImageSelectInput />
            <ProductImageSelectInput />
            <ProductImageSelectInput />
            <ProductImageSelectInput />
          </div>
        </div>
        
        {/* General Information Form Section */}
          <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>General Information</h1>
            <p className="text-xs text-gray-500">Fill in the product details below</p>
          </div>
          <div className="p-4 space-y-4">
            <Input {...register("productName", { required: true })} labelPlacement="outside" variant="faded" radius="sm" label="Product Name" placeholder="Enter product name" fullWidth />
            {errors.productName && <span>This field is required</span>}
            <div className="grid grid-cols-2 gap-4">
              <div>
              <Select {...register("brand", { required: true })} label="Brand" labelPlacement="outside" variant="faded" radius="sm" placeholder="Select a brand" fullWidth>
                {brandNameList.map((brand) => (
                  <SelectItem key={brand.value} value={brand.value}>
                    {brand.label}
                  </SelectItem>
                ))}
              </Select>
              {errors.brand && <span>This field is required</span>}
              </div>
              <div>
              <Select {...register("brand", { required: true })} label="Product Category" labelPlacement="outside" variant="faded" radius="sm" placeholder="Select a Category" fullWidth>
                {brandNameList.map((brand) => (
                  <SelectItem key={brand.value} value={brand.value}>
                    {brand.label}
                  </SelectItem>
                ))}
              </Select>
              {errors.brand && <span>This field is required</span>}
              </div>
            </div>
          </div>
          </div>
        
        {/* Pricing Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Pricing</h1>
            <p className="text-xs text-gray-500">Enter the product pricing details</p>
          </div>
          <div className="p-4 space-y-4">
            <Input
              type="number"
              label="Price"
              variant="faded" 
              placeholder="0.00"
              labelPlacement="outside"
              {...register("productPrice", { required: true })}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
            {errors.productPrice && <span>This field is required</span>}
              
            <div className="grid grid-cols-2 gap-4">
              <div>
              <Input type="number" endContent={<FaPercent />} {...register("discountPercentage", { required: true })} labelPlacement="outside" variant="faded" radius="sm" label="Discount Percentage" placeholder="0.00" fullWidth />
              {errors.discountPercentage && <span>This field is required</span>}
              </div>
              <div>
              <Select {...register("discountType", { required: true })} label="Discount Type" labelPlacement="outside" variant="faded" radius="sm" placeholder="Select a Discount Type" fullWidth>
                {discountTypes.map((discount) => (
                  <SelectItem key={discount.key} value={discount.key}>
                    {discount.label}
                  </SelectItem>
                ))}
              </Select>
              {errors.discountType && <span>This field is required</span>}
              </div>
            </div>
          </div>
        </div>
        
        {/* Inventory Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Inventory</h1>
            <p className="text-xs text-gray-500">Enter the inventory details</p>
          </div>
          <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div>
            <Input
              type="number"
              label="SKU"
              variant="faded" 
              placeholder="12345678"
              labelPlacement="outside"
              {...register("sku", { required: true })}
            />
            {errors.sku && <span>This field is required</span>}
            </div>
            <div>
            <Input
              type="number"
              label="Barcode"
              variant="faded" 
              placeholder="0943424547"
              labelPlacement="outside"
              {...register("barcode", { required: true })}
            />
            {errors.barcode && <span>This field is required</span>}
            </div>
            <div>
            <Input
              type="number"
              label="Quantity"
              variant="faded" 
              placeholder="Type product quantity"
              labelPlacement="outside"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && <span>This field is required</span>}
            </div>
              
          </div>
        </div>
        
        {/* Variation Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Variation</h1>
            <p className="text-xs text-gray-500">Enter the product variations</p>
          </div>
          <div className="p-4 space-y-4">
            {/* Placeholder for product variations inputs */}
          </div>
        </div>
        <Button type="submit" color="primary">Add Product</Button>
        </div>
      </form>
    </section>
  );
}

// Component for product image selection input
const ProductImageSelectInput = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
  );
}

export default AddProductPage;
