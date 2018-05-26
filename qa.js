function QAaddZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function QAfixMonth(i) {
    i = parseInt(i) + 1;
    return QAaddZero(i);
}
$.getJSON("qa.php?s=0", function(data) {
    var d = new Date();
    qabot =  '<div class="qa-box-answer"><div class="qa-box-answer-date">'+QAaddZero(d.getDate())+'/'+QAfixMonth(d.getMonth())+'/'+d.getFullYear()+' - '+QAaddZero(d.getHours())+':'+QAaddZero(d.getMinutes())+'</div><div class="qa-box-answer-text">'+data["answer"]+'</div></div>';
    if ($.trim(data)) {
        situation = data["situation"]
        setTimeout(function () {
            $('#qatake').append(qabot);
            $('#qatake').scrollTop(100000000000000000000000000000000000000);
        },800);
    }
});
$("#qagive").submit(function(e) {
	e.preventDefault();
	var d = new Date();
	question = $("#qaquestion").val();
	$('#qaquestion').val('');
	$('#qaquestion').focus();
    qalog = '<div class="qa-box-question"><div class="qa-box-question-date">'+QAaddZero(d.getDate())+'/'+QAfixMonth(d.getMonth())+'/'+d.getFullYear()+' - '+QAaddZero(d.getHours())+':'+QAaddZero(d.getMinutes())+'</div><div class="qa-box-question-text">'+question+'</div></div>';
	$('#qatake').append(qalog);
    $('#qatake').scrollTop(100000000000000000000000000000000000000);
    $.getJSON("qa.php?q="+question+"&s="+situation+"", function(data) {
    	var d = new Date();
    	qabot =  '<div class="qa-box-answer"><div class="qa-box-answer-date">'+QAaddZero(d.getDate())+'/'+QAfixMonth(d.getMonth())+'/'+d.getFullYear()+' - '+QAaddZero(d.getHours())+':'+QAaddZero(d.getMinutes())+'</div><div class="qa-box-answer-text">'+data["answer"]+'</div></div>';
        if ($.trim(data)) {
        	situation = data["situation"]
        	setTimeout(function () {
           		$('#qatake').append(qabot);
                $('#qatake').scrollTop(100000000000000000000000000000000000000);
           	},500);
        }
    });
});
$(".qa-box-close").click(function() {
	$(".qa-box").slideToggle("slow", function() {
		$(".qa-box-minify").css("visibility", "visible");
		});
});
$(".qa-box-minify").click(function() {
	$(".qa-box").slideToggle("slow", function() {
		$(".qa-box-minify").css("visibility", "hidden");
		$('#qaquestion').focus();
		});
});