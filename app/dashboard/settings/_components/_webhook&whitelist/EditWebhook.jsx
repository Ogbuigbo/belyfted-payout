import React, { useState, useEffect } from "react";

function EditWebhook({ webhook, onCancel, onSave }) {
  const [url, setUrl] = useState("");
  const [environment, setEnvironment] = useState("");

  const formatUrl = (inputUrl) => {
    // If URL doesn't start with http:// or https://, add https://
    if (inputUrl && !inputUrl.match(/^https?:\/\//)) {
      return `https://${inputUrl}`;
    }
    return inputUrl;
  };

  useEffect(() => {
    if (webhook) {
      setUrl(webhook.url || "");
      setEnvironment(webhook.environment || "");
    }
  }, [webhook]);

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
        <input
          type="text"
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          className="w-full py-[10px] px-4 rounded-xl border mt-2 border-[#C8C6C9]"
        />
      </div>

      <div className="absolute bottom-0 w-full flex gap-6">
        <button
          onClick={onCancel}
          className="text-sm font-medium border border-[#C8C6C9] rounded-lg py-4 w-full"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (!url.trim()) {
              alert('Please enter a URL');
              return;
            }
            const formattedUrl = formatUrl(url.trim());
            onSave({ ...webhook, url: formattedUrl });
          }}
          className="text-sm font-medium text-white bg-[#042656] rounded-lg py-4 w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditWebhook;
