"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const adminLoginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});
type AdminLoginForm = z.infer<typeof adminLoginSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const inputCls = "w-full h-12 border border-gray-200 rounded-xl px-4 font-work-sans text-sm text-[#181D27] placeholder:text-gray-400 focus:outline-none focus:border-[#181D27] bg-white transition-colors";

export function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginForm>({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = (_data: AdminLoginForm) => {
    router.push("/admin/dashboard");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-[400px] max-w-full"
    >
      <motion.h1 variants={itemVariants} className="font-rozha text-5xl text-[#181D27] mb-8 text-center">
        Admin Panel
      </motion.h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
          <label className="font-work-sans text-sm font-bold text-[#181D27]">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input {...register("email")} type="email" placeholder="Email Address" className={inputCls} />
          {errors.email && <p className="font-work-sans text-xs text-red-500">● {errors.email.message}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
          <label className="font-work-sans text-sm font-bold text-[#181D27]">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className={`${inputCls} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#181D27] transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          {errors.password && <p className="font-work-sans text-xs text-red-500">● {errors.password.message}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-end -mt-2">
          <button type="button" className="font-work-sans font-bold text-sm text-[#181D27] hover:underline transition-all">
            Forgot Password
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-2">
          <button type="submit" className="w-full h-14 rounded-full bg-[#181D27] text-white font-work-sans font-semibold text-base hover:bg-[#181D27]/90 transition-colors">
            Log in
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
