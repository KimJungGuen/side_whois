class World {
    insertWorld(obj) {
        $.ajax({
            url: '/write',
            type: 'post',
            dataType: 'json',
            data: obj,
            success: function(result) {
                alert(result.msg);
            }
        });
    }

    findWorld(key) {
        let worldData = '';
        
        $.ajax({
            url: '/findWorld',
            type: 'post',
            dataType: 'json',
            data: {
                'key': key
            },
            success: (result) => {
                worldData = result;
            }
        });

        return worldData;
    }

    insertWorldDetail(obj) {
        $.ajax({
            url: '/write/detail',
            type: 'post',
            dataType: 'json',
            data: obj,
            success: (result) => {
                alert(result.msg);
            }
        });
    }
}