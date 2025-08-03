export async function handler(event) {
  const TELEGRAM_TOKEN = "8198187646:AAGV8sbuaQIiCs1i54pNGYt4trK4YBX2wnA";
  const TELEGRAM_CHAT_ID = "7003207799";

  try {
    const { message } = JSON.parse(event.body);

    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
      }
    );

    const data = await res.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
}
