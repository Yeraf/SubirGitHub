$.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    }
});

$.post("url", data,
    function (data, textStatus, jqXHR) {
        
    },
    "dataType"
);


