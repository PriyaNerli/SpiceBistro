"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, UserPlus } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const registerSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function AuthForm() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const formSchema = isRegisterMode ? registerSchema : loginSchema;

  // CORRECTED LINE: Define FormValues as a union type
  type FormValues = RegisterFormValues | LoginFormValues;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // Ensure default values cover all possible fields for the union type,
    // and provide sensible defaults for fields not present in a specific mode.
    defaultValues: isRegisterMode
      ? { fullName: "", email: "", password: "" }
      : { fullName: "", email: "", password: "" }, // Include fullName for consistency in defaultValues
  });

  // Reset form when switching modes
  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    // When switching, reset with appropriate default values for the NEW mode
    form.reset(
        !isRegisterMode // if currently in register mode (true), new mode is login (false)
            ? { email: "", password: "" } // defaults for login mode
            : { fullName: "", email: "", password: "" } // defaults for register mode
    );
  };


  function onSubmit(values: FormValues) {
    // Handle form submission (e.g., API call)
    console.log(values);
    // For now, just log. In a real app, you'd call an auth API.
    alert(`Form submitted in ${isRegisterMode ? 'Register' : 'Login'} mode with data: ${JSON.stringify(values)}`);
  }

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
          {isRegisterMode ? <UserPlus size={32} className="text-primary" /> : <LogIn size={32} className="text-primary" />}
        </div>
        <CardTitle className="text-3xl font-headline">
          {isRegisterMode ? 'Create an Account' : 'Welcome Back!'}
        </CardTitle>
        <CardDescription>
          {isRegisterMode ? 'Join us to explore amazing Indian cuisine.' : 'Sign in to continue to Spice Route Bistro.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {isRegisterMode && (
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
              {isRegisterMode ? 'Register' : 'Login'}
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center">
          <Button variant="link" onClick={toggleMode} className="text-primary hover:underline">
            {isRegisterMode ? 'Already have an account? Login' : "Don't have an account? Register"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}