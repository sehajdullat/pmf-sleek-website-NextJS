"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Home, Key, User } from "lucide-react";

type UserType = "owner" | "renter" | "existing" | null;

const initialOptions = [
  { id: "owner", label: "I own a rental property", icon: Home },
  { id: "renter", label: "I'm looking to rent", icon: Key },
  { id: "existing", label: "I'm an existing client", icon: User },
];

export function InquiryAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [message, setMessage] = useState("");

  const handleOptionClick = (type: UserType) => {
    setUserType(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to an AI backend when Cloud is enabled
    console.log("Message submitted:", message, "User type:", userType);
    setMessage("");
  };

  const resetChat = () => {
    setUserType(null);
    setMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-soft-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-soft-xl border border-border overflow-hidden transition-all duration-300 ${isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-sm">PMF Assistant</h4>
            <p className="text-xs text-primary-foreground/70">We typically reply instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="h-72 p-4 overflow-y-auto bg-muted/30">
          {/* Initial Message */}
          <div className="mb-4">
            <div className="bg-card rounded-lg rounded-tl-none p-3 shadow-soft-sm max-w-[85%]">
              <p className="text-sm text-foreground">Hi — how can we help you today?</p>
            </div>
          </div>

          {/* Options or Follow-up */}
          {!userType ? (
            <div className="space-y-2">
              {initialOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id as UserType)}
                  className="w-full flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-sage hover:bg-sage-light/50 transition-all text-left"
                >
                  <option.icon size={18} className="text-sage shrink-0" />
                  <span className="text-sm text-foreground">{option.label}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {/* User selection shown as their message */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-[85%]">
                  <p className="text-sm">
                    {initialOptions.find((o) => o.id === userType)?.label}
                  </p>
                </div>
              </div>

              {/* Response based on user type */}
              <div className="bg-card rounded-lg rounded-tl-none p-3 shadow-soft-sm max-w-[85%]">
                <p className="text-sm text-foreground">
                  {userType === "owner" &&
                    "Great! We'd love to learn more about your property. Would you like to schedule a free rental analysis, or do you have a specific question?"}
                  {userType === "renter" &&
                    "Thanks for your interest! You can view our available rentals and apply online through our tenant portal. Would you like me to direct you there?"}
                  {userType === "existing" &&
                    "Welcome back! How can we assist you today? You can access your portal directly, or let me know if you have a maintenance request or question."}
                </p>
              </div>

              <button
                onClick={resetChat}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Start over
              </button>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-card">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-sage/50"
            />
            <Button type="submit" size="icon" variant="sage" disabled={!message.trim()}>
              <Send size={16} />
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 text-center">
            Responses are fast & helpful. Complex queries go to our team.
          </p>
        </form>
      </div>
    </>
  );
}
