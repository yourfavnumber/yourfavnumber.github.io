$.ajax({
    url: "https://hidrologi.id/api/curah-hujan",
    type: "get",
    dataType: "json",
    data: {},
    success: function(result) {
        let pos = result.MAHAKAM;
        let pos2 = result.KARANGAN;
        let pos3 = result.KAYAN;
        $.each(pos, function(i, result) {


            $("#pos-hujan").append(`
            <div class="col-md-4 text-center">
            <div class="card border-success mb-3">
                <div class="card-header text-white bg-secondary border-success">` +
                result.nama +
                `</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">Curah Hujan</h5>
                    <p class="card-text">` +
                result.tinggi_hujan +
                `</p>
                </div>
                <div class="card-footer bg-transparent border-success">` +
                result.tanggal +
                `</div>
            </div>
        </div>
            `
            );
        });

        $.each(pos2, function(i, result) {


            $("#pos-hujan").append(`
            <div class="col-md-4 text-center">
            <div class="card border-success mb-3">
                <div class="card-header text-white bg-secondary border-success">` +
                result.nama +
                `</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">Curah Hujan</h5>
                    <p class="card-text">` +
                result.tinggi_hujan +
                `</p>
                </div>
                <div class="card-footer bg-transparent border-success">` +
                result.tanggal +
                `</div>
            </div>
        </div>
            `
            );
        });

        $.each(pos3, function(i, result) {


            $("#pos-hujan").append(`
            <div class="col-md-4 text-center">
            <div class="card border-success mb-3">
                <div class="card-header text-white bg-secondary border-success">` +
                result.nama +
                `</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">Curah Hujan</h5>
                    <p class="card-text">` +
                result.tinggi_hujan +
                `</p>
                </div>
                <div class="card-footer bg-transparent border-success">` +
                result.tanggal +
                `</div>
            </div>
        </div>
            `
            );
        });






    },
});