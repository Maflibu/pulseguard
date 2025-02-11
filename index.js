import React from "react";
import { Button } from "@/components/ui/button";

export default function PulseGuardLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Protect Your Business with AI-Powered Cybersecurity</h1>
        <p className="mt-4 text-lg">Affordable security solutions to safeguard SMEs from phishing, data breaches, and cyber threats.</p>
        <Button className="mt-6 bg-white text-blue-600 px-6 py-3 text-lg font-semibold rounded-lg">Get Started for Free</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center">Why Choose PulseGuard?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">AI-Powered Threat Detection</h3>
            <p className="mt-2">Detect phishing attempts and prevent cyber attacks before they happen.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Real-Time Alerts</h3>
            <p className="mt-2">Stay ahead with instant breach notifications and proactive protection.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Affordable Protection</h3>
            <p className="mt-2">40% cheaper than competitors, making cybersecurity accessible to all SMEs.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 px-6 md:px-20">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Free Plan</h3>
            <p className="mt-2">Basic phishing detection & security alerts</p>
            <p className="mt-4 text-2xl font-bold">$0/month</p>
            <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">Sign Up</Button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="mt-2">AI-powered protection, dark web monitoring</p>
            <p className="mt-4 text-2xl font-bold">$3/month</p>
            <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">Get Premium</Button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Family Plan</h3>
            <p className="mt-2">Covers up to 5 users with advanced security</p>
            <p className="mt-4 text-2xl font-bold">$5/month</p>
            <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">Secure Your Family</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">Start Protecting Your Business Today</h2>
        <p className="mt-4 text-lg">Join thousands of SMEs securing their digital assets with PulseGuard.</p>
        <Button className="mt-6 bg-white text-blue-600 px-6 py-3 text-lg font-semibold rounded-lg">Get Started Now</Button>
      </section>
    </div>
  );
}
