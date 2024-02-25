import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IEmailPassword } from "@/store/user/user.interface";
import { TypeLoginRegister } from "@/types/shared";
import Heading from "@/ui/Heading";
import Button from "@/ui/button/Button";
import Field from "@/ui/input/Field";
import Loader from "@/ui/loader/Loader";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Meta from "../../ui/Meta";
import { useAuthRedirect } from "./useAuthRedirect";
import { validEmail } from "./valid-email";

const Auth: FC = () => {
  useAuthRedirect()

  const {isLoading} = useAuth()

  const {login, register} = useActions()

  const [type, setType] = useState<TypeLoginRegister>('login')

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IEmailPassword>({
    mode: "onChange"
  })

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === 'login') login(data)
    else register(data)
    reset()
  }
  return (
    <Meta title="Auth">
      <section className="flex h-screen m-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto"
        >
          <Heading className="text-center mb-4">
            {type === 'login' ? 'Login' : 'Register'}
          </Heading>

          {isLoading ?
            <Loader /> :
            <>
              <Field
                {...formRegister('email', {
                  required: 'Email is required',
                  pattern: {
                    value: validEmail,
                    message: 'Please enter a valid email address'
                  }
                })}
                placeholder="Email"
                error={errors.email?.message}
              />

              <Field
                {...formRegister('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Minimum length of password is 6 symbols'
                  }
                })}
                type="password"
                placeholder="Password"
                error={errors.password?.message}
              />
              <div className="m-auto w-fit">
                <Button variant="orange">
                  {type === 'login' ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
              <div className="m-auto w-fit">
                <button
                  className="inline-block opacity-50 mt-3"
                  type="button"
                  onClick={
                    () => setType(prev => prev === 'login' ? 'register' : 'login')
                  }
                >
                  Go to {type === 'login' ? 'register' : 'login'}
                </button>
              </div>
            </>
          }
        </form>
      </section>
    </Meta>
  )
}

export default Auth