"use client";
import React from "react";
import { Shield, Zap, Globe, Lock, Cpu, Users, Check, Star, Gauge, Network } from "lucide-react";

const BubbleComponent = ({ 
  text, 
  icon: Icon, 
  color, 
  size = "medium", 
  delay = 0,
  startY
}: {
  text: string;
  icon: any;
  color: string;
  size?: "small" | "medium" | "large";
  delay?: number;
  startY: string;
}) => {
  const sizeClasses = {
    small: "w-24 h-24 text-xs",
    medium: "w-32 h-32 text-sm",
    large: "w-40 h-40 text-base"
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} rounded-full ${color} backdrop-blur-sm border border-white/20 
        flex flex-col items-center justify-center text-white font-bold shadow-lg
        hover:scale-110 transition-all duration-300 cursor-pointer
        hover:shadow-xl hover:border-white/40`}
      style={{
        top: startY,
        animationDelay: `${delay}s`,
        animation: 'flowAndBounce 25s linear infinite',
        textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)',
      }}
    >
      <Icon className="w-6 h-6 mb-1 opacity-100 drop-shadow-md" />
      <span className="text-center px-2 leading-tight drop-shadow-md">{text}</span>
    </div>
  );
};

const Reason = () => {
  const bubbles = [
    {
      text: "Secure",
      icon: Shield,
      color: "bg-gradient-to-br from-pink-600 to-pink-800",
      size: "medium" as const,
      startY: "15%",
      delay: 0
    },
    {
      text: "Trusted",
      icon: Check,
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      size: "large" as const,
      startY: "65%",
      delay: 2
    },
    {
      text: "Accessible",
      icon: Users,
      color: "bg-gradient-to-br from-cyan-600 to-cyan-800",
      size: "medium" as const,
      startY: "35%",
      delay: 4
    },
    {
      text: "Reliable",
      icon: Star,
      color: "bg-gradient-to-br from-orange-600 to-orange-800",
      size: "large" as const,
      startY: "5%",
      delay: 6
    },
    {
      text: "Flexible",
      icon: Network,
      color: "bg-gradient-to-br from-green-600 to-green-800",
      size: "medium" as const,
      startY: "75%",
      delay: 8
    },
    {
      text: "Private",
      icon: Lock,
      color: "bg-gradient-to-br from-emerald-600 to-emerald-800",
      size: "medium" as const,
      startY: "45%",
      delay: 10
    },
    {
      text: "Fast",
      icon: Zap,
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      size: "large" as const,
      startY: "25%",
      delay: 12
    },
    {
      text: "Global",
      icon: Globe,
      color: "bg-gradient-to-br from-red-600 to-red-800",
      size: "medium" as const,
      startY: "80%",
      delay: 14
    },
    {
      text: "Optimized",
      icon: Cpu,
      color: "bg-gradient-to-br from-teal-600 to-teal-800",
      size: "medium" as const,
      startY: "55%",
      delay: 16
    },
    {
      text: "Efficient",
      icon: Gauge,
      color: "bg-gradient-to-br from-amber-600 to-amber-800",
      size: "large" as const,
      startY: "10%",
      delay: 18
    },
    {
      text: "Versatile",
      icon: Network,
      color: "bg-gradient-to-br from-lime-600 to-lime-800",
      size: "medium" as const,
      startY: "70%",
      delay: 20
    },
    {
      text: "Connected",
      icon: Network,
      color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
      size: "medium" as const,
      startY: "40%",
      delay: 22
    },
    {
      text: "Comprehensive",
      icon: Star,
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      size: "large" as const,
      startY: "85%",
      delay: 24
    },
    {
      text: "Stable",
      icon: Shield,
      color: "bg-gradient-to-br from-slate-600 to-slate-800",
      size: "medium" as const,
      startY: "20%",
      delay: 26
    }
  ];

  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-[367px] sm:max-w-[845px] mx-auto text-center mb-16">
        <h1 className="text-[35px] sm:text-[40px] font-semibold text-[#1A1A1A] leading-[116.7%]">
          Why Educational Leaders Choose <span className="text-blue-600">Talim</span>
        </h1>
        <p className="mt-4 text-[16px] md:text-[18px] text-[#767676] max-w-[650px] mx-auto leading-[124.7%]">
          Designed specifically for modern educational institutions worldwide with unmatched reliability, enterprise-grade security, and proven ROI. Join the education revolution that's transforming how schools operate.
        </p>
      </div>
      
      {/* Interactive Bubbles Container */}
      <div className="relative w-full h-96 max-w-6xl mx-auto overflow-hidden">
        {bubbles.map((bubble, index) => (
          <BubbleComponent
            key={index}
            text={bubble.text}
            icon={bubble.icon}
            color={bubble.color}
            size={bubble.size}
            delay={bubble.delay}
            startY={bubble.startY}
          />
        ))}
        
        {/* Floating particles for extra visual appeal */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${4 + i}s`,
                animation: 'floatSlow 8s ease-in-out infinite',
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes flowAndBounce {
          0% {
            left: -200px;
            transform: translateY(0px) rotate(0deg);
          }
          15% {
            transform: translateY(-40px) rotate(2deg);
          }
          30% {
            transform: translateY(10px) rotate(-1deg);
          }
          45% {
            transform: translateY(-25px) rotate(1deg);
          }
          60% {
            transform: translateY(5px) rotate(-2deg);
          }
          75% {
            transform: translateY(-35px) rotate(1deg);
          }
          90% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            left: calc(100% + 200px);
            transform: translateY(-15px) rotate(0deg);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Reason;
