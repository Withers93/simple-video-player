var youtubeData = {
    'videos': ['NFwllcgZ2ng', 'b1M9IpEdRdQ', 'xo_9emcI4lI', 'Vd32fDlIQ_E', 'TVAUOCGVoDs', 'dzdxwWnCGaE']
};


$(function(){
var videoList = $('.video-list');

function getHtmlItem(youtubeID){
    return `<div class="video-list-item">
                <div><img class="video-thumb" src="https://img.youtube.com/vi/${youtubeID}/0.jpg"></div>
                <div class="video-thumb-title">Example Video Title</div>
                <div class="video-thumb-channel">Example Channel Name</div>
            </div>`;
}

function displayVideos(){
    var s = '';
    $.each(youtubeData.videos, function(i, youtubeID){
        s += getHtmlItem(youtubeID);
    });
    videoList.html(s);
}
displayVideos();
});
