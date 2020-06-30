$('.head-link').on('click', function(){
    window.location.href = `/${$(this).attr('id')}`;
})