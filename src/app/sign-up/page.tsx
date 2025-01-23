"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate user registration logic
        // You can replace this with your actual API call for registration
        const isRegistered = true; // Example: Replace with real registration logic
        if (isRegistered) {
            router.push("/sign-in"); // Redirect to the Sign In page after successful registration
        } else {
            alert("Registration failed. Please try again."); // Handle registration failure
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Create Account</h2>
                <p className="text-center text-gray-600 mb-6">Join us for an amazing experience</p>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-pink-500 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
