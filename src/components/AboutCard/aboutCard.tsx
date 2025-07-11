"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export function AboutCard() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-4xl p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* About Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              I'm a passionate engineer from India, skilled in web, mobile, and game development. My journey in tech is driven by curiosity and a commitment to building impactful solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-gray-600 dark:text-gray-400">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Contact Info
            </h3>
            <p><strong>Name:</strong> Amanpreet Singh</p>
            <p><strong>Email:</strong> amanpreetsinghjhiwant7@gmail.com</p>
            <p><strong>Location:</strong> Punjab, India</p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
