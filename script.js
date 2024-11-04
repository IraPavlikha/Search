$(document).ready(function() {
    $('#search-input').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('#item-list li').each(function() {
            const itemText = $(this).text().toLowerCase();
            if (itemText.includes(query)) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    });
});
