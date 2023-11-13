"use client";

import Input from "../../components/input/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant == "REGISTER") {
      //Axios Register
    }
    if (variant == "LOGIN") {
      // NextAuth Signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // Next Auth Social Signin
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input errors={errors} id="name" register={register} label="Name" />
          )}
          <Input
            errors={errors}
            register={register}
            id="email"
            type="email"
            label="Email Address"
          />
              <Input
            errors={errors}
            register={register}
            id="password"
            type="password"
            label="Password"
          />
          <div>
            <Button>Test</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
