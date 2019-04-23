const slideShow = {
    photoList: [
      'happy', 'sad', 'angry'
    ],
    currentPhotoIndex: 0,
}
    function nextPhoto() {
        for (slideShow.currentPhotoIndex; slideShow.currentPhotoIndex < slideShow.photoList.length +1; slideShow.currentPhotoIndex++) {
            if (slideShow.currentPhotoIndex == slideShow.photoList.length -1) {
                console.log("You've seen all the photos!");
            }
            console.log(`You're currently on slide ${slideShow.currentPhotoIndex}`);
            console.log(`The photo you see is named: ${slideShow.photoList[slideShow.currentPhotoIndex]}`);
        }
    };

    function prevPhoto() {
        for (slideShow.photoList.length; slideShow.currentPhotoIndex === 0; slideShow.photoList.length--) {
            console.log(`You're currently on slide ${slideShow.currentPhotoIndex}`);
            console.log(this.photoList);
            if (slideShow.currentPhotoIndex.value === 0 ) {
                console.log("You back at the start!");
            }
        }
    };

    function getCurrentPhoto() {
        console.log(`You're currently on ${this.currentPhotoIndex.value} with the photo name ${this.photoList}`);
    };

    nextPhoto();
    prevPhoto();