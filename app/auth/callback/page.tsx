"use client";

import { useSSOCallback } from "@codeswayam/auth";
import { Loader2, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AuthCallbackPage() {
    const { status, error } = useSSOCallback({
        apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    });

    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center p-6 selection:bg-black selection:text-white">
            <div className="max-w-md w-full bg-secondary/30 border border-black/5 rounded-[2.5rem] p-12 text-center premium-shadow glass relative overflow-hidden">
                {/* Background decorative gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)] opacity-10 pointer-events-none" />

                {status === "loading" && (
                    <div className="flex flex-col items-center gap-8 py-6">
                        <div className="relative">
                            <Loader2 className="w-16 h-16 text-primary animate-spin" />
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-display font-black uppercase tracking-wider mb-2">Authenticating</h2>
                            <p className="text-sm font-medium text-black/40">Securely exchanging your single sign-on ticket...</p>
                        </div>
                    </div>
                )}

                {status === "success" && (
                    <div className="flex flex-col items-center gap-8 py-6 animate-reveal">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-display font-black uppercase tracking-wider mb-2">Welcome</h2>
                            <p className="text-sm font-medium text-black/40">Redirecting to your dashboard workspace...</p>
                        </div>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex flex-col items-center gap-8 py-6 animate-reveal">
                        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center text-destructive relative">
                            <div className="absolute inset-0 bg-destructive/20 blur-xl rounded-full" />
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-display font-black uppercase tracking-wider mb-2 text-destructive">Authentication Error</h2>
                            <p className="text-sm font-medium text-black/40 mb-6 leading-relaxed">
                                {error || "We encountered an error exchanging your credentials. Please try again."}
                            </p>
                            <Link 
                                href="/login" 
                                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg"
                            >
                                Retry Sign In
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
