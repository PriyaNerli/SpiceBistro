import AuthForm from '@/components/AuthForm';

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <AuthForm />
    </div>
  );
}
