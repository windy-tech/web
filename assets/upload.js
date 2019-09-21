$('#success').hide()
$('#go').click( function() {
    var data = {}
    data.name=$('input#inputName').val()
    data.content=$('textarea').val()
    $.post('http://139.198.121.212:8088/books', JSON.stringify(data), function(d) {
         $('#success p').html("<strong>Great</strong> 您的书籍已经上传成功，机器学习判断这个书籍属于<strong>"+d.category+"</strong>，自信程度："+d.confidence)
         $('#success').show()
        },
       'json' // I expect a JSON response
    );
});