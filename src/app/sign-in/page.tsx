"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const router = useRouter();

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate authentication logic
        // You can replace this with your actual API call for authentication
        const isAuthenticated = true; // Example: Replace with real authentication logic
        if (isAuthenticated) {
            router.push("/"); // Redirect to the Home page on successful sign-in
        } else {
            alert("Invalid credentials. Please try again."); // Handle login failure
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-500">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don&apos;t have an account?{" "}
                    <Link href="/sign-up" className="text-orange-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
