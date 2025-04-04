"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Trusted Plumbing Subcontractor</h1>
        <p className="text-lg mb-6">
          Partnering with General Contractors to Deliver Code-Compliant, On-Time Plumbing Solutions.
        </p>
        <div className="space-x-4">
          <Button>Request a Bid</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
