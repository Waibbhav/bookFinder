function findBook(){
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON",
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){
                // create img element for images
                var wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'media';
                var image = document.createElement('img');
                image.className = 'mr-3';
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
                // create div element with class of media body 
                var div =document.createElement('div');
                div.className = 'media-body';
                // create header for body
                var header = document.createElement('h3');
                header.className = 'mt-0';
                header.innerHTML = book.items[i].volumeInfo.title;
                // append header to the body
                div.appendChild(header);
                wrapperDiv.appendChild(image);
                wrapperDiv.appendChild(div);
                var line = document.createElement('hr');
                bookResult.appendChild(wrapperDiv);
                bookResult.appendChild(line);
               // create h5 element for author
                var author = document.createElement('h6');
                author.innerHTML = '<b>Author: </b>'+book.items[i].volumeInfo.authors;
                div.appendChild(author);
                // create paragraph for country
                var country = document.createElement('p');
                country.innerHTML = '<b>Country:</b>' + ' ' + book.items[i].accessInfo.country;
                div.appendChild(country);
                // create paragraph for pagecount
                var pageCount = document.createElement('p');
                pageCount.innerHTML ='<b>Pages: </b>'+ book.items[i].volumeInfo.pageCount;
                div.appendChild(pageCount);
                // create publisher 
                var publisher = document.createElement('p');
                publisher.innerHTML= '<b>Publisher: </b>'+ book.items[i].volumeInfo.publisher;
                div.appendChild(publisher);
                // create element for date
                var publishedDates = document.createElement('p');
                pageCount.innerHTML = '<b>Published in: </b>'+ book.items[i].volumeInfo.publishedDate;
                div.appendChild(publishedDates);
                // create element for discription
                var desc = document.createElement('p');
                desc.innerHTML = '<b>Description: </b>'+book.items[i].volumeInfo.description;
                div.appendChild(desc);
                // create a tag to target book link
                var link = document.createElement('a');
                link.innerHTML='<b>view more</b>';
                link.href = book.items[i].volumeInfo.previewLink;
                div.appendChild(link); 
                // create hr to separate every books info
                var line = document.createElement('hr');
                // Make every elements as children element of bookResult
                bookResult.appendChild(wrapperDiv);
                bookResult.appendChild(line);
                
            }
        }
    })
}