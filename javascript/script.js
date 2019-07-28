var images = ['images/mic-01.jpg', 'images/mic-02.jpg', 'images/mic-03.jpg'];
var imageIndex = 0;
var videos = ['videos/video-01.mp4', 'videos/video-02.mp4', 'videos/video-03.mp4'];
var videoIndex = 0;
var TAG = 'script.js: ';

$(document).ready(function() {
    console.log(TAG + 'ready: starts');

    $('#section-image-slider .slide-left-button').click(function() {
        console.log(TAG + 'image left button');
        $('#section-image-slider img').attr('src', images[(--imageIndex) % images.length]);
    });

    $('#section-image-slider .slide-right-button').click(function() {
        console.log(TAG + 'image right button');
        $('#section-image-slider img').attr('src', images[(++imageIndex) % images.length]);
    });

    $('#section-video-slider .slide-left-button').click(function() {
        console.log(TAG + 'video left button');
        $('#section-video-slider video source').attr('src', videos[(--videoIndex) % videos.length]);
        $('#section-video-slider video')[0].load();
        console.log($('#section-video-slider video source').attr('src'));
    });

    $('#section-video-slider .slide-right-button').click(function() {
        console.log(TAG + 'video right button');
        $('#section-video-slider video source').attr('src', videos[(++videoIndex) % videos.length]);
        $('#section-video-slider video')[0].load();
        console.log($('#section-video-slider video source').attr('src'));
    });

    console.log(TAG + 'ready: ends');
});

function mapping1() {

}