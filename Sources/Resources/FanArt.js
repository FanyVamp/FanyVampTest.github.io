const folderUrl = 'https://api.github.com/repos/fanyvamp/fanyvamp.github.io/contents/Sources/Fanarts/';
    fetch(folderUrl)
        .then(response => response.json())
        .then(data => {
            data.reverse();
            const imageContainer = document.getElementById('imageContainer');
            data.filter(item => item.type === 'file').forEach(item => {
                const imgUrl = item.download_url;
                const colDiv = document.createElement('div');
                colDiv.className = 'FanArt col-sm-6 col-md-4 col-lg-3';
                const card = document.createElement('div');
                card.className = 'card mb-4';
    
                const cardImage = new Image();
                cardImage.src = imgUrl;
                cardImage.className = 'card-img-top img-fluid shake-' + ['little','slow','slow','horizontal', 'vertical', 'rotate', 'hard'][Math.floor(Math.random() * 5)];
    
                const BContainer = document.createElement('div');
    
                const CreateBtn = (text, icon, action) => {
                    const Btn = document.createElement('a');
                    Btn.className = 'btns ' + text;
                    Btn.innerHTML = `<img src="Sources/Icon/${icon}.png">`;
                    Btn.addEventListener('click', () => action(imgUrl));
                    BContainer.appendChild(Btn);
                };
    
                CreateBtn('Copy', 'Copy', copyImageToClipboard);
                CreateBtn('right', 'Download', downloadImage);
    
                card.append(cardImage, BContainer);
                colDiv.appendChild(card);
                imageContainer.appendChild(colDiv);
            });
                sr.reveal('.FanArt', {
                duration: 1500,   
                origin: 'top', 
                distance: '-20px', 
                delay: 200,       
                easing: 'ease-in-out', 
                });
            })
.catch(error => console.error('Error:', error));