import { LoginForm } from "@/components/login-form"
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react"



export default function LoginPage() {
    const {props} = usePage();
    console.log(props);
    const handleLogin = (data: { email: string; password: string }) => {
        router.post('/login', data,
            {
                onSuccess: () => {
                    console.log("Login berhasil ✅")
                },
                onError: (errors) => {
                    console.log("Login gagal ❌", errors)
                },
            }
        )
    }
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm onLogin={handleLogin} />
            </div>
        </div>
    )
}
