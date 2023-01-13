const testimonials = [
    {
        name: 'Cosetta F',
        photoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: "I will recommend you to my colleagues. I wish I would have thought of it first.",
    },

    {
        name: ' Neysa L ',
        photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60 ',
        text: "Thank you so much for your help. Apple has got everything I need ",
    },

    {
        name: ' Ronica K',
        photoUrl: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60 ',
        text: "It's incredible. If you want real marketing that works and effective implementation - apple's got you covered. ",
    },

    {
        name: ' Ursola M',
        photoUrl: ' https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60',
        text: "I am really satisfied with my apple. Apple saved my business. You've saved our business! ",
    },

    {
        name: ' Merrick A',
        photoUrl: ' https://images.unsplash.com/photo-1529903543134-d2d0b6858e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        text: "I would also like to say thank you to all your staff. Apple is the real deal! It's just amazing. ",
    }
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');
let idx = 0;

updateTestimonials();

function updateTestimonials() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;

    if (idx === testimonials.lenght) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonials();
    }, 5000)
}