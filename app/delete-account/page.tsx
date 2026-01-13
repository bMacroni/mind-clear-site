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
    <div className="min-h-screen bg-black text-gray-100">
      <main className="py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-yellow-600/30 backdrop-blur-sm mb-8">
              <Trash2 className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-300">Account Deletion</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 tracking-wide uppercase mb-4">
              Delete Your Account
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              We're sorry to see you go. Here is how to permanently delete your account and data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/50 px-8 py-6 text-lg backdrop-blur-sm group transition-all"
                >
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-12">

            {/* How to Delete */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-wider">
                  How to Delete
                </h2>
              </div>
              <ol className="ml-16 mt-5 list-decimal list-inside space-y-3 text-lg text-gray-300 leading-relaxed">
                <li>Open the Mind Clear mobile app.</li>
                <li>Navigate to <span className="font-semibold">Profile → Delete Account</span>.</li>
                <li>Type <code className="bg-gray-800 text-yellow-400 rounded px-2 py-1 text-sm font-mono">DELETE</code> to confirm the action.</li>
                <li>Tap the "Delete Account" button.</li>
              </ol>
            </div>

            {/* What Data Is Deleted */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-wider">
                  What Data Is Deleted
                </h2>
              </div>
              <div className="ml-16">
                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                  When you delete your account, the following data is <strong className="font-semibold text-red-400">permanently removed</strong> from our servers:
                </p>
                <ul className="mt-5 list-disc list-inside space-y-3 text-lg text-gray-300 leading-relaxed">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-wider">
                  Data Retention
                </h2>
              </div>
              <p className="ml-16 mt-5 text-lg text-gray-300 leading-relaxed">
                For legal compliance, non-identifiable audit logs are retained for 7 years. These logs contain no personal information.
              </p>
            </div>

            {/* Contact Support */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-yellow-500 uppercase tracking-wider">
                  Contact Support
                </h2>
              </div>
              <p className="ml-16 mt-5 text-lg text-gray-300 leading-relaxed">
                If you need any assistance or have questions, please reach out to us at{" "}
                <a href="mailto:support@mind-clear.com" className="text-yellow-500 hover:underline">
                  support@mind-clear.com
                </a>.
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-gray-400 bg-black border-t border-neutral-800">
        <p>
          <Link href="/" className="text-yellow-500 hover:underline">Home</Link>
          <span className="mx-2 text-neutral-600">|</span>
          <Link href="/privacy" className="text-yellow-500 hover:underline">Privacy Policy</Link>
          <span className="mx-2 text-neutral-600">|</span>
          <Link href="/terms" className="text-yellow-500 hover:underline">Terms of Service</Link>
        </p>
        <p className="mt-4">© 2026 Mind Clear Studio</p>
      </footer>
    </div>
  );
}
