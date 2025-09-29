"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useBeneficiaryDetail from "../_hooks/useBeneficiaryDetail";
import PageLoadingState from "../../../../_components/PageLoadingState";
import EmptyState from "../../../../_components/EmptyState";
import DeleteBeneficiaryModal from "../_components/DeleteBeneficiaryModal";


function BeneficiaryDetailsPage({ params }) {
  const router = useRouter();
  const { beneficiary, loading, error, deleteBeneficiary } = useBeneficiaryDetail(params?.id);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);


  const beneficiaryData = beneficiary ? {
    id: beneficiary.uuid,
    beneficiaryName: beneficiary.account_name,
    accountType: "Bank Account", // Default value since not provided by API
    account: beneficiary.account_number,
    beneficiaryType: "Individual", // Default value since not provided by API
    beneficiaryMail: beneficiary.email || "N/A",
    beneficiaryBank: beneficiary.bank_name,
    swiftCode: "N/A", // Not provided by API
    sortCode: "N/A", // Not provided by API
    country: beneficiary.country_name || beneficiary.country_code,
    currency: beneficiary.currency,
    bank_code: beneficiary.bank_code,
    country_code: beneficiary.country_code,
    is_active: beneficiary.is_active,
    createdAt: beneficiary.created_at ? new Date(beneficiary.created_at).toLocaleDateString() : "N/A",
  } : null;

  const handleDeleteBeneficiary = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    setDeleteLoading(true);
    const success = await deleteBeneficiary();
    setDeleteLoading(false);
    
    if (success) {
      setShowDeleteModal(false);
      router.push("/dashboard/outbound/beneficiary");
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  if (loading) {
    return (
      <PageLoadingState
        title="Loading Beneficiary Details"
        description="Fetching beneficiary information..."
      />
    );
  }

  if (error || !beneficiaryData) {
    return (
      <EmptyState 
        title="Beneficiary Not Found"
        description="The beneficiary you're looking for doesn't exist or has been removed."
      />
    );
  }

  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Beneficiary Details
          </h1>
          <p className="text-[#8E98A8] font-medium">
            This are the details of a beneficiary
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex justify-end w-full md:w-auto">
          <button
            onClick={handleDeleteBeneficiary}
            className="px-6 py-[10px] bg-[#BF0000] text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete Beneficiary
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="bg-[#eaeaed] rounded-xl p-6 max-w-[1061px]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Name - Fixed: was showing createdAt instead of beneficiaryName */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">Name</h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.beneficiaryName}
            </p>
          </div>

          {/* Account Type */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Account Type
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.accountType}
            </p>
          </div>

          {/* Account Number */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Account number
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.account}
            </p>
          </div>

          {/* Beneficiary Type */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Beneficiary Type
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.beneficiaryType}
            </p>
          </div>

          {/* Beneficiary Mail */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Beneficiary Mail
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.beneficiaryMail}
            </p>
          </div>

          {/* Beneficiary Bank */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Beneficiary Bank
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.beneficiaryBank}
            </p>
          </div>

          {/* Swift Code */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Swift Code
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.swiftCode}
            </p>
          </div>

          {/* Sort Code */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Sort Code
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.sortCode}
            </p>
          </div>

          {/* Country */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">Country</h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.country}
            </p>
          </div>

          {/* Currency */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Currency
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.currency}
            </p>
          </div>

          {/* Created At - Added since it was missing */}
          <div>
            <h3 className="text-[#8E98A8] text-xs font-medium mb-1">
              Created At
            </h3>
            <p className="text-[#333333] text-xs font-semibold">
              {beneficiaryData.createdAt}
            </p>
          </div>
        </div>
      </div>

      {/* Delete Beneficiary Modal */}
      <DeleteBeneficiaryModal
        isOpen={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
        beneficiaryName={beneficiaryData?.beneficiaryName}
      />
    </div>
  );
}

export default BeneficiaryDetailsPage;
