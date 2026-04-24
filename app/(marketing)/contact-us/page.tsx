"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Sparkles } from "lucide-react";
import Link from 'next/link';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-32 pb-24">
            {/* 1. EDITORIAL HEADER */}
            <section className="px-6 mb-24 md:mb-40">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-10 animate-reveal">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">Inquiry Channel</span>
                            <span className="w-8 h-[1px] bg-primary"></span>
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-[9rem] font-display font-bold leading-[0.85] tracking-tight uppercase mb-12">
                        Get In <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Touch.</span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl font-display font-medium text-muted-foreground leading-tight">
                        Whether you're starting a new venture or scaling an existing one, 
                        our team is ready to architect your future.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT GRID */}
            <section className="px-6 pb-40">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Contact Info (Editorial Side) */}
                    <div className="lg:col-span-5 space-y-24">
                        <div className="space-y-8">
                            <h3 className="text-4xl font-display font-bold tracking-tight uppercase">Headquarters</h3>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <p className="text-xl font-medium text-muted-foreground leading-tight">
                                    123 Innovation Drive<br />
                                    Tech District, CA 94105<br />
                                    United States
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-4xl font-display font-bold tracking-tight uppercase">Direct Lines</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <a href="mailto:hello@codeswayam.com" className="text-xl font-bold hover:text-primary transition-colors">
                                        hello@codeswayam.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-bold">+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 rounded-[3rem] bg-primary text-primary-foreground relative overflow-hidden">
                            <Sparkles className="absolute top-0 right-0 w-40 h-40 opacity-10 -translate-x-4 translate-y-4" />
                            <h4 className="text-2xl font-display font-bold mb-4 relative z-10">Instant Support</h4>
                            <p className="text-primary-foreground/80 mb-8 relative z-10">Visit our help center for quick documentation and FAQ's.</p>
                            <Link href="/help" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:gap-4 transition-all relative z-10">
                                Help Center <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Form (Premium Glass Side) */}
                    <div className="lg:col-span-7 bg-secondary/30 border border-border rounded-[3.5rem] p-12 md:p-20 premium-shadow">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full bg-background border-none rounded-3xl p-6 text-lg font-medium focus:ring-2 focus:ring-primary outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="w-full bg-background border-none rounded-3xl p-6 text-lg font-medium focus:ring-2 focus:ring-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Project Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full bg-background border-none rounded-3xl p-6 text-lg font-medium focus:ring-2 focus:ring-primary outline-none transition-all"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-6 rounded-full bg-primary text-primary-foreground text-[12px] font-black uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-2xl disabled:opacity-50"
                            >
                                {status === "submitting" ? "Archiving..." : "Send Transmission"}
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            {status === "success" && (
                                <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20 text-primary text-center font-bold animate-reveal">
                                    Transmission received. We'll be in touch shortly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

