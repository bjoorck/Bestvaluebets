// netlify/functions/fetchTips.js

export async function handler(event, context) {
  try {
    const url = 'https://raw.githubusercontent.com/bjoorck/Bestvaluebets/main/tips.csv';
    const res = await fetch(url);
    if (!res.ok) {
      return { statusCode: res.status, body: `Error fetching CSV: ${res.statusText}` };
    }

    const csv = await res.text();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/plain' },
      body: csv
    };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
}
