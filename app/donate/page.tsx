"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function DonatePage() {
  const paybillNumber = "522522";
  const accountNumber = "PIONEERS";
  const mpesaNumber = "+254742767609";

  const whatsappMessage = encodeURIComponent(
    "Hello, I have made a donation to Pioneers Footprints. Kindly confirm receipt."
  );

  const whatsappLink = `https://wa.me/254742767609?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-md w-full transition-colors duration-300">
          <h1 className="text-2xl sm:text-3xl font-font-[Times_New_Roman Bold size 14 ] text-center mb-4 text-indigo-600 dark:text-indigo-400">
            Support Pioneers Footprints
          </h1>

          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            Your donation supports publishing Mistry, Media Ministry, medical missionary work, and preserving the historic Advent message.
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-xl mb-4 transition-colors duration-300">
            <p className="font-semibold size 12 text-indigo-700 dark:text-indigo-200 mb-2 mx-30">
              Bank Account
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 dark:text-gray-200">Paybill:</span>
              <span className="font-bold">{paybillNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-200">Account:</span>
              <span className="font-bold">{accountNumber}</span>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-xl mb-6 transition-colors duration-300">
            <p className="font-Bold [Times_New_Roman Bold] size 13 text-green-700 dark:text-green-200 mb-2 mx-25">
              Send Money (Direct)
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-200">
                MPesa Number:
              </span>
              <span className="font-bold">{mpesaNumber}</span>
            </div>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `Paybill: ${paybillNumber}, Account: ${accountNumber}, Send Money: ${mpesaNumber}`
              );
              alert("Payment details copied!");
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mb-3"
          >
            Copy Payment Details
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        
          >
            Confirm Donation on WhatsApp
          </a>

          <p className="text-gray-500 dark:text-gray-400 text-xs mt-4 text-center">
            Thank you for supporting the work. Your contribution helps advance the mission.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
