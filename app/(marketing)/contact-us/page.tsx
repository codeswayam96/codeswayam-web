"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
            {/* Header */}
            <section className="relative overflow-hidden bg-white border-b border-gray-100">
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[80px]"
                        style={{ background: '#00ADB5' }} />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00ADB5' }}>Contact Us</div>
                    <h1 className="text-5xl font-bold tracking-tight mb-6 text-black">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-3 px-4 text-black focus:border-[#00ADB5] focus:ring-[#00ADB5] outline-none transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-3 px-4 text-black focus:border-[#00ADB5] focus:ring-[#00ADB5] outline-none transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-3 px-4 text-black focus:border-[#00ADB5] focus:ring-[#00ADB5] outline-none transition-colors"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#222831] hover:bg-[#393E46] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ADB5] disabled:opacity-50"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p className="text-green-600 font-bold text-sm text-center mt-4 bg-green-50 p-3 rounded-lg border border-green-200">Your message has been sent successfully!</p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
                                    <Mail className="h-6 w-6 text-[#00ADB5]" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-black">Email Us</h3>
                                <p className="mt-2 text-base text-gray-500 font-medium">
                                    <a href="mailto:support@codeswayam.com" className="hover:text-[#00ADB5] transition-colors">
                                        support@codeswayam.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
                                    <Phone className="h-6 w-6 text-[#00ADB5]" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-black">Call Us</h3>
                                <p className="mt-2 text-base text-gray-500 font-medium">
                                    +1 (555) 123-4567
                                    <br />
                                    <span className="text-sm font-normal text-gray-400">Mon-Fri from 8am to 5pm</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
                                    <MapPin className="h-6 w-6 text-[#00ADB5]" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-black">Headquarters</h3>
                                <p className="mt-2 text-base text-gray-500 font-medium">
                                    123 Innovation Drive<br />
                                    Tech District<br />
                                    San Francisco, CA 94105
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
