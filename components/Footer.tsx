import React, { useState } from "react";
import { Mail, Heart, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage("Please enter your email address");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Successfully added to waitlist!");
        setIsSuccess(true);
        setEmail(""); // Clear the input
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Brand section */}
          <div>
            <h3 className="text-4xl font-bold mb-4">
              Mind Clear <span className="text-yellow-500">Studio</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Building AI-powered solutions that empower everyday people to live their best lives.
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>by a solo developer</span>
            </div>
          </div>

          {/* Newsletter section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Stay in the Loop</h4>
            <p className="text-gray-400 mb-6">
              Be the first to know when Mind Clear launches and get updates on future projects.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-yellow-500 flex-1 disabled:opacity-50"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold whitespace-nowrap disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Mail className="w-4 h-4 mr-2" />
                  )}
                  {isLoading ? "Adding..." : "Join Waitlist"}
                </Button>
              </div>
              
              {/* Message display */}
              {message && (
                <div className={`flex items-center gap-2 text-sm ${
                  isSuccess ? 'text-green-400' : 'text-red-400'
                }`}>
                  {isSuccess ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Mind Clear Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
            <a href="mailto:mindclear.studio@gmail.com" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
