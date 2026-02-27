import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { CheckCircle2, Loader2, Lock, Building2, HelpCircle, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type FormType = "contractor" | "info" | "wholesaler";

const SUBMISSIONS_EMAIL = "REPLACE_ME"; // Placeholder for configuration

export const FormsSection = () => {
  const [activeTab, setActiveTab] = useState<FormType>("contractor");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      businessName: "",
      contactName: "",
      email: "",
      mobile: "",
      message: ""
    });
  };

  const tabs = [
    { id: "contractor", label: "Preferred Contractor", icon: Briefcase },
    { id: "info", label: "Request Info", icon: HelpCircle },
    { id: "wholesaler", label: "Wholesaler Inquiry", icon: Building2 },
  ];

  return (
    <Section id="forms-section" className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0EA5A4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4 tracking-tight">
            Get Started Today
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Select the option that best describes your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#1F2937] p-1.5 rounded-xl border border-[#374151] shadow-lg overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id as FormType); setIsSuccess(false); }}
                  className={cn(
                    "flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    isActive
                      ? "bg-[#0EA5A4] text-white shadow-md"
                      : "text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#374151]/50"
                  )}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-[#9CA3AF]")} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#1F2937]/80 border border-[#374151]/50 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#374151] via-[#0EA5A4] to-[#374151]" />

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#0EA5A4]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#0EA5A4]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#0EA5A4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Application Received</h3>
                <p className="text-[#9CA3AF] mb-8 max-w-md mx-auto leading-relaxed">
                  {activeTab === "contractor" && "Thanks — your details have been received. We’ll review your application and call you at your scheduled time to walk through the onboarding process."}
                  {activeTab === "info" && "Thanks for booking in. We’ll review your details and give you a call at your selected time to answer any questions."}
                  {activeTab === "wholesaler" && "Thanks — we’ve received your details. We’ll review the information provided and call you at your scheduled time to discuss next steps."}
                </p>
                <Button 
                  onClick={resetForm} 
                  variant="outline" 
                  className="border-[#374151] text-[#9CA3AF] hover:text-white hover:bg-[#374151] hover:border-[#4B5563]"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6" id={`panel-${activeTab}`} role="tabpanel">
                  
                  {/* Form Header */}
                  <div className="mb-8 pb-6 border-b border-[#374151]">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {activeTab === "contractor" && "Preferred Contractor Application"}
                      {activeTab === "info" && "Request Information / Call-Back"}
                      {activeTab === "wholesaler" && "Wholesaler Expression of Interest"}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm">
                      {activeTab === "contractor" && "Formal application for shared account access."}
                      {activeTab === "info" && "Get answers before you apply."}
                      {activeTab === "wholesaler" && "Discuss partnership opportunities."}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessName" className="text-[#E5E7EB]">
                        {activeTab === "wholesaler" ? "Company Name" : "Business Name"} <span className="text-[#0EA5A4]">*</span>
                      </Label>
                      <Input 
                        id="businessName" 
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="bg-[#111827] border-[#4B5563] text-white focus:ring-[#0EA5A4] focus:border-[#0EA5A4] placeholder:text-[#4B5563]" 
                        placeholder={activeTab === "wholesaler" ? "Wholesaler Co." : "Your Business Pty Ltd"} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-[#E5E7EB]">
                        Contact Name <span className="text-[#0EA5A4]">*</span>
                      </Label>
                      <Input 
                        id="contactName" 
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="bg-[#111827] border-[#4B5563] text-white focus:ring-[#0EA5A4] focus:border-[#0EA5A4] placeholder:text-[#4B5563]" 
                        placeholder="Full Name" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-[#E5E7EB]">
                        {activeTab === "wholesaler" ? "Phone" : "Mobile"} <span className="text-[#0EA5A4]">*</span>
                      </Label>
                      <Input 
                        id="mobile" 
                        required
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="bg-[#111827] border-[#4B5563] text-white focus:ring-[#0EA5A4] focus:border-[#0EA5A4] placeholder:text-[#4B5563]" 
                        placeholder="04XX XXX XXX" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#E5E7EB]">
                        Email <span className="text-[#0EA5A4]">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-[#111827] border-[#4B5563] text-white focus:ring-[#0EA5A4] focus:border-[#0EA5A4] placeholder:text-[#4B5563]" 
                        placeholder="name@company.com.au" 
                      />
                    </div>
                  </div>

                  {activeTab === "wholesaler" && (
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#E5E7EB]">Message (Optional)</Label>
                      <textarea 
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="flex w-full rounded-md border border-[#4B5563] bg-[#111827] px-3 py-2 text-sm text-white placeholder:text-[#4B5563] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4] disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Any specific details..."
                      />
                    </div>
                  )}

                  {/* Calendly Placeholder */}
                  <div className="bg-[#111827] border border-[#374151] rounded-lg p-4 text-center">
                    <p className="text-[#9CA3AF] text-sm mb-2">Select a time for your onboarding call:</p>
                    <div className="h-12 bg-[#1F2937] rounded border border-dashed border-[#4B5563] flex items-center justify-center text-[#6B7280] text-xs">
                      [Calendly Embed Placeholder]
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#0EA5A4] hover:bg-[#0D9488] text-white font-bold h-12 text-base shadow-lg shadow-[#0EA5A4]/20 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>

                  {/* Microcopy */}
                  <div className="text-center space-y-2 pt-2">
                    {activeTab === "contractor" && (
                      <>
                        <p className="text-[#6B7280] text-xs flex items-center justify-center gap-1.5">
                          <Lock className="w-3 h-3" /> Approval required — access limited to preferred contractors.
                        </p>
                        <p className="text-[#6B7280] text-xs">No discount, no charge. Compare pricing anytime.</p>
                      </>
                    )}
                    {activeTab === "info" && (
                      <p className="text-[#6B7280] text-xs">
                        No discount, no charge. You’re free to compare pricing against your current suppliers.
                      </p>
                    )}
                    {activeTab === "wholesaler" && (
                      <p className="text-[#6B7280] text-xs flex items-center justify-center gap-1.5">
                        <Lock className="w-3 h-3" /> Professional, compliant, and secure inquiry process.
                      </p>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
