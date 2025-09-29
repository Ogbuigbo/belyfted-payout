import React, { useState } from "react";

function CreateWebhook({ onSubmit, onCancel }) {
  const [url, setUrl] = useState("");
  const [environment, setEnvironment] = useState("");

  const formatUrl = (inputUrl) => {
    // If URL doesn't start with http:// or https://, add https://
    if (inputUrl && !inputUrl.match(/^https?:\/\//)) {
      return `https://${inputUrl}`;
    }
    return inputUrl;
  };

  const handleSave = () => {
    if (!url.trim()) {
      alert('Please enter a URL');
      return;
    }

    if (onSubmit) {
      // Format the URL to ensure it has a protocol
      const formattedUrl = formatUrl(url.trim());
      onSubmit({ url: formattedUrl });
    }
  };

  return (
    <div className="space-y-3 relative h-[75vh]">
      <div>
        <label className="text-sm font-medium">URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full py-[10px] px-4 rounded-xl border mt-2 border-[#C8C6C9]"
        />
        <p className="text-xs text-gray-500 mt-1">
          Enter a valid URL (e.g., https://example.com). If you don't include http:// or https://, we'll add https:// automatically.
        </p>
      </div>

      <div>
        <label className="text-sm font-medium">API Environment</label>
        <select
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          className="w-full py-[10px] px-4 rounded-xl border mt-2 outline-none border-[#C8C6C9] bg-white"
        >
          <option value="" disabled>
            Select environment
          </option>
          <option value="Live">Live</option>
          <option value="Test">Test</option>
        </select>
      </div>

      <div className="absolute bottom-0 w-full flex gap-6">
        <button
          onClick={onCancel}
          className="text-sm font-medium border border-[#C8C6C9] rounded-lg py-4 w-full"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="text-sm font-medium text-white bg-[#042656] rounded-lg py-4 w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateWebhook;
