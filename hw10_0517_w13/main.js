const main = document.querySelector('main')

let key = "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"

async function groqChat(q,language) {
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q+"的"+language+"翻譯為"}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))
    return jsonData.choices[0].message.content
}


async function chat() {
    var menu = document.getElementById('menu');
    var language = menu.options[menu.selectedIndex].text;
    console.log(language)
    let qNode = document.querySelector('#question')
    let responseNode = document.querySelector('#response')
    responseNode.innerText = '翻譯中，請稍等幾秒鐘 ...'
    let answer = await groqChat(qNode.value,language)
    responseNode.innerText = answer
}
