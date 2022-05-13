
$(() => {
    $('#programmer-filter')
    .on('click', () => {
        $('p').filter(document.getElementById("position"))
        $('tr')
            .show();
            $('tr')
                .has('td:nth-child(2):not(:contains(Programmer))')
                .hide();
    });

    $('#manager-filter')
    .on('click', () => {
        $('p').filter(document.getElementById("position"))
        $('tr')
            .show();
            $('tr')
                .has('td:nth-child(2):not(:contains(Manager))')
                .hide();
    });

    $('#all-filter')
    .on('click', () => {
        $('tr')
            .show();
    });
});