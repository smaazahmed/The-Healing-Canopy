async function getBotResponse(message) {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        return "I'm having trouble connecting to the AI. Please try again later.";
    }

    const data = await response.json();
    return data.reply;
}
