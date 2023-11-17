const folderUrl = 'https://api.github.com/repos/fanyvamp/fanyvamptest.github.io/contents/Test/';

$.get(folderUrl).done(data => $('#imageContainer').append(data.reverse().filter(item => item.type === 'file').map(item => 
    $('<div>', { class: 'FanArt col-sm-6 col-md-4 col-lg-3' }).append(
        $('<div>', { class: 'card mb-4' }).append(
            $('<img>', { src: item.download_url, class: 'card-img-top img-fluid shake-' + ['little','slow','slow','horizontal','vertical'][Math.floor(Math.random() * 5)] }),
            $('<div>').append(
                $('<span>', { class: 'btns Copy', html: '<img src="Sources/Icon/Copy.png">' }).on('click', () => copyImageToClipboard(item.download_url)),
                $('<span>', { class: 'btns right', html: '<img src="Sources/Icon/Download.png">' }).on('click', () => downloadImage(item.download_url))
            )
        )
    )
)));
