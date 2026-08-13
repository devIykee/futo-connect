"use client";

import { useState } from "react";

export default function WalletPage() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-2xl font-bold">Crypto Wallet</h1>
      <p className="mt-1 text-slate-600 dark:text-slate-400">
        Manage your balance and receive payments for completed assignments.
      </p>

      {!connected ? (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-5xl">👛</div>
          <h2 className="mt-4 text-xl font-semibold">Connect or Create Wallet</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            For the MVP we will support USDT on TRON or Solana (low fees, popular in Nigeria).
          </p>
          <button
            onClick={() => setConnected(true)}
            className="mt-6 w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Connect Wallet (Demo)
          </button>
          <p className="mt-3 text-xs text-slate-500">
            Real wallet integration (Phantom / TronLink / WalletConnect) comes next.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-lg">
            <p className="text-sm text-emerald-100">Available Balance</p>
            <p className="mt-1 text-4xl font-bold">48.50 USDT</p>
            <p className="mt-2 text-xs text-emerald-200">Demo wallet · Not real funds</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
              Receive
            </button>
            <button className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
              Send
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold">Recent Activity</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Received from Assignment #2</span>
                <span className="font-medium text-emerald-600">+20.00</span>
              </li>
              <li className="flex justify-between">
                <span>Donation – Football Championship</span>
                <span className="font-medium text-red-500">-5.00</span>
              </li>
              <li className="flex justify-between">
                <span>Received from Assignment #1</span>
                <span className="font-medium text-emerald-600">+15.00</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setConnected(false)}
            className="w-full rounded-xl border border-slate-300 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
          >
            Disconnect (Demo)
          </button>
        </div>
      )}
    </div>
  );
}
