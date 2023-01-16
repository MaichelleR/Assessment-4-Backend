const complimentBtn = document.getElementById("complimentButton");
const popUp = document.getElementById("popUp");

const attemptBtn = document.getElementById("attempt");

const postBtn = document.getElementById("postExample")

const submitBtn = document.getElementById("numSubmit")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)







const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
     const data = res.data
     alert(data)

    });

};

fortuneBtn.addEventListener('click', getFortune)



const getPopUp = () => {
    axios.get("http://localhost:4000/api/popUp/")
        .then(res => {
            const data = res.data
            window.open(data)
        })
};



//popUp.addEventListener('click', getPopUp)

const putAttemptBtn = () => {
    axios.put("http://localhost:4000/api/attempt/:id")
    .then(res => {
        const data = res.data
        alert(data)
    })
};

attemptBtn.addEventListener('click', putAttemptBtn)


const postBtnExample = () => {
    axios.post("http://localhost:4000/api/postExample")
        .then(res => {
            const data = res.data
            alert(data)
        })
};

postBtn.addEventListener('click', postBtnExample)



const submitionHandler = () => {
    const numTxt = document.getElementById("numText") 
    console.log('text',numTxt.value); 
    const body = { num: numTxt.value }
    axios.post("http://localhost:4000/api/postNumButton", body)
    .then(res => {
        const data = res.data
        alert(data)
    })
}

submitBtn.addEventListener('click', submitionHandler)







