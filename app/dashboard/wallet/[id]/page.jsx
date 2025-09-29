"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import BalanceCard from './_components/BalanceCard';
import SummaryCard from './_components/SummaryCard';
import VirtualCard from './_components/VirtualCard';
import Search from '../../../_components/Search';
import BalanceFundTable from './_components/BalanceFundTable';
import useWalletDetails from './_hooks/useWalletDetails';
import PageLoadingState from '../../../_components/PageLoadingState';
import EmptyState from '../../../_components/EmptyState';

export default function WalletDetailsPage() {
    const params = useParams();
    const walletId = params.id;
    const [searchTerm, setSearchTerm] = useState('');
    
    // Fetch wallet details using the hook
    const { walletDetails, loading, error } = useWalletDetails(walletId);
  
    const accountData = {
      accountNumber: '7484938282',
      bankName: 'Wema',
      bankCode: '045',
      accountHolder: 'Belyfted Limited',
      accountType: 'Corporate'
    };
    
    const transactions = [
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      },
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      },
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      },
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      },
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      },
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      },
      {
        balanceLogId: '123339933',
        transactionRef: '27278282929',
        date: '09/09/2025 10:00am',
        reason: 'Payout Successful',
        description: 'Disbursement Successful',
        method: 'Balance',
        amount: 4000
      }
    ];
    
    const filteredTransactions = transactions.filter(transaction =>
      transaction.transactionRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

  // Show loading state
  if (loading) {
    return (
      <div className="flex-1">
        <PageLoadingState 
          title="Loading Wallet Details"
          description="Fetching wallet information..."
        />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex-1">
        <EmptyState 
          title="Failed to Load Wallet"
          description={error}
        />
      </div>
    );
  }

  // Show empty state if no wallet details
  if (!walletDetails) {
    return (
      <div className="flex-1">
        <EmptyState 
          title="Wallet Not Found"
          description="The requested wallet could not be found."
        />
      </div>
    );
  }

  return (
    <div className="flex-1">
          <div className=" mx-auto space-y-6">
        {/* Top Row - Balance and Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_275px] xl:grid-cols-[275px_275px_1fr] gap-[17px]">
            <BalanceCard 
            balance={walletDetails.available} 
            lockedBalance={walletDetails.locked} 
            balanceId={walletDetails.id}
            currency={walletDetails.currency}
            />
            <SummaryCard
            title="Total Amount Funded" 
            amount={32000} 
            isTotal={true} 
          />
          <VirtualCard accountData={accountData} />
          </div>
          </div>

          <div className='flex justify-between items-center mt-[39px]'>
            <h1 className='font-medium'>Balance History</h1>
            <Search/>
          </div>

          <div className='overflow-x-scroll h-full mt-[14px]'>
            <BalanceFundTable data={filteredTransactions} loading={false} />
          </div>
    </div>
  );
}