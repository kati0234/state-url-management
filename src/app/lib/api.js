async function getSub() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnaXJ6ZmVqZ2RndGFvd3N4bnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MzQ3OTEsImV4cCI6MjA0ODExMDc5MX0.FZfOpxVsZ9uG43qbwITtySF7vlM4tqSVlVc68QbZzmE",
  };

  let response = await fetch(
    "https://hgirzfejgdgtaowsxnul.supabase.co/rest/v1/subscriptions",
    {
      method: "GET",
      headers: headersList,
    }
  );
  //text skal rettes til jason
  let data = await response.jason();
  console.log(data);
}
