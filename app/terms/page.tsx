"use client";

import React from "react";
import { ArrowLeft, FileText, User, Shield, CreditCard, AlertTriangle, Scale, Gavel, Lock, RefreshCw, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to Mind Clear Studio! These Terms of Service ("Terms") enable you to use our website,{" "}
            <a href="https://mind-clear.com" className="text-yellow-400 underline hover:text-yellow-300">mind-clear.com</a>,
            and our related software applications and services (collectively, the "Services").
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
          </p>
        </div>
      )
    },
    {
      id: "who-we-are",
      title: "1. Who We Are",
      icon: User,
      content: (
        <div className="space-y-4">
          <p>
            <strong className="text-yellow-400">Mind Clear Studio LLC</strong> ("we," "us," or "our") is a limited liability company
            organized under the laws of the State of Missouri.
          </p>
          <p>
            <strong className="text-yellow-400">Nature of Business:</strong> The purpose of Mind Clear Studio LLC is to engage in the
            design, development, and distribution of software applications and digital services, and to transact any or all lawful business
            for which a limited liability company may be organized under the laws of the State of Missouri.
          </p>
        </div>
      )
    },
    {
      id: "user-accounts",
      title: "2. User Accounts",
      icon: User,
      content: (
        <div className="space-y-4">
          <p>To access certain features of our Services, you may be required to create an account.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong className="text-yellow-400">Registration:</strong> You agree to provide accurate, current, and complete information during the registration process.</li>
            <li><strong className="text-yellow-400">Security:</strong> You are responsible for maintaining the confidentiality of your account credentials (username and password). You are responsible for all activities that occur under your account.</li>
            <li><strong className="text-yellow-400">Eligibility:</strong> You must be at least 13 years old to use our Services. If you are under 18, you may only use the Services with the permission of a parent or guardian who has reviewed and agreed to these Terms on your behalf.</li>
            <li><strong className="text-yellow-400">Termination:</strong> We reserve the right to suspend or terminate your account if you violate these Terms or for any other reason at our sole discretion. Upon account deletion, your data will be processed in accordance with our Privacy Policy. You may delete your account at any time through the app settings or by contacting us.</li>
          </ul>
        </div>
      )
    },
    {
      id: "user-conduct",
      title: "3. User Conduct",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Use the Services in any way that violates applicable federal, state, local, or international law.</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services.</li>
            <li>Impersonate or attempt to impersonate Mind Clear Studio, our employees, another user, or any other person or entity.</li>
            <li>Upload or transmit viruses, Trojan horses, or other malicious code.</li>
            <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services or the server on which the Services are stored.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div>
            <p className="mb-2">
              <strong className="text-yellow-400">Our Content:</strong> The Services and their entire contents, features, and functionality
              (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection,
              and arrangement thereof) are owned by Mind Clear Studio LLC, its licensors, or other providers of such material and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>
          <div>
            <p>
              <strong className="text-yellow-400">User Content:</strong> You retain ownership of any data, text, or other materials you
              upload or input into the Services ("User Content"). However, by providing User Content, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing
              and improving the Services to you.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "payment-terms",
      title: "5. Payment Terms",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-yellow-400">Subscriptions:</strong> Some portions of the Services may be available only via a paid
              subscription. You will be billed in advance on a recurring and periodic basis (such as monthly or annually), depending on
              the type of subscription plan you select.
            </li>
            <li>
              <strong className="text-yellow-400">Billing:</strong> You agree to provide valid payment information. By submitting such
              payment information, you automatically authorize Mind Clear Studio LLC to charge all subscription fees incurred through your
              account to any such payment instruments.
            </li>
            <li>
              <strong className="text-yellow-400">Refunds:</strong> Except when required by law, paid subscription fees are non-refundable.
              Certain refund requests for subscriptions may be considered by Mind Clear Studio on a case-by-case basis and granted at the
              sole discretion of the company.
            </li>
            <li>
              <strong className="text-yellow-400">Changes:</strong> We may modify subscription fees at any time. Any subscription fee change
              will become effective at the end of the then-current billing cycle.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "disclaimers",
      title: "6. Disclaimers and Warranties",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-semibold text-yellow-400">
            The Services are provided on an "AS IS" and "AS AVAILABLE" basis.
          </p>
          <p>
            Mind Clear Studio LLC makes no representations or warranties of any kind, express or implied, regarding the operation of the
            Services or the information, content, or materials included therein. To the full extent permissible by law, we disclaim all
            warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular
            purpose. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </div>
      )
    },
    {
      id: "limitation-liability",
      title: "7. Limitation of Liability",
      icon: AlertTriangle,
      content: (
        <p>
          To the fullest extent provided by law, in no event will Mind Clear Studio LLC, its affiliates, or their licensors, service
          providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or
          in connection with your use, or inability to use, the Services, including any direct, indirect, special, incidental, consequential,
          or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss
          of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, whether caused by tort
          (including negligence), breach of contract, or otherwise, even if foreseeable.
        </p>
      )
    },
    {
      id: "dispute-resolution",
      title: "8. Dispute Resolution and Governing Law",
      icon: Gavel,
      content: (
        <div className="space-y-4">
          <div>
            <p className="mb-2">
              <strong className="text-yellow-400">Governing Law:</strong> All matters relating to the Services and these Terms shall be
              governed by and construed in accordance with the internal laws of the State of Missouri, without giving effect to any choice
              or conflict of law provision or rule.
            </p>
          </div>
          <div>
            <p className="mb-2">
              <strong className="text-yellow-400">Mediation:</strong> In the event of any dispute, claim, or controversy arising out of or
              relating to these Terms, the parties agree to first try in good faith to settle the dispute by mediation administered by a
              neutral mediator in Missouri before resorting to litigation.
            </p>
          </div>
          <div>
            <p>
              <strong className="text-yellow-400">Jurisdiction:</strong> Any legal suit, action, or proceeding arising out of, or related
              to, these Terms or the Services shall be instituted exclusively in the federal courts of the United States or the courts of
              the State of Missouri.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "privacy-policy",
      title: "9. Privacy Policy",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>
            Your use of the Services is also subject to our Privacy Policy. Please review our Privacy Policy, which explains how we collect,
            use, and share your information.
          </p>
          <p>
            <Link href="/privacy" className="text-yellow-400 underline hover:text-yellow-300 inline-flex items-center gap-1">
              Privacy Policy <ExternalLink className="w-4 h-4" />
            </Link>
          </p>
        </div>
      )
    },
    {
      id: "termination",
      title: "10. Termination",
      icon: Lock,
      content: (
        <p>
          We may terminate or suspend your access to all or part of the Services immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will
          cease immediately. For information regarding data retention and deletion post-termination, please refer to our{" "}
          <Link href="/privacy" className="text-yellow-400 underline hover:text-yellow-300">Privacy Policy</Link>.
        </p>
      )
    },
    {
      id: "changes-to-terms",
      title: "11. Changes to Terms",
      icon: RefreshCw,
      content: (
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days'
          notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By
          continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
        </p>
      )
    },
    {
      id: "contact",
      title: "12. Contact Us",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>If you have any questions about these Terms, please contact us at:</p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-yellow-400">Mind Clear Studio LLC</strong></p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@mind-clear.com" className="text-yellow-400 underline hover:text-yellow-300">
                support@mind-clear.com
              </a>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-yellow-600/30 backdrop-blur-sm mb-8">
            <FileText className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Terms of Service</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Service</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Please read these terms carefully before using our Services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="text-sm text-gray-400 mb-12 text-center">
          <div>Last Updated: <strong className="text-gray-200">January 11, 2026</strong></div>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={section.id} className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                </div>
                <h2 className="text-3xl font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors">
                  {section.title}
                </h2>
              </div>

              <div className="ml-16 text-gray-300 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-400 bg-black/50 border-t border-gray-800">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="/" className="text-yellow-500 hover:underline">Home</Link>
          <span className="text-gray-600">|</span>
          <Link href="/privacy" className="text-yellow-500 hover:underline">Privacy Policy</Link>
        </div>
        <p>© 2026 Mind Clear Studio. All rights reserved.</p>
        <p className="mt-2">These Terms of Service are effective as of January 11, 2026.</p>
      </footer>
    </div>
  );
}
