const slideShow = {
    photoList: [
        'img1.jpg', 
        'img2.jpg', 
        'img3.jpg'
    ],
    currentPhotoIndex: 0,
    // assign annonymous function
    nextPhoto: function() {
        if(this.currentPhotoIndex === this.photoList.length - 1) {
            console.log('End of SlideShow');
        } else {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    // assign annonymous function
    prevPhoto: function() {
        if(this.currentPhotoIndex < 0) {
            console.log('Beginning of SlideShow');
        } else {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    }
}

slideShow.nextPhoto();
slideShow.nextPhoto();
