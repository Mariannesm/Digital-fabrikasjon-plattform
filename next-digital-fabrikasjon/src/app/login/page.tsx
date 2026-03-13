import LoginForm from "./LoginForm"
import Header from "@/components/ui/Header"
import MainWrapper from '@/components/templates/MainWrapper';

export default function LoginPage() {
  return (
    <>
      <Header />
      <MainWrapper>
        <div className="flex justify-center px-4 mt-10 sm:mt-16">
          <div className="w-full max-w-[420px] flex flex-col gap-4">
            <LoginForm />
          </div>
        </div>
      </MainWrapper>
    </>
  )
}