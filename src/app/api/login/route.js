import { _post } from "../../../utils/http";

export async function POST(req) {
  const { login, password } = req.body;

  const response = await _post("https://auth.etna-alternance.net/identity", {
    login,
    password,
  });

  return new Response(JSON.stringify(response), {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-GB,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json;charset=UTF-8",
      pragma: "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  });
}
