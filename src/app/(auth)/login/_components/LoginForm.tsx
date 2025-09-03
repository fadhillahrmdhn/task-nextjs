"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { useAuthStore } from "@/store";
import type { LoginFormValues } from "@/interfaces";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(24, { message: "Password must not exceed 24 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
  rememberMe: z.boolean(),
});

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuthStore();
  // dibawah ini merupakan nilai default untuk form login dengan cara memanggil userSchema.parse({})
  const defaultValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const onSubmit = async ({ value }: { value: LoginFormValues }) => {
    try {
      const res = await login({ value });
      toast.success("Login Successful!", {
        description: res.message,
        duration: 3000,
      });
      router.push("/dashboard");
    } catch (error) {
      toast.error("Login Failed!", {
        description: `Please check your credentials and try again.`,
        duration: 3000,
      });
      console.error(error);
      return;
    }
  };

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit,
  });

  return (
    <div>
      <Card className="max-w-sm mx-auto mt-10 shadow-xl">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="space-y-4"
          >
            {/* EMAIL FIELD */}
            <form.Field name="email">
              {(field) => (
                <div className="grid gap-1">
                  <Label className="text-left" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {Array.isArray(field.state.meta.errors)
                        ? field.state.meta.errors
                            .map((error) =>
                              typeof error === "string"
                                ? error
                                : error?.message || "Unknown error",
                            )
                            .join(", ")
                        : String(field.state.meta.errors)}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* PASSWORD FIELD */}
            <form.Field name="password">
              {(field) => (
                <div className="grid gap-1">
                  <Label className="text-left" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {Array.isArray(field.state.meta.errors)
                        ? field.state.meta.errors
                            .map((error) =>
                              typeof error === "string"
                                ? error
                                : error?.message || "Unknown error",
                            )
                            .join(", ")
                        : String(field.state.meta.errors)}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Remember Me */}
            <form.Field name="rememberMe">
              {(field) => {
                return (
                  <div className="grid gap-2">
                    <Label className="text-left">Remember Me</Label>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="rememberMe"
                          checked={field.state.value}
                          onCheckedChange={(checked) => {
                            const newValue = checked ? true : false;
                            field.handleChange(newValue);
                          }}
                        />
                      </div>
                      <Label className="text-sm" htmlFor="rememberMe">
                        Keep me logged in
                      </Label>
                    </div>
                  </div>
                );
              }}
            </form.Field>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
