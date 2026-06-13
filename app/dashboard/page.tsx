"use client";

import { useState, useEffect } from "react";
import { useCSWUser, logout } from "@codeswayam/auth";
import { sdk } from "@codeswayam/api-client";
import { 
    Layout, Code, Cpu, Database, Shield, Zap, Plus, Trash, CheckCircle, 
    Clock, MessageSquare, DollarSign, Calendar, User, Mail, Phone, 
    AlertCircle, Edit, Save, X, ExternalLink, Settings, BarChart3, ListFilter,
    ArrowRight, Sparkles, ChevronRight, Loader2
} from "lucide-react";
import Link from "next/link";

interface CatalogItem {
    id: number;
    name: string;
    slug: string;
    description: string;
    icon: string;
    isActive: boolean;
}

interface ServiceRequest {
    id: number;
    userId: number;
    serviceId: number | null;
    serviceName: string;
    projectName: string;
    description: string;
    budgetRange: string;
    timeline: string;
    status: 'pending_review' | 'in_discussion' | 'active' | 'completed' | 'cancelled';
    contactEmail: string;
    contactPhone?: string | null;
    adminNotes?: string | null;
    createdAt: string;
}

export default function DashboardPage() {
    const { user, isLoaded, isSignedIn } = useCSWUser();
    const [catalog, setCatalog] = useState<CatalogItem[]>([]);
    const [requests, setRequests] = useState<ServiceRequest[]>([]);
    
    // UI state
    const [activeTab, setActiveTab] = useState<"projects" | "new-request" | "admin-queue" | "admin-catalog">("projects");
    const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);
    
    // New request form state
    const [newRequest, setNewRequest] = useState({
        serviceName: "",
        serviceId: "",
        projectName: "",
        description: "",
        budgetRange: "$5,000 - $10,000",
        timeline: "1-3 months",
        contactEmail: "",
        contactPhone: ""
    });
    
    // Admin request status update state
    const [adminStatusUpdate, setAdminStatusUpdate] = useState({
        status: "pending_review",
        adminNotes: ""
    });
    
    // New catalog item state
    const [newCatalogItem, setNewCatalogItem] = useState({
        name: "",
        description: "",
        icon: "Code",
        isActive: true
    });

    const isAdmin = (user as any)?.role === "admin" || (user as any)?.role === "superadmin";

    // Initialize/Fetch data
    useEffect(() => {
        if (!isLoaded || !isSignedIn) return;

        // Fetch catalog and requests
        const loadDashboardData = async () => {
            setLoading(true);
            try {
                // Fetch services catalog
                const catData = await sdk.services.listCatalog().catch(() => []);
                setCatalog(catData);

                // Default selection for form
                if (catData.length > 0) {
                    setNewRequest(prev => ({ 
                        ...prev, 
                        serviceId: catData[0].id.toString(), 
                        serviceName: catData[0].name 
                    }));
                } else {
                    setNewRequest(prev => ({ 
                        ...prev, 
                        serviceId: "custom", 
                        serviceName: "Custom Engineering" 
                    }));
                }

                // Fetch service requests
                if (isAdmin) {
                    const reqData = await sdk.services.listRequests();
                    setRequests(reqData);
                    setActiveTab("admin-queue");
                } else {
                    const reqData = await sdk.services.listMyRequests();
                    setRequests(reqData);
                    setActiveTab("projects");
                }
            } catch (err) {
                console.error("Error loading dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };

        loadDashboardData();
        
        // Auto-fill contact email from user profile
        if (user?.email) {
            setNewRequest(prev => ({ ...prev, contactEmail: user.email }));
        }
    }, [isLoaded, isSignedIn, user, isAdmin]);

    // Re-fetch service requests
    const refreshRequests = async () => {
        try {
            if (isAdmin) {
                const reqData = await sdk.services.listRequests();
                setRequests(reqData);
            } else {
                const reqData = await sdk.services.listMyRequests();
                setRequests(reqData);
            }
        } catch (err) {
            console.error("Error refreshing requests:", err);
        }
    };

    // Re-fetch catalog
    const refreshCatalog = async () => {
        try {
            const catData = await sdk.services.listCatalog();
            setCatalog(catData);
        } catch (err) {
            console.error("Error refreshing catalog:", err);
        }
    };

    // Handle New Request Submit
    const handleRequestSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setActionLoading(true);
        try {
            const payload = {
                serviceId: newRequest.serviceId === "custom" ? null : parseInt(newRequest.serviceId, 10),
                serviceName: newRequest.serviceName,
                projectName: newRequest.projectName,
                description: newRequest.description,
                budgetRange: newRequest.budgetRange,
                timeline: newRequest.timeline,
                contactEmail: newRequest.contactEmail,
                contactPhone: newRequest.contactPhone || null
            };
            
            await sdk.services.createRequest(payload);
            setNewRequest(prev => ({
                ...prev,
                projectName: "",
                description: "",
                contactPhone: ""
            }));
            await refreshRequests();
            setActiveTab("projects");
        } catch (err) {
            console.error("Error creating service request:", err);
            alert("Failed to submit project request. Please try again.");
        } finally {
            setActionLoading(false);
        }
    };

    // Handle Admin Catalog Submit
    const handleCatalogSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setActionLoading(true);
        try {
            const slug = newCatalogItem.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            await sdk.services.createCatalogItem({
                ...newCatalogItem,
                slug
            });
            setNewCatalogItem({
                name: "",
                description: "",
                icon: "Code",
                isActive: true
            });
            await refreshCatalog();
        } catch (err) {
            console.error("Error creating catalog item:", err);
            alert("Failed to create catalog service template.");
        } finally {
            setActionLoading(false);
        }
    };

    // Delete Catalog Item
    const handleDeleteCatalogItem = async (id: number) => {
        if (!confirm("Are you sure you want to delete this service template?")) return;
        try {
            await sdk.services.deleteCatalogItem(id);
            await refreshCatalog();
        } catch (err) {
            console.error("Error deleting catalog item:", err);
            alert("Failed to delete catalog item.");
        }
    };

    // Delete Request
    const handleDeleteRequest = async (id: number) => {
        if (!confirm("Are you sure you want to delete this request permanently?")) return;
        try {
            await sdk.services.deleteRequest(id);
            setSelectedRequest(null);
            await refreshRequests();
        } catch (err) {
            console.error("Error deleting request:", err);
            alert("Failed to delete request.");
        }
    };

    // Handle Request Status Update
    const handleStatusUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedRequest) return;
        setActionLoading(true);
        try {
            const updated = await sdk.services.updateRequestStatus(
                selectedRequest.id, 
                adminStatusUpdate.status, 
                adminStatusUpdate.adminNotes
            );
            setSelectedRequest(updated);
            await refreshRequests();
        } catch (err) {
            console.error("Error updating request status:", err);
            alert("Failed to update status.");
        } finally {
            setActionLoading(false);
        }
    };

    // Helper to get status badges color & styles
    const getStatusStyle = (status: string) => {
        switch (status) {
            case "pending_review":
                return "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/50";
            case "in_discussion":
                return "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/50";
            case "active":
                return "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/50";
            case "completed":
                return "bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900/50";
            case "cancelled":
                return "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/40 dark:text-gray-300 dark:border-gray-700/50";
        }
    };

    const getStatusLabel = (status: string) => {
        return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case "Layout": return Layout;
            case "Code": return Code;
            case "Cpu": return Cpu;
            case "Database": return Database;
            case "Shield": return Shield;
            case "Zap": return Zap;
            default: return Code;
        }
    };

    // Parse estimated average pipeline budget
    const getPipelineValue = () => {
        let total = 0;
        requests.forEach(r => {
            if (r.status === "cancelled") return;
            const str = r.budgetRange;
            if (str.includes("25,000+")) {
                total += 35000;
            } else if (str.includes("10,000 - $25,000")) {
                total += 17500;
            } else if (str.includes("5,000 - $10,000")) {
                total += 7500;
            } else {
                total += 3000;
            }
        });
        return total;
    };

    // Guards
    if (!isLoaded || loading) {
        return (
            <div className="min-h-screen bg-white text-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <span className="text-sm font-black uppercase tracking-widest text-black/40">Loading Dashboard...</span>
                </div>
            </div>
        );
    }

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-secondary/30 border border-black/5 rounded-[2.5rem] p-12 text-center premium-shadow glass">
                    <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
                    <h2 className="text-2xl font-display font-black uppercase tracking-wider mb-2">Access Restrained</h2>
                    <p className="text-sm font-medium text-black/40 mb-8 leading-relaxed">
                        This workspace is protected. You must log in via our secure Single Sign-On channel to proceed.
                    </p>
                    <button 
                        onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_AUTH_URL || "http://localhost:3003"} 
                        className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl"
                    >
                        Sign In via SSO
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black pt-32 pb-24 min-h-screen px-6">
            <div className="max-w-7xl mx-auto">
                {/* 1. HEADER SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 pb-8 border-b border-black/5">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-secondary text-muted-foreground rounded-full border border-black/5">
                                Account Console
                            </span>
                            {isAdmin && (
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                    Admin View
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
                            Hi, {user?.name || "Developer"}
                        </h1>
                        <p className="text-sm font-medium text-black/40 mt-1">
                            Manage your custom engineering requests and service catalog items.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {!isAdmin && (
                            <button
                                onClick={() => setActiveTab("new-request")}
                                className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-lg"
                            >
                                Request New Service
                                <Plus className="w-4 h-4" />
                            </button>
                        )}
                        <button
                            onClick={() => {
                                logout();
                                window.location.href = "/";
                            }}
                            className="bg-secondary/80 border border-black/5 hover:border-black text-foreground px-6 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all"
                        >
                            Log Out
                        </button>
                    </div>
                </div>

                {/* 2. STATS OVERVIEW CARD (IF ADMIN) */}
                {isAdmin && (
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-16">
                        <div className="bg-secondary/30 border border-black/5 p-8 rounded-3xl premium-shadow glass">
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Total Submissions</span>
                            <div className="text-4xl font-display font-black">{requests.length}</div>
                            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-500 mt-2 block">All Client Submissions</span>
                        </div>
                        <div className="bg-secondary/30 border border-black/5 p-8 rounded-3xl premium-shadow glass">
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Active Projects</span>
                            <div className="text-4xl font-display font-black">
                                {requests.filter(r => r.status === "active").length}
                            </div>
                            <span className="text-[11px] font-bold text-amber-500 mt-2 block">In Development Lifecycle</span>
                        </div>
                        <div className="bg-secondary/30 border border-black/5 p-8 rounded-3xl premium-shadow glass">
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Pipeline Value (Est.)</span>
                            <div className="text-4xl font-display font-black">${getPipelineValue().toLocaleString()}</div>
                            <span className="text-[11px] font-bold text-indigo-500 mt-2 block">Combined project values</span>
                        </div>
                        <div className="bg-secondary/30 border border-black/5 p-8 rounded-3xl premium-shadow glass">
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-2">Catalog Templates</span>
                            <div className="text-4xl font-display font-black">{catalog.length}</div>
                            <span className="text-[11px] font-bold text-black/40 mt-2 block">Active offerings</span>
                        </div>
                    </div>
                )}

                {/* 3. DASHBOARD MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Navigation Tabs Side */}
                    <div className="lg:col-span-3 flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4 ml-4">
                            Console Navigation
                        </span>
                        
                        {!isAdmin ? (
                            <>
                                <button
                                    onClick={() => { setActiveTab("projects"); setSelectedRequest(null); }}
                                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-left transition-all ${activeTab === "projects" ? "bg-black text-white shadow-xl scale-[1.02]" : "hover:bg-secondary/50 text-muted-foreground"}`}
                                >
                                    My Service Requests
                                    <span className="bg-secondary text-[10px] font-bold text-black px-2 py-0.5 rounded-full">{requests.length}</span>
                                </button>
                                <button
                                    onClick={() => { setActiveTab("new-request"); setSelectedRequest(null); }}
                                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-left transition-all ${activeTab === "new-request" ? "bg-black text-white shadow-xl scale-[1.02]" : "hover:bg-secondary/50 text-muted-foreground"}`}
                                >
                                    Request Project
                                    <Plus className="w-4 h-4" />
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => { setActiveTab("admin-queue"); setSelectedRequest(null); }}
                                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-left transition-all ${activeTab === "admin-queue" ? "bg-black text-white shadow-xl scale-[1.02]" : "hover:bg-secondary/50 text-muted-foreground"}`}
                                >
                                    Client Requests Queue
                                    <span className="bg-secondary text-[10px] font-bold text-black px-2 py-0.5 rounded-full">{requests.length}</span>
                                </button>
                                <button
                                    onClick={() => { setActiveTab("admin-catalog"); setSelectedRequest(null); }}
                                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-left transition-all ${activeTab === "admin-catalog" ? "bg-black text-white shadow-xl scale-[1.02]" : "hover:bg-secondary/50 text-muted-foreground"}`}
                                >
                                    Catalog Manager
                                    <Settings className="w-4 h-4" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Dashboard Views Main Content */}
                    <div className="lg:col-span-9 bg-secondary/10 border border-black/5 rounded-[2.5rem] p-8 md:p-12 premium-shadow glass min-h-[500px]">
                        
                        {/* VIEW A: MY REQUESTS (Standard User) */}
                        {!isAdmin && activeTab === "projects" && !selectedRequest && (
                            <div className="space-y-8 animate-reveal">
                                <h2 className="text-3xl font-display font-bold uppercase tracking-tight">
                                    My Service Requests
                                </h2>
                                
                                {requests.length === 0 ? (
                                    <div className="text-center py-20 bg-secondary/30 rounded-3xl border border-black/5">
                                        <Clock className="w-12 h-12 text-black/20 mx-auto mb-4" />
                                        <p className="text-lg font-bold text-black/50">No requests filed yet.</p>
                                        <p className="text-sm font-medium text-black/30 mb-8 max-w-sm mx-auto mt-1">
                                            File your first service request to begin discussing your project specs with our architects.
                                        </p>
                                        <button 
                                            onClick={() => setActiveTab("new-request")}
                                            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                                        >
                                            Request Project
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-4">
                                        {requests.map((r) => (
                                            <div 
                                                key={r.id}
                                                onClick={() => {
                                                    setSelectedRequest(r);
                                                    setAdminStatusUpdate({ status: r.status, adminNotes: r.adminNotes || "" });
                                                }}
                                                className="group cursor-pointer bg-white border border-black/5 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-black transition-all duration-300 premium-shadow"
                                            >
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">
                                                            {r.projectName}
                                                        </span>
                                                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(r.status)}`}>
                                                            {getStatusLabel(r.status)}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[12px] font-bold text-black/40">
                                                        <span className="flex items-center gap-1.5"><Code className="w-3.5 h-3.5" /> {r.serviceName}</span>
                                                        <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" /> {r.budgetRange}</span>
                                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {r.timeline}</span>
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* VIEW B: NEW SERVICE REQUEST FORM (Standard User) */}
                        {!isAdmin && activeTab === "new-request" && (
                            <div className="space-y-8 animate-reveal">
                                <div>
                                    <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">
                                        Submit Service Request
                                    </h2>
                                    <p className="text-sm font-medium text-black/40">
                                        Fill in your project requirements and budget scale. An engineering architect will review and respond shortly.
                                    </p>
                                </div>

                                <form onSubmit={handleRequestSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Service Catalog Category</label>
                                            <select
                                                required
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newRequest.serviceId}
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    const selected = catalog.find(item => item.id.toString() === val);
                                                    setNewRequest(prev => ({
                                                        ...prev,
                                                        serviceId: val,
                                                        serviceName: selected ? selected.name : "Custom Engineering"
                                                    }));
                                                }}
                                            >
                                                {catalog.map(item => (
                                                    <option key={item.id} value={item.id.toString()}>{item.name}</option>
                                                ))}
                                                <option value="custom">Custom Engineering Offer</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Project Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter a descriptive project name"
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newRequest.projectName}
                                                onChange={(e) => setNewRequest({ ...newRequest, projectName: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Project Specifications & Requirements</label>
                                        <textarea
                                            required
                                            rows={6}
                                            placeholder="Detail what systems we need to design, target audience, technology stack goals, and missing requirements..."
                                            className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                            value={newRequest.description}
                                            onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Estimated Budget Range</label>
                                            <select
                                                required
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newRequest.budgetRange}
                                                onChange={(e) => setNewRequest({ ...newRequest, budgetRange: e.target.value })}
                                            >
                                                <option value="<$5,000">Less than $5,000</option>
                                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                                <option value="$25,000+">$25,000+</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Desired Lifecycle / Timeline</label>
                                            <select
                                                required
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newRequest.timeline}
                                                onChange={(e) => setNewRequest({ ...newRequest, timeline: e.target.value })}
                                            >
                                                <option value="<1 month">Less than 1 month</option>
                                                <option value="1-3 months">1 to 3 months</option>
                                                <option value="3-6 months">3 to 6 months</option>
                                                <option value="Flexible">Flexible / On-going</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Contact Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="e.g. contact@domain.com"
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newRequest.contactEmail}
                                                onChange={(e) => setNewRequest({ ...newRequest, contactEmail: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Contact Phone Number (Optional)</label>
                                            <input
                                                type="tel"
                                                placeholder="e.g. +1 (555) 000-0000"
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newRequest.contactPhone}
                                                onChange={(e) => setNewRequest({ ...newRequest, contactPhone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={actionLoading}
                                        className="w-full py-5 rounded-2xl bg-primary text-primary-foreground text-[12px] font-black uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50"
                                    >
                                        {actionLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Submitting Request...
                                            </>
                                        ) : (
                                            <>
                                                File Project Request
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* VIEW C: ADMIN CLIENT REQUESTS QUEUE (Admin Only) */}
                        {isAdmin && activeTab === "admin-queue" && !selectedRequest && (
                            <div className="space-y-8 animate-reveal">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-display font-bold uppercase tracking-tight">
                                        Client Request Queue
                                    </h2>
                                    <span className="text-xs font-bold text-black/40 uppercase tracking-wider bg-secondary px-3 py-1.5 rounded-full">
                                        Total Queue: {requests.length}
                                    </span>
                                </div>

                                {requests.length === 0 ? (
                                    <div className="text-center py-20 bg-secondary/30 rounded-3xl border border-black/5">
                                        <Clock className="w-12 h-12 text-black/20 mx-auto mb-4" />
                                        <p className="text-lg font-bold text-black/50">No submissions found.</p>
                                        <p className="text-sm font-medium text-black/30 mt-1">
                                            All client submissions will show up in this queue.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-4">
                                        {requests.map((r) => (
                                            <div 
                                                key={r.id}
                                                onClick={() => {
                                                    setSelectedRequest(r);
                                                    setAdminStatusUpdate({ status: r.status, adminNotes: r.adminNotes || "" });
                                                }}
                                                className="group cursor-pointer bg-white border border-black/5 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-black transition-all duration-300 premium-shadow"
                                            >
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">
                                                            {r.projectName}
                                                        </span>
                                                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(r.status)}`}>
                                                            {getStatusLabel(r.status)}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[12px] font-bold text-black/40">
                                                        <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Client ID: {r.userId}</span>
                                                        <span className="flex items-center gap-1.5"><Code className="w-3.5 h-3.5" /> {r.serviceName}</span>
                                                        <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" /> {r.budgetRange}</span>
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* VIEW D: ADMIN CATALOG MANAGER (Admin Only) */}
                        {isAdmin && activeTab === "admin-catalog" && (
                            <div className="space-y-12 animate-reveal">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-display font-bold uppercase tracking-tight">
                                        Catalog Offerings Manager
                                    </h2>
                                    <p className="text-sm font-medium text-black/40">
                                        Define the service catalog options presented on the dynamic forms and marketing pages.
                                    </p>
                                </div>

                                {/* Catalog List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {catalog.map((item) => {
                                        const Icon = getIconComponent(item.icon);
                                        return (
                                            <div key={item.id} className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col justify-between premium-shadow relative group">
                                                <button
                                                    onClick={() => handleDeleteCatalogItem(item.id)}
                                                    className="absolute top-6 right-6 p-2 rounded-xl text-black/30 hover:text-rose-600 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100"
                                                    title="Delete Template"
                                                >
                                                    <Trash className="w-4 h-4" />
                                                </button>
                                                <div>
                                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <h3 className="text-2xl font-black tracking-tight mb-2 flex items-center gap-2">
                                                        {item.name}
                                                        {!item.isActive && (
                                                            <span className="bg-gray-100 text-gray-500 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded">Draft</span>
                                                        )}
                                                    </h3>
                                                    <p className="text-sm font-medium text-black/40 leading-relaxed mb-6">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-black/30 border-t border-black/5 pt-4">
                                                    slug: {item.slug}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Create Catalog Item Form */}
                                <div className="border-t border-black/5 pt-12 space-y-6">
                                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight">Create Offering Template</h3>
                                    <form onSubmit={handleCatalogSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                        <div className="md:col-span-6 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2 font-black">Service Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Machine Learning Engineering"
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newCatalogItem.name}
                                                onChange={(e) => setNewCatalogItem({ ...newCatalogItem, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="md:col-span-3 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2 font-black">Lucide Icon</label>
                                            <select
                                                required
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newCatalogItem.icon}
                                                onChange={(e) => setNewCatalogItem({ ...newCatalogItem, icon: e.target.value })}
                                            >
                                                <option value="Code">Code</option>
                                                <option value="Layout">Layout</option>
                                                <option value="Cpu">Cpu</option>
                                                <option value="Database">Database</option>
                                                <option value="Shield">Shield</option>
                                                <option value="Zap">Zap</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-3 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2 font-black">Publish Mode</label>
                                            <select
                                                required
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newCatalogItem.isActive ? "active" : "inactive"}
                                                onChange={(e) => setNewCatalogItem({ ...newCatalogItem, isActive: e.target.value === "active" })}
                                            >
                                                <option value="active">Active Offering</option>
                                                <option value="inactive">Draft / Hide</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-12 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2 font-black">Service Description</label>
                                            <textarea
                                                required
                                                rows={3}
                                                placeholder="Summarize capabilities and offerings of this specific service template..."
                                                className="w-full bg-white border border-black/5 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                                                value={newCatalogItem.description}
                                                onChange={(e) => setNewCatalogItem({ ...newCatalogItem, description: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={actionLoading}
                                            className="md:col-span-12 py-5 rounded-2xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50"
                                        >
                                            {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                            Create Catalog Offering Template
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* VIEW E: SPECIFIC SERVICE REQUEST DETAIL VIEWS (Shared) */}
                        {selectedRequest && (
                            <div className="space-y-12 animate-reveal">
                                {/* Back link */}
                                <button
                                    onClick={() => setSelectedRequest(null)}
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Queue list
                                </button>

                                {/* Header details */}
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-6 border-b border-black/5">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">
                                                {selectedRequest.projectName}
                                            </h2>
                                            <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black border uppercase tracking-wider ${getStatusStyle(selectedRequest.status)}`}>
                                                {getStatusLabel(selectedRequest.status)}
                                            </span>
                                        </div>
                                        <p className="text-[12px] font-bold text-black/40 uppercase tracking-widest flex items-center gap-1.5 flex-wrap">
                                            <span>System Type: <strong className="text-black">{selectedRequest.serviceName}</strong></span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>Filed: <strong className="text-black">{new Date(selectedRequest.createdAt).toLocaleDateString()}</strong></span>
                                        </p>
                                    </div>

                                    {isAdmin && (
                                        <button
                                            onClick={() => handleDeleteRequest(selectedRequest.id)}
                                            className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 hover:border-rose-300 text-rose-700 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                                        >
                                            <Trash className="w-4 h-4" />
                                            Delete Request
                                        </button>
                                    )}
                                </div>

                                {/* Project Description */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                    <div className="lg:col-span-8 space-y-8">
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-black uppercase tracking-wider">Project Specifications</h3>
                                            <div className="bg-white border border-black/5 rounded-2xl p-6 text-sm font-medium leading-relaxed whitespace-pre-wrap text-black/70">
                                                {selectedRequest.description}
                                            </div>
                                        </div>

                                        {/* Discussion / Admin Notes Area */}
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2">
                                                <MessageSquare className="w-5 h-5 text-primary" />
                                                Architect Feedback & Notes
                                            </h3>
                                            <div className="bg-white border border-black/5 rounded-2xl p-6 text-sm font-medium leading-relaxed text-black/70 min-h-[100px]">
                                                {selectedRequest.adminNotes ? (
                                                    <div className="whitespace-pre-wrap">{selectedRequest.adminNotes}</div>
                                                ) : (
                                                    <span className="text-black/30 italic">No notes or status updates posted by our engineering team yet.</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar specifications meta */}
                                    <div className="lg:col-span-4 space-y-6">
                                        <div className="bg-white border border-black/5 rounded-3xl p-6 space-y-6 premium-shadow">
                                            <h4 className="text-sm font-black uppercase tracking-wider border-b border-black/5 pb-3">Project Specs</h4>
                                            
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Estimated Budget</span>
                                                <span className="text-sm font-black text-foreground">{selectedRequest.budgetRange}</span>
                                            </div>

                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Desired Timeline</span>
                                                <span className="text-sm font-black text-foreground">{selectedRequest.timeline}</span>
                                            </div>

                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Contact Email</span>
                                                <span className="text-sm font-bold text-primary flex items-center gap-1 break-all">
                                                    <Mail className="w-3.5 h-3.5" />
                                                    {selectedRequest.contactEmail}
                                                </span>
                                            </div>

                                            {selectedRequest.contactPhone && (
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Contact Phone</span>
                                                    <span className="text-sm font-bold text-foreground flex items-center gap-1">
                                                        <Phone className="w-3.5 h-3.5 text-black/40" />
                                                        {selectedRequest.contactPhone}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Admin Action Box */}
                                        {isAdmin && (
                                            <div className="bg-white border border-black/5 rounded-3xl p-6 premium-shadow space-y-6">
                                                <h4 className="text-sm font-black uppercase tracking-wider border-b border-black/5 pb-3">Admin Action Panel</h4>
                                                
                                                <form onSubmit={handleStatusUpdateSubmit} className="space-y-4">
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Update Status</label>
                                                        <select
                                                            className="w-full bg-secondary/50 border border-black/5 rounded-xl p-3 text-xs font-bold focus:ring-1 focus:ring-primary outline-none"
                                                            value={adminStatusUpdate.status}
                                                            onChange={(e) => setAdminStatusUpdate({ ...adminStatusUpdate, status: e.target.value })}
                                                        >
                                                            <option value="pending_review">Pending Review</option>
                                                            <option value="in_discussion">In Discussion</option>
                                                            <option value="active">Active Project</option>
                                                            <option value="completed">Completed</option>
                                                            <option value="cancelled">Cancelled</option>
                                                        </select>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Architect Notes</label>
                                                        <textarea
                                                            rows={4}
                                                            placeholder="Post status update updates or questions for the user..."
                                                            className="w-full bg-secondary/50 border border-black/5 rounded-xl p-3 text-xs font-bold focus:ring-1 focus:ring-primary outline-none"
                                                            value={adminStatusUpdate.adminNotes}
                                                            onChange={(e) => setAdminStatusUpdate({ ...adminStatusUpdate, adminNotes: e.target.value })}
                                                        />
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        disabled={actionLoading}
                                                        className="w-full py-3 rounded-xl bg-black text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        {actionLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                                                        Save Panel Changes
                                                    </button>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
