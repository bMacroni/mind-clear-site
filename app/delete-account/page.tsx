import React from "react";
import { ArrowLeft, Trash2, AlertTriangle, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Account - Mind Clear Studio',
  description: 'Learn how to permanently delete your Mind Clear account and all associated data.',
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#E8E8E2] text-[#111111]">
      <main className="py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F1E1] border border-[#DEDCD2] mb-8">
              <Trash2 className="w-4 h-4 text-[#6B5A20]" />
              <span className="text-sm text-[#444444]">Account Deletion</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6B5A20] tracking-wide uppercase mb-4">
              Delete Your Account
            </h1>
            <p className="mt-4 text-lg text-[#444444]">
              We're sorry to see you go. Here is how to permanently delete your account and data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#DEDCD2] text-[#6B5A20] hover:bg-[#F5F1E1] hover:border-[#6B5A20] px-8 py-6 text-lg group transition-all"
                >
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to Mind Clear
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-12">

            {/* How to Delete */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F5F1E1] border border-[#DEDCD2] flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#6B5A20]" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-[#6B5A20] uppercase tracking-wider">
                  How to Delete
                </h2>
              </div>
              <ol className="ml-16 mt-5 list-decimal list-inside space-y-3 text-lg text-[#444444] leading-relaxed">
                <li>Open the Mind Clear mobile app.</li>
                <li>Navigate to <span className="font-semibold">Profile → Delete Account</span>.</li>
                <li>Type <code className="bg-[#F5F1E1] text-[#6B5A20] rounded px-2 py-1 text-sm font-mono border border-[#DEDCD2]">DELETE</code> to confirm the action.</li>
                <li>Tap the "Delete Account" button.</li>
              </ol>
            </div>

            {/* What Data Is Deleted */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F5F1E1] border border-[#DEDCD2] flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-[#EF4444]" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-[#6B5A20] uppercase tracking-wider">
                  What Data Is Deleted
                </h2>
              </div>
              <div className="ml-16">
                <p className="mt-5 text-lg text-[#444444] leading-relaxed">
                  When you delete your account, the following data is <strong className="font-semibold text-[#EF4444]">permanently removed</strong> from our servers:
                </p>
                <ul className="mt-5 list-disc list-inside space-y-3 text-lg text-[#444444] leading-relaxed">
                  <li>Your profile information (name, email, preferences)</li>
                  <li>All goals, milestones, and steps</li>
                  <li>All tasks and calendar events</li>
                  <li>AI conversation history</li>
                  <li>Analytics and usage data</li>
                  <li>Notification preferences and device tokens</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F5F1E1] border border-[#DEDCD2] flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#6B5A20]" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-[#6B5A20] uppercase tracking-wider">
                  Data Retention
                </h2>
              </div>
              <p className="ml-16 mt-5 text-lg text-[#444444] leading-relaxed">
                For legal compliance, non-identifiable audit logs are retained for 7 years. These logs contain no personal information.
              </p>
            </div>

            {/* Contact Support */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F5F1E1] border border-[#DEDCD2] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#6B5A20]" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-[#6B5A20] uppercase tracking-wider">
                  Contact Support
                </h2>
              </div>
              <p className="ml-16 mt-5 text-lg text-[#444444] leading-relaxed">
                If you need any assistance or have questions, please reach out to us at{" "}
                <a href="mailto:support@mind-clear.com" className="text-[#6B5A20] hover:underline">
                  support@mind-clear.com
                </a>.
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-[#6B6B6B] bg-[#F5F1E1] border-t border-[#DEDCD2]">
        <p>
          <Link href="/" className="text-[#6B5A20] hover:underline">Home</Link>
          <span className="mx-2 text-[#6B6B6B]">|</span>
          <Link href="/privacy" className="text-[#6B5A20] hover:underline">Privacy Policy</Link>
          <span className="mx-2 text-[#6B6B6B]">|</span>
          <Link href="/terms" className="text-[#6B5A20] hover:underline">Terms of Service</Link>
        </p>
        <p className="mt-4">© 2026 Mind Clear Studio</p>
      </footer>
    </div>
  );
}
