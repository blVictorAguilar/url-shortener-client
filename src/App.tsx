import { useState } from "react";
import { Card, CardContent, Button, Input } from "./components";
import { api_instance } from "../api/api-config/api-instance";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (url) {
      api_instance
        .post("/create", {
          url,
        })
        .then(({ data }) => {
          setError("");
          setShortenedUrl(data.new_url);
        })
        .catch(({ response }) => {
          setShortenedUrl("");
          setError(response.data.error);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="p-6 shadow-lg w-full max-w-md">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">URL Shortener</h1>
          <Input
            placeholder="Enter a URL to shorten"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mb-4"
          />
          <Button
            onClick={handleShorten}
            disabled={!url.trim()}
            className="w-full mb-4"
          >
            Shorten URL
          </Button>
          {error && <span className="text-red-600">{error}</span>}
          {shortenedUrl && (
            <div className="mt-4 p-4 bg-black-100 rounded-lg">
              <p className="text-sm font-semibold">Shortened URL:</p>
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {shortenedUrl}
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
