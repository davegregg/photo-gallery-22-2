let photoCount = 24
let galleryElement = document.querySelector("#gallery")

let getRandomImageURL = function (width=200, height=200) {
    return `https://picsum.photos/seed/${Math.random()}/${width}/${height}`
}

let addPhotoToGallery = function () {
    // <img src="..." alt="...">
    let imgElement = document.createElement("img")
    
    imgElement.setAttribute("src", getRandomImageURL())
    // imgElement.src = getRandomImageURL()
    imgElement.setAttribute("alt", "Randomly-selected photography. Contents are unknown.")
    // imgElement.alt = "Randomly-selected photography. Contents are unknown."
    imgElement.classList.add("gallery-image")
    
    galleryElement.append(imgElement)
    // galleryElement.prepend(imgElement)
    // galleryElement.before(imgElement.cloneNode())
    // galleryElement.after(imgElement)
    
    console.dir(imgElement)
}

for (let count = 0; count < photoCount; count += 1) {
    addPhotoToGallery()
}

let h1 = document.createElement("h1")
h1.append("Hello world!")
galleryElement.append(h1)

let detailsElement = document.createElement("details")
let summaryElement = document.createElement("summary")
summaryElement.append("The Name of the Cloned Learner")
detailsElement.append(summaryElement)
detailsElement.append("ZacharyZachary")
galleryElement.append(detailsElement)

// galleryElement.removeChild(detailsElement)
detailsElement.remove()
h1.remove()