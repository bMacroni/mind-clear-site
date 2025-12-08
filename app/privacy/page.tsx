"use client";

import React from "react";
import { ArrowLeft, Shield, FileText, Mail, Globe, Users, Lock, Eye, Trash2, Settings, Clock, ExternalLink, Baby, RefreshCw, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            Mind Clear ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
          </p>
          <p>
            By using the Service, you consent to the practices described in this Privacy Policy. If you are under 13 (or under the applicable age in your country),
            you may only use the Service with the involvement of a parent or guardian.
          </p>
        </div>
      )
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Account Information:</strong> Email address, name, and profile picture (via Google Sign-In).</li>
              <li><strong>User Content:</strong> Goals, tasks, milestones, AI conversations, and other content you create.</li>
              <li><strong>Preferences:</strong> App settings, notification preferences, and scheduling preferences.</li>
              <li><strong>Feedback:</strong> Support requests, survey responses, and other feedback.</li>
              <li><strong>Payment Information:</strong> Only if you make purchases; payment info is handled and stored securely by our payment processor (we do not store full credit card numbers).</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Device Information:</strong> Device type, operating system, app version, unique device identifiers.</li>
              <li><strong>Usage Data:</strong> How you interact with the app, features used, and time spent in the app.</li>
              <li><strong>Location Data:</strong> Approximate location for travel time calculations (only when you enable location services).</li>
              <li><strong>Crash Reports:</strong> Technical information about app crashes and errors.</li>
              <li><strong>Analytics Data:</strong> App performance metrics, AI usage patterns, and feature interaction.</li>
              <li><strong>Cookies / Tracking:</strong> The Service may use cookies, SDKs, or similar technologies for analytics and performance.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Google Account Data:</strong> Information from your Google account when you sign in.</li>
              <li><strong>Calendar Data:</strong> Google Calendar events (only when you grant permission).</li>
              <li><strong>Weather Data:</strong> Local weather information for scheduling optimization.</li>
              <li><strong>Google OAuth Scopes:</strong> Specifically for Google integration, the following OAuth Scopes are requested: openid, email, profile, and <code className="bg-gray-800 text-yellow-300 rounded px-1 text-sm">https://www.googleapis.com/auth/calendar.events.readonly</code>.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Provide the Service: Deliver goal and task management features.</li>
            <li>AI Processing: Process your conversations, goals, and tasks to provide AI-powered assistance and personalized recommendations via trusted third-party AI services, including Groq and Google.</li>
            <li>Scheduling: Optimize task scheduling based on your preferences and external factors.</li>
            <li>Notifications: Send reminders and updates about your goals and tasks.</li>
            <li>Marketing & Communication: Send optional promotional emails or updates (you may opt out at any time).</li>
            <li>Service Improvement: Analyze usage patterns to enhance app functionality.</li>
            <li>Support: Respond to your inquiries and provide customer support.</li>
            <li>Security: Detect, prevent, and address fraud, abuse, and other security threats.</li>
          </ul>
        </div>
      )
    },
    {
      id: "information-sharing",
      title: "4. Information Sharing and Disclosure",
      icon: Users,
      content: (
        <div className="space-y-6">
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">4.1 Service Providers</h3>
            <p className="mb-2">We share information with trusted third-party services that help us operate and provide our core features:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Groq:</strong> Used for high-speed AI inference and processing of user prompts/conversations. For these specific AI requests, the user's input (prompts/context) is not retained by Groq and is not used to train their models.</li>
              <li><strong>Google:</strong> Authentication, Calendar integration, and other AI services.</li>
              <li><strong>Supabase:</strong> Database and authentication services.</li>
              <li><strong>Firebase:</strong> Analytics and crash reporting.</li>
              <li><strong>Railway:</strong> Backend hosting services.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-400"><strong>Note:</strong> This list may be updated as our technical infrastructure evolves.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or to: comply with legal obligations, protect our rights, property, or safety, and the safety of our users, and prevent fraud, abuse, or security incidents.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, user information may be transferred to the new owner.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">4.4 Aggregated and De-Identified Data</h3>
            <p>We may share aggregated, anonymized data for research, analytics, or marketing purposes. This data cannot reasonably identify you.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">4.5 With Your Consent</h3>
            <p>We may share your information with third parties when we have your explicit consent to do so.</p>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "5. Data Security",
      icon: Lock,
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><strong>Encryption:</strong> Data is encrypted in transit and at rest.</li>
          <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis.</li>
          <li><strong>Authentication:</strong> Secure authentication is enforced, primarily through trusted providers like Google Sign-In.</li>
          <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing.</li>
          <li><strong>Secure Infrastructure:</strong> Hosting on secure, compliant platforms.</li>
          <li><strong>Breach Notification:</strong> Users will be informed promptly in case of a data breach affecting personal information.</li>
        </ul>
      )
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p>We retain your information only as long as necessary to provide the Service:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Account Data: Retained while your account is active.</li>
            <li>User Content: Retained until you delete it or close your account.</li>
            <li>Analytics Data: Retained for up to 2 years.</li>
            <li>Crash Reports: Retained for up to 1 year.</li>
          </ul>
          <p>
            <strong>Deletion:</strong> Deleted information will be completely removed from our systems within 30 days, though it may remain in backups for a limited period until the next backup cycle is complete.
          </p>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "7. Your Rights and Choices",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Access: View and download your data.</li>
            <li>Correction: Update or correct your information.</li>
            <li>Deletion: Delete individual content or request account deletion.</li>
            <li>Portability: Receive your data in a structured, machine-readable format.</li>
            <li>Restriction & Objection: Limit or object to processing under applicable laws.</li>
            <li>Opt-Out: Opt out of marketing communications or the sale of personal information (where applicable).</li>
          </ul>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">7.1 Data Deletion & Account Management</h3>
            <p className="mb-2">You can delete your account and all associated data at any time by:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Using the "Delete Account" option in the app's Profile settings.</li>
              <li>Contacting us directly at <a href="mailto:mindclear.studio@gmail.com" className="text-yellow-400 underline hover:text-yellow-300">mindclear.studio@gmail.com</a>.</li>
            </ul>
            <p className="mt-2 text-gray-300">When you request deletion, we will remove all your personal information, goals, tasks, calendar data, and authentication tokens, completing the deletion process within 30 days.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">7.2 Notification Preferences</h3>
            <p>You can manage push notification settings in your device settings or app preferences, and opt out of email notifications in your account settings.</p>
          </div>
        </div>
      )
    },
    {
      id: "third-party-services",
      title: "8. Third-Party Services",
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <p>Our Service integrates with third-party services that have their own privacy policies. Key integrations include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><a href="https://policies.google.com/privacy" className="text-yellow-400 underline hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Google Services: Privacy Policy</a></li>
            <li><a href="https://groq.com/privacy" className="text-yellow-400 underline hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Groq Services: Privacy Policy</a></li>
            <li><a href="https://firebase.google.com/support/privacy" className="text-yellow-400 underline hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Firebase: Privacy Policy</a></li>
            <li><a href="https://supabase.com/privacy" className="text-yellow-400 underline hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Supabase: Privacy Policy</a></li>
          </ul>
        </div>
      )
    },
    {
      id: "international-users",
      title: "9. International Users",
      icon: Globe,
      content: (
        <p>If you are using the Service from outside the United States, your data may be transferred to and processed in the U.S. or other countries where our service providers operate. We ensure appropriate safeguards are in place for cross-border data transfers in accordance with applicable data protection laws.</p>
      )
    },
    {
      id: "childrens-privacy",
      title: "10. Children's Privacy",
      icon: Baby,
      content: (
        <p>The Service is not intended for children under 13 (or the applicable age in your jurisdiction). We do not knowingly collect personal information from children without parental consent. If we learn we have collected such information, we will delete it promptly.</p>
      )
    },
    {
      id: "policy-updates",
      title: "11. Policy Updates",
      icon: RefreshCw,
      content: (
        <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by updating the "Last Updated" date, posting the new Privacy Policy within the app, and/or sending you an email notification. Please review this page periodically for the latest information.</p>
      )
    },
    {
      id: "ai-generated-content",
      title: "12. AI-Generated Content",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <p>Our app includes AI-powered features that generate content and recommendations. Please note:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>AI responses are generated based on your input and may not always be accurate.</li>
            <li>You should verify important information and use your best judgment.</li>
            <li>AI-generated content is for productivity assistance only and should not be used as a substitute for professional advice.</li>
          </ul>
        </div>
      )
    },
    {
      id: "contact",
      title: "13. Contact Us",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="space-y-2 text-gray-300">
            <p><strong>Email:</strong> <a href="mailto:mindclear.studio@gmail.com" className="text-yellow-400 underline hover:text-yellow-300">mindclear.studio@gmail.com</a></p>
            <p><strong>Website:</strong> <Link href="/" className="text-yellow-400 underline hover:text-yellow-300">mind-clear.com</Link></p>
            <p><strong>Address:</strong> [Company Address Placeholder]</p>
          </div>
        </div>
      )
    },
    {
      id: "compliance",
      title: "14. Compliance",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>This Privacy Policy and our data practices are designed to comply with:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Google Play Store requirements</li>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Other applicable privacy laws</li>
          </ul>
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
            <Shield className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Privacy Policy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
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
          <div>Effective Date: <strong className="text-gray-200">September 22, 2025</strong></div>
          <div>Last Updated: <strong className="text-gray-200">December 7, 2025</strong></div>
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
        <p>© 2025 Mind Clear Studio. All rights reserved.</p>
        <p className="mt-2">This Privacy Policy is effective as of September 22, 2025.</p>
      </footer>
    </div>
  );
}

