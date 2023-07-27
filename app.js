const API_KEY = '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'
const submitButton = document.querySelector('#submit')

async function getMessage() {
    console.log("works")
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user",  content: "Hello!"}],
            max_tokens: 1000

        })
        
    }
    try{
        const response =  await fetch('https://api.openai.com/v1/chat/completions', options)
        const data =  await response.json()
        console.log(data)
    }
    catch (error){
        console.log(error)
    }
}

submitButton.addEventListener('click', getMessage)